const express = require("express")

let app = express();

app.get("/", (req,res)=>{
    res.render("home.pug", {
        company : "Valtech"
    })
})
app.get("/login", (req,res)=>{
    res.render("login.pug")
    
})
app.get("/register", (req,res)=>{
    res.render("register.pug")
    
})
app.get("/profile", (req,res)=>{
    res.render("profile.pug")
    
})
app.get("/logout", (req,res)=>{
    res.redirect("/")
    
})
app.listen(2520,"localhost",function(error){
    if(error){
        console.log("Error",error)
    }else{
        console.log("server is ready now on 2520")
    }
})