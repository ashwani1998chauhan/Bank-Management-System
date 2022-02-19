const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
    sender:{
        type:String,
        required:true,
        unique:false
    },
    receiver:{
        type:String,
        required:true,
        unique:false
    },
    amount:{
        type:Number,
        required:true,
        unique:false
    }
}, {timestamps: true})

module.exports = mongoose.model("Transaction",TransactionSchema);