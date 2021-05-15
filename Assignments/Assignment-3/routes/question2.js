const express = require('express');

const router = express.Router();

const Web = require('../models/web');




router.put('/inventory',(req,res) =>{
    const fruit ={
        name : req.body.name,
        quantity:req.body.quantity
    };
    fruits.splice(0,fruits.length);
    fruits.push(fruit);
    res.send(fruits);
   
});

router.put('/inventory/:name',function(req,res){
    const name = {name:req.params.name}
    Web.updateOne(name,req.body).then( ()=>{
        res.send("item updated");

    }).catch(err =>{
        if(err){
            throw err;
        }
    })    

    });

    module.exports = router;




