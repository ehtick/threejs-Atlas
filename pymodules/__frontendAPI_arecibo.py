# atlas-ui/react/static/js/Components/AreciboModal.tsx

from flask import Flask, jsonify, session, request


def get_current_galaxy_from_session():
    from pymodules.__universe_base import Universe
    from pymodules.__atlas_config import config
    from pymodules.__universe_constants import PhysicalConstants

    galaxy_data = session.get("galaxy")
    if not galaxy_data:
        return None

    if not hasattr(get_current_galaxy_from_session, "_universe_cache"):
        constants = PhysicalConstants()
        universe = Universe(config.seed, constants)
        get_current_galaxy_from_session._universe_cache = universe

    universe = get_current_galaxy_from_session._universe_cache
    galaxy = universe.get_galaxy(*galaxy_data["coordinates"])
    return galaxy


def get_current_system_from_session():
    galaxy = get_current_galaxy_from_session()
    system_index = session.get("system")
    if galaxy and system_index is not None:
        return galaxy.get_solar_system(system_index)
    return None


def get_current_planet_from_session():
    system = get_current_system_from_session()
    planet_index = session.get("planet")
    if system and planet_index is not None:
        return system.planets.get(planet_index)
    return None


def classify_planet_size(planet):
    if not planet:
        return "medium"

    diameter = planet.diameter

    if diameter < 8000:
        return "small"
    elif diameter < 15000:
        return "medium"
    else:
        return "large"


def get_arecibo_data():
    try:
        current_system = get_current_system_from_session()
        current_planet = get_current_planet_from_session()
        current_galaxy = get_current_galaxy_from_session()

        if not current_system or not current_planet or not current_galaxy:
            return {"success": False, "error": "No current system, planet, or galaxy in session"}

        current_planet_index = None
        for idx, planet in current_system.planets.items():
            if planet == current_planet:
                current_planet_index = idx
                break

        if current_planet_index is None:
            return {"success": False, "error": "Could not determine current planet index"}

        planets = []
        for planet_index in sorted(current_system.planets.keys()):
            planet = current_system.planets[planet_index]

            planets.append({"index": planet_index, "name": planet.name, "is_current": planet_index == current_planet_index, "size_category": classify_planet_size(planet), "orbital_distance": planet.orbital_radius, "diameter": planet.diameter, "planet_type": planet.planet_type})

        system_data = {"system_index": current_system.index, "system_name": current_system.name, "total_planets": current_system.num_planets, "current_planet_index": current_planet_index, "planets": planets}

        life_data = {"life_form": current_planet.life_forms, "planet_name": current_planet.name, "elements": current_planet.elements, "planet_type": current_planet.planet_type, "atmosphere": current_planet.atmosphere}

        galaxy_data = {"name": current_galaxy.name, "coordinates": current_galaxy.coordinates}

        return {"success": True, "system_data": system_data, "life_data": life_data, "galaxy_data": galaxy_data, "timestamp": current_galaxy.get_current_time() if hasattr(current_galaxy, "get_current_time") else None}

    except Exception as e:
        return {"success": False, "error": f"Error generating Arecibo data: {str(e)}"}


def register_arecibo_api(app: Flask):

    @app.route("/api/arecibo", methods=["GET"])
    def api_arecibo():
        try:
            data = get_arecibo_data()
            return jsonify(data)

        except Exception as e:
            return jsonify({"success": False, "error": f"Internal server error: {str(e)}"}), 500

    @app.route("/api/arecibo/system/<int:system_index>", methods=["GET"])
    def api_arecibo_system(system_index):
        return jsonify({"success": False, "error": "Endpoint not implemented yet - use /api/arecibo for current system"}), 501
