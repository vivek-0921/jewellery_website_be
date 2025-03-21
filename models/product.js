const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    category:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    }
},{timestamps:true});

module.exports = new mongoose.model('product', productSchema);