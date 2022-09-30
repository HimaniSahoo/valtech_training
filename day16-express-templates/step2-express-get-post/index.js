const express = require("express");

let app = express();

app.use(express.urlencoded({ extended : true }));
let herolist = [];

app.get("/", (req, res)=>{
    res.render("home.ejs",{
        compname : "Valtech",
        herolist
    });
});

app.post("/", (req, res)=>{
    herolist.push(req.body.nhero);
    res.redirect("/");
    res.end();
})

app.listen(5050,"localhost",(err)=>{
    if(err){
        console.log("error", err)
    }else{
        console.log("The server is live now on localhost")
    }
})