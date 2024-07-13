import os
import subprocess

# Directory containing the TIFF files
tiff_dir = 'static/tiffs'
# Directory to store the generated tiles
output_base_dir = 'static/tiles'

# Create the output base directory if it doesn't exist
os.makedirs(output_base_dir, exist_ok=True)

# Iterate over all files in the TIFF directory
for filename in os.listdir(tiff_dir):
    if filename.endswith('.tif') or filename.endswith('.tiff'):
        # Construct the full path to the TIFF file
        tiff_path = os.path.join(tiff_dir, filename)
        
        # Construct the output directory for the current TIFF file
        output_dir = os.path.join(output_base_dir, os.path.splitext(filename)[0])
        
        # Create the output directory if it doesn't exist
        os.makedirs(output_dir, exist_ok=True)
        
        # Run the gdal2tiles.py command
        print(f'Processing {tiff_path}...')
        subprocess.run(['gdal2tiles.py', '-p', 'raster', '-z', '0-5', '-w', 'leaflet', tiff_path, output_dir])

print('All TIFF files have been processed.')
