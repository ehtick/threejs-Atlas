#!/usr/bin/env python3
"""
Complete API endpoint to provide ALL location and universe data needed by the frontend.
This replaces template-based data passing with a proper API approach.
"""

from flask import Flask, jsonify, session
from pymodules.__atlas_config import config
from pymodules.__atlas_seedmaster import seedmaster, consistent_hash
from pymodules.__universe_constants import PhysicalConstants
from pymodules.__universe_base import Universe
import sys
import os
import math
import random

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

def generate_ring_data(planet):
    """
    Generate exact ring data as Python does in __drawer_class_planet.py
    """
    if not planet.planet_rings:
        return None
        
    # Generate exact same seed as in __drawer_class_planet.py line 88-89
    spaced_planet_name = planet.name.replace("_", " ")
    planet_type = planet.planet_type.replace("_", " ")
    
    shape_seed = consistent_hash(
        f"{config.seed}-{spaced_planet_name}-{planet_type}-{planet.diameter}-{planet.density}-{planet.gravity}-_safe_shaper"
    )
    
    rng = random.Random(shape_seed)
    
    # Planet radius as used in Pillow (line 91)
    planet_radius = int(200 * (planet.diameter / max(planet.diameter, 1)))
    
    # Ring radii calculations (lines 184-185)
    ring_inner_radius = planet_radius + rng.randint(120, 160)
    ring_outer_radius = ring_inner_radius + rng.randint(20, 40)
    
    # Calculate tilt factor (line 87)
    tilt_factor = math.sin(math.radians(planet.axial_tilt))
    
    # Generate full ring particles (1.5x more for better 3D density)
    base_num_full_ring_points = rng.randint(500, 1500)
    num_full_ring_points = int(base_num_full_ring_points * 1.5)
    full_ring_particles = []
    
    for _ in range(num_full_ring_points):
        angle = rng.uniform(math.pi, 2 * math.pi)  # Bottom half of ring
        distance = rng.uniform(ring_inner_radius, ring_outer_radius)
        
        x = distance * math.cos(angle)
        y = distance * tilt_factor * math.sin(angle)
        
        point_size = rng.choices(
            [0.5, 1.0, 1.5, 2.0], weights=[0.4, 0.3, 0.2, 0.1], k=1
        )[0]
        gray_value = rng.randint(20, 50)
        
        full_ring_particles.append({
            "x": x,
            "y": y,
            "z": 0,  # Will be calculated from x,y and angle
            "size": point_size,
            "color": [gray_value, gray_value, gray_value],
            "angle": angle,
            "distance": distance
        })
    
    # Generate ontop ring particles (1.5x more for better 3D density)
    base_num_ontop_ring_points = rng.randint(500, 1500) 
    num_ontop_ring_points = int(base_num_ontop_ring_points * 1.5)
    ontop_ring_particles = []
    
    for _ in range(num_ontop_ring_points):
        angle = rng.uniform(0, math.pi)  # Top half of ring
        distance = rng.uniform(ring_inner_radius, ring_outer_radius)
        
        x = distance * math.cos(angle)
        y = distance * tilt_factor * math.sin(angle)
        
        point_size = rng.choices(
            [0.5, 1.0, 1.5, 2.0], weights=[0.4, 0.3, 0.2, 0.1], k=1
        )[0]
        gray_value = rng.randint(20, 50)
        
        ontop_ring_particles.append({
            "x": x,
            "y": y,
            "z": 0,  # Will be calculated from x,y and angle
            "size": point_size,
            "color": [gray_value, gray_value, gray_value],
            "angle": angle,
            "distance": distance
        })
    
    return {
        "has_rings": True,
        "shape_seed": shape_seed,
        "planet_radius": planet_radius,
        "ring_inner_radius": ring_inner_radius,
        "ring_outer_radius": ring_outer_radius,
        "tilt_factor": tilt_factor,
        "full_ring": {
            "num_particles": num_full_ring_points,
            "particles": full_ring_particles
        },
        "ontop_ring": {
            "num_particles": num_ontop_ring_points,
            "particles": ontop_ring_particles
        }
    }

