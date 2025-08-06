#!/usr/bin/env python3
"""
Atlas Debug Flag Module
=======================
Módulo para debuggear datos de renderizado de planetas desde stargates.
Decodifica stargate links y muestra exactamente qué datos se envían al frontend.
"""

import base64
import json
import sys
from urllib.parse import parse_qs
from typing import Dict, Any, Optional

import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from pymodules.__frontendAPI_planet_renderer import PlanetRenderingTranslator
from pymodules.__universe_base import Universe
from pymodules.__universe_constants import PhysicalConstants
from pymodules.__atlas_config import config


class AtlasDebugger:
    """Clase principal para debugging de datos de renderizado"""
    
    def __init__(self):
        self.translator = PlanetRenderingTranslator()
        self.constants = PhysicalConstants()
        
    def decode_stargate(self, stargate_url: str) -> Dict[str, Any]:
        """Decodifica un stargate URL para obtener parámetros"""
        try:
            # Extraer parte base64
            if 'stargate/' in stargate_url:
                b64_part = stargate_url.split('stargate/')[1].split('&')[0].split('#')[0].split('?')[0]
            else:
                b64_part = stargate_url
            
            # Decodificar
            decoded = base64.b64decode(b64_part).decode('utf-8')
            params = parse_qs(decoded)
            
            return {
                'coordinates': params.get('coordinates', ['0,0,0'])[0],
                'system': int(params.get('system', [0])[0]),
                'planet': params.get('planet', [None])[0],
                'page': int(params.get('page', [1])[0])
            }
        except Exception as e:
            print(f"❌ Error decodificando stargate: {e}")
            return None
    
    def get_planet_from_stargate(self, stargate_url: str):
        """Obtiene el planeta desde un stargate URL"""
        params = self.decode_stargate(stargate_url)
        if not params or not params['planet']:
            return None
            
        # Parsear coordenadas
        x, y, z = map(int, params['coordinates'].split(','))
        
        # Crear universo
        universe = Universe(seed=config.seed, constants=self.constants)
        
        # Obtener sector
        sector = universe.get_sector_at_coordinates(x, y, z)
        if not sector:
            return None
            
        # Obtener sistema
        if params['system'] >= len(sector.systems):
            return None
        system = sector.systems[params['system']]
        
        # Buscar planeta
        planet_name = params['planet'].replace('_', ' ').lower()
        for planet in system.planets:
            if planet.name.replace('_', ' ').lower() == planet_name:
                return planet
                
        return None
    
    def debug_planet_rendering(self, stargate_url: str, verbose: bool = True) -> Dict[str, Any]:
        """
        Debug completo de datos de renderizado para un planeta
        
        Args:
            stargate_url: URL del stargate o código base64
            verbose: Si mostrar salida detallada
            
        Returns:
            Diccionario con los datos de renderizado
        """
        # Decodificar stargate
        params = self.decode_stargate(stargate_url)
        if not params:
            return {"error": "Invalid stargate URL"}
        
        if verbose:
            print("=" * 80)
            print("🔍 ATLAS DEBUG MODE - PLANET RENDERING DATA")
            print("=" * 80)
            print(f"\n📍 Stargate Parameters:")
            print(f"  Coordinates: {params['coordinates']}")
            print(f"  System: {params['system']}")
            print(f"  Planet: {params['planet']}")
        
        # Obtener planeta
        planet = self.get_planet_from_stargate(stargate_url)
        if not planet:
            return {"error": f"Planet not found: {params['planet']}"}
        
        # Traducir a datos de renderizado
        rendering_data = self.translator.translate_planet_rendering(planet)
        
        if verbose:
            self._print_verbose_output(rendering_data)
        
        return rendering_data
    
    def _print_verbose_output(self, data: Dict[str, Any]):
        """Imprime salida detallada de los datos"""
        print(f"\n🌍 PLANET INFORMATION:")
        print(f"  Name: {data['planet_info']['name']}")
        print(f"  Type: {data['planet_info']['type']}")
        print(f"  Base Color: {data['planet_info']['base_color']}")
        print(f"  Radius: {data['planet_info']['radius']}")
        
        print(f"\n🎲 SEEDS (for procedural generation):")
        for key, value in data['seeds'].items():
            print(f"  {key}: {value}")
        
        surface = data.get('surface_elements', {})
        surface_type = surface.get('type', 'unknown')
        
        print(f"\n🎨 SURFACE ELEMENTS:")
        print(f"  Type: {surface_type}")
        
        # Detalles específicos por tipo
        if surface_type == 'oceanic':
            self._print_oceanic_details(surface, data['planet_info']['base_color'])
        elif surface_type == 'rocky':
            self._print_rocky_details(surface)
        elif surface_type == 'gas giant':
            self._print_gas_giant_details(surface)
        else:
            print(f"  Raw data: {json.dumps(surface, indent=2)}")
        
        # Datos atmosféricos
        if data.get('atmosphere'):
            print(f"\n☁️ ATMOSPHERE:")
            print(f"  {json.dumps(data['atmosphere'], indent=2)}")
        
        # Anillos
        if data.get('rings'):
            print(f"\n💫 RINGS:")
            print(f"  {json.dumps(data['rings'], indent=2)}")
        
        print("\n" + "=" * 80)
        print("📋 RENDERING INSTRUCTIONS FOR FRONTEND:")
        print("=" * 80)
        self._print_rendering_instructions(surface_type, surface, data['planet_info']['base_color'])
    
    def _print_oceanic_details(self, surface: Dict, base_color: str):
        """Imprime detalles específicos de planetas oceánicos"""
        print(f"\n  🌊 OCEANIC PLANET DETAILS:")
        print(f"    Base color (should be blue): {base_color}")
        
        # Abstract lands
        if 'abstract_lands' in surface:
            lands = surface['abstract_lands']
            print(f"\n    🏝️ Abstract Lands: {len(lands)} elements")
            for i, land in enumerate(lands):
                print(f"      Land {i}: color={land.get('color')}, points={land.get('points_min')}-{land.get('points_max')}")
        
        # Green patches
        if 'green_patches' in surface:
            patches = surface['green_patches']
            print(f"\n    🌿 Green/Brown Patches: {len(patches)} patches")
            if patches:
                print(f"      Patch color: {patches[0].get('color')}")
                for i, patch in enumerate(patches[:3]):
                    pos = patch.get('position', [0, 0])
                    print(f"      Patch {i}: pos=[{pos[0]:.3f}, {pos[1]:.3f}], size={patch.get('size'):.3f}")
                if len(patches) > 3:
                    print(f"      ... and {len(patches) - 3} more patches")
        
        # Clouds
        if 'clouds' in surface:
            clouds = surface['clouds']
            print(f"\n    ☁️ Clouds: {len(clouds)} clouds")
            for i, cloud in enumerate(clouds[:3]):
                pos = cloud.get('position', [0, 0])
                print(f"      Cloud {i}: pos=[{pos[0]:.3f}, {pos[1]:.3f}], radius={cloud.get('radius'):.3f}")
    
    def _print_rocky_details(self, surface: Dict):
        """Imprime detalles específicos de planetas rocosos"""
        print(f"\n  🪨 ROCKY PLANET DETAILS:")
        # TODO: Implementar cuando se necesite
        print(f"    {json.dumps(surface, indent=4)}")
    
    def _print_gas_giant_details(self, surface: Dict):
        """Imprime detalles específicos de gigantes gaseosos"""
        print(f"\n  🌀 GAS GIANT DETAILS:")
        # TODO: Implementar cuando se necesite
        print(f"    {json.dumps(surface, indent=4)}")
    
    def _print_rendering_instructions(self, surface_type: str, surface: Dict, base_color: str):
        """Imprime instrucciones de renderizado para el frontend"""
        print(f"\n🎯 FRONTEND MUST:")
        
        if surface_type == 'oceanic':
            print(f"  1. Use {base_color} as ocean background color")
            print(f"  2. Render {len(surface.get('green_patches', []))} green/brown patches at exact positions")
            print(f"  3. Render {len(surface.get('abstract_lands', []))} abstract land shapes")
            print(f"  4. Render {len(surface.get('clouds', []))} clouds at specified positions")
            print(f"  5. DO NOT generate any procedural noise or random elements")
            print(f"  6. DO NOT use hardcoded colors - use only data from Python")
        else:
            print(f"  1. Use appropriate renderer for type: {surface_type}")
            print(f"  2. Apply all surface elements as specified")
            print(f"  3. Use base color: {base_color}")
    
    def export_to_json(self, stargate_url: str, output_file: str = None) -> str:
        """Exporta los datos de renderizado a JSON"""
        data = self.debug_planet_rendering(stargate_url, verbose=False)
        
        if output_file is None:
            planet_name = data.get('planet_info', {}).get('name', 'unknown')
            planet_type = data.get('planet_info', {}).get('type', 'unknown')
            output_file = f"debug_{planet_name}_{planet_type}.json"
        
        with open(output_file, 'w') as f:
            json.dump(data, f, indent=2)
        
        return output_file


def main():
    """Función principal para uso desde línea de comandos"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Atlas Debug Tool for Planet Rendering')
    parser.add_argument('stargate', help='Stargate URL or base64 code')
    parser.add_argument('--json', '-j', help='Export to JSON file', action='store_true')
    parser.add_argument('--output', '-o', help='Output filename for JSON export')
    parser.add_argument('--quiet', '-q', help='Suppress verbose output', action='store_true')
    
    args = parser.parse_args()
    
    debugger = AtlasDebugger()
    
    if args.json:
        output_file = debugger.export_to_json(args.stargate, args.output)
        if not args.quiet:
            print(f"💾 Data exported to: {output_file}")
    else:
        debugger.debug_planet_rendering(args.stargate, verbose=not args.quiet)


if __name__ == "__main__":
    main()