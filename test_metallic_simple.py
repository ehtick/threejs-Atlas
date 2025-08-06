#!/usr/bin/env python3

import sys
import os
sys.path.append('/Users/bansheetechnologiess.l./Desktop/Atlas')

import json
from pymodules.__frontendAPI_planet_renderer import PlanetRenderingTranslator

def test_metallic_complete():
    """Test complete Metallic planet generation"""
    
    print("🔧 METALLIC PLANET COMPLETE SYSTEM TEST")
    print("=" * 60)
    
    # Create a mock planet object for Pyrogol IE-3967
    class MockPlanet:
        def __init__(self):
            self.name = "pyrogol_ie-3967"
            self.planet_type = "Metallic"
            self.diameter = 8000
            self.density = 5.5
            self.gravity = 9.8
            self.axial_tilt = 23.5
            self.rotation_period_seconds = 86400
            self.orbital_period_seconds = 31557600
            self.atmosphere = "Thin"
            self.life_forms = "None"
            self.planet_rings = False
            self.seed = 12345
    
    class MockConfig:
        def __init__(self):
            self.seed = 67890
            self.coordinates = (0, 0, 0)
            self.system = 0
    
    planet = MockPlanet()
    config = MockConfig()
    
    print(f"🌍 Planet: {planet.name}")
    print(f"🔧 Type: {planet.planet_type}")
    print(f"📏 Diameter: {planet.diameter} km")
    print()
    
    # Create translator and generate data
    translator = PlanetRenderingTranslator()
    
    print("🔄 Generating rendering data...")
    # Set the config in the planet object
    planet.coordinates = config.coordinates
    planet.system = config.system
    
    rendering_data = translator.translate_planet_rendering(planet)
    
    print("✅ Data generation complete!")
    print()
    
    # Analyze the generated data
    print("📊 GENERATED DATA ANALYSIS:")
    print("-" * 40)
    
    planet_info = rendering_data.get('planet_info', {})
    print(f"Planet Info: {planet_info.get('name')} ({planet_info.get('type')})")
    print(f"Base Color: {planet_info.get('base_color')}")
    print(f"Radius: {planet_info.get('radius')}")
    print()
    
    surface = rendering_data.get('surface_elements', {})
    if surface.get('type') == 'metallic':
        print("🔧 METALLIC SURFACE ELEMENTS:")
        
        # Reflections (crystal structures)
        if 'reflections' in surface:
            reflections = surface['reflections']
            print(f"   🔹 Reflections: {len(reflections)} crystal structures")
            print("     Examples:")
            for i, refl in enumerate(reflections[:3]):
                print(f"       • Reflection {i}: pos=({refl['position'][0]:.3f}, {refl['position'][1]:.3f})")
                print(f"         radius={refl['radius']:.3f}, layers={refl['layers']}, alpha={refl['color'][3]:.3f}")
        
        # Dark metallic lands
        if 'dark_lands' in surface:
            dark_lands = surface['dark_lands']
            print(f"   🔸 Dark Metallic Lands: {len(dark_lands)} segments")
            for i, land in enumerate(dark_lands):
                if 'points' in land:
                    print(f"       • Segment {i}: {len(land['points'])} points, color={land['color']}")
        
        # Black metallic lands
        if 'black_lands' in surface:
            black_lands = surface['black_lands']
            print(f"   ⚫ Black Metallic Lands: {len(black_lands)} segments")
            for i, land in enumerate(black_lands):
                if 'points' in land:
                    print(f"       • Segment {i}: {len(land['points'])} points, color={land['color']}")
        
        # Silver clouds
        if 'silver_clouds' in surface:
            clouds = surface['silver_clouds']
            print(f"   ☁️  Silver Clouds: {len(clouds)} areas")
            for i, cloud in enumerate(clouds[:3]):
                print(f"       • Cloud {i}: pos=({cloud['position'][0]:.3f}, {cloud['position'][1]:.3f}), radius={cloud['radius']:.3f}")
        
        # Scratches
        if 'scratches' in surface:
            scratches = surface['scratches']
            print(f"   📏 Surface Scratches: {len(scratches)} lines")
            print("     Examples:")
            for i, scratch in enumerate(scratches[:3]):
                print(f"       • Scratch {i}: from ({scratch['start'][0]:.3f}, {scratch['start'][1]:.3f}) to ({scratch['end'][0]:.3f}, {scratch['end'][1]:.3f})")
    
    print()
    print("🎮 THREEJS COMPATIBILITY CHECK:")
    print("-" * 40)
    
    # Check that all required fields are present for ThreeJS
    required_metallic_fields = ['reflections', 'dark_lands', 'black_lands', 'silver_clouds', 'scratches']
    all_present = True
    
    for field in required_metallic_fields:
        if field in surface:
            print(f"   ✅ {field}: Present ({len(surface[field])} items)")
        else:
            print(f"   ❌ {field}: Missing")
            all_present = False
    
    print()
    if all_present:
        print("🎉 COMPLETE SYSTEM TEST SUCCESSFUL!")
        print()
        print("🔧 Summary of what you should see in the browser:")
        print("   • Gray metallic base surface")
        print("   • White crystal-like reflections with pointed structures")
        print("   • Dark metallic land masses")
        print("   • Black metallic regions")
        print("   • Silver cloudy areas giving depth")
        print("   • Fine surface scratches")
        print()
        print("🌍 Test URL: http://localhost/stargate/Y29vcmRpbmF0ZXM9MCwwLDAmc3lzdGVtPTAmcGxhbmV0PXB5cm9nb2xfaWUtMzk2NyZwYWdlPTE")
        print("🎯 Toggle to 'Universal' renderer to see the metallic planet!")
        
        # Output final JSON structure for reference
        print()
        print("📋 SAMPLE JSON OUTPUT:")
        print("-" * 40)
        sample_output = {
            "surface_elements": {
                "type": "metallic",
                "reflections_count": len(surface.get('reflections', [])),
                "dark_lands_count": len(surface.get('dark_lands', [])),
                "black_lands_count": len(surface.get('black_lands', [])),
                "silver_clouds_count": len(surface.get('silver_clouds', [])),
                "scratches_count": len(surface.get('scratches', []))
            }
        }
        print(json.dumps(sample_output, indent=2))
        
    else:
        print("❌ SYSTEM TEST FAILED - Missing required fields")
    
    return all_present

if __name__ == "__main__":
    test_metallic_complete()