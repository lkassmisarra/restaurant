const express=require('express');
const app = express();
const Connectdb = require('./Config/Connectdb');

const RestoRoute =require('./Routes/RestoRoute');
const ClientRoute =require('./Routes/ClientRoute');
const BookingRoute =require('./Routes/BookingRoute');



app.use(express.json());
Connectdb();

app.use('/resto', RestoRoute);
app.use('/client', ClientRoute);
app.use('/booking', BookingRoute);

app.listen(3009,()=>{
console.log("Server is listening in localhost:3009");
})