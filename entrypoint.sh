#!/bin/sh
set -e

echo "Cleaning /app except atlas.ini and ./ssl if any..."
find /app -mindepth 1 ! -name 'atlas.ini' ! -path '/app/ssl' ! -path '/app/ssl/*' -exec rm -rf {} +

echo "Copying fresh contents from /app_defaults..."
cp -r /app_defaults/* /app/
chown -R $(id -u):$(id -g) /app

exec "$@"
