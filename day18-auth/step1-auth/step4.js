const express = require("express")
const mongoose = require("mongoose")
const session = require("client-sessions")

let app = express();
app.use(express.urlencoded({extended : true }))

app.use( session({
    cookieName : "valtech",
    secret : "345467dftfhgykiu8iuhjkgfrtr34ghj",
    duration : 30 * 60 * 1000,
    activeDuration : 10 * 60 * 1000,
    cookie : {
        ephemeral : true
    }
}))

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model("User", new Schema({
    id : ObjectId,
    firstname : String,
    lastname : String,
    email : {type : String, unique : true},
    password : String

}))

let dburl = "mongodb+srv://admin:5oXkRjuFpzLeBGib@cluster0.spwi7hf.mongodb.net/valtechdb?retryWrites=true&w=majority"
mongoose.connect(dburl)
.then(res=> console.log("DB connected"))
.catch(error=> console.log("Error", error))

app.get("/", (req,res)=>{
    res.render("home.pug", {
        company : "Valtech"
    })
})

app.get("/login", (req,res)=>{
    res.render("login.pug")
})

app.post("/login", (req,res)=>{
    User.findOne({ email : req.body.email}, function(error, user){
        if(!user){
            res.render("login.pug",{
                error : "no user by that credentials"
            })

        }else{
            if(req.body.password === user.password){
                req.valtech.user = user;
                res.redirect("/profile");
            }else{
                res.render("login.pug",{
                    error : "invalid email or password"
                })
            }
        }
    })
    
})
app.get("/register", (req,res)=>{
    res.render("register.pug")
})
app.post("/register", (req,res)=>{
    var user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password
    });

    user.save(function(error){
        let clienterror = "";
        if(error){
            if(error.code == 11000){
                clienterror = "email id already registered"
            }else{
                clienterror ="something went wrong"

            }
            res.render("register.pug", { clienterror })
        }else{
            res.redirect("/profile")
            console.log("user registered")
        }
    })
    
})

app.get("/profile", (req,res)=>{
    if(req.valtech && req.valtech.user){
        User.findOne({email : req.valtech.user.email}, function(err, user){
            if(!user){
                req.valtech.reset();
                res.redirect("/login");
            }else{
                res.render("profile.pug");
            }
        })
    }else{
        res.redirect("/login");
    }
    
    
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