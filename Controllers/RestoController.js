const { validationResult } = require('express-validator');


const Resto= require('../Models/Resto');
const mongoose = require ('mongoose');

//create name, description,phoneNumber,isVegan
//create 
const createResto=(req,res)=>{
    const result = validationResult(req);
  if (!result.isEmpty()) {
    res.send({ errors: result.array() });
  }


let newResto = new Resto({
    name:req.body.name,
    description:req.body.description,
    phoneNumber:req.body.phoneNumber,
    isVegan:req.body.isVegan,
    image:req.file.originalname,
    numberOfTables:req.body.numberOfTables
})

newResto.save();

res.json(newResto);
}

//get restaurant all

const getResto=async(req,res)=>{
    let restaurant= await Resto.find();
    res.json(restaurant)
 }
//get restaurant by ID

const getRestoById=async(req,res)=>{
   Resto.findById(req.params.id).then(result => {
    res.status(200).json({
        restaurant: result
    });
})
.catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});
   
 }
//update
const updateResto=async(req,res)=>{
    let id =req.body.id
    let findResto= await Resto.findOne({
      _id: id
    });
    
    findResto.name=req.body.name
    findResto.isVegan=req.body.isVegan
    
    findResto.save();
     res.json(findResto);
}

//delete
const deleteResto =(req,res)=>{
    Resto.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "Restaurant deleted!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}
module.exports = {createResto,updateResto,deleteResto,getResto,getRestoById};

