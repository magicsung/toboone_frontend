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
    sidebar: true,
    title: 'Tobeone 達人影音網'
  } );
});
app.get('/upload', function(req, res){
  res.render( __dirname + '/views/upload', {
    sidebar: false,
    title: '上傳影片'
  } );
});
app.get('/talent/:name', function(req, res){
  res.render( __dirname + '/views/talent', {
    sidebar: true,
    title: '達人頁面',
    name: req.params.name
  } );
});
app.get('/video/:id', function(req, res){
  res.render( __dirname + '/views/video', {
    sidebar: false,
    title: '影片內頁',
    id: req.params.id
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
