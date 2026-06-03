#!/usr/bin/env python3
"""Check image modes."""

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    import os
    os.system("pip install Pillow")
    from PIL import Image

def check_image_mode(image_path: Path) -> None:
    """Check the mode of an image."""
    with Image.open(image_path) as img:
        print(f"{image_path.name}: {img.mode} ({img.size[0]}x{img.size[1]})")

def main():
    base_dir = Path(__file__).parent.parent / "slides" / "public" / "ambience-sound-design"

    images = [
        "ae-scene-01.png",
        "ae-scene-02.png",
        "ae-scene-03.png",
        "ae-scene-04.png",
        "ae-scene-05.png",
    ]

    print("Checking image modes...")
    print("-" * 60)

    for img_name in images:
        input_path = base_dir / img_name
        if input_path.exists():
            check_image_mode(input_path)
        else:
            print(f"Warning: {img_name} not found")

    print("-" * 60)

if __name__ == "__main__":
    main()
