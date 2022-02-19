const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        required:true,
        unique:false
    },
})

module.exports = mongoose.model("User",UserSchema);