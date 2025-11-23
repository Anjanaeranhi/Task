const {Router} = require('express');
const { demoModel } = require('../Model/demo.model');

const DemoRouter = Router();

DemoRouter.post("/demo", async(req, res) => {
    try {
        const data = req.body;
       console.log(data.Id);
       
        
        const user = await demoModel.findOne({Id: data?.Id})
        console.log(user);
        
        if(user){
            return res.status(200).send({message:"Duplicate id exist"})
        }
        const newUser = await demoModel.create(data)
        res.status(200).send({message:"Successfully added to database", newUser})
    } catch (error) {
        res.status(500).send({message: "Internal server error", error})
    }
})

DemoRouter.get("/demo", async(req,res)=>{
    try {
        const {Id} = req.query;
        console.log(Id);
        const user = await demoModel.findById(Id)
        console.log(user);
        
        if(!user){
            return res.status(400).send({message:"User not found"})
        }
        res.status(200).send({message:"User found", user})
    } catch (error) {
        res.status(500).send({message: "Internal server error", error})
    }
})

DemoRouter.get("/all", async(req,res) => {
    try {
        const users = await demoModel.find();
        if(!users){
            return res.status(200).send({message: "No users found"})
        }
        res.status(200).send({message:"Users", users})
    } catch (error) {
        res.status(500).send({message: "Internal server error", error})
    }
    
})
module.exports = DemoRouter




