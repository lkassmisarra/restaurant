const mongoose = require('mongoose');

const Bookings = new mongoose.Schema({
    ClientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    RestoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resto',
        required: true,
    },
    nameOfResto: {
        type: String,
        required: true,
    },
    numberOfTables: {
        type: Number,
        required: true,
    },
    numberOfPersons: {
        type: Number,
        required: true,
    },
    numberOfPersons: {
        type: Number,
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
    bookingStatus: {
        type: String,
        required: true,
        default: 'pending',
        enum:['pending', 'confirmed', 'canceled']
       
    }
})
const Booking = mongoose.model('Bookings', Bookings);
module.exports = Booking;