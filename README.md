# </> FindGig

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/sudiptog81/findgig/issues) [![Dependency Status](https://img.shields.io/david/sudiptog81/findgig.svg?style=flat-square)](https://david-dm.org/sudiptog81/findgig) [![devDependencies Status](https://img.shields.io/david/dev/sudiptog81/findgig.svg?style=flat-square)](https://david-dm.org/sudiptog81/findgig?type=dev)

> Simple gig finding app for freelancing coders. This app uses Node, Express, Sequalize and Handlebars.

## Quick Start

### Database Configuration

This app uses a [Postgres](https://www.postgresql.org/) database **findgig** with default user credentials .

```bash
 user: postgres
 password: 123456
```

Create a table **gigs** in the _public_ schema, if using Postgres or in the **findgig** database for other implementations. Structure the table with the following columns, adapt it yourself for databases other than Postgres.

```sql
CREATE TABLE public.gigs (
  id integer NOT NULL,
  title character varying(200),
  technologies character varying(200),
  budget character varying(20),
  description text,
  contact_email character varying,
  "createdAt" date,
  "updatedAt" date
);
```

Create the corresponding table in your database and change the database credentials by changing the datbase configuration template in the _config_ folder (_config/database.template.js_) and then rename the file to _database.js_.

```js
// Change DB_name, DB_user, DB_pass and DB_host.
// Rename this file to database.js
module.exports = new Sequelize("DB_name", "DB_user", "DB_pass", {
  host: "DB_host",
  ...
});
```

If you want to use some other SQL database such as MySQL, SQLite or Microsoft SQL Server, refer to the Sequelize documentation for more information. You may have to install additional NodeJS packages.

### Running the app

```bash
# Install dependencies
npm install

# Serve on localhost:5000
npm start

# Run Live Development Server
npm run dev
```

## App Info

### Author

[Sudipto Ghosh](https://sudipto.ghosh.pro)

### Version

1.0.0

### License

This project is licensed under the MIT License.
Adapted from [CodeGig by Brad Traversy](https://github.com/bradtraversy/codegig)
