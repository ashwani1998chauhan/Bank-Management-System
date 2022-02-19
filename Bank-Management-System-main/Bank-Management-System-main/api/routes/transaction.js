const router = require("express").Router();
const Transaction = require("../models/Transaction");

router.post("/register",async(req,res)=>{
    try{
        const newTransaction = new Transaction({
            sender:req.body.sender,
            receiver: req.body.receiver,
            amount: req.body.amount,
        });
        const transaction = await newTransaction.save();
        res.status(200).json(transaction);
    }catch(err){
        res.status(500).json(err);
    }
})



router.get("/all",async(req,res)=>{
    try{
        const transaction = await Transaction.find();
        res.status(200).json(transaction);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;