var express = require('express');
var bodyParser = require('body-parser');
var mongoose =require('mongoose');
var User = require('./models/user.js')

mongoose.connect('mongodb://localhost/wingzingly');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res) {
	res.render('index');
});


app.post('/signup', function(req, res){
	
	console.log(req.body.email);

	var user = new User({
		email: req.body.email
	});
	user.save()

	res.send('You just signed up, ' +req.body.email +' Now you getting wit it!');
})

var server = app.listen(4866, function() {
	console.log('Express server listening on port ' + server.address().port);
});
