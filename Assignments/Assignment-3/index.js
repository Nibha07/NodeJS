const express = require('express');
// const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/webgo');
mongoose.Promise = global.Promise;
app.use(bodyParser.json())
app.use('/',require('./routes/api'));
app.use(function(err,req,res,next){
   res.status(422).send({error:err.message});
})

// app.get('/api',function(req,res){
//     console.log('GET request');
//     res.send({name:'nibha'});
// });

app.listen(process.env.port ||5051,function(){
    console.log('now listening for requests');

});