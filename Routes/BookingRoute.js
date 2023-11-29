const express = require('express');
const { createBooking, getBooking, getBookingById,updateBooking, deleteBooking } = require('../Controllers/BookTableController');
const { body } = require('express-validator');

const route = express.Router();

route.post('/',
    body('nameOfResto').notEmpty(),
    body('numberOfTables').notEmpty(),
    body('numberOfPersons').notEmpty(),
    body('dateTime').notEmpty(),
    createBooking);
route.get('/:id', getBookingById);
route.get('/', getBooking);
route.put('/update', updateBooking);
route.delete('/:id', deleteBooking);

module.exports = route;