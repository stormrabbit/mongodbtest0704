var Player = require('./player.js');

function insert(name, team) {
  var player = new Player({
    name: name,
    team: team,
    canBeSelected: true
  });
}

module.exports = playerDAO;