# VPS Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate `gad.soundoer.com` from Netlify to a self-managed Ubuntu VPS with automatic deployment triggered by pushing to `main`.

**Architecture:** GitHub Actions builds the static site and rsyncs the `build/` directory to the VPS on every push to `main`. Caddy serves static files with automatic HTTPS and replicates the Netlify slide rewrite rule.

**Tech Stack:** Ubuntu VPS, Caddy 2, GitHub Actions, rsync, SSH (ed25519), Astro + Slidev (existing build pipeline unchanged)

---

> **Note for executor:** Commands are run in two environments. Labels at the start of each command block indicate which one:
> - **[VPS]** — run inside an SSH session on the VPS
> - **[LOCAL]** — run in a terminal on your Windows machine (PowerShell)
> - **[GITHUB]** — actions taken in the GitHub web UI

---

## Files

| Action | Path | Purpose |
|---|---|---|
| Create | `.github/workflows/deploy.yml` | GitHub Actions workflow — build + rsync on push to main |
| Modify | `/etc/caddy/Caddyfile` (on VPS) | Caddy config — static file serving + slide rewrite rule |

---

### Task 1: SSH into VPS as root

- [ ] **Step 1: Open a terminal and connect**

  [LOCAL]
  ```powershell
  ssh root@<YOUR_VPS_IP>
  ```

  Expected: you see a shell prompt like `root@hostname:~#`

---

### Task 2: Create the `deploy` user on the VPS

- [ ] **Step 1: Create the user**

  [VPS]
  ```bash
  adduser --disabled-password --gecos "" deploy
  ```

  Expected output ends with: `Adding user 'deploy' ...` and no errors.

- [ ] **Step 2: Create the SSH directory for the deploy user**

  [VPS]
  ```bash
  mkdir -p /home/deploy/.ssh
  chmod 700 /home/deploy/.ssh
  chown deploy:deploy /home/deploy/.ssh
  ```

---

### Task 3: Install Caddy

- [ ] **Step 1: Add the Caddy apt repository**

  [VPS]
  ```bash
  apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
  apt update
  apt install -y caddy
  ```

  Expected: ends with `Setting up caddy ...` and no errors.

- [ ] **Step 2: Verify Caddy is running**

  [VPS]
  ```bash
  systemctl status caddy
  ```

  Expected: `Active: active (running)`

---

### Task 4: Set up the web directory

- [ ] **Step 1: Create the directory**

  [VPS]
  ```bash
  mkdir -p /var/www/gad
  chown -R deploy:deploy /var/www/gad
  chmod 755 /var/www/gad
  ```

  The `deploy` user owns this directory (so rsync can write here). Caddy can read it because the permissions are world-readable (`755`).

---

### Task 5: Write the Caddyfile

- [ ] **Step 1: Replace the default Caddyfile**

  [VPS]
  ```bash
  cat > /etc/caddy/Caddyfile << 'EOF'
  gad.soundoer.com {
      root * /var/www/gad

      @slides path_regexp slides ^/slides/([^/]+)/.+
      rewrite @slides /slides/{re.slides.1}/index.html

      file_server
      encode gzip
  }
  EOF
  ```

- [ ] **Step 2: Validate the config**

  [VPS]
  ```bash
  caddy validate --config /etc/caddy/Caddyfile
  ```

  Expected: `Valid configuration`

- [ ] **Step 3: Reload Caddy**

  [VPS]
  ```bash
  systemctl reload caddy
  ```

---

### Task 6: Generate the SSH deploy key (on your local machine)

- [ ] **Step 1: Generate a new ed25519 key pair**

  [LOCAL]
  ```powershell
  ssh-keygen -t ed25519 -C "github-actions-deploy" -f "$env:USERPROFILE\.ssh\gad_deploy"
  ```

  当提示 `Enter passphrase` 时，直接按两次 Enter（不设密码，GitHub Actions 才能无交互使用）。

  This creates two files:
  - `~/.ssh/gad_deploy` — private key (goes to GitHub Secrets)
  - `~/.ssh/gad_deploy.pub` — public key (goes to VPS)

- [ ] **Step 2: Copy the public key to the VPS deploy user**

  [LOCAL]
  ```powershell
  type "$env:USERPROFILE\.ssh\gad_deploy.pub" | ssh root@<YOUR_VPS_IP> "cat >> /home/deploy/.ssh/authorized_keys && chmod 600 /home/deploy/.ssh/authorized_keys && chown deploy:deploy /home/deploy/.ssh/authorized_keys"
  ```

