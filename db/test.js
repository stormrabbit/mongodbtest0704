use mydb;
for (var i = 100 - 1; i >= 0; i--) {
  var tempNo = Math.ceil(Math.random() * 8);
  var player = {
    name: '测试' + i,
    team: tempNo,
    canBeSelect: true
  }
  db.player.save(player);
}