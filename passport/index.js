const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const Member = require('../database/models/members')

// called on login, saves the id to session req.session.passport.member = {id:'..'}
passport.serializeMember((member, done) => {
	console.log('*** serializeMember called, member: ')
	console.log(member) // the whole raw member object!
	console.log('---------')
	done(null, { _id: member._id })
})

// member object attaches to the request as req.member
passport.deserializeMember((id, done) => {

console.log('DeserializeMember called')
	Member.findOne(
		{ _id: id },
		'username',
		(err, member) => {
			console.log('*** Deserialize member, member:')
			console.log(member)
			console.log('--------------')
			done(null, member)
		}
	)
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport
