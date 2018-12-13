/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");

// test db connection
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.log(`Error: ${err}`));

const app = express();

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index", { layout: "landing" }));
app.use("/gigs", require("./routes/gigs"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
