const http = require("http");
const fs = require("fs");

let server = http.createServer((req,res)=>{
    if(req.url === "/" || req.url=== "/index.html"){
        let htmlcontent = fs.readFileSync("./index.html","utf-8");
        res.writeHead(200,{
            "Content-Type" : "text/html"
        });
        res.write(htmlcontent);
        res.end(); 
    }else if(req.url === "/about.html"){
        let htmlcontent = fs.readFileSync("./about.html","utf-8");
        res.writeHead(200,{
            "Content-Type" : "text/html"
        });
        res.write(htmlcontent);
        res.end(); 
    }else if(req.url === "/contact.html"){
        let htmlcontent = fs.readFileSync("./contact.html","utf-8");
        res.writeHead(200,{
            "Content-Type" : "text/html"
        });
        res.write(htmlcontent);
        res.end(); 
    }else{
        res.writeHead(404,{
            "Content-Type" : "text/plain"
        });
        res.write("404 Error: The server not found");
        res.end(); 
    }
});

server.listen(2020,"localhost", function(error){
    if(error){
        console.log("error",error)
    }
})