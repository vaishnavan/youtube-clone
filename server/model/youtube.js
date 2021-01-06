const mongoose = require('mongoose')


const youSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    iconUrl:{
        type:String,
        required:true
    },
    views:{
        type:String,
        required:true
    },
    posted:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Youtube',youSchema)