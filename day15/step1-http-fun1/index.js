const http = require("http");
const fs = require("fs");
let compname = "valtech";
let server = http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        res.write();
        res.end(); 
    }else if(req.url == "/"){
        let htmlcontent = fs.readFileSync("./index.html","utf-8");
        res.writeHead(200,{
            "Content-Type" : "text/html"
        });
        res.write(htmlcontent.replace("{compname}", compname).replace("{compname}", compname));
        res.end(); 
    }
    else{
        fs.readFile("./"+req.url,"utf-8", (error, data)=>{
        if(error){
            res.writeHead(404,{"Content-Type" : "text/html"});
            res.end("<h1> 404 : not Found </h1>")
         }else{
             res.writeHead(200,{"Content-Type" : "text/html"});
             res.write(data.replace("{compname}", compname).replace("{compname}", compname))
            //  data.replace("{compname}", compname).replace("{compname}", compname)
             res.end();
         }
        })
    }
})

server.listen(2010,"localhost", function(error){
    if(error){
        console.log("error",error);
    }
    else{
        console.log("server is running")
    }
});
