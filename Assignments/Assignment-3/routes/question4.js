const express = require('express');

const router = express.Router();

const Web = require('../models/web');

router.delete('/inventory/:name',(req,res)=>{
    const name = {name:req.params.name}
        Web.deleteOne(name).then( ()=>{
            res.send("item removed");
    
        }).catch(err =>{
            if(err){
                throw err;
            }
        })    
    
        });
    
        router.delete('/inventory',(req,res)=>{
            const name = {name:req.params.name}
            Web.remove().then( ()=>{
                res.send("item removed");
        
            }).catch(err =>{
                if(err){
                    throw err;
                }
            })
        
            });
            module.exports = router;

    