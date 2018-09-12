const User = require('../models/Users');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		User.findOne({ 'username': username }, (err, userMatch) => {
			if (err) {
				return done(err);
			}
			if (!userMatch) {
				console.log("a hew!");
				return done(null, false, { message: 'Incorrect username' });
			}
			if (!userMatch.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password' });
			}
			return done(null, userMatch);
		});
	}
);

module.exports = strategy;
