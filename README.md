# contacts-api

Simple API service for testing and learning. It exposes REST endpoints to get, create, update and delete contacts. UI for the app is available [here](https://github.com/DevOpsByExample/contacts-ui)

## Up and Running

1. Start Postgre server
3. Setup users and databse in Postgres
```
./support/db_setup.sh
```
3. Start the app
```
npm install
npm start
```

## Contributing

Apart from the steps in Up and Running section use `npm test` to run tests and `npm run nodemon` to start the server using [nodemon](https://github.com/remy/nodemon)