- [ ] **Step 3: Verify the deploy user can be reached with the key**

  [LOCAL]
  ```powershell
  ssh -i "$env:USERPROFILE\.ssh\gad_deploy" deploy@<YOUR_VPS_IP> "echo OK"
  ```

  Expected: `OK`

---

### Task 7: Add Secrets to GitHub

- [ ] **Step 1: Get the private key content**

  [LOCAL]
  ```powershell
  Get-Content "$env:USERPROFILE\.ssh\gad_deploy" | Set-Clipboard
  ```

  This copies the private key to your clipboard.

- [ ] **Step 2: Add `SSH_PRIVATE_KEY` to GitHub Secrets**

  [GITHUB]
  1. Go to your repo on GitHub → **Settings** → **Secrets and variables** → **Actions**
  2. Click **New repository secret**
  3. Name: `SSH_PRIVATE_KEY`
  4. Value: paste from clipboard (the full private key including `-----BEGIN...` and `-----END...` lines)
  5. Click **Add secret**

- [ ] **Step 3: Add `VPS_HOST` to GitHub Secrets**

  [GITHUB]
  1. Click **New repository secret** again
  2. Name: `VPS_HOST`
  3. Value: your VPS IP address (e.g. `123.45.67.89`)
  4. Click **Add secret**

---

### Task 8: Create the GitHub Actions workflow

- [ ] **Step 1: Create the workflow file**

  [LOCAL] — in your repo root:
  ```powershell
  New-Item -ItemType Directory -Force ".github\workflows"
  ```

- [ ] **Step 2: Write the workflow**

  Create `.github/workflows/deploy.yml` with this content:

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

- [ ] **Step 3: Commit and push**

  [LOCAL]
  ```powershell
  git add .github/workflows/deploy.yml
  git commit -m "Add GitHub Actions deploy workflow"
  git push
  ```

---

### Task 9: Verify the pipeline works

- [ ] **Step 1: Watch the workflow run**

  [GITHUB]
  Go to your repo → **Actions** tab. You should see a workflow run triggered by your push.

  Click into it and watch each step. Expected: all steps green, ending with `Deploy to VPS` succeeding.

- [ ] **Step 2: Check files landed on the VPS**

  [VPS]
  ```bash
  ls /var/www/gad/
  ```

  Expected: you see the built website files (e.g. `index.html`, `slides/`, etc.)

- [ ] **Step 3: Test via IP before touching DNS**

  [LOCAL] — temporarily add a hosts file entry to preview the site:
  ```powershell
  # Open hosts file as admin
  notepad C:\Windows\System32\drivers\etc\hosts
  ```
  Add this line at the bottom (replace with your VPS IP):
  ```
  123.45.67.89  gad.soundoer.com
  ```
  Save and close. Now visit `https://gad.soundoer.com` in your browser — it will hit the VPS instead of Netlify.

  Check:
  - Homepage loads
  - An article page loads
  - A slides page loads and you can click through slides

- [ ] **Step 4: Remove the hosts file entry**

  [LOCAL]
  Reopen `C:\Windows\System32\drivers\etc\hosts` as admin and delete the line you added.

---

### Task 10: DNS cutover

- [ ] **Step 1: Lower the TTL**

  [GITHUB/DNS provider]
  In your DNS provider (wherever `soundoer.com` is managed), find the A record for `gad.soundoer.com` and lower the TTL to `60` (seconds). Save.

  Wait at least 1–2 hours before continuing (to let existing caches drain).

- [ ] **Step 2: Point DNS at the VPS**

  Change the A record value from the current Netlify IP to your VPS IP. Save.

- [ ] **Step 3: Wait for propagation and verify**

  [LOCAL]
  ```powershell
  # Check what IP the domain resolves to (run a few times over a few minutes)
  Resolve-DnsName gad.soundoer.com
  ```

  Expected: the IP shown matches your VPS IP.

  Then visit `https://gad.soundoer.com` in your browser and verify:
  - Homepage loads with HTTPS (Caddy auto-issued cert; may take ~30 seconds on first visit)
  - Article pages load
  - Slides load and navigation between slides works

- [ ] **Step 4: Monitor for 24–48 hours**

  Keep Netlify active. If anything goes wrong, revert the A record back to the Netlify IP — the site will recover within ~60 seconds.

- [ ] **Step 5: Retire Netlify (after 2+ days with no issues)**

  Once you're confident the VPS is stable, you can delete the Netlify site or disconnect the repo from it.

---

## Rollback

If anything goes wrong after the DNS switch:

[DNS provider] Change the `gad.soundoer.com` A record back to the original Netlify IP. With TTL at 60s, recovery takes under 2 minutes.
