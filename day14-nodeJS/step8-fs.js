const fs = require("fs");
//syncronous file
//fs.writeFileSync("temp.txt","welcome to your life and enjoy","utf-8");

//asynchronous file
/*
fs.writeFile("temp.txt","welcome to your life and enjoy","utf-8", function(error, data){
    if(error){
        console.log("Error",error)
    }else{
        console.log("file created")
    }
});
*/
 //syncronous read file
 //fs.readFileSync("temp.txt","utf-8");

 //asynchronous read file
 /*
 fs.readFile("temp.txt","utf-8", function(error, data){
    if(error){
        console.log("Error",error);
    }else{
        console.log(data);
    }
});
*/
fs.watchFile("temp.txt",function(){
    console.log("file updated")
})
setInterval(function(){
    fs.appendFile("temp.txt","\nhello","utf-8", function(err, data){
        if(err){
            console.log("error", err)
        }else{
            console.log("content is added");
        }
    });
},2000)

