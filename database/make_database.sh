#!/bin/bash
# Author: Gabriel Michael Homa
# Description: A single purpose script that uses sudo to init a database from a fixed name
sudo -i -u postgres psql < init_database.sql
