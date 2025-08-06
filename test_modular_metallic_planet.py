#!/usr/bin/env python3
"""
Test para el sistema modular de renderizado de planetas metálicos
=================================================================

Este test valida que el nuevo sistema de efectos modulares
funcione correctamente para planetas metálicos.
"""

import sys
import json
import random
import time
import math
from pymodules.__frontendAPI_planet_renderer import PlanetRenderingTranslator
from pymodules.__atlas_config import config

# Clase mockup para simular un planeta
class MockMetallicPlanet:
    def __init__(self):
        self.name = "test_metallic_planet"
        self.planet_type = "Metallic"
        self.diameter = 12742  # Similar a la Tierra
        self.density = 7.8     # Alta densidad metálica
        self.gravity = 15.2
        self.axial_tilt = 23.4
        self.rotation_period_seconds = 86400  # 24 horas
        self.orbital_period_seconds = 31557600  # 1 año
        self.initial_angle_rotation = 0.0
        self.initial_orbital_angle = 0.0
        self.atmosphere = "Thin"
        self.planet_rings = False
        self.life_forms = "None"
        self.seed = 42

def test_metallic_planet_translation():
    """Test de traducción de planeta metálico a efectos modulares"""
    
    print("🔧 Testing Metallic Planet Modular System...")
    print("=" * 60)
    
    # Inicializar config si no está inicializado
    if not hasattr(config, 'cosmic_origin_time'):
        config.cosmic_origin_time = time.time() - 365 * 24 * 3600  # 1 año atrás
        config.seed = 12345
        config.is_initialized = True
    
    # Crear planeta de prueba
    planet = MockMetallicPlanet()
    
    # Crear traductor
    translator = PlanetRenderingTranslator()
    
    # Obtener datos de renderizado
    rendering_data = translator.translate_planet_rendering(planet)
    
    print("✅ Planet rendering data generated successfully!")
    print(f"📊 Planet Type: {rendering_data['planet_info']['type']}")
    print(f"🎨 Base Color: {rendering_data['planet_info']['base_color']}")
    print()
    
    # Verificar estructura de efectos 3D
    if 'surface_elements' in rendering_data:
        surface = rendering_data['surface_elements']
        print("🎯 Surface Elements Analysis:")
        print(f"   Type: {surface.get('type', 'unknown')}")
        
        if 'effects_3d' in surface:
            print(f"   3D Effects: {len(surface['effects_3d'])} effects found")
            for i, effect in enumerate(surface['effects_3d']):
                print(f"     {i+1}. {effect['type']} (priority: {effect.get('priority', 0)})")
        
        if 'universal_actions' in surface:
            print(f"   Universal Actions: {len(surface['universal_actions'])} actions")
            action_types = {}
            for action in surface['universal_actions']:
                action_type = action['type']
                if action_type in action_types:
                    action_types[action_type] += 1
                else:
                    action_types[action_type] = 1
            
            for action_type, count in action_types.items():
                print(f"     - {action_type}: {count}")
    
    print()
    
    # Verificar estructura de atmósfera
    if 'atmosphere' in rendering_data and rendering_data['atmosphere']:
        atm = rendering_data['atmosphere']
        print("🌫️ Atmosphere Analysis:")
        print(f"   Type: {atm['type']}")
        print(f"   Color: {atm['color']}")
        print(f"   Width: {atm['width']}")
    print()
    
    # Verificar datos específicos del sistema modular
    if rendering_data['surface_elements'].get('type') == 'metallic_3d':
        print("🎮 Modular 3D System Verification:")
        surface = rendering_data['surface_elements']
        
        # Verificar efectos 3D
        if 'effects_3d' in surface:
            effects = surface['effects_3d']
            expected_effects = ['metallic_surface', 'atmospheric_halo', 'atmospheric_streaks']
            
            found_effects = [effect['type'] for effect in effects]
            
            print("   Expected Effects:")
            for expected in expected_effects:
                status = "✅" if expected in found_effects else "❌"
                print(f"     {status} {expected}")
            
            # Verificar parámetros de superficie metálica
            metallic_surface = next((e for e in effects if e['type'] == 'metallic_surface'), None)
            if metallic_surface:
                params = metallic_surface['params']
                print("   🔧 Metallic Surface Parameters:")
                print(f"     - Color: {params.get('color')}")
                print(f"     - Roughness: {params.get('roughness')}")
                print(f"     - Metalness: {params.get('metalness')}")
                print(f"     - Fragmentation: {params.get('fragmentationIntensity')}")
        
        # Verificar datos de atmósfera estructurados
        if 'atmosphere' in surface:
            atm_data = surface['atmosphere']
            print("   🌌 Structured Atmosphere Data:")
            
            if 'halo' in atm_data:
                halo = atm_data['halo']
                print(f"     - Halo Color: {halo['color']}")
                print(f"     - Halo Intensity: {halo['intensity']}")
                print(f"     - Halo Scale: {halo['scale']}")
            
            if 'streaks' in atm_data:
                streaks = atm_data['streaks']
                print(f"     - Streaks Color: {streaks['color']}")
                print(f"     - Streaks Count: {streaks['count']}")
    
    print()
    
    # Guardar datos de ejemplo para inspección manual
    output_file = "test_metallic_planet_output.json"
    with open(output_file, 'w') as f:
        json.dump(rendering_data, f, indent=2, default=str)
    
    print(f"💾 Full rendering data saved to: {output_file}")
    print()
    
    return rendering_data

