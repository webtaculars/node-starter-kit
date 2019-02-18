const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("./config");
const mongoose = require("mongoose");
global.mongoose = mongoose;

const app = express();

const http = require("http").Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

http.listen(config.port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port 8080");
  }
});

const api = require("./routes");
app.use("/api/", api);

mongoose.connect(config.database, { useNewUrlParser: true }, err => {
  if (err) {
    process.exit(1);
  } else {
    console.log("Connected to mongo");
  }
});
