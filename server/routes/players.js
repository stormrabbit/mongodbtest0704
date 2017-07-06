var express = require('express');
var router = express.Router();
var playerService = require('../service/playerService');
// // POST
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// callBack
var getResponseInfoBack = function(response, info){

}
/* GET users listing. */
router.get('/', function(req, res, next) {
  var getInfoBack = function(info) {
    res.send(info);
  };
  playerService.findAllPlayers(getInfoBack);
});

router.post('/add', upload.array(), function(req, res) {
  var name = req.body.name;
  var team = req.body.team;
  var getInfoBack = function(info) {
    res.send(info);
  }
  playerService.insertPlayer(name, team, getInfoBack);
})

router.get('/delete', function(req, res) {
  var _id = req.query.id;
  var getInfoBack = function(info) {
    res.send(info);
  }
  playerService.deletePlayer(_id, getInfoBack);
})

router.put('/update/:id', function(req, res) {
  var id = req.params.id;
  var team = req.query.team;
  var getInfoBack = function(info) {
    res.send(info);
  }
  playerService.updatePlayer(id, team, getInfoBack);
})


router.get('/find', function(req, res) {
  var id = req.query.id;
  var getInfoBack = function(info) {
    res.send(info);
  }
  playerService.findPlayerById(id, getInfoBack);

})

router.get('/findByTeam', function(req, res) {
  var team = req.query.team;
  // var playerService = require('./playerService');
  var getInfoBack = function(info) {
    res.send(info);
  }
  playerService.findPlayerByTeam(team, getInfoBack);

})

module.exports = router;
