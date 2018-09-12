const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const users = require('../models/users')

passport.serializeUser((users, done) => {
	console.log('=== serialize ... called ===')
	console.log(users) // the whole raw user object!
	console.log('---------')
	done(null, { _id: users._id })
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	User.findOne(
		{ _id: id },
		'firstName lastName photos local.username',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(users)
			console.log('--------------')
			done(null, users)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)


module.exports = passport