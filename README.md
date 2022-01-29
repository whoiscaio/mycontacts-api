# My Contacts API

An API that interacts with a PostgreSQL Database to store
information from a contact manager application.


## Setup

Go to the desired folder and run

```bash
  $ git clone https://github.com/whoiscaio/mycontacts-api

  $ cd mycontacts-api
```

Then, install the packages and run the development server with:
(NPM)

```bash
  $ npm install

  $ npm run dev
```

or: (YARN)

```bash
  $ yarn

  $ yarn dev
```

Ps: Make sure to have a running postgres container and a database
with the scheme on src/database/scheme.sql file

You can:

```bash
  $ docker pull postgres

  $ docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

  $ docker exec -it pg bash

  $ psql -U root
```

Now execute the queries and you're ready to go.


