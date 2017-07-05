// 拿到Schema
var mongoose = require('./db.js');
var Schema = mongoose.Schema;
// 创建关系
var PlayerSchema = new Schema({
  name: {
    type: String
  },
  team: {
    type: Number
  },
  canBeSelected: {
    type: Boolean
  }
}, {
  versionKey: false
});

module.exports = mongoose.Model('Player', PlayerSchema);