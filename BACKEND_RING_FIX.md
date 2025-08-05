# Backend Fix Required for Ring Generation

## Problem
ThreeJS ring generation doesn't match Pillow because we're missing the `system_index` needed to calculate the exact solar system seed.

## Current Architecture (Python)
```python
# 1. Galaxy coordinates -> galaxy_seed  
galaxy_seed = int(hashlib.sha256(f"{x},{y},{z}".encode()).hexdigest(), 16)

# 2. Galaxy + system_index -> solar_system_seed
system_seed = int(hashlib.sha256(f"{galaxy_seed}-{seedmaster(8)}-{system_index}".encode()).hexdigest(), 16)

# 3. Solar system + planet_name -> planet_seed  
planet_seed = int(hashlib.sha256(f"{system_seed}-{planet_name}-{seedmaster(4)}".encode()).hexdigest(), 16)

# 4. planet_seed used in decide_planet_rings()
planet.planet_rings = planet.decide_planet_rings(planet_seed)
```

## Missing Data
The frontend receives planet data but **NOT** the `system_index`, so we cannot calculate the correct `solar_system_seed` and therefore not the correct `planet_seed`.

## Solutions (Pick One)

### Option 1: Pass system_index (Recommended)
Add `system_index` to planet data:

```python
# In __main__.py around line 312 where planet data is prepared
planet_data = {
    "diameter": planet.diameter,
    "density": planet.density,
    "gravity": planet.gravity,
    "mass": planet.mass,
    "orbital_radius": planet.orbital_radius_m / 1.496e11,  # Convert to AU
    "rotation_period_seconds": planet.rotation_period_seconds,
    "surface_temperature": planet.surface_temperature,
    "axial_tilt": planet.axial_tilt,
    "seed": planet.generate_planet_seed(),
    "system_index": current_system.index,  # ADD THIS LINE
    "galaxy_coordinates": current_galaxy.coordinates,  # ADD THIS LINE
}
```

### Option 2: Pass planet_rings boolean (Simplest)
Add the ring decision directly:

```python
planet_data = {
    # ... existing fields ...
    "planet_rings": planet.planet_rings,  # ADD THIS LINE
}
```

### Option 3: Pass solar_system_seed
Add the solar system seed:

```python
planet_data = {
    # ... existing fields ...
    "solar_system_seed": current_system.seed,  # ADD THIS LINE
}
```

## Result
With any of these solutions, ThreeJS will be able to generate rings that match Pillow exactly.

## Test Case
Planet: "Tandib QH-1821" in galaxy coordinates (2682388, 9617862, 1804925)
- Currently shows rings in Pillow ✅
- Currently does NOT show rings in ThreeJS ❌
- With fix: Will show rings in ThreeJS ✅