var mongoose =require('mongoose');

var User = mongoose.model('User', {
	// _id: mongoose.Schema.Types.ObjectId,
	username: String,
	email: String
})


module.exports = User;