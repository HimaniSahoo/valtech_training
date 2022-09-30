const fetch = require("fetch");
const fs = require("fs");
fetch.fetchUrl("https://www.valtech.com",function(error,meta,data){
    if(error){
        console.log("error", error)
    }else{
        fs.writeFileSync("temp/temp.html",data,"utf-8");
    }
})