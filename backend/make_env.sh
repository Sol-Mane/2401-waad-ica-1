#!/bin/sh
# Author: Gabriel Michael Homa <gabriel.homa_at sign_htd.cz>
# Usage:
# make_env.sh ${BACKEND_PORT_NUMBER} (Defaults to 3000)
port=${1:-3000}
echo "PORT=\"${port}\"" > .env
( /usr/bin/openssl rand -base64 128 | tr -d '\n=' && echo  )| sed -e 's:^:SECRET=":' -e 's:$:":' >> .env
