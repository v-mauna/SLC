
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sparxlawncare";


app.use(express.urlencoded({ extented: true }));
app.use(express.json());

// Express Session
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  routes;

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}
mongoose.connect(
  MONGODB_URI || 'mongodb://localhost/evening-meadow-40236',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
require('./models/User')
require('./models/Event')
require('./models/ServiceAddress')

app.use(require("./routes"));

// this allows you to activate the port
require("./config/connection");
app.listen(port, function () {
  console.log("app is listening on port", port);
});
