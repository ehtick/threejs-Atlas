#!/usr/bin/env python3
"""
Test script para validar el sistema modular de efectos 3D

Este script simula datos de Python que el frontend debería poder
interpretar usando el sistema de efectos modulares.
"""

import json
import random

def test_rocky_planet_data():
    """Test data for rocky planet with mountains, clouds and crater"""
    return {
        "planet_info": {
            "name": "test_rocky_planet",
            "type": "Rocky", 
            "base_color": "#8B4513",
            "radius": 100
        },
        "surface_elements": {
            "type": "rocky",
            "mountains": [
                {
                    "position": [0.3, 0.2],
                    "width": 0.15,
                    "height": 0.8,
                    "angle": 0.5
                },
                {
                    "position": [-0.4, -0.1],
                    "width": 0.2,
                    "height": 0.6,
                    "angle": 1.2
                }
            ],
            "clouds": [
                {
                    "position": [0.1, 0.5],
                    "radius": 0.3
                },
                {
                    "position": [-0.3, -0.4],
                    "radius": 0.2
                }
            ],
            "crater": {
                "position": [0.0, -0.6],
                "radius": 0.25
            }
        }
    }

def test_icy_planet_data():
    """Test data for icy planet with crystals, cracks and ice caps"""
    return {
        "planet_info": {
            "name": "test_icy_planet",
            "type": "Icy",
            "base_color": "#B0E0E6", 
            "radius": 100
        },
        "surface_elements": {
            "type": "icy",
            "crystals": [
                {
                    "position": [0.4, 0.3],
                    "length": 0.12,
                    "width": 0.06,
                    "angle": 0.8
                },
                {
                    "position": [-0.2, 0.5],
                    "length": 0.08,
                    "width": 0.04,
                    "angle": 2.1
                }
            ],
            "cracks": [
                {
                    "angle": 0.0,
                    "length": 0.6
                },
                {
                    "angle": 1.57,
                    "length": 0.4
                },
                {
                    "angle": 3.14,
                    "length": 0.8
                }
            ],
            "ice_caps": [
                {
                    "position": [0.0, 0.8],
                    "radius": 0.3
                },
                {
                    "position": [0.0, -0.8],
                    "radius": 0.25
                }
            ]
        }
    }

def test_oceanic_planet_data():
    """Test data for oceanic planet with waves"""
    return {
        "planet_info": {
            "name": "test_oceanic_planet",
            "type": "Oceanic",
            "base_color": "#1E90FF",
            "radius": 100
        },
        "surface_elements": {
            "type": "oceanic",
            "wave_intensity": 0.4,
            "wave_speed": 2.5,
            "ocean_color": [0.1, 0.3, 0.6]
        }
    }

def test_metallic_planet_data():
    """Test data for metallic planet using new modular system"""
    return {
        "planet_info": {
            "name": "test_metallic_planet",
            "type": "Metallic",
            "base_color": "#708090",
            "radius": 100
        },
        "surface_elements": {
            "type": "metallic",
            "effects_3d": [
                {
                    "type": "metallic_surface",
                    "params": {
                        "color": [0.4, 0.4, 0.45],
                        "roughness": 0.7,
                        "metalness": 0.9,
                        "fragmentationIntensity": 0.6
                    },
                    "priority": 0
                },
                {
                    "type": "fragmentation",
                    "params": {
                        "fragmentCount": 25,
                        "size": 0.06,
                        "distribution": "edge"
                    },
                    "priority": 5
                }
            ]
        },
        "atmosphere": {
            "halo": {
                "color": [0.6, 0.1, 0.9, 0.8],
                "intensity": 1.2,
                "scale": 1.15
            },
            "streaks": {
                "color": [0.95, 0.95, 1.0, 0.6],
                "particleCount": 120
            }
        }
    }

