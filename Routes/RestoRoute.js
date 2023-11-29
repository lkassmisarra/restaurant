const express = require('express');
const { createResto, updateResto, deleteResto, getResto, getRestoById } = require('../Controllers/RestoController');
const { uploadSingle } = require('../Helpers/Multermiddleware');
const { body } = require('express-validator');

const route = express.Router();

route.post('/',
    uploadSingle,
    body('name').notEmpty(),
    body('description').notEmpty(),
    body('phoneNumber').notEmpty(),
    body('isVegan').notEmpty(),
    body('image').notEmpty(),

    createResto);
route.get('/:id',getRestoById);
route.get('/',getResto);
//route.post('/',bookTable)  order;
// get all restos, get resto by id;
//users
route.put('/update', updateResto);
route.delete('/:id', deleteResto);

module.exports = route;