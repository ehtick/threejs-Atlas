#!/usr/bin/env python3
"""
Test specific planet: iapetusdin_lq-2442
Compare Pillow generation vs Universal Renderer output
"""

import json
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pymodules.__atlas_config import config
from pymodules.__universe_base import Universe
from pymodules.__universe_constants import PhysicalConstants
from pymodules.__frontendAPI_planet_renderer import get_planet_rendering_data

def test_specific_planet():
    print("🌍 Testing Specific Planet: iapetusdin_lq-2442")
    print("=" * 60)
    
    # Specific coordinates from URL
    coordinates = (1596377, 7795998, 5462285)
    system_index = 18
    planet_name = "iapetusdin_lq-2442"
    
    # Initialize config
    if not config.initialize():
        print("❌ Failed to initialize config")
        return False
        
    print(f"🔧 Config initialized with seed: {config.seed}")
    print(f"📍 Galaxy coordinates: {coordinates}")
    print(f"⭐ System index: {system_index}")
    print(f"🪐 Planet name: {planet_name}")
    print()
    
    # Create universe and get the specific planet
    constants = PhysicalConstants()
    universe = Universe(config.seed, constants)
    galaxy = universe.get_galaxy(*coordinates)
    system = galaxy.get_solar_system(system_index)
    
    print(f"🌌 Galaxy: {galaxy.name}")
    print(f"⭐ System: {system.name}")
    print(f"🪐 Available planets: {list(system.planets.keys())}")
    print()
    
    # Find the specific planet
    target_planet = None
    planet_name_to_find = planet_name.replace("_", " ").lower()
    
    for index, planet_obj in system.planets.items():
        if planet_obj.name.replace("_", " ").lower() == planet_name_to_find:
            target_planet = planet_obj
            print(f"✅ Found target planet: {planet_obj.name}")
            print(f"   Type: {planet_obj.planet_type}")
            print(f"   Index: {index}")
            break
    
    if not target_planet:
        print(f"❌ Planet '{planet_name}' not found!")
        print("Available planets:")
        for index, planet_obj in system.planets.items():
            print(f"  {index}: {planet_obj.name} ({planet_obj.planet_type})")
        return False
    
    print()
    print("🔬 Analyzing Planet Properties:")
    print(f"   Name: {target_planet.name}")
    print(f"   Type: {target_planet.planet_type}")
    print(f"   Diameter: {target_planet.diameter}")
    print(f"   Density: {target_planet.density}")
    print(f"   Gravity: {target_planet.gravity}")
    print(f"   Seed: {target_planet.seed}")
    print(f"   Atmosphere: {target_planet.atmosphere}")
    print(f"   Life Forms: {target_planet.life_forms}")
    print(f"   Has Rings: {target_planet.planet_rings}")
    print()
    
    # Generate Universal Renderer data
    print("🚀 Generating Universal Renderer Data...")
    rendering_data = get_planet_rendering_data(target_planet)
    
    print("📊 Generated Data Structure:")
    print(f"   Planet Info: {rendering_data['planet_info']['type']}")
    print(f"   Base Color: {rendering_data['planet_info']['base_color']}")
    print(f"   Surface Type: {rendering_data['surface_elements']['type']}")
    print()
    
    # Show detailed surface elements for analysis
    surface = rendering_data['surface_elements']
    print("🎨 Surface Elements Details:")
    print(f"   Type: {surface.get('type', 'Unknown')}")
    
    if surface.get('type') == 'gas_giant':
        if 'cloud_bands' in surface:
            bands = surface['cloud_bands']
            print(f"   Cloud Bands: {bands['num_bands']} bands")
            print(f"   Band Rotation: {bands['rotation']} radians")
            print(f"   Band Positions (first 5): {bands['positions'][:5]}")
            print(f"   Band Widths (first 5): {bands['widths'][:5]}")
    
    elif surface.get('type') == 'rocky':
        if 'mountains' in surface:
            mountains = surface['mountains']
            print(f"   Mountains: {len(mountains)} total")
            print(f"   First mountain: pos={mountains[0]['position']}, size={mountains[0]['width']}x{mountains[0]['height']}")
        if 'clouds' in surface:
            clouds = surface['clouds']
            print(f"   Clouds: {len(clouds)} total")
        if 'crater' in surface and surface['crater']:
            crater = surface['crater']
            print(f"   Crater: pos={crater['position']}, radius={crater['radius']}")
    
    elif surface.get('type') == 'icy':
        if 'crystals' in surface:
            crystals = surface['crystals']
            print(f"   Crystals: {len(crystals)} total")
            print(f"   First crystal: pos={crystals[0]['position']}, size={crystals[0]['length']}x{crystals[0]['width']}")
        if 'cracks' in surface:
            cracks = surface['cracks']
            print(f"   Cracks: {len(cracks)} total")
        if 'ice_caps' in surface:
            ice_caps = surface['ice_caps']
            print(f"   Ice Caps: {len(ice_caps)} total")
    
    # Show debug info if available
    if 'debug' in surface:
        debug = surface['debug']
        print("🐛 Debug Info:")
        for key, value in debug.items():
            print(f"   {key}: {value}")
    
    print()
    
    # Save detailed output for comparison
    output_file = f"test_{planet_name}_detailed.json"
    with open(output_file, 'w') as f:
        json.dump(rendering_data, f, indent=2)
    
    print(f"💾 Detailed output saved to: {output_file}")
    print()
    
    # Test API endpoint format
    api_endpoint = f"/api/planet/{target_planet.name}/rendering-data"
    print(f"🌐 API Endpoint: {api_endpoint}")
    print()
    
    print("✅ Analysis complete!")
    print("🔍 Next step: Compare this data with what Pillow generates")
    print("🎨 Next step: Check if ThreeJS is rendering the exact same shapes")
    
    return True

if __name__ == "__main__":
    test_specific_planet()