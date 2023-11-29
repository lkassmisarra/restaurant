const mongoose = require ('mongoose');

const restoSchema = new mongoose.Schema({
name : {
    type: String,
    required: true
},
description:{
    type: String,
    required: true
},
phoneNumber:{
    type: String,
    required: true
},
isVegan:{
    type: Boolean,
    required: true
},
image:{
    type: String,
    required : true, 
},
numberOfTables:{
    type: Number,
    required : true, 
}


});

const Resto = mongoose.model('Resto',restoSchema);
module.exports=Resto;