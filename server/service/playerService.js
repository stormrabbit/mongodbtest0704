var Player = require('../dao/player.js');

var playerService = {};

playerService.insertPlayer = function(name, team, getInfoBack) {
  var player = new Player({
    name: name,
    team: team,
    canBeSelected: true
  });

  player.save(function(err, res) {
    if (err) {
      console.log("Error:" + err);
      getInfoBack(err);
    } else {
      console.log("Res:" + res);
      getInfoBack(res);
    }
  });
}

playerService.deletePlayer = function(_id, getInfoBack) {
  Player.remove({
    _id: _id
  }, function(err, res) {
    if (err) {
      console.log("Error:" + err);
      getInfoBack(err);
    } else {
      console.log("Res:" + res);
      getInfoBack(res);
    }
  });
}

playerService.updatePlayer = function(_id, team, getInfoBack) {
  console.log('_id:' + _id);
  console.log('team:' + team);
  Player.update({
    _id: _id
  }, {
    team: team
  }, function(err, res) {
    if (err) {
      console.log("Error:" + err);
      getInfoBack(err);
    } else {
      console.log("Res:" + res);
      getInfoBack(res);
    }
  });
}

playerService.findAllPlayers = function(getInfoBack) {
  Player.find({}, function(err, docs) {
    if (err) {
      console.log("Error:" + err);
      getInfoBack(err);
    } else {
      console.log("Res:" + docs);
      getInfoBack(docs);
    }
  });
}

playerService.findPlayerById = function(id, getInfoBack) {
  Player.findOne({
    _id: id
  }, function(err, docs) {
    if (err) {
      console.log("Error:" + err);
      getInfoBack(err);
    } else {
      getInfoBack(docs);
    }
  });
}

playerService.findPlayerByTeam = function(team, getInfoBack) {
  Player.find({
    team: team
  }, function(err, docs) {
    if (err) {
      console.log("Error:" + err);
      getInfoBack(err);
    } else {
      getInfoBack(docs);
    }
  });
}

playerService.findTeams = function(getInfoBack) {
  Player.distinct('team', function(err, docs) {
    if (err) {
      getInfoBack(err);
    } else {
      console.log(docs.length);
      getInfoBack(docs.sort());
    }
  })
}

module.exports = playerService;