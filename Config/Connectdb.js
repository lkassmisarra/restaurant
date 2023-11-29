const mongoose = require('mongoose');

const Connectdb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Restaurant')
            .then(() => console.log('Connected!'));
    } catch (error){
        console.log("failed to connect!")
    }
}
module.exports = Connectdb;



