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
app.get('/login', function(req, res){
  res.render( __dirname + '/views/login', {
    layout: 'layout-login',
    sidebar: false,
    title: '登入 Tobeone 達人影音網'
  } );
});
app.get('/register', function(req, res){
  res.render( __dirname + '/views/register', {
    layout: 'layout-login',
    sidebar: false,
    title: '註冊 Tobeone 達人影音網'
  } );
});
app.get('/register_confirm_email', function(req, res){
  res.render( __dirname + '/views/register_confirm_email', {
    layout: 'layout-login',
    sidebar: false,
    title: '發送認證信'
  } );
});
app.get('/forgot-pwd', function(req, res){
  res.render( __dirname + '/views/forgot-pwd', {
    layout: 'layout-login',
    sidebar: false,
    title: '找回密碼'
  } );
});
app.get('/reset-pwd', function(req, res){
  res.render( __dirname + '/views/reset-pwd', {
    layout: 'layout-login',
    sidebar: false,
    title: '重設密碼'
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
app.get('/my-follows', function(req, res){
  res.render( __dirname + '/views/my-follows', {
    sidebar: true,
    title: '我的關注'
  } );
});
app.get('/own-videos', function(req, res){
  res.render( __dirname + '/views/own-videos', {
    sidebar: true,
    title: '我的影音'
  } );
});
app.get('/edit-video', function(req, res){
  res.render( __dirname + '/views/edit-video', {
    sidebar: true,
    title: '編輯影音'
  } );
});
app.get('/edit-profile', function(req, res){
  res.render( __dirname + '/views/edit-profile', {
    sidebar: true,
    title: '編輯個人資料'
  } );
});
app.get('/notice', function(req, res){
  res.render( __dirname + '/views/notice', {
    sidebar: true,
    title: '通知'
  } );
});
app.get('/search', function(req, res){
  res.render( __dirname + '/views/search-result', {
    sidebar: true,
    title: req.query.keyword + '的搜尋結果',
    keyword: req.query.keyword
  } );
});
app.get('/landing', function(req, res){
  res.render( __dirname + '/views/landing', {
    title: 'Tobeone 達人影音網',
    layout: false
  } );
});
app.get('/about', function(req, res){
  res.render( __dirname + '/views/about', {
    sidebar: false,
    title: '關於達人網',
    url: req.originalUrl
  } );
});
app.get('/policies', function(req, res){
  res.render( __dirname + '/views/about', {
    sidebar: false,
    title: '服務條款',
    url: req.originalUrl
  } );
});
app.get('/privacy', function(req, res){
  res.render( __dirname + '/views/about', {
    sidebar: false,
    title: '隱私政策',
    url: req.originalUrl
  } );
});
app.get('/question', function(req, res){
  res.render( __dirname + '/views/about', {
    sidebar: false,
    title: '常見問題',
    url: req.originalUrl
  } );
});
app.get('/feature', function(req, res){
  res.render( __dirname + '/views/about', {
    sidebar: false,
    title: '網站特色',
    url: req.originalUrl
  } );
});
app.get('/mission', function(req, res){
  res.render( __dirname + '/views/about', {
    sidebar: false,
    title: '網站理念',
    url: req.originalUrl
  } );
});

http.listen(8800, "0.0.0.0", function(){
  console.log('listening on *:8800');
});

server = livereload.createServer({
  exts: ['ejs']
});

server.watch([__dirname + "/views", __dirname + "/js", __dirname + "/css", __dirname + "/partials"]);
