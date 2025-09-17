# pymodules/__universe_moons.py

import math
import random
import hashlib
from enum import Enum
from typing import List, Dict, Tuple, Optional

class MoonOrigin(Enum):
    """Origin mechanisms for natural satellites"""
    COFORMATION = "co-formation"      # Regular satellites formed from planetary accretion disk
    GIANT_IMPACT = "giant_impact"     # Large moon(s) from collision events (like Earth's Moon)
    CAPTURE = "capture"                # Irregular satellites captured from heliocentric orbit

class Moon:
    """Represents a natural satellite orbiting a planet"""

    def __init__(self, seed: int, index: int, parent_planet, origin: MoonOrigin,
                 roche_limit: float, hill_radius: float):
        self.seed = seed
        self.index = index
        self.parent_planet = parent_planet
        self.origin = origin
        self.roche_limit = roche_limit
        self.hill_radius = hill_radius

        random.seed(seed)

        # Generate moon properties based on origin
        self.generate_properties()

    def generate_properties(self):
        """Generate moon properties based on its formation origin"""

        # Mass constraints based on parent planet and origin
        max_mass_ratio = self._get_max_mass_ratio()
        min_mass_ratio = 1e-8  # Minimum viable moon mass

        if self.origin == MoonOrigin.GIANT_IMPACT:
            # Giant impact moons are typically larger (0.1% to 1% of planet mass)
            mass_ratio = random.uniform(1e-3, min(max_mass_ratio, 1e-2))
        elif self.origin == MoonOrigin.COFORMATION:
            # Co-formation moons are smaller (0.0001% to 0.1% of planet mass)
            mass_ratio = random.uniform(1e-6, min(max_mass_ratio, 1e-3))
        else:  # CAPTURE
            # Captured moons vary widely but tend to be small
            mass_ratio = random.uniform(1e-7, min(max_mass_ratio, 1e-4))

        self.mass = self.parent_planet.mass * mass_ratio

        # Density based on composition
        if self.origin == MoonOrigin.COFORMATION:
            # Regular satellites have composition similar to parent
            if self.parent_planet.planet_type in ["Gas Giant", "Frozen Gas Giant"]:
                self.density = random.uniform(900, 1500)  # Icy moons
            else:
                self.density = random.uniform(2500, 3500)  # Rocky moons
        elif self.origin == MoonOrigin.GIANT_IMPACT:
            # Impact-formed moons are typically rocky
            self.density = random.uniform(3000, 3500)
        else:  # CAPTURE
            # Captured objects can be diverse
            self.density = random.uniform(1000, 3000)

        # Calculate radius from mass and density
        self.radius = (3 * self.mass / (4 * math.pi * self.density)) ** (1/3) / 1000  # km

        # Orbital parameters
        self.semi_major_axis = self._calculate_orbit()
        self.eccentricity = self._calculate_eccentricity()
        self.inclination = self._calculate_inclination()

        # Orbital period (Kepler's 3rd law)
        self.orbital_period = 2 * math.pi * math.sqrt(
            (self.semi_major_axis * 1000) ** 3 /
            (self.parent_planet.constants.G * self.parent_planet.mass)
        )

        # Generate name based on seed
        self.name = self._generate_name()

    def _get_max_mass_ratio(self) -> float:
        """Maximum moon mass relative to planet based on stability"""
        # Empirical limit: largest known moon/planet ratio is ~0.012 (Pluto-Charon)
        # Gas giants can support more massive moon systems
        if self.parent_planet.planet_type in ["Gas Giant", "Frozen Gas Giant"]:
            return 1e-3
        else:
            return 1e-2

    def _calculate_orbit(self) -> float:
        """Calculate semi-major axis based on origin and stability zones"""
        # Safe zone: between 1.05 * Roche limit and 0.4-0.5 * Hill radius
        min_orbit = self.roche_limit * 1.05
        max_orbit = self.hill_radius * 0.4  # Conservative stability limit

        if self.origin == MoonOrigin.COFORMATION:
            # Regular satellites: close, prograde orbits
            # Distributed between 1.1 Roche and 0.25 Hill
            orbit_range = (min_orbit, min(max_orbit, self.hill_radius * 0.25))
        elif self.origin == MoonOrigin.GIANT_IMPACT:
            # Impact moons: intermediate orbits (like Earth's Moon at ~60 Earth radii)
            # Typically 20-100 planetary radii
            planet_radius_km = (self.parent_planet.diameter * 1000 / 2)
            orbit_range = (
                max(min_orbit, planet_radius_km * 20),
                min(max_orbit, planet_radius_km * 100)
            )
        else:  # CAPTURE
            # Irregular satellites: distant orbits
            # Between 0.3 and 0.4 Hill radius for stability
            orbit_range = (
                max(min_orbit, self.hill_radius * 0.3),
                min(max_orbit, self.hill_radius * 0.4)
            )

        # Sample with logarithmic distribution for better spacing
        log_min = math.log10(orbit_range[0])
        log_max = math.log10(orbit_range[1])
        return 10 ** random.uniform(log_min, log_max)

    def _calculate_eccentricity(self) -> float:
        """Calculate orbital eccentricity based on formation mechanism"""
        if self.origin == MoonOrigin.COFORMATION:
            # Regular satellites have nearly circular orbits
            return random.uniform(0, 0.05)
        elif self.origin == MoonOrigin.GIANT_IMPACT:
            # Impact-formed moons have low to moderate eccentricity
            return random.uniform(0, 0.1)
        else:  # CAPTURE
            # Captured objects can have high eccentricity
            return random.uniform(0.1, 0.4)

    def _calculate_inclination(self) -> float:
        """Calculate orbital inclination (degrees) based on formation mechanism"""
        if self.origin == MoonOrigin.COFORMATION:
            # Regular satellites orbit near equatorial plane
            return random.uniform(0, 5)
        elif self.origin == MoonOrigin.GIANT_IMPACT:
            # Impact geometry can produce various inclinations
            return random.uniform(0, 30)
        else:  # CAPTURE
            # Captured objects can have any inclination, including retrograde
            return random.uniform(0, 180)

    def _generate_name(self) -> str:
        """Generate a unique name for the moon"""
        # Use parent planet name as base
        suffixes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
        if self.index < len(suffixes):
            return f"{self.parent_planet.name}-{suffixes[self.index]}"
        else:
            return f"{self.parent_planet.name}-{self.index + 1}"


