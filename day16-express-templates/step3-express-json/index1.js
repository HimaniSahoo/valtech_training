const express = require("express");
const path = require("path")

let app  = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// app.get("/", (req, res)=>{
//        res.sendFile(__dirname+"/public/index.html");
// });
 app.post("/", (req,res)=>{
       console.log(req.body); 
       res.end();
 })
app.listen(5050,"localhost",function(error){
    if(error){
        console.log("error", error)
    }else{
        console.log("The server is live now on localhost")
    }
})