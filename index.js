const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://fairoznew123:fairoz123@fairoz.j3ofgrm.mongodb.net/');



app.use(bodyParser.urlencoded({extended:true}))

var fristn= "";
var lastn = "";
var pnum ="";

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const fristname = req.body.fname;
    // fristn = fristname;
    const lastname = req.body.lname;
    // lastn = lastname;
    const phonenumber = req.body.phone;
    // pnum = phonenumber;
    const dataSchema = new mongoose.Schema({
        fname:String,
        lname:String,
        phoneNo:String
    
    
    });
    
    const Data = new mongoose.model("Dataentry",dataSchema);
    
    const entry = new Data({
        fname:fristname,
        lname:lastname,
        phoneNo:phonenumber
    
    });

    entry.save();

   

    res.send("<h1>data add sucessfully</h1>");

    

    
})

app.get("/about",function(req,res){
    res.send("about");
})








app.listen(3000,function(){

    console.log("server is live");
})

