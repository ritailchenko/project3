const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
// const { Dog, Shelter, Tag, User } = require('./sequelize');
const passport = require('passport'); 
const session = require("express-session");
const cors = require('cors');
const bodyParser = require('body-parser');
// const routes = require('./routes');
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: "running elephant has broken waffle mountain", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/api-routes')(app);
//require('./routes/html-routes')(app);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
