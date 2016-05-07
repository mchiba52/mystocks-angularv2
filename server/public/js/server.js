var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use (express.static('public'));
app.use (express.static('src/views'));

app.get('/', function(req, res) {
	res.send(index.html);
});

app.get('/books', function (req, res) {
	res.send('Hello books');
});

app.get('/admin', function (req, res) {
	res.send('Hello books');
});

app.get('/data', function (req, res) {
	res.send('Hello books');
});

app.listen(port, function (err) {
	console.log('Example app listening on port ' + port);
});
