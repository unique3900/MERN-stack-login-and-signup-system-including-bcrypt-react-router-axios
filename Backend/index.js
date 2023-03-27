const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myusers');

const salt = 10;

//User Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    joined: { type: Date, default: Date.now },
})

const Users = mongoose.model("users", userSchema);

app.post('/count',async (req, res) => {
    const countdbUser = await Users.count({ username: req.body.username });
    res.send({count: countdbUser});
})

// Post request register
app.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const countUser = await Users.find({ username: req.body.username });
        if (countUser>=1) {
            console.log("User already exist")
        }
        else {
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const insertDB = await Users.create({
                username: req.body.username,
                password: hashedPassword
            });
            
        }
    
        
    } catch (error) {
        res.send("Internal Server Error occured");
    }
})

// Login API
app.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        const getResult = await Users.findOne({ username: req.body.username });
        if (getResult) {
            const matchPassword = await bcrypt.compare(req.body.password,getResult.password);
            if (matchPassword) {
                console.log("User Logging in")
                res.send("User Exists...Logging in..");
            }
            else {
                res.json({status:1});
                
            }
        }
        else {
            res.send("No user Found");
        }
    } catch (error) {
        console.log(error)
        res.send("Internal Server Error occured");
    }
})



app.listen(3000, () => {
    console.log("Server Running");
})