var express = require('express');
var app = express();
var http = require('http').Server(app);
var partials = require('express-partials');
livereload = require('livereload');

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/image', express.static(__dirname + '/images'));

app.set('view engine', 'ejs');
app.use(partials());

app.get('/', function(req, res){
  res.render( __dirname + '/views/index', {
    title: 'Tobeone 達人影音網'
  } );
});
app.get('/upload', function(req, res){
  res.render( __dirname + '/views/upload', {
    title: '上傳影片'
  } );
});
app.get('/talent', function(req, res){
  res.render( __dirname + '/views/talent', {
    title: '達人頁面'
  } );
});
app.get('/landing', function(req, res){
  res.render( __dirname + '/views/landing', {
    title: 'Tobeone 達人影音網',
    layout: false
  } );
});

http.listen(8080, "0.0.0.0", function(){
  console.log('listening on *:8080');
});

server = livereload.createServer({
  exts: ['ejs']
});

server.watch([__dirname + "/views", __dirname + "/js", __dirname + "/css", __dirname + "/partials"]);
