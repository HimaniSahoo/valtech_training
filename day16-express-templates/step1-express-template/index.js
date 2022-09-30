// const express = require("express");

// let app = express();

// var server = app.listen();

// var port = process.env.PORT || 6001;
// //$env:PORT=5000 //for powershell 
// //set PORT=5000
// //export PORT=5000

// console.log(port);

// // app.get("/", (req, res)=>{
// //     res.sendFile(__dirname+"/public/index.html");
// // });
// // app.get("/about", (req, res)=>{
// //     res.sendFile(__dirname+"/public/about.html");
// // });
// // app.get("/contact", (req, res)=>{
// //     res.sendFile(__dirname+"/public/contact.html");
// // });


// app.listen(port,"localhost",function(error){
//     if(error){
//         console.log("Error",error);
//     }else{
//         console.log(`server is now live on localhost: ${port}`);
//     }
// })

//console.log("server is live now" ,server.address().port);

const express = require("express");
let app = express();
// $env:PORT=5000
// set PORT=5000
// export PORT=5000
var port = process.env.PORT || 6000;
console.log(port);
// var server = app.listen(port,"localhost",function(error){
// routes  
app.get("/", (req, res)=>{
    // res.sendFile(__dirname+"/public/index.html");
    res.render("index.ejs", {
        compname : "Valtech"
    })
});
app.get("/about", (req, res)=>{
    // res.sendFile(__dirname+"/public/about.html");
    res.render("index.ejs", {
        compname : "Valtech",
        message
    })
});
app.get("/contact", (req, res)=>{
//     res.sendFile(__dirname+"/public/contact.html");
    res.render("index.ejs", {
        compname : "Valtech"
    })
});
 
 
app.listen(port,"localhost",function(error){
    if(error){
        console.log("Error ", error)
    }else{
        // console.log("server is now live on localhost : ",server.address().port );
        console.log(`server is now live on localhost : ${port} `);
    }
});