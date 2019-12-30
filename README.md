# contacts-api
> a simple application that exposes REST APIs for learning

`contacts-api` exposes REST endpoints to get, create, update, delete and list contacts.
UI for the app is available [here](https://github.com/DevOpsByExample/contacts-ui)

## Configurations supported

The following are the default values for respective environments.
If necessary, configure using env variables

### Application Configuration

|Configuration | Default value |
|--|--|
| NODE_ENV | "development" |
| PORT | 3000 |


### Database Configuration - `development`

|Configuration | Default value |
|--|--|
| DB_USERNAME | *_postgres default_ |
| DB_PASSWORD | *_postgres default_ |
| DB_NAME | "contacts_development" |
| DB_HOSTNAME | "localhost" |
| DB_PORT | 5432 |


### Database Configuration - `test`

|Configuration | Default value |
|--|--|
| DB_USERNAME | *_postgres default_ |
| DB_PASSWORD |  *_postgres default_ |
| DB_NAME |  "contacts_test" |
| DB_HOSTNAME | "localhost" |
| DB_PORT | 5432 |


### Database Configuration - `production`

|Configuration | Default value |
|--|--|
| DB_USERNAME | *_postgres default_ |
| DB_PASSWORD | *_postgres default_ |
| DB_NAME | "contacts_production" |
| DB_HOSTNAME | "localhost" |
| DB_PORT | 5432 |


## Up and Running

1. Start Postgres server

2. Setup databases in Postgres

```
npm run createdb
```

3. Using the app
```
# To install dependencies
npm install

# To start the application
npm start

# To start the server using nodemon
# https://github.com/remy/nodemon
npm run nodemon

# To run tests
npm test

# To run tests with coverage
npm run coverage

# To list all supported commands
npm run
```
