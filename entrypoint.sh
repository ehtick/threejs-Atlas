#!/bin/sh
set -e

if [ -z "$(ls -A /app)" ]; then
    echo "Folder /app empty. Copying..."
    cp -r /app_defaults/* /app/
    chown -R $(id -u):$(id -g) /app
fi

exec "$@"
