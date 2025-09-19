# pymodules/__universe_routes.py

import random

from flask import jsonify, request, redirect, url_for, session, render_template

from pymodules.__atlas_fixed_vars import RUN


def register_universe_routes(app, universe, config):
    from pymodules.__universe_routes_uip import get_universe

    @app.route("/api/universe/config")
    def get_universe_config():
        try:
            if not config.is_initialized:
                if not config.initialize():
                    return jsonify({"error": "Config not initialized"})

            return jsonify({"success": True, "config_seed": config.seed, "seed_str": config.seed_str, "seed_hash": config.seed_hash, "seed_decimal": str(config.seed), "cosmic_origin_time": config.cosmic_origin_time, "cosmic_origin_datetime": str(config.cosmic_origin_datetime)})
        except Exception as e:
            return jsonify({"error": str(e)})

    @app.route("/api/generate-random-location", methods=["GET"])
    def generate_random_location():
        try:
            if get_universe() is None:
                return jsonify({"error": "Universe not initialized"}), 500

            x = random.randint(0, 10000000)
            y = random.randint(0, 10000000)
            z = random.randint(0, 10000000)

            galaxy = get_universe().get_galaxy(x, y, z)

            response_data = {"success": True, "coordinates": {"x": x, "y": y, "z": z}, "galaxy_name": galaxy.name, "galaxy_type": galaxy.galaxy_type, "num_systems": galaxy.num_systems, "navigation_data": {"x": x, "y": y, "z": z}}

            rand = random.random()

            if rand > 0.05 and galaxy.num_systems > 0:
                random_system = random.randint(0, galaxy.num_systems - 1)
                system = galaxy.get_solar_system(random_system)

                response_data["system_name"] = system.name
                response_data["system_index"] = random_system
                response_data["navigation_data"]["system"] = random_system

                if rand > 0.15:
                    planets_list = []
                    for planet in system.planets.values():
                        planets_list.append({"name": planet.name})

                    if planets_list:
                        random_planet = random.choice(planets_list)
                        response_data["planet_name"] = random_planet["name"]
                        response_data["navigation_data"]["planet"] = random_planet["name"]

            return jsonify(response_data)

        except Exception as e:
            return jsonify({"error": str(e)}), 500

    @app.route("/api/random-jump", methods=["POST"])
    def handle_random_jump():
        try:
            if get_universe() is None:
                return jsonify({"error": "Universe not initialized"}), 500

            x = int(request.form["x"])
            y = int(request.form["y"])
            z = int(request.form["z"])

            galaxy = get_universe().get_galaxy(x, y, z)
            session["galaxy"] = {
                "seed": galaxy.seed,
                "name": galaxy.name,
                "constants": galaxy.constants.__dict__,
                "galaxy_type": galaxy.galaxy_type,
                "coordinates": (x, y, z),
            }

            system_index = request.form.get("system")
            planet_name = request.form.get("planet")

            if system_index:
                system_idx = int(system_index)
                session["system"] = system_idx

                if planet_name:
                    return redirect(url_for("view_planet", planet_name=planet_name))
                else:
                    return redirect(url_for("view_system", system_index=system_idx))
            else:
                session["system"] = None
                return redirect(url_for("view_galaxy"))

        except Exception as e:
            return render_template("error.html", message=f"Random jump failed: {str(e)}", run_mode=RUN)
