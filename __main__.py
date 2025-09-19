# __main__.py

import os
import sys
import asyncio

from hypercorn.asyncio import serve
from hypercorn.config import Config
from hypercorn.middleware import AsyncioWSGIMiddleware

from flask import Flask, g
from flask_compress import Compress

from vite_fusion import register_vite_assets

from pymodules.__atlas_fixed_vars import PORT, RUN
from pymodules.__atlas_cache_daemon import start_cache_daemon
from pymodules.__atlas_config import config
from pymodules.__atlas_observer import observer
from pymodules.__atlas_ssl import ssl_enabled, get_ssl_cert_info

from pymodules.__frontendAPI_location_data import register_location_api
from pymodules.__frontendAPI_planet_renderer import register_planet_renderer_api
from pymodules.__frontendAPI_arecibo import register_arecibo_api
from pymodules.__universe_routes_api import register_universe_routes
from pymodules.__universe_routes_pages import register_universe_page_routes
from pymodules.__universe_routes_static import register_static_routes
from pymodules.__universe_routes_uip import initialize_uip


template_folder = os.path.join(os.getcwd(), "atlas-ui", "template")

app = Flask(__name__, static_folder=None, template_folder=template_folder)
app.secret_key = os.urandom(24)

Compress(app)

register_vite_assets(app, dev_mode=(RUN == "DEV"), dev_server_url="http://localhost:5173", dist_path="/atlas-ui/react/dist", manifest_path="atlas-ui/react/dist/.vite/manifest.json", nonce_provider=lambda: g.get("nonce"), logger=None)
register_location_api(app)
register_planet_renderer_api(app)
register_arecibo_api(app)
register_static_routes(app)

universe = None
uip = initialize_uip(config)


def RunAtlasProtocol():
    global universe
    if uip.initialize_if_needed():
        universe = uip.universe
        return True
    return False


register_universe_routes(app, universe, config)
register_universe_page_routes(app, universe, config)


if __name__ == "__main__":

    if "--debug" in sys.argv:
        from pymodules.__atlas_debug_flag import AtlasDebugger

        debug_index = sys.argv.index("--debug")
        if debug_index + 1 < len(sys.argv):
            stargate_url = sys.argv[debug_index + 1]

            debugger = AtlasDebugger()

            if "--json" in sys.argv:
                output_file = debugger.export_to_json(stargate_url)
                print(f"💾 Debug data exported to: {output_file}")
            else:
                debugger.debug_planet_rendering(stargate_url)

            exit("Debug complete!")
        else:
            print("❌ Error: --debug requires a stargate URL")
            print("Usage: python __main__.py --debug 'stargate_url' [--json]")
            exit(1)

    if RunAtlasProtocol():
        if "--observer" in sys.argv:
            observer(universe)
            exit("Observer out!")

        if config.enable_cache:
            start_cache_daemon()

    ssl_enabled_var = ssl_enabled()
    protocol = "https" if ssl_enabled_var else "http"

    print(f" * SSL Enabled: {ssl_enabled_var}")
    print(f" * Development Mode: {RUN == 'DEV'}")
    print()

    if ssl_enabled_var:
        cert_path = os.path.join(os.getcwd(), "ssl", "fullchain.pem")
        cert_info = get_ssl_cert_info(cert_path)
        print(" » SSL Certificate Information:")
        if "error" in cert_info:
            print(f'           └─ Error: {cert_info["error"]}')
        else:
            print(f'           ├─ Valid Until: {cert_info["notAfter"]}')
            print(f'           └─ Issuer: {cert_info["issuerO"]} V{cert_info["version"]} ({cert_info["issuerCN"]})')
        print()

    print()

    if RUN == "DEV":
        app.run(host="0.0.0.0", port=PORT, debug=True, use_reloader=True, threaded=True)
    else:
        hypercorn_config = Config()
        hypercorn_config.loglevel = "WARNING"
        hypercorn_config.include_server_header = False
        hypercorn_config.bind = [f"0.0.0.0:{PORT}"]

        if ssl_enabled_var:
            ssl_dir = os.path.join(os.getcwd(), "ssl")
            hypercorn_config.certfile = os.path.join(ssl_dir, "fullchain.pem")
            hypercorn_config.keyfile = os.path.join(ssl_dir, "privkey.pem")
            hypercorn_config.ca_certs = os.path.join(ssl_dir, "chain.pem")

        async def atlas_app_asgi(scope, receive, send):
            app_asgi = AsyncioWSGIMiddleware(app, max_body_size=1 * 1024 * 1024 * 1024)
            await app_asgi(scope, receive, send)

        asyncio.run(serve(atlas_app_asgi, hypercorn_config))
