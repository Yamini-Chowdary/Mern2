const express = require("express");
const router = express.Router();
const Users = require("../models/UsersModel");

//Method : GET | API URL: localhost:3000/products/all
router.get("/all", async (req, res) => {
  try {
    const users= await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Method : POST | API localhost:3000/products/add
router.post("/add", async (req, res) => {
  try {
    const UserData = new Users(req.body);
    const {name,email,PhoneNumber,Password,Address} = UserData;
    if (!name|| !email || !PhoneNumber|| !Password|| !Address) {
      res.status(401).json({ message: "All fields required" });
    }
    const storedata = await UserData.save();
    res.status(200).json(storedata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put("/edit/:id",async(req,res)=>{
  try{
const id=req.params.id
const existingusers=await Users.findOne({_id:id})
if(!existingusers){
  res.status(404).json({message:"User not found!"})
}
const updateuser=await Users.findByIdAndUpdate(id,req.body,{new:true})
res.status(200).json(updateuser)
  }
  catch(error){
    res.status(500).json({ message: error.message});
  }
})
router.delete('/delete/:id',async(req,res)=>{
  try{
    const id=req.params.id
    const existingusers=await Users.findOne({_id:id})
    if(!existingusers){
      res.status(404).json({message:"users not found!"})
    }
    const deleteuser =await Users.findByIdAndDelete(id,req.body,{new:true})
    res.status(200).json({message:"user deleted"})
      }
      catch(error){
        res.status(500).json({ message: error.message });
      }
    })
module.exports = router;
