#!/bin/sh
# Author: Gabriel Michael Homa <gabriel.homa_at sign_htd.cz>
# Usage:
# make_env.sh ${BACKEND_PORT_NUMBER} (Defaults to 2999)
port=${1:-2999}
echo "PORT=\"${port}\"" > .env
( /usr/bin/openssl rand -base64 128 | tr -d '\n=' && echo  )| sed -e 's:^:JWT_SECRET=":' -e 's:$:":' >> .env
echo '# postgres://user:password@host:port/db' >> .env
echo 'PG_CONNECTION_STRING=\'\'' >> .env
