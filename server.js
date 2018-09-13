const express = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session)
const passport = require("./passport");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const app = express();
const routes = require("./routes");

app.all('*', function(req, res, next) {
  var origin = req.get('origin'); 
  res.header('Access-Control-Allow-Origin', origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamesplice");

app.use(session({ 
  secret: "bananers", 
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true, 
  saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use('/auth', require('./auth'));
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamesplice");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});