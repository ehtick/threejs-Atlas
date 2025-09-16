# pymodules/__universe_routes_pages.py

import os
from flask import render_template, request, redirect, url_for, session
from pymodules.__atlas_fixed_vars import VERSION, VERSION_HASH, RUN
from pymodules.__atlas_stargate import (
    generate_planet_url,
    generate_system_url,
    generate_galaxy_url,
    decode_url,
)


def register_universe_page_routes(app, universe, config):

    def get_current_galaxy():
        galaxy_data = session.get("galaxy")
        if galaxy_data:
            galaxy = universe.get_galaxy(*galaxy_data["coordinates"])
            return galaxy
        return None

    def get_current_system():
        galaxy = get_current_galaxy()
        system_index = session.get("system")
        if galaxy and system_index is not None:
            return galaxy.get_solar_system(system_index)
        return None

    @app.route("/")
    def index():
        if not config.is_initialized or universe is None:
            return redirect(url_for("onboarding"))
        return render_template("index.html", version=VERSION, versionHash=VERSION_HASH, run_mode=RUN)

    @app.route("/onboarding", methods=["GET", "POST"])
    def onboarding():
        if os.path.exists("atlas.ini"):
            return redirect(url_for("index"))

        if request.method == "POST":
            from pymodules.__atlas_config import config

            seed_input = request.form.get("seed", "").strip()
            if not seed_input:
                return render_template("onboarding.html", error="Please enter a seed", run_mode=RUN)

            if config.create_configuration(seed_input):
                return redirect(url_for("index"))
            else:
                return render_template("onboarding.html", error="Failed to create configuration", run_mode=RUN)

        return render_template("onboarding.html", run_mode=RUN)

    @app.route("/universe-faq")
    def universe_faq():
        return render_template("faq.html", version=VERSION, versionHash=VERSION_HASH, run_mode=RUN)

    @app.route("/navigate", methods=["POST"])
    def navigate():
        try:
            coordinates = request.form.get("coordinates")
            if coordinates:
                x, y, z = map(int, coordinates.split(","))
            else:
                x = int(request.form.get("x", 0))
                y = int(request.form.get("y", 0))
                z = int(request.form.get("z", 0))

            system_index = request.form.get("system")
            planet_name = request.form.get("planet")
            page = int(request.form.get("page", 1))
            galaxy = universe.get_galaxy(x, y, z)

            session["galaxy"] = {
                "seed": galaxy.seed,
                "name": galaxy.name,
                "constants": galaxy.constants.__dict__,
                "galaxy_type": galaxy.galaxy_type,
                "coordinates": (x, y, z),
            }

            if planet_name and system_index:
                session["system"] = int(system_index)
                return redirect(url_for("view_planet", planet_name=planet_name))
            elif system_index:
                session["system"] = int(system_index)
                return redirect(url_for("view_system", system_index=int(system_index)))
            else:
                session["system"] = None
                session[f"page_{galaxy.coordinates}"] = page
                return redirect(url_for("view_galaxy", page=page))

        except Exception as e:
            return render_template("error.html", message=f"Navigation failed: {str(e)}", run_mode=RUN)

    @app.route("/galaxy", defaults={"page": 1})
    @app.route("/galaxy/<int:page>")
    def view_galaxy(page):
        try:
            current_galaxy = get_current_galaxy()
            if not current_galaxy:
                return redirect(url_for("index"))

            session[f"page_{current_galaxy.coordinates}"] = page

            per_page = 150
            start = (page - 1) * per_page
            end = start + per_page
            finish = (current_galaxy.num_systems - 1) // 150 + 1

            systems = [
                {
                    "name": current_galaxy.get_solar_system(i).name,
                    "index": i,
                    "num_planets": current_galaxy.get_solar_system(i).num_planets,
                }
                for i in range(start, min(end, current_galaxy.num_systems))
            ]

            next_page = page + 1 if end < current_galaxy.num_systems else None
            prev_page = page - 1 if start > 0 else None

            galaxy_url = generate_galaxy_url(current_galaxy.coordinates, page)

            return render_template(
                "galaxy.html",
                galaxy=current_galaxy,
                image_url="",
                systems=systems,
                page=page,
                prev_page=prev_page,
                next_page=next_page,
                finish=finish,
                galaxy_url=galaxy_url,
                version=VERSION,
                versionHash=VERSION_HASH,
                run_mode=RUN,
            )
        except ValueError as ve:
            return render_template("error.html", message=str(ve), run_mode=RUN)
        except Exception as e:
            return render_template("error.html", message=f"An unexpected error occurred: {str(e)}", run_mode=RUN)

    @app.route("/system/<int:system_index>")
    def view_system(system_index):
        try:
            current_galaxy = get_current_galaxy()
            if not current_galaxy:
                return redirect(url_for("index"))

            session["system"] = system_index
            current_system = current_galaxy.get_solar_system(system_index)

            page = session.get(f"page_{current_galaxy.coordinates}", 1)
            system_url = generate_system_url(current_galaxy.coordinates, current_system.index, page)
            image_url = ""

            star_summary = [
                {
                    "Type": star["Type"],
                    "Color": star["Color"],
                    "Size": f"{star['Radius Factor']:.2f} solar radii",
                }
                for star in current_system.stars
            ]

            system_summary = {
                "Star System Type": current_system.star_system_type.capitalize(),
                "Number of Planets": current_system.num_planets,
                "Stars": star_summary,
            }

            if request.headers.get("Accept") == "application/json":
                from flask import jsonify

                planets_list = []
                for planet in current_system.planets.values():
                    planets_list.append({"name": planet.name})

                return jsonify({"system": {"name": current_system.name, "index": current_system.index, "planets": planets_list}, "galaxy": {"name": current_galaxy.name, "coordinates": current_galaxy.coordinates}})

            return render_template(
                "system.html",
                system=current_system,
                galaxy=current_galaxy,
                image_url=image_url,
                summary=system_summary,
                system_index=system_index,
                system_url=system_url,
                version=VERSION,
                versionHash=VERSION_HASH,
                run_mode=RUN,
                page=page,
                cosmic_origin_time=config.cosmic_origin_time,
            )
        except ValueError as e:
            return render_template("error.html", message=str(e), run_mode=RUN)

    @app.route("/planet/<planet_name>")
    def view_planet(planet_name):
        current_system = get_current_system()
        if not current_system:
            return redirect(url_for("view_galaxy"))

        current_galaxy = get_current_galaxy()
        planet_name = planet_name.lower()
        page = session.get(f"page_{current_galaxy.coordinates}", 1)

        for planet_index, planet in current_system.planets.items():
            if planet.name.lower() == planet_name:
                session["planet"] = planet_index

                image_url = ""
                planet_url = generate_planet_url(current_galaxy.coordinates, current_system.index, planet_name, page)

                planet_summary = {
                    "Type": planet.planet_type,
                    "Atmosphere": planet.atmosphere,
                    "Mass": f"{planet.mass:.2e} kg",
                    "Diameter": f"{planet.diameter:.2f} km",
                    "Gravity": f"{planet.gravity:.2f} m/s²",
                    "Orbital Radius": f"{planet.orbital_radius:.2f} AU",
                    "Orbital Period": f"{planet.orbital_period_seconds / (365.25 * 24 * 3600):.2f} years",
                    "Surface Temperature": f"{planet.surface_temperature:.2f} K",
                    "Elements": ", ".join(planet.elements),
                    "Life Forms": planet.life_forms,
                }

                return render_template(
                    "planet.html",
                    planet=planet,
                    planet_index=planet_index,
                    system=current_system,
                    galaxy=current_galaxy,
                    image_url=image_url,
                    summary=planet_summary,
                    planet_url=planet_url,
                    version=VERSION,
                    versionHash=VERSION_HASH,
                    run_mode=RUN,
                    cosmic_origin_time=config.cosmic_origin_time,
                    initial_angle_rotation=planet.initial_angle_rotation,
                )

        return redirect(url_for("view_system", system_index=current_system.index))

    @app.route("/stargate/<encoded_url>", endpoint="stargate")
    def stargate(encoded_url):
        try:
            decoded_data = decode_url(encoded_url)
            if decoded_data is None:
                return redirect(url_for("index"))

            params = {}
            for param in decoded_data.split("&"):
                key, value = param.split("=")
                params[key] = value

            coordinates = params.get("coordinates")
            system_index = params.get("system")
            planet_name = params.get("planet")
            page = params.get("page", 1)

            x, y, z = map(int, coordinates.split(","))
            galaxy = universe.get_galaxy(x, y, z)
            session["galaxy"] = {
                "seed": galaxy.seed,
                "name": galaxy.name,
                "constants": galaxy.constants.__dict__,
                "galaxy_type": galaxy.galaxy_type,
                "coordinates": (x, y, z),
            }

            if not system_index and not planet_name:
                session[f"page_{galaxy.coordinates}"] = page
                return redirect(url_for("view_galaxy", page=page))
            elif system_index and not planet_name:
                session["system"] = int(system_index)
                return redirect(url_for("view_system", system_index=int(system_index)))
            elif system_index and planet_name:
                session["system"] = int(system_index)
                return redirect(url_for("view_planet", planet_name=planet_name))
            else:
                raise ValueError("Malformed URL")

        except Exception as e:
            print(f"Error: {e}")
            return redirect(url_for("index", error=str(e)))
