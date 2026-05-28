# VPS Migration Design

**Date:** 2026-05-28  
**Status:** Approved  
**Goal:** Migrate `gad.soundoer.com` from Netlify to a self-managed Ubuntu VPS with automatic deployment on push to `main`.

---

## Architecture

```
push to main
    │
    ▼
GitHub Actions runner (ubuntu-latest)
  ├── checkout repo
  ├── setup Node 22
  ├── npm ci
  └── npm run build   →   build/ (static files)
                              │
                              │ rsync over SSH (deploy user)
                              ▼
                        VPS: /var/www/gad/
                              │
                              ▼
                        Caddy (port 80/443)
                        ├── auto HTTPS via Let's Encrypt
                        ├── /slides/:deck/* → rewrite → /slides/:deck/index.html
                        └── file_server (static)
```

The VPS has no Node.js. It only runs Caddy to serve static files. All building happens in GitHub Actions.

---

## VPS Setup

### Directory structure

| Path | Purpose |
|---|---|
| `/var/www/gad/` | Website root — rsync target |
| `/etc/caddy/Caddyfile` | Caddy configuration |

### System user

Create a dedicated `deploy` user with no sudo access. GitHub Actions SSHes in as this user to run rsync. Caddy runs as the `caddy` system user and reads `/var/www/gad/`.

### Caddyfile

```
gad.soundoer.com {
    root * /var/www/gad

    # Replicates netlify.toml redirect: /slides/:deck/* → /slides/:deck/index.html (status 200)
    @slides path_regexp slides ^/slides/([^/]+)/.+
    rewrite @slides /slides/{re.slides.1}/index.html

    file_server
    encode gzip
}
```

Caddy automatically provisions and renews the TLS certificate via Let's Encrypt. No manual certbot needed.

---

## GitHub Actions Workflow

File: `.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'

      - run: npm ci
      - run: npm run build

      - uses: webfactory/ssh-agent@v0.9.0
        with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}

      - name: Deploy to VPS
        run: |
          rsync -az --delete \
            -e "ssh -o StrictHostKeyChecking=no" \
            build/ \
            deploy@${{ secrets.VPS_HOST }}:/var/www/gad/
```

### GitHub Secrets required

| Secret | Value |
|---|---|
| `VPS_HOST` | VPS IP address |
| `SSH_PRIVATE_KEY` | SSH private key (ed25519 recommended) |

### SSH key setup (one-time)

```bash
# On local machine — generate a dedicated deploy key
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/gad_deploy

# Copy public key to VPS deploy user
ssh-copy-id -i ~/.ssh/gad_deploy.pub deploy@<VPS_IP>

# Add private key content to GitHub Secrets → SSH_PRIVATE_KEY
cat ~/.ssh/gad_deploy
```

---

## URL Compatibility

All URLs remain identical after migration. No external links, bookmarks, or search engine results are affected.

| URL pattern | Served by |
|---|---|
| `https://gad.soundoer.com/` | Caddy file_server → `index.html` |
| `https://gad.soundoer.com/article-name/` | Caddy file_server → `article-name/index.html` |
| `https://gad.soundoer.com/slides/deck-name/` | Caddy file_server → `slides/deck-name/index.html` |
| `https://gad.soundoer.com/slides/deck-name/2` | Caddy rewrite → `slides/deck-name/index.html` |

---

## DNS Cutover (zero-downtime)

1. Finish VPS setup and verify the site works via IP or a test subdomain
2. Lower DNS TTL for `gad.soundoer.com` to 60s; wait a few hours for caches to drain
3. Change A record to point at VPS IP
4. Verify with browser + mobile (different networks) that articles and slides load correctly
5. Keep Netlify active for a few days as a fallback — revert A record if anything is wrong
6. Delete Netlify site once stable

---

## What Netlify Currently Provides (and the VPS replacement)

| Netlify feature | VPS replacement |
|---|---|
| Static file serving | Caddy `file_server` |
| HTTPS / cert renewal | Caddy automatic Let's Encrypt |
| `/slides/:deck/*` rewrite | Caddy `rewrite` + `path_regexp` |
| Build on push | GitHub Actions |
| Deploy to CDN | rsync to `/var/www/gad/` |
