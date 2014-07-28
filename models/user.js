var mongoose =require('mongoose');

var User = mongoose.model('User', {
	// _id: mongoose.Schema.Types.ObjectId,
	email: String
})


module.exports = User;