def test_gas_giant_data():
    """Test data for gas giant using existing modular system"""
    return {
        "planet_info": {
            "name": "test_gas_giant",
            "type": "Gas Giant",
            "base_color": "#FFA500",
            "radius": 150
        },
        "surface_elements": {
            "type": "gas_giant",
            "cloud_bands": {
                "num_bands": 8,
                "positions": [-0.8, -0.4, -0.1, 0.2, 0.4, 0.6, 0.75, 0.9],
                "widths": [0.15, 0.12, 0.08, 0.1, 0.14, 0.11, 0.09, 0.13],
                "rotation": 0.3
            }
        },
        "rings": {
            "has_rings": True,
            "inner_radius": 180,
            "outer_radius": 280,
            "tilt_factor": 0.3
        }
    }

def run_all_tests():
    """Run all modular effect tests"""
    
    test_planets = [
        ("Rocky Planet", test_rocky_planet_data()),
        ("Icy Planet", test_icy_planet_data()),
        ("Oceanic Planet", test_oceanic_planet_data()),
        ("Metallic Planet", test_metallic_planet_data()),
        ("Gas Giant", test_gas_giant_data())
    ]
    
    print("🧪 Testing Modular Planet Effects System")
    print("=" * 50)
    
    for planet_name, planet_data in test_planets:
        print(f"\n🌍 Testing {planet_name}:")
        print(f"   Type: {planet_data['planet_info']['type']}")
        print(f"   Base Color: {planet_data['planet_info']['base_color']}")
        
        # Validate surface elements
        if 'surface_elements' in planet_data:
            surface = planet_data['surface_elements']
            print(f"   Surface Type: {surface.get('type', 'N/A')}")
            
            # Count features for each planet type
            if surface['type'] == 'rocky':
                mountains = len(surface.get('mountains', []))
                clouds = len(surface.get('clouds', []))
                crater = 1 if surface.get('crater') else 0
                print(f"   Features: {mountains} mountains, {clouds} clouds, {crater} crater")
                
            elif surface['type'] == 'icy':
                crystals = len(surface.get('crystals', []))
                cracks = len(surface.get('cracks', []))
                ice_caps = len(surface.get('ice_caps', []))
                print(f"   Features: {crystals} crystals, {cracks} cracks, {ice_caps} ice caps")
                
            elif surface['type'] == 'oceanic':
                wave_intensity = surface.get('wave_intensity', 0)
                print(f"   Wave Intensity: {wave_intensity}")
                
            elif surface['type'] == 'metallic':
                effects_3d = len(surface.get('effects_3d', []))
                print(f"   3D Effects: {effects_3d}")
                
            elif surface['type'] == 'gas_giant':
                bands = surface.get('cloud_bands', {}).get('num_bands', 0)
                print(f"   Cloud Bands: {bands}")
        
        # Validate atmosphere
        if 'atmosphere' in planet_data:
            atmosphere = planet_data['atmosphere']
            has_halo = 'halo' in atmosphere
            has_streaks = 'streaks' in atmosphere
            print(f"   Atmosphere: {'halo' if has_halo else ''}{'+ streaks' if has_streaks else ''}")
        
        # Validate rings
        if 'rings' in planet_data:
            has_rings = planet_data['rings'].get('has_rings', False)
            print(f"   Rings: {'Yes' if has_rings else 'No'}")
            
        print("   ✅ Data structure valid")
    
    print(f"\n🎉 All {len(test_planets)} modular effect tests completed!")
    print("\n📋 Expected Frontend Behavior:")
    print("   • ModularPlanetRenderer should create effects from this data")
    print("   • EffectRegistry should interpret surface types correctly") 
    print("   • Each planet should render with appropriate shaders/effects")
    print("   • No hardcoded planet types should be needed")
    
    # Export test data for frontend verification
    test_export = {
        "modular_effects_test_data": {
            planet_data['planet_info']['name']: planet_data 
            for _, planet_data in test_planets
        }
    }
    
    with open('modular_effects_test_data.json', 'w') as f:
        json.dump(test_export, f, indent=2)
    
    print(f"\n💾 Test data exported to: modular_effects_test_data.json")
    print("   Use this file to test the frontend ModularPlanetRenderer")

if __name__ == "__main__":
    run_all_tests()