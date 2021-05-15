const express = require('express');

const router = express.Router();

const Web = require('../models/web');

router.post('/inventory',function(req,res,next){ 
    Web.create(req.body).then(function(web){
        res.send(web);
    }).catch(next)
    })

    module.exports = router;



