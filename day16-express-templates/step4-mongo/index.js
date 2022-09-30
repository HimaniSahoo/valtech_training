const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

let app = express();
app.use(express.json())

//mongodb+srv://admin:iD7mkJ9WXCKpYrtH@cluster0.spwi7hf.mongodb.net/?retryWrites=true&w=majority
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let url = "mongodb+srv://admin:iD7mkJ9WXCKpYrtH@cluster0.spwi7hf.mongodb.net/valtechdb?retryWrites=true&w=majority"

let Hero = mongoose.model("Hero", Schema({
    id : ObjectId,
    title : String,
    firstname : String,
    lastname : String
}))

mongoose.connect(url).then(function(){
    console.log("db connected")
}).catch(function(err){
    console.log("Error", err)
});

app.get("/",function(req,res){
    Hero.find().then(dbres=>{
        res.json(dbres)
    })
})
 
app.listen(8080,"localhost",function(){

})