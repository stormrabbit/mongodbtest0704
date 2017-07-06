// 初始化请求
var express = require('express');
var app = express();
// 设置端口
var port = (process.env.PORT || 4000);


// POST
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('port', port);
// 设置路由跳转
// 主页
app.get('/', function(req, res){
  res.send('Fuck you,world!');
})

app.post('/add', upload.array(), function(req, res) {
  var name = req.body.name;
  var team = req.body.team;
  // var playerDAO = require('./playerDAO');
  // playerDAO.insert(name, team);
  var playerDAO = require('./playerDAO');
  playerDAO.insertPlayer(name, team);
  res.send('ok');
})

app.get('/delete', function(req, res) {
  var _id = req.query.id;
  // var playerDAO = require('./playerDAO');
  // playerDAO.insert(name, team);
  var playerDAO = require('./playerDAO');
  playerDAO.deletePlayer(_id);
  res.send('ok');
})

app.put('/update/:id', function(req, res) {
  // var playerDAO = require('./playerDAO');
  // playerDAO.insert(name, team);
  var id = req.params.id;
  var team = req.query.team;
  var playerDAO = require('./playerDAO');
  playerDAO.updatePlayer(id, team);
  res.send('ok');
})


app.get('/findAll', function(req, res) {
  var playerDAO = require('./playerDAO');
  var getInfoBack = function(info) {
    res.send(info);
  }
  playerDAO.findAllPlayers(getInfoBack);

})

app.get('/find', function(req, res) {
  var id = req.query.id;
  var playerDAO = require('./playerDAO');
  var getInfoBack = function(info) {
    res.send(info);
  }
  playerDAO.findPlayerById(id, getInfoBack);

})

app.get('/findByTeam', function(req, res) {
  var team = req.query.team;
  var playerDAO = require('./playerDAO');
  var getInfoBack = function(info) {
    res.send(info);
  }
  playerDAO.findPlayerByTeam(team, getInfoBack);

})
// // 随便写了一个详情页
// app.get('/about/*', function(req, res){
//   // console.log('baseUrl:' + req.originalUrl);
//   // res.send('hostname' + req.hostname);
//   res.send(req.param('te'));
// })

// var greet = express.Router();

// greet.get('/jp', function (req, res) {
//   console.log(req.baseUrl); // /greet
//   res.send('Konichiwa!');
// });

// greet.get('/about', function(req, res) {
//   console.log('baseUrl:' + req.baseUrl);
//   res.send(req.query);
// })

// app.use('/greet', greet);
// // 参数设置
// app.post('/test', function(req, res) {
//   console.log(req.body);
//   console.log(req.query);
//   res.send(req.body);
// })

// app.post('/test', upload.array(), function (req, res) {
//   console.log(req.body);
//   res.send(req.body);
// });


// app.post('/test',upload.array(), function(req, res) {
//     console.log(req.query.id);
//     console.log(req.body.name);
//     console.log(req.body.tel);
//     res.send('test');
// });

// app.put('/test/:userId', function(req, res){
//   console.log(req.params);
//   res.send('ok');
// })

// 设置404
app.use(function (req, res, next){
  res.status(404);
  res.send('404 - not found');
})
// 启动服务
app.listen(app.get('port'), function(){
  console.log('running on:' + app.get('port'));
})