def get_complete_location_data(planet_name):
    """
    Get ALL universe location data for a specific planet.
    Returns everything the frontend needs for procedural generation.
    """
    try:
        # Initialize universe if not already done
        if not config.is_initialized:
            if not config.initialize():
                return {"error": "Failed to initialize config"}
        
        constants = PhysicalConstants()
        universe = Universe(config.seed, constants)
        
        # Get current session data
        galaxy_data = session.get("galaxy")
        system_index = session.get("system")
        
        if not galaxy_data or system_index is None:
            return {"error": "No galaxy or system data in session"}
            
        # Get galaxy and system
        galaxy = universe.get_galaxy(*galaxy_data["coordinates"])
        system = galaxy.get_solar_system(system_index)
        
        # Find the planet by name
        planet = None
        planet_index = None
        planet_name_lower = planet_name.lower()
        
        for index, planet_obj in system.planets.items():
            if planet_obj.name.lower() == planet_name_lower:
                planet = planet_obj
                planet_index = index
                break
                
        if planet is None:
            return {"error": f"Planet {planet_name} not found in system"}
            
        # Generate all seedmaster values
        seedmaster_values = {}
        for i in range(1, 13):  # Generate seedmaster(1) through seedmaster(12)
            seedmaster_values[f"seedmaster_{i}"] = seedmaster(i)
            
        # Get all planets in system for reference
        system_planets = []
        for idx, planet_obj in system.planets.items():
            system_planets.append({
                "index": idx,
                "name": planet_obj.name,
                "planet_type": planet_obj.planet_type,
                "has_rings": planet_obj.planet_rings
            })
            
        # Calculate ring decision seed (same as Planet.generate_planet_seed)
        ring_decision_seed = planet.generate_planet_seed()
        
        # Generate complete ring data if planet has rings
        ring_data = generate_ring_data(planet)
        
        # Return COMPLETE universe location data
        return {
            "success": True,
            "universe": {
                "config_seed": config.seed,
                "cosmic_origin_time": config.cosmic_origin_time
            },
            "galaxy": {
                "name": galaxy.name,
                "coordinates": galaxy.coordinates,
                "seed": galaxy.seed,
                "galaxy_type": galaxy.galaxy_type,
                "num_systems": galaxy.num_systems
            },
            "system": {
                "name": system.name,
                "index": system.index,
                "seed": system.seed,
                "num_planets": system.num_planets,
                "star_system_type": system.star_system_type,
                "planets": system_planets
            },
            "planet": {
                "name": planet.name,
                "index": planet_index,
                "seed": planet.seed,
                "planet_type": planet.planet_type,
                "atmosphere": planet.atmosphere,
                "life_forms": planet.life_forms,
                "has_rings": planet.planet_rings,
                # Physical properties
                "diameter": planet.diameter,
                "density": planet.density,
                "gravity": planet.gravity,
                "mass": planet.mass,
                "orbital_radius": planet.orbital_radius,
                "orbital_radius_m": planet.orbital_radius_m,
                "orbital_period_seconds": planet.orbital_period_seconds,
                "orbital_speed": planet.orbital_speed,
                "rotation_period_seconds": planet.rotation_period_seconds,
                "surface_temperature": planet.surface_temperature,
                "axial_tilt": planet.axial_tilt,
                "elements": planet.elements,
                # Timing data
                "initial_angle_rotation": planet.initial_angle_rotation,
                "initial_orbital_angle": planet.initial_orbital_angle
            },
            "rings": ring_data,
            "seeds": {
                "config_seed": config.seed,
                "galaxy_seed": galaxy.seed,
                "system_seed": system.seed,
                "planet_seed": planet.seed,
                "ring_decision_seed": ring_decision_seed
            },
            "seedmaster_values": seedmaster_values,
            "debug": {
                "galaxy_coordinates_str": f"{galaxy.coordinates[0]},{galaxy.coordinates[1]},{galaxy.coordinates[2]}",
                "system_name_lower": system.name.lower(),
                "planet_name_lower": planet.name.lower(),
                "planet_name_spaced": planet.name.replace("_", " ")
            }
        }
        
    except Exception as e:
        import traceback
        return {
            "error": f"Error generating location data: {str(e)}",
            "traceback": traceback.format_exc()
        }

def register_location_api(app):
    """Register the complete location data API endpoint with the Flask app"""
    
    @app.route("/api/planet/<planet_name>/location-data")
    def get_planet_location_api(planet_name):
        data = get_complete_location_data(planet_name)
        return jsonify(data)
        
    @app.route("/api/current-location")
    def get_current_location():
        """Get current location data without specifying planet name"""
        galaxy_data = session.get("galaxy")
        system_index = session.get("system")
        
        if not galaxy_data or system_index is None:
            return jsonify({"error": "No current location in session"})
            
        return jsonify({
            "galaxy_coordinates": galaxy_data["coordinates"],
            "system_index": system_index
        })