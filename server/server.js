var express = require('express');
var app = express();
var nav = '';
var dataRoute = require('./public/data/js/dataRoutes')(nav);
var adminRoute = require('./public/admin/js/adminRoutes')(nav);

var port = process.env.PORT || 3000;

app.use (express.static('public'));
app.use (express.static('public/landing'));
app.use (express.static('public/admin'));
app.use (express.static('public/data'));
app.set ('views', './public/books');
app.set ('view engine', 'ejs');

var landingPage = 'index.html';
app.get('/', function(req, res) {
	res.send(landingPage);
});

app.get('/books', function (req, res) {
	res.render('index', {
		navArray: [{
			Link: '/books',
			Text: 'Books'
		}, {
			Link:'/Authors',
			Text: 'Authors'
		}]
	});
});

app.use('/', adminRoute);
app.use('/', dataRoute);

app.listen(port, function (err) {
	console.log('Example app listening on port ' + port);
});
