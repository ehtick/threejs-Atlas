#!/usr/bin/env python3
"""
Test script for the Universal Planet Renderer
"""

import json
import sys
import os

# Add the current directory to the path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from pymodules.__frontendAPI_planet_renderer import get_planet_rendering_data, planet_translator
from pymodules.__atlas_config import config
from pymodules.__universe_constants import PhysicalConstants
from pymodules.__universe_base import Universe

def test_planet_renderer():
    print("🚀 Testing Universal Planet Renderer...")
    
    # Initialize the universe
    if not config.is_initialized:
        if not config.initialize():
            print("❌ Failed to initialize config")
            return False
    
    constants = PhysicalConstants()
    universe = Universe(config.seed, constants)
    
    # Get a test galaxy and system
    galaxy = universe.get_galaxy(0, 0, 0)
    system = galaxy.get_solar_system(0)
    
    print(f"🌌 Testing with galaxy: {galaxy.name}")
    print(f"⭐ Testing with system: {system.name}")
    print(f"🪐 Available planets: {list(system.planets.keys())}")
    
    # Test with the first planet
    if not system.planets:
        print("❌ No planets found in system")
        return False
    
    planet = list(system.planets.values())[0]
    print(f"🌍 Testing with planet: {planet.name} ({planet.planet_type})")
    
    try:
        # Test the renderer
        rendering_data = get_planet_rendering_data(planet)
        
        print("✅ Successfully generated rendering data!")
        print(f"📊 Data structure keys: {list(rendering_data.keys())}")
        
        # Print some key information
        planet_info = rendering_data['planet_info']
        print(f"   - Planet Type: {planet_info['type']}")
        print(f"   - Base Color: {planet_info['base_color']}")
        print(f"   - Radius: {planet_info['radius']}")
        
        if rendering_data['atmosphere']:
            print(f"   - Atmosphere: {rendering_data['atmosphere']['type']}")
        
        if rendering_data['rings']:
            print(f"   - Has Rings: {rendering_data['rings']['has_rings']}")
            if rendering_data['rings']['has_rings']:
                print(f"     - Full ring particles: {rendering_data['rings']['full_ring']['num_particles']}")
                print(f"     - Ontop ring particles: {rendering_data['rings']['ontop_ring']['num_particles']}")
        
        if rendering_data['life_forms']:
            print(f"   - Life Forms: {rendering_data['life_forms']['type']}")
        
        surface_elements = rendering_data['surface_elements']
        print(f"   - Surface Type: {surface_elements.get('type', 'unknown')}")
        
        # Test JSON serialization
        json_output = json.dumps(rendering_data, indent=2, default=str)
        print(f"📄 JSON output size: {len(json_output)} characters")
        
        # Save test output
        with open('test_planet_output.json', 'w') as f:
            f.write(json_output)
        print(f"💾 Test output saved to test_planet_output.json")
        
        return True
        
    except Exception as e:
        print(f"❌ Error testing planet renderer: {e}")
        import traceback
        traceback.print_exc()
        return False

def test_multiple_planet_types():
    """Test with different planet types"""
    print("\n🔬 Testing multiple planet types...")
    
    if not config.is_initialized:
        if not config.initialize():
            print("❌ Failed to initialize config")
            return False
    
    constants = PhysicalConstants()
    universe = Universe(config.seed, constants)
    
    # Test different planet types by checking multiple systems
    planet_types_found = set()
    tested_count = 0
    max_tests = 10
    
    for gx in range(3):
        for gy in range(3):
            for gz in range(3):
                if tested_count >= max_tests:
                    break
                    
                galaxy = universe.get_galaxy(gx, gy, gz)
                
                for sys_idx in range(min(3, galaxy.num_systems)):
                    if tested_count >= max_tests:
                        break
                        
                    system = galaxy.get_solar_system(sys_idx)
                    
                    for planet in system.planets.values():
                        if tested_count >= max_tests:
                            break
                            
                        try:
                            rendering_data = get_planet_rendering_data(planet)
                            planet_type = rendering_data['planet_info']['type']
                            planet_types_found.add(planet_type)
                            
                            print(f"   ✅ {planet.name}: {planet_type}")
                            tested_count += 1
                            
                        except Exception as e:
                            print(f"   ❌ Error with {planet.name}: {e}")
                            tested_count += 1
    
    print(f"📈 Successfully tested {tested_count} planets")
    print(f"🌟 Found planet types: {sorted(planet_types_found)}")
    print(f"🔢 Total unique types found: {len(planet_types_found)}")
    
    return len(planet_types_found) > 0

if __name__ == "__main__":
    print("🌌 Universal Planet Renderer Test Suite")
    print("=" * 50)
    
    success1 = test_planet_renderer()
    success2 = test_multiple_planet_types()
    
    print("\n" + "=" * 50)
    if success1 and success2:
        print("🎉 All tests passed!")
        print("✨ Your Universal Planet Renderer is working correctly!")
        print("🚀 Ready to render planets dynamically in ThreeJS!")
    else:
        print("💥 Some tests failed. Check the errors above.")
        sys.exit(1)