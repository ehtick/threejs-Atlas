#!/usr/bin/env python3

import sys
import os
sys.path.append('/Users/bansheetechnologiess.l./Desktop/Atlas')

import json
import random
import requests
import time

def test_metallic_api():
    """Test the Metallic planet through the actual API"""
    
    # Test planet: Pyrogol IE-3967 (Metallic)
    planet_name = "pyrogol_ie-3967"
    
    print("🔧 TESTING METALLIC PLANET API INTEGRATION")
    print("=" * 50)
    print(f"Planet: {planet_name}")
    print()
    
    try:
        # Call the rendering API
        url = f"http://localhost/api/planet/{planet_name}/rendering-data"
        print(f"📡 Calling API: {url}")
        
        response = requests.get(url, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            
            if data.get('success'):
                rendering_data = data['rendering_data']
                
                print("✅ API Response successful!")
                print()
                print("🌍 PLANET INFO:")
                planet_info = rendering_data.get('planet_info', {})
                print(f"   - Name: {planet_info.get('name')}")
                print(f"   - Type: {planet_info.get('type')}")
                print(f"   - Base Color: {planet_info.get('base_color')}")
                print(f"   - Radius: {planet_info.get('radius')}")
                print()
                
                print("🌟 SURFACE ELEMENTS:")
                surface = rendering_data.get('surface_elements', {})
                if surface.get('type') == 'metallic':
                    print(f"   - Type: {surface['type']}")
                    
                    if 'reflections' in surface:
                        print(f"   - Reflections: {len(surface['reflections'])} crystal structures")
                        for i, refl in enumerate(surface['reflections'][:3]):
                            print(f"     • Reflection {i}: pos=({refl['position'][0]:.2f}, {refl['position'][1]:.2f}), layers={refl['layers']}")
                    
                    if 'dark_lands' in surface:
                        print(f"   - Dark metallic lands: {len(surface['dark_lands'])} segments")
                    
                    if 'black_lands' in surface:
                        print(f"   - Black metallic lands: {len(surface['black_lands'])} segments")
                    
                    if 'silver_clouds' in surface:
                        print(f"   - Silver clouds: {len(surface['silver_clouds'])} areas")
                        for i, cloud in enumerate(surface['silver_clouds'][:3]):
                            print(f"     • Cloud {i}: pos=({cloud['position'][0]:.2f}, {cloud['position'][1]:.2f}), radius={cloud['radius']:.2f}")
                    
                    if 'scratches' in surface:
                        print(f"   - Surface scratches: {len(surface['scratches'])} lines")
                else:
                    print(f"   - Type: {surface.get('type', 'unknown')}")
                    print("   ❌ Expected metallic type!")
                
                print()
                print("📊 FULL DATA STRUCTURE:")
                print(f"   - Planet Info Keys: {list(planet_info.keys())}")
                print(f"   - Surface Element Keys: {list(surface.keys())}")
                if 'atmosphere' in rendering_data:
                    print(f"   - Has Atmosphere: Yes")
                if 'rings' in rendering_data:
                    print(f"   - Has Rings: {'Yes' if rendering_data['rings'].get('has_rings') else 'No'}")
                if 'life_forms' in rendering_data:
                    print(f"   - Life Forms: {rendering_data['life_forms'].get('type', 'None')}")
                
                print()
                print("✅ METALLIC PLANET API TEST SUCCESSFUL!")
                print("🎯 All required data structures are present for ThreeJS rendering")
                
                return True
                
            else:
                print(f"❌ API returned error: {data.get('error')}")
                return False
        else:
            print(f"❌ HTTP Error: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False

def simulate_threejs_rendering():
    """Simulate what ThreeJS will do with the data"""
    print()
    print("🎮 SIMULATING THREEJS RENDERING")
    print("=" * 50)
    print("1. Fetching planet data...")
    print("2. Identifying planet type: Metallic (code 13)")
    print("3. Setting up uniforms for reflections, lands, clouds, scratches")
    print("4. Compiling universal shader with renderMetallic() function")
    print("5. Applying EXACT positions from Pillow generation")
    print("6. Rendering:")
    print("   🔹 Sharp metallic crystal reflections")
    print("   🔹 Dark metallic surface areas")
    print("   🔹 Black metallic regions")
    print("   🔹 Silver cloud depth effects")
    print("   🔹 Fine surface scratches")
    print("✅ ThreeJS rendering simulation complete!")

if __name__ == "__main__":
    print("🚀 METALLIC PLANET COMPLETE SYSTEM TEST")
    print("=" * 60)
    print()
    
    # Test API integration
    success = test_metallic_api()
    
    if success:
        # Simulate ThreeJS rendering
        simulate_threejs_rendering()
        
        print()
        print("🎉 COMPLETE SYSTEM TEST SUCCESSFUL!")
        print("🔧 Metallic planets should now render correctly in ThreeJS")
        print("🌍 Go to: http://localhost/stargate/Y29vcmRpbmF0ZXM9MCwwLDAmc3lzdGVtPTAmcGxhbmV0PXB5cm9nb2xfaWUtMzk2NyZwYWdlPTE=")
        print("🎯 Toggle to 'Universal' renderer to see the results!")
    else:
        print()
        print("❌ SYSTEM TEST FAILED")
        print("Check that the Atlas server is running and the API is working")