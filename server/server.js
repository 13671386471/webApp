let express = require('express');
let useRouter = require('./user');

let app = express();
app.use('/user', useRouter);//中间件的机制(切记：是/user而不是 ./user )


app.listen(9099,function(){
    console.log('express start at port 9099');
})






