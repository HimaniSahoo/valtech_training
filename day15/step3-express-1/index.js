const express = require("express")
let app = express(); //app is a server
//route
app.get("/", (req,res)=>{
    res.write("hello from express");
    res.end();
})
let loc = app.listen(3031,"localhost", function(err){
    if(err) console.log("error",err)
    console.log(loc.address());
});
console.log("web server is now live")