#!/usr/bin/env python3
"""
Life Forms Translation Module
Translates life forms data from planet objects to JSON format for ThreeJS rendering.
"""

import random
from typing import Dict, Any, List, Optional


class LifeFormsTranslator:
    """Handles translation of life forms for ThreeJS rendering"""
    
    def translate_life_forms(self, life_forms: str, planet_radius: int, 
                           rng: random.Random, seed: int, planet_name: str) -> Optional[Dict[str, Any]]:
        """Translate life forms for ThreeJS rendering"""
        if life_forms == "None":
            return None
            
        # Basic life forms data structure - can be expanded
        return {
            "type": life_forms,
            "planet_radius": planet_radius,
            "seed": seed,
            "effects": self._generate_life_effects(life_forms, rng)
        }
    
    def _generate_life_effects(self, life_forms: str, rng: random.Random) -> List[Dict[str, Any]]:
        """Generate visual effects for different life forms"""
        effects = []
        
        if life_forms == "Intelligent Life":
            # Add city lights or structures
            num_cities = rng.randint(3, 8)
            for i in range(num_cities):
                effects.append({
                    "type": "city_lights",
                    "position": [rng.uniform(-1, 1), rng.uniform(-1, 1)],
                    "intensity": rng.uniform(0.5, 1.0),
                    "color": [1.0, 1.0, 0.8, 0.8]
                })
        
        elif life_forms == "Silicon-Based Life":
            # Add crystalline structures
            num_structures = rng.randint(5, 12)
            for i in range(num_structures):
                effects.append({
                    "type": "crystal_formations",
                    "position": [rng.uniform(-1, 1), rng.uniform(-1, 1)],
                    "size": rng.uniform(0.02, 0.08),
                    "color": [0.5, 0.8, 1.0, 0.7]
                })
        
        elif life_forms == "Conscious Gas":
            # Add swirling patterns
            effects.append({
                "type": "gas_swirls",
                "animation_speed": rng.uniform(0.5, 2.0),
                "color": [0.8, 0.3, 1.0, 0.6],
                "intensity": rng.uniform(0.3, 0.7)
            })
        
        return effects