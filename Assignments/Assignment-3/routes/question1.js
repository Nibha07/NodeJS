const express = require('express');

const router = express.Router();

const Web = require('../models/web');

router.get('/inventory',function(req,res,next){
   Web.find({}).then(function(inventory){
       res.send(inventory);
   });
  
});

router.get('/inventory/:name',(req,res)=>{
    Web.findOne({name:req.params.name}).then((item)=>{
        if(item){
            res.json(item)
        }else{
            res.sendStatus(404);
        }
    }).catch(err=>{
        if(err){
            throw err;
        }
    })
})

module.exports = router;
