#!/usr/bin/env python3
"""
Rings Translation Module
Translates ring data from planet objects to JSON format for ThreeJS rendering.
"""

import math
import random
from typing import Dict, Any


class RingsTranslator:
    """Handles translation of ring data for ThreeJS rendering"""
    
    def translate_rings(self, planet, planet_radius: int, rng: random.Random, 
                       tilt_factor: float, angle_rotation: float) -> Dict[str, Any]:
        """Translate ring data for ThreeJS rendering (reusing existing logic)"""
        ring_inner_radius = planet_radius + rng.randint(120, 160)
        ring_outer_radius = ring_inner_radius + rng.randint(20, 40)
        
        # Generate full ring particles
        base_num_full_ring_points = rng.randint(500, 1500)
        num_full_ring_points = int(base_num_full_ring_points * 1.5)
        full_ring_particles = []
        
        for _ in range(num_full_ring_points):
            angle = rng.uniform(math.pi, 2 * math.pi)
            distance = rng.uniform(ring_inner_radius, ring_outer_radius)
            
            x = distance * math.cos(angle)
            y = distance * tilt_factor * math.sin(angle)
            
            point_size = rng.choices([0.5, 1.0, 1.5, 2.0], weights=[0.4, 0.3, 0.2, 0.1], k=1)[0]
            gray_value = rng.randint(20, 50)
            
            full_ring_particles.append({
                "x": x, "y": y, "z": 0,
                "size": point_size,
                "color": [gray_value/255.0, gray_value/255.0, gray_value/255.0, 1.0],
                "angle": angle,
                "distance": distance
            })
        
        # Generate ontop ring particles
        base_num_ontop_ring_points = rng.randint(500, 1500)
        num_ontop_ring_points = int(base_num_ontop_ring_points * 1.5)
        ontop_ring_particles = []
        
        for _ in range(num_ontop_ring_points):
            angle = rng.uniform(0, math.pi)
            distance = rng.uniform(ring_inner_radius, ring_outer_radius)
            
            x = distance * math.cos(angle)
            y = distance * tilt_factor * math.sin(angle)
            
            point_size = rng.choices([0.5, 1.0, 1.5, 2.0], weights=[0.4, 0.3, 0.2, 0.1], k=1)[0]
            gray_value = rng.randint(20, 50)
            
            ontop_ring_particles.append({
                "x": x, "y": y, "z": 0,
                "size": point_size,
                "color": [gray_value/255.0, gray_value/255.0, gray_value/255.0, 1.0],
                "angle": angle,
                "distance": distance
            })
        
        return {
            "has_rings": True,
            "inner_radius": ring_inner_radius,
            "outer_radius": ring_outer_radius,
            "tilt_factor": tilt_factor,
            "rotation_angle": angle_rotation,
            "full_ring": {
                "num_particles": num_full_ring_points,
                "particles": full_ring_particles
            },
            "ontop_ring": {
                "num_particles": num_ontop_ring_points,
                "particles": ontop_ring_particles
            }
        }