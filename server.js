var express = require('express')
var app = express()

app.get('/example',(req,res)=>{
    res.send('<p>Firstname:'+req.query['firstname']+'</p><p>Lastname:'+req.query['lastname']+'</p><p>Password:'+req.query['password']+'</p><p>Sex:'+req.query['sec']+'</p><p>About You:'+req.query['about']+'</p>')
})

app.listen(9000)

