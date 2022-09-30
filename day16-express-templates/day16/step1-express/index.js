const express = require("express");
let app = express();
// $env:PORT=5000
// set PORT=5000
// export PORT=5000
var port = process.env.PORT || 5050;
console.log(port);
// var server = app.listen(port,"localhost",function(error){
// routes  
app.get("/", (req, res)=>{
     // res.sendFile(__dirname+"/public/index.html");
    // res.render("index.ejs", {
    //     compname : "Valtech",
    //     message : "Welcome to your life"
    // });
    res.render("index.pug", {
        compname : "Valtech",
        message : "Welcome to your life"
    });
});

// app.get("/about", (req, res)=>{
//     res.render("about.ejs",{
//         compname : "Valtech"
//     });
// });
app.get("/about", (req, res)=>{
    res.render("about.pug",{
        compname : "Valtech"
    });
});
app.get("/contact", (req, res)=>{
    //res.sendFile(__dirname+"/public/contact.html");
    // res.render("contact.ejs",{
    //     compname : "Valtech"
    // });
    res.render("contact.pug",{
        compname : "Valtech"
    });
});
 
 
app.listen(port,"localhost",function(error){
    if(error){
        console.log("Error ", error)
    }else{
        // console.log("server is now live on localhost : ",server.address().port );
        console.log(`server is now live on localhost : ${port} `);
    }
});