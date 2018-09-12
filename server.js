const express = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session)
const passport = require("./passport");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

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

<<<<<<< HEAD
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamesplice");

=======
>>>>>>> e32c8ae0cba70120d0540de34f66206c3c5f62d1
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});