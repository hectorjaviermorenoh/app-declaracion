#!/bin/bash

# timestamp como versión
VERSION=$(date +%s)

SW_FILE="../public/service-worker.js"

# Reemplaza la versión
sed -i.bak "s/const CACHE_VERSION = \".*\";/const CACHE_VERSION = \"v$VERSION\";/" $SW_FILE

# Borra backup (macOS crea .bak)
rm -f public/service-worker.js.bak

echo "✅ Service Worker version actualizado a v$VERSION"
