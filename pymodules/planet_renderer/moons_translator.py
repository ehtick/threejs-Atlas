#!/usr/bin/env python3
"""
Moon Rendering Translator Module
Converts moon data from the backend to JSON format for ThreeJS rendering.
"""

import math
import random
from typing import Dict, Any, Optional
from pymodules.__atlas_seedmaster import consistent_hash


class MoonsTranslator:
    """
    Translator for moon system rendering data
    """

    def __init__(self):
        # Moon type visual properties
        self.moon_visuals = {
            "rocky": {
                "base_color": "#8B8680",
                "roughness": 0.9,
                "metalness": 0.1,
                "normal_strength": 0.8
            },
            "icy": {
                "base_color": "#E0E0F0",
                "roughness": 0.3,
                "metalness": 0.05,
                "normal_strength": 0.4
            },
            "asteroidal": {
                "base_color": "#4A3E2A",
                "roughness": 0.95,
                "metalness": 0.15,
                "normal_strength": 1.2
            },
            "captured": {
                "base_color": "#6B5B4A",
                "roughness": 0.8,
                "metalness": 0.08,
                "normal_strength": 0.9
            }
        }

    def translate_moon_system(self, moon_system, planet, config_seed: str) -> Optional[Dict[str, Any]]:
        """
        Translate a moon system to rendering data

        Args:
            moon_system: MoonSystem object with moon data
            planet: Parent planet object
            config_seed: Configuration seed for deterministic generation

        Returns:
            Dictionary with moon system rendering data or None if no moons
        """
        if not moon_system or not moon_system.moons:
            return None

        moons_data = []

        for moon in moon_system.moons:
            moon_data = self._translate_single_moon(moon, planet, config_seed)
            moons_data.append(moon_data)

        from pymodules.__atlas_config import config

        return {
            "count": len(moons_data),
            "roche_limit": moon_system.roche_limit,
            "hill_radius": moon_system.hill_radius,
            "moons": moons_data,
            "render_settings": {
                "max_visible_distance": moon_system.hill_radius * 4,  # Extended range for Planet View
                "lod_distances": [
                    moon_system.hill_radius * 0.2,  # High detail - extended
                    moon_system.hill_radius * 0.6,  # Medium detail - extended
                    moon_system.hill_radius * 1.2   # Low detail - extended
                ]
            },
            "cosmic_origin_time": config.cosmic_origin_time,
            "planet_mass": planet.mass,
            "planet_radius": planet.diameter / 2  # Convert diameter to radius in km
        }

    def _translate_single_moon(self, moon, planet, config_seed: str) -> Dict[str, Any]:
        """
        Translate a single moon to rendering data
        """
        # Determine visual type - use moon_type if available, otherwise fallback to density
        if hasattr(moon, 'moon_type') and moon.moon_type:
            moon_type = moon.moon_type
        else:
            moon_type = "icy" if moon.density < 2000 else "rocky"

        # Get visual properties, fallback to rocky if type not found
        visual_props = self.moon_visuals.get(moon_type, self.moon_visuals["rocky"])

        # Generate unique seed for this moon's procedural features
        moon_seed = consistent_hash(
            f"{config_seed}-{moon.name}-{moon.seed}"
        )
        rng = random.Random(moon_seed)

        # Calculate relative size to planet for scaling
        planet_radius_km = planet.diameter / 2
        relative_size = moon.radius / planet_radius_km

        # Generate surface features based on moon type
        surface_features = self._generate_surface_features(moon, moon_type, rng)

        # Calculate orbital elements for proper phase continuity
        import time
        from pymodules.__atlas_config import config
        current_time = time.time()

        # Get orbital position from moon calculations
        orbital_data = moon.calculate_current_orbital_position(current_time, config.cosmic_origin_time)

        true_anomaly = orbital_data["current_angle"]
        initial_phase = orbital_data["initial_phase"]
        argument_of_periapsis = orbital_data["argument_of_periapsis"]
        longitude_of_ascending_node = orbital_data["longitude_of_ascending_node"]
        position = orbital_data["position"]
        x, y, z = position["x"], position["y"], position["z"]

        # Determine if moon should have its own mini-atmosphere with tidal heating effects
        has_atmosphere = moon.radius > 1000 and rng.random() < 0.1  # 10% chance for large moons

        # Calculate tidal heating effects on atmosphere and temperature
        tidal_heating_data = moon.calculate_tidal_heating()

        return {
            "name": moon.name,
            "properties": {
                "mass_kg": moon.mass,
                "radius_km": moon.radius,
                "density_kg_m3": moon.density,
                "type": getattr(moon, 'moon_type', moon_type),  # Use moon_type if available
                "origin": moon.origin.value
            },
            "orbit": {
                "semi_major_axis_km": moon.semi_major_axis,
                "eccentricity": moon.eccentricity,
                "inclination_deg": moon.inclination,
                "orbital_period_seconds": moon.orbital_period,
                "orbital_period_days": moon.orbital_period / 86400,
                "current_angle": true_anomaly,
                "initial_phase": initial_phase,
                "argument_of_periapsis": argument_of_periapsis,
                "longitude_of_ascending_node": longitude_of_ascending_node,
                "position": {"x": x, "y": y, "z": z}
            },
            "rotation": {
                "rotation_period_s": getattr(moon, 'rotation_period', moon.orbital_period),
                "rotation_period_hours": getattr(moon, 'rotation_period', moon.orbital_period) / 3600,
                "angular_velocity_rad_s": getattr(moon, 'angular_velocity', 2 * math.pi / moon.orbital_period),
                "is_tidally_locked": self._determine_tidal_lock_status(moon),
            },
            "visuals": {
                "base_color": visual_props["base_color"],
                "roughness": visual_props["roughness"],
                "metalness": visual_props["metalness"],
                "normal_strength": visual_props["normal_strength"],
                "relative_size": relative_size,
                "has_atmosphere": has_atmosphere,
                "atmosphere_color": "#A0A0FF" if has_atmosphere else None,
                "atmosphere_opacity": 0.1 if has_atmosphere else 0
            },
            "surface": surface_features,
            "procedural": {
                "seed": moon_seed,
                "noise_scale": 0.5 + rng.random() * 1.5,
                "crater_density": self._get_crater_density(moon, rng),
                "surface_variation": rng.random() * 0.3
            },
            "tidal_heating": tidal_heating_data
        }

    def _generate_surface_features(self, moon, moon_type: str, rng: random.Random) -> Dict[str, Any]:
        """
        Generate surface feature data for the moon
        """
        features = {
            "craters": [],
            "maria": [],  # Dark plains (for rocky moons)
            "cracks": [],  # Ice cracks (for icy moons)
            "brightness_variation": 0.2 + rng.random() * 0.3
        }

        # Generate craters
        num_craters = rng.randint(5, 20)
        for _ in range(num_craters):
            features["craters"].append({
                "position": {
                    "lat": rng.uniform(-90, 90),
                    "lon": rng.uniform(-180, 180)
                },
                "radius": rng.uniform(0.01, 0.1),  # Relative to moon radius
                "depth": rng.uniform(0.1, 0.3)
            })

        if moon_type == "rocky":
            # Add maria (dark plains) for rocky moons
            num_maria = rng.randint(0, 3)
            for _ in range(num_maria):
                features["maria"].append({
                    "position": {
                        "lat": rng.uniform(-60, 60),
                        "lon": rng.uniform(-180, 180)
                    },
                    "radius": rng.uniform(0.1, 0.3),
                    "darkness": rng.uniform(0.3, 0.6)
                })

        elif moon_type == "icy":
            # Add ice cracks for icy moons
            num_cracks = rng.randint(2, 8)
            for _ in range(num_cracks):
                features["cracks"].append({
                    "start": {
                        "lat": rng.uniform(-90, 90),
                        "lon": rng.uniform(-180, 180)
                    },
                    "end": {
                        "lat": rng.uniform(-90, 90),
                        "lon": rng.uniform(-180, 180)
                    },
                    "width": rng.uniform(0.001, 0.01),
                    "brightness": rng.uniform(0.1, 0.3)
                })

        return features

    def _get_crater_density(self, moon, rng: random.Random) -> float:
        """
        Calculate crater density based on moon properties
        """
        # Captured moons tend to have more craters
        if moon.origin.value == "capture":
            return 0.7 + rng.random() * 0.3
        # Co-formation moons have moderate cratering
        elif moon.origin.value == "co-formation":
            return 0.4 + rng.random() * 0.3
        # Giant impact moons have fewer old craters (resurfaced)
        else:
            return 0.2 + rng.random() * 0.3

    def _determine_tidal_lock_status(self, moon) -> bool:
        """
        Determine if moon is tidally locked based on multiple factors
        """
        # First check if moon has calculated tidal lock status
        if hasattr(moon, 'is_tidally_locked'):
            return moon.is_tidally_locked

        # Fallback: calculate based on distance and properties
        planet_radius_km = moon.parent_planet.diameter / 2
        distance_km = moon.semi_major_axis

        # Simple heuristic: close moons are likely locked
        if distance_km < 10 * planet_radius_km:
            return True

        # Check rotation vs orbital period if available
        if hasattr(moon, 'rotation_period'):
            period_diff = abs(moon.rotation_period - moon.orbital_period)
            return period_diff < 0.05 * moon.orbital_period

        # For icy moons: more likely to be locked due to faster tidal evolution
        if hasattr(moon, 'moon_type') and moon.moon_type == 'icy':
            return distance_km < 20 * planet_radius_km

        # For captured/asteroidal: less likely to be locked
        if hasattr(moon, 'moon_type') and moon.moon_type in ['captured', 'asteroidal']:
            return distance_km < 5 * planet_radius_km

        # Default for regular moons
        return distance_km < 15 * planet_radius_km

