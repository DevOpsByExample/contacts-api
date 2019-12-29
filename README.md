# contacts-api

Simple API service for learning. It exposes REST endpoints to get, create, update and delete contacts. 
UI for the app is available [here](https://github.com/DevOpsByExample/contacts-ui)

## Up and Running

1. Start Postgre server

2. Setup users and databases in Postgres
```
# To setup preconfigured users and databases
./support/db_setup.sh
```

3. Alternatively to install only databases

```
npm run initdb

# For test and production environments
NODE_ENV=test npm run initdb
NODE_ENV=production npm run initdb
```

3. Using the app
```
# To install dependencies
npm install

# To start the application
npm start

# To run tests
npm test

# To run tests with coverage
npm run coverage

# To start the server using nodemon
# https://github.com/remy/nodemon
npm run nodemon
```