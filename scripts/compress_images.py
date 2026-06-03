#!/usr/bin/env python3
"""Compress PNG images while maintaining dimensions."""

import os
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system("pip install Pillow")
    from PIL import Image

def compress_png_aggressive(input_path: Path, output_dir: Path) -> None:
    """Aggressively compress a PNG image while maintaining dimensions."""
    with Image.open(input_path) as img:
        # Convert to RGB if possible (removes alpha channel if not needed)
        if img.mode == 'RGBA':
            # Check if there's actual transparency
            alpha = img.split()[-1]
            if alpha.getextrema()[0] == 255:  # No transparency
                img = img.convert('RGB')
        elif img.mode == 'P':
            # Convert palette mode to RGB
            img = img.convert('RGB')
        elif img.mode == 'LA':
            # Convert grayscale with alpha to RGB
            img = img.convert('RGB')

        # Save with maximum compression
        if img.mode == 'RGBA':
            # For images with transparency, use PNG with maximum optimization
            output_path = output_dir / input_path.name
            img.save(output_path, 'PNG', optimize=True, compress_level=9)
        else:
            # For RGB images, save as JPEG with high quality
            # This will give much better compression for photos
            output_path = output_dir / input_path.with_suffix('.jpg').name
            img.save(output_path, 'JPEG', quality=85, optimize=True)

    # Print compression info
    original_size = input_path.stat().st_size
    compressed_size = output_path.stat().st_size
    reduction = (1 - compressed_size / original_size) * 100

    print(f"{input_path.name}: {original_size / 1024 / 1024:.2f} MB -> {compressed_size / 1024 / 1024:.2f} MB ({reduction:.1f}% reduction)")
    return output_path

def main():
    # Define paths
    base_dir = Path(__file__).parent.parent / "slides" / "public" / "ambience-sound-design"

    # Images to compress
    images = [
        "ae-scene-01.png",
        "ae-scene-02.png",
        "ae-scene-03.png",
        "ae-scene-04.png",
        "ae-scene-05.png",
    ]

    print("Compressing images aggressively...")
    print("-" * 60)

    converted_files = []

    for img_name in images:
        input_path = base_dir / img_name
        if input_path.exists():
            # Compress the image
            output_path = compress_png_aggressive(input_path, base_dir)

            # Delete the original file
            input_path.unlink()

            # Track converted files
            if output_path.suffix == '.jpg':
                converted_files.append((img_name, output_path.name))
        else:
            print(f"Warning: {img_name} not found")

    print("-" * 60)
    print("Compression complete!")

    # Print converted files
    if converted_files:
        print("\nConverted files (PNG -> JPG):")
        for original, new in converted_files:
            print(f"  {original} -> {new}")

if __name__ == "__main__":
    main()
