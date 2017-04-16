var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));

app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: 'application'}));
app.set('view engine', 'hbs');

//Routes
app.get('/', function (req, res) {
  res.render('index', { title: 'Chào mừng bạn đến với trình quản lý Albums', message: 'Trang chủ'});
});

app.get('/album', function(req, res){
	res.render('album', {title: 'Albums'});
});

app.get('/about', function(req, res){
	res.render('about', {title: 'About'});
});

app.get('/blog', function(req, res){
	res.render('blog', {title: 'Blog'});
});

app.get('/album1', function(req, res){ 
	res.render('album1', {title: 'About'});
});

app.get('/album2', function(req, res){
	res.render('album2', {title: 'About'});
});

app.get('/album3', function(req, res){
	res.render('album3', {title: 'About'});
});

app.get('/album4', function(req, res){
	res.render('album4', {title: 'About'});
});

app.get('/album5', function(req, res){
	res.render('album5', {title: 'About'});
});

app.get('/album6', function(req, res){
	res.render('album6', {title: 'About'});
});

app.get('/blog1', function(req, res){
	res.render('blog1', {title: 'Blog'});
});

app.get('/blog2', function(req, res){
	res.render('blog2', {title: 'Blog'});
});

app.get('/blog3', function(req, res){
	res.render('blog3', {title: 'Blog'});
});

app.get('/blog4', function(req, res){
	res.render('blog4', {title: 'Blog'});
});

app.get('/blog5', function(req, res){
	res.render('blog5', {title: 'Blog'});
});

app.get('/blog6', function(req, res){
	res.render('blog6', {title: 'Blog'});
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on port ' + port + '!');
});
