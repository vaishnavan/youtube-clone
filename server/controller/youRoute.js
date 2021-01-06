const express = require('express')
const router = express.Router();
const Youtube = require('../model/youtube')

router.post('/',(req,res)=>{
    const you = new Youtube({
        title:req.body.title,
        url:req.body.url,
        iconUrl:req.body.iconUrl,
        views:req.body.views,
        posted:req.body.posted,
        brand:req.body.brand
    })
    you.save()
    .then(data=>{
        res.json(data)
    })
})

router.get('/allvideo',(req,res)=>{
    Youtube.find()
    .then(data=>{
        res.json(data)
    })
})


module.exports = router;