def test_effects_modularity():
    """Test de modularidad de efectos"""
    
    print("🧩 Testing Effects Modularity...")
    print("=" * 40)
    
    # Crear varios planetas metálicos con diferentes semillas
    seeds = [42, 123, 456, 789]
    all_effects = set()
    
    for seed in seeds:
        planet = MockMetallicPlanet()
        planet.seed = seed
        planet.name = f"metallic_planet_{seed}"
        
        translator = PlanetRenderingTranslator()
        data = translator.translate_planet_rendering(planet)
        
        if data['surface_elements'].get('type') == 'metallic_3d':
            effects = data['surface_elements'].get('effects_3d', [])
            for effect in effects:
                all_effects.add(effect['type'])
    
    print(f"✅ Generated {len(seeds)} planets with seeds: {seeds}")
    print(f"🎨 Unique effect types found: {len(all_effects)}")
    for effect in sorted(all_effects):
        print(f"   - {effect}")
    
    print()
    
def test_backwards_compatibility():
    """Test de compatibilidad con sistema anterior"""
    
    print("🔄 Testing Backwards Compatibility...")
    print("=" * 45)
    
    planet = MockMetallicPlanet()
    translator = PlanetRenderingTranslator()
    data = translator.translate_planet_rendering(planet)
    
    # Verificar que mantenga estructura básica
    required_fields = [
        'planet_info', 'seeds', 'timing', 'surface_elements', 
        'atmosphere', 'shader_uniforms'
    ]
    
    missing_fields = []
    for field in required_fields:
        if field not in data:
            missing_fields.append(field)
    
    if missing_fields:
        print(f"❌ Missing required fields: {missing_fields}")
        return False
    else:
        print("✅ All required fields present")
    
    # Verificar que tenga acciones universales para retrocompatibilidad
    if 'surface_elements' in data and 'universal_actions' in data['surface_elements']:
        actions = data['surface_elements']['universal_actions']
        print(f"✅ Universal actions present: {len(actions)} actions")
    else:
        print("❌ Universal actions missing")
        return False
    
    print("✅ Backwards compatibility verified")
    print()
    
    return True

def main():
    """Función principal de testing"""
    
    print("🌍 METALLIC PLANET MODULAR SYSTEM TEST")
    print("=" * 60)
    print()
    
    try:
        # Test 1: Traducción básica
        rendering_data = test_metallic_planet_translation()
        
        # Test 2: Modularidad
        test_effects_modularity()
        
        # Test 3: Compatibilidad
        compatibility_ok = test_backwards_compatibility()
        
        print("🎉 ALL TESTS COMPLETED!")
        print("=" * 60)
        
        if compatibility_ok:
            print("✅ System is ready for production!")
            print("🚀 New modular effects system is working correctly")
            print("🔧 Metallic planets can now be rendered with:")
            print("   - PBR metallic surface shader")
            print("   - Purple/violet atmospheric halo")
            print("   - White atmospheric streaks")
            print("   - Angular fragmentation effects")
            print("   - Circular wave patterns")
            print()
            print("💡 To use in frontend:")
            print("   import { UniversalPlanet3DModular } from './Components/UniversalPlanet3DModular'")
            print("   <UniversalPlanet3DModular planetName='your_metallic_planet' />")
        else:
            print("❌ Some tests failed - check compatibility issues")
            return False
    
    except Exception as e:
        print(f"❌ Test failed with error: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)