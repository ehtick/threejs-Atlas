# pymodules/__atlas_fixed_vars.py

import hashlib


PORT = 80
RUN = "DEV"
VERSION = "2.4.46"
VERSION_HASH = hashlib.sha256(VERSION.encode("utf-8")).hexdigest()
MAX_PILLOW_WORKERS = 2
VISUAL_DEBUG = False