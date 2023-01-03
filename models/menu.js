const mongoose = require('mongoose')
const schema = mongoose.Schema({
    // image:{
    //     type:String,
    //     required:false
    // },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
},{collection:"menu"})

module.exports = mongoose.model('menu',schema)