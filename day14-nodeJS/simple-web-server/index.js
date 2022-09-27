const http = require("http");
let server = http.createServer(function(req,res){
    res.write("hello welcome to my server");
    res.end();
});

server.listen(1010,"localhost", function(error){
    if(error){
        console.log("error",error)
    }else{
        console.log("server is now live in localhost:1010-")
    }
})

