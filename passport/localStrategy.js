const Member = require('../database/models/members')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		Member.findOne({ username: username }, (err, member) => {
			if (err) {
				return done(err)
			}
			if (!member) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!member.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, member)
		})
	}
)

module.exports = strategy
