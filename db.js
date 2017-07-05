var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/mydb';

// 连接数据库
mongoose.connect(DB_URL);

// 连接成功的回调
mongoose.connection.on('connected', function(){
  console.log('mongoose connection open to' + DB_URL);
})

// 连接失败的回调
mongoose.connection.on('error', function(){
  console.log('mongoose connection open to' + DB_URL + '>>>>error<<<<');
})

// 连接断开
mongoose.connection.on('disconnected', function(){
   console.log('mongoose connection open to' + DB_URL + 'disconnected');
})

// 导出
module.exports = mongoose;