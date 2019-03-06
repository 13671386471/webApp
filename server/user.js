//和用户有关的模块
const express = require('express');
const Router = express.Router();

Router.get('/info',function(req, res){
    //要校验请求中有没有cookie，来判断是否登录了，以此来返回不同的信息给前端，让前端来判断跳到哪个页面
    console.log('info::', req, res);
    return res.json({code: 0})
})

module.exports = Router;