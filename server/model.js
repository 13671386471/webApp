//操作数据库的模块

let mongoose = require('mongoose');
//连接mongodb数据库；并且使用imooc这个集合【开始】
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongodb connect successful');
});
//连接mongoodb数据库【结束】