const express =require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let errorHandler = require("./utils/utils").errorHandler;
const config = require("./config/config.json");


let app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(cors());
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

let port =process.env.PORT || config.port;

let Hero = mongoose.model("Hero",Schema({
    id : ObjectId,
    title : String,
    firstname : String,
    lastname : String
}));

let dbstring = `mongodb+srv://${config.dbuser}:${config.password}@cluster0.spwi7hf.mongodb.net/${config.dbname}?retryWrites=true&w=majority`
mongoose.connect(dbstring)
.then(res=>console.log("DATABASE connected"))
.catch(error=>errorHandler);


//READ
app.get("/data", (req, res)=>{
    Hero.find().then(dbres=>res.json(dbres))
});
// setTimeout(function(){

//     let hero = new Hero({
//         title : "Superman",
//         firstname : "abc",
//         lastname : "pqr"
//     })
//     hero.save().then(console.log("connected"))
// },2000);
//CREATE

app.post("/data", (req, res)=>{
    let hero = new Hero(req.body);
    console.log(req.body);
    hero.save()
    .then(dbres=>{
        res.send({ message : "hero added to list"})
        console.log("db updated")
    })
    .catch(err=>errorHandler);
});


// //UPDATE
app.post("/update/:hid", (req,res)=>{
    Hero.findByIdAndUpdate({_id : req.params.hid})
     .then(dbRes=>{
        dbres.title=req.body.title;
        dbres.firstname=req.body.firstname;
        dbres.lastname=req.body.lastname;
             dbRes.save().then(updateRes=>res.send({message:"hero info updated"}))    
})
      .catch(error=>errorHandler);  
});

//DELETE
//app.delete()==app.get()
app.delete("/delete/:hid",(req,res)=>{
    Hero.findByIdAndDelete({_id : req.params.hid}).then(dbRes => res.send({message : "hero deleted", hero : dbRes.title}))
});

//Read update

app.get("/edit/:heroid", (req, res)=>{
    Hero.findById({ _id : req.params.heroid }).then(dbres => {
        res.send(dbres)
    })
})


app.listen(port, config.host, errorHandler);
console.log(`server is ready on ${config.host}:${port}`);