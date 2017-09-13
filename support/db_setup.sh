#!/bin/bash

psql <<EOF
	CREATE USER dev WITH PASSWORD 'dev' LOGIN CREATEDB;
	CREATE DATABASE contacts_development;
	GRANT ALL PRIVILEGES ON DATABASE contacts_development TO dev;

	CREATE USER test WITH PASSWORD 'test' LOGIN CREATEDB;
	CREATE DATABASE contacts_test;
	GRANT ALL PRIVILEGES ON DATABASE contacts_test TO test;

	\list contacts_development;
	\list contacts_test;
EOF