const mongoose= require('mongoose');

const Clients = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique : true,
    },
    password : {
        type: String ,
        required: true,
    }
})
const Client = mongoose.model('Client',Clients);
module.exports = Client;