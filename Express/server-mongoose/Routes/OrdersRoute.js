const express = require("express");
const router = express.Router();
const Orders = require("../models/OrdersModel");

//Method : GET | API URL: localhost:3000/products/all
router.get("/all", async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Method : POST | API localhost:3000/products/add
router.post("/add", async (req, res) => {
  try {
    const OrderData = new Orders(req.body);
    const { userId, Pid, oPrice,ShippingAddress,orderDate } = OrderData;
    if (!userId || !Pid || !oPrice|| !ShippingAddress|| !orderDate) {
      res.status(401).json({ message: "All fields required" });
    }
    const storedata = await OrderData.save();
    res.status(200).json(storedata);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put("/edit/:id",async(req,res)=>{
  try{
const id=req.params.id
const existingorders=await Orders.findOne({_id:id})
if(!existingorders){
  res.status(404).json({message:"Order not found!"})
}
const updateorder=await Orders.findByIdAndUpdate(id,req.body,{new:true})
res.status(200).json(updateorder)
  }
  catch(error){
    res.status(500).json({ message: error.message });
  }
})
router.delete('/delete/:id',async(req,res)=>{
  try{
    const id=req.params.id
    const existingorders=await Orders.findOne({_id:id})
    if(!existingorders){
      res.status(404).json({message:"orders not found!"})
    }
    const deleteorder =await Orders.findByIdAndDelete(id,req.body,{new:true})
    res.status(200).json({message:"order deleted"})
      }
      catch(error){
        res.status(500).json({ message: error.message });
      }
    })
module.exports = router;
