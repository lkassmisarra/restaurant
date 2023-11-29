const { validationResult, Result } = require('express-validator');
const Client = require('../Models/Client');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//create /sign up/ Client:user
const createClient = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    let newClient = new Client({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword

    })
    newClient.save().then(result => {
        res.json('client created successfully!')
    }).catch(error => {
        res.json('error!')

    })

}

//post / login
const Login = async(req,res)=>{
    const clientExists = Client.findOne({
        email : req.body.email
    }).then(client=>{
        console.log(client);
        const comparePassword = bcrypt.compareSync(req.body.password, client.password)
        if(!comparePassword){
            res.status(404).json({error: "wrong password!"})
        } 
        const token = jwt.sign({ client: client }, 'secret-key');
        res.status(200).json({message : "logged in successfully!",token:token})
    })
    
    
    }

    //update client
const updateClient = async(req,res)=>{
    let id = req.body.id
    let findClient= await Client.findOne({
      _id: id

    });
    
    
    findClient.email=req.body.email
    findClient.password=req.body.password
    
    findClient.save();
     res.json(findClient);

   
}

//delete client
const deleteClient = (req,res)=>{
    Client.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id)})
    .then(result => {
        res.status(200).json({
            message: "Client deleted!"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    
}
module.exports={createClient,Login,updateClient,deleteClient};