let express = require('express');
let mongoose = require('mongoose');
//连接mongodb数据库；并且使用imooc这个集合【开始】
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongodb connect successful');
});
//连接mongoodb数据库【结束】
//定义数据模型;mongoose.modal和mongoose.Schema的应用
let User = mongoose.model("user", new mongoose.Schema({
    user:{type: String, require: true},
    age: {type: Number, require: true}
}))
//定义数据模型

//根据定义的数据模型生成数据【开始】
// User.create({
//     user: 'react',
//     age: 3
// }, function (err, response) {
//     console.log('mongoodb Data::::', response);
// })
//根据定义的数据模型生成数据【结束】
let app = express();

app.get('/',function(require, response){
    response.send('<h2>express and react</h2>');
});

app.get('/data', function (require, response) {
    // response.json({name: 'react', type: 'It'})
    User.find({}, function(err, doc){
        response.json(doc)
    })
});


app.listen(9099,function(){
    console.log('express start at port 9099');
})






