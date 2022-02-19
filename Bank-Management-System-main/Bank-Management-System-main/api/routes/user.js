const router = require("express").Router();
const User = require("../models/User");

router.post("/register",async(req,res)=>{
    try{
        const newUser = new User({
            name:req.body.name,
            email: req.body.email,
            balance: req.body.balance,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: {
                balance: (user.balance - req.body.balance)
            }
        },{new:true})
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
})
router.put("/add/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: {
                balance: (+user.balance + +req.body.balance)
            }
        },{new:true})
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
})


router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})


router.get("/",async(req,res)=>{
    try{
        const user = await User.find();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;