class MoonSystem:
    """Manages the generation and properties of a planet's moon system"""

    def __init__(self, planet, star_mass: float):
        self.planet = planet
        self.star_mass = star_mass
        self.moons: List[Moon] = []

        # Calculate key boundaries
        self.roche_limit = self._calculate_roche_limit()
        self.hill_radius = self._calculate_hill_sphere()

        # Generate moon system
        self._generate_moons()

    def _calculate_roche_limit(self) -> float:
        """
        Calculate Roche limit for fluid body
        d_R ≈ 2.456 * R_p * (ρ_p / ρ_s)^(1/3)
        Note: diameter is in km, need radius in km
        """
        planet_radius_km = self.planet.diameter / 2  # Already in km, not meters!

        # Assume average satellite density based on planet type
        if self.planet.planet_type in ["Gas Giant", "Frozen Gas Giant"]:
            satellite_density = 1000  # Icy moon (kg/m³)
        else:
            satellite_density = 3000  # Rocky moon (kg/m³)

        # Planet density is also in kg/m³
        roche_limit = 2.456 * planet_radius_km * (
            self.planet.density / satellite_density
        ) ** (1/3)

        return roche_limit

    def _calculate_hill_sphere(self) -> float:
        """
        Calculate Hill sphere radius
        r_H = a_p * (M_p / 3M_*)^(1/3)
        """
        # Convert orbital radius from AU to km
        planet_semi_major_axis = self.planet.orbital_radius * 1.496e8  # km

        hill_radius = planet_semi_major_axis * (
            self.planet.mass / (3 * self.star_mass)
        ) ** (1/3)

        return hill_radius

    def _should_have_moons(self) -> bool:
        """Determine if planet should have moons based on physical constraints"""
        # Very small planets unlikely to have moons
        if self.planet.mass < 1e22:  # Less than ~0.002 Earth masses
            return random.random() < 0.1

        # Check if there's stable space for moons
        # The stable zone needs to be between Roche limit and a fraction of Hill radius
        # But if Hill radius is too small (planet too far from star), moons are unlikely
        planet_radius_km = self.planet.diameter / 2  # diameter is already in km

        # Hill radius must be at least 10 planetary radii for stable moons
        if self.hill_radius < 10 * planet_radius_km:
            return False

        # Check if there's meaningful space between Roche and Hill limits
        # We need at least 2x the Roche limit for a stable moon orbit
        if self.hill_radius < 2 * self.roche_limit:
            return False

        # Probability based on planet type and mass
        mass_factor = min(1.0, math.log10(max(1, self.planet.mass / 1e23)))

        if self.planet.planet_type in ["Gas Giant", "Frozen Gas Giant"]:
            base_probability = 0.95
        elif self.planet.planet_type in ["Super Earth", "Rocky", "Oceanic"]:
            base_probability = 0.5
        elif self.planet.planet_type in ["Sub Earth", "Icy", "Desert"]:
            base_probability = 0.3
        else:
            base_probability = 0.2

        return random.random() < (base_probability * mass_factor)

    def _determine_moon_origins(self) -> List[Tuple[MoonOrigin, int]]:
        """Determine number and origin of moons based on planet properties"""
        origins = []

        # Mass-based constraints
        planet_mass_earth = self.planet.mass / self.planet.constants.M_EARTH

        # Co-formation moons (regular satellites)
        if self.planet.planet_type in ["Gas Giant", "Frozen Gas Giant"]:
            # Gas giants typically have many regular satellites
            num_regular = random.randint(2, min(8, int(planet_mass_earth / 10)))
            origins.extend([(MoonOrigin.COFORMATION, i) for i in range(num_regular)])
        elif planet_mass_earth > 0.5:
            # Terrestrial planets might have small regular satellites
            if random.random() < 0.3:
                num_regular = random.randint(0, 2)
                origins.extend([(MoonOrigin.COFORMATION, i) for i in range(num_regular)])

        # Giant impact moons
        if 0.1 < planet_mass_earth < 100 and random.random() < 0.2:
            # About 20% chance for suitable planets
            origins.append((MoonOrigin.GIANT_IMPACT, 0))

        # Captured moons
        capture_probability = min(0.5, planet_mass_earth / 300)  # Jupiter is ~318 Earth masses
        if random.random() < capture_probability:
            # More massive planets can capture more objects
            max_captured = min(5, int(planet_mass_earth / 50))
            num_captured = random.randint(1, max(1, max_captured))
            origins.extend([(MoonOrigin.CAPTURE, i) for i in range(num_captured)])

        return origins

    def _generate_moons(self):
        """Generate the moon system for the planet"""
        if not self._should_have_moons():
            return

        # Determine moon origins and counts
        moon_specs = self._determine_moon_origins()

        # Debug: if no moon specs returned, exit early
        if not moon_specs:
            return

        # Generate individual moons
        for i, (origin, origin_index) in enumerate(moon_specs):
            # Create unique seed for each moon
            moon_seed = int(
                hashlib.sha256(
                    f"{self.planet.seed}-moon-{i}-{origin.value}-{origin_index}".encode()
                ).hexdigest(), 16
            )

            moon = Moon(
                seed=moon_seed,
                index=i,
                parent_planet=self.planet,
                origin=origin,
                roche_limit=self.roche_limit,
                hill_radius=self.hill_radius
            )

            self.moons.append(moon)

        # Sort moons by semi-major axis
        self.moons.sort(key=lambda m: m.semi_major_axis)

        # Check for orbital stability and remove unstable moons
        self._ensure_orbital_stability()

    def _ensure_orbital_stability(self):
        """Remove moons with unstable orbits due to mutual perturbations"""
        if len(self.moons) <= 1:
            return

        stable_moons = [self.moons[0]]

        for moon in self.moons[1:]:
            # Check minimum separation (mutual Hill sphere criterion)
            # Moons should be separated by at least 3.5 mutual Hill radii
            previous_moon = stable_moons[-1]
            mutual_hill = ((moon.mass + previous_moon.mass) /
                          (3 * self.planet.mass)) ** (1/3)
            min_separation = 3.5 * mutual_hill * (
                moon.semi_major_axis + previous_moon.semi_major_axis
            ) / 2

            actual_separation = moon.semi_major_axis - previous_moon.semi_major_axis

            if actual_separation > min_separation:
                stable_moons.append(moon)

        self.moons = stable_moons

    def get_moon_data(self) -> List[Dict]:
        """Return moon data in a format suitable for display/storage"""
        moon_data = []
        for moon in self.moons:
            data = {
                "name": moon.name,
                "mass_kg": moon.mass,
                "radius_km": moon.radius,
                "density_kg_m3": moon.density,
                "semi_major_axis_km": moon.semi_major_axis,
                "eccentricity": moon.eccentricity,
                "inclination_deg": moon.inclination,
                "orbital_period_s": moon.orbital_period,
                "orbital_period_days": moon.orbital_period / 86400,
                "origin": moon.origin.value,
                "type": "icy" if moon.density < 2000 else "rocky"
            }
            moon_data.append(data)
        return moon_data