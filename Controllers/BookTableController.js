const { validationResult } = require('express-validator');


const Bookings = require('../Models/Booking');
const mongoose = require('mongoose');

//create nameOfResto,numberOfTables,numberOfPersons,dateTime,bookingStatus
//create 
const createBooking = (req, res) => {
    console.log(req.body)
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
    }


    let newBooking = new Bookings({
        ClientId:req.body.ClientId,
        RestoId:req.body.RestoId,
        nameOfResto: req.body.nameOfResto,
        numberOfTables: req.body.numberOfTables,
        numberOfPersons: req.body.numberOfPersons,
        dateTime: req.body.dateTime,
        bookingStatus: req.body.bookingStatus
    })

    newBooking.save();

    res.json(newBooking);
}
//get all bookings

const getBooking = async (req, res) => {
    let booking = await Bookings.find();
    res.json(booking)
}
//get bookings by ID

const getBookingById = async (req, res) => {
    Bookings.findById(req.params.id).then(result => {
        res.status(200).json({
            booking: result
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
const updateBooking=async(req,res)=>{
    let id =req.body.id
    let findBooking= await Bookings.findOne({
      _id: id
    });
    
    findBooking.nameOfBooking=req.body.nameOfBooking
    findBooking.bookingStatus=req.body.bookingStatus
    
    findBooking.save();
     res.json(findBooking);
}
//delete
const deleteBooking =(req,res)=>{
    Bookings.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "Booking deleted!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}

module.exports = { createBooking, getBooking, getBookingById, updateBooking,deleteBooking};
