# pymodules/__atlas_fixed_vars.py

import hashlib


PORT = 80
RUN = "DEV"
VERSION = "1.0.11"
VERSION_HASH = hashlib.sha256(VERSION.encode("utf-8")).hexdigest()
MAX_PILLOW_WORKERS = 4
VISUAL_DEBUG = False
