const EventEmitter = require("events").EventEmitter;
let myEvent = new EventEmitter();
myEvent.addListener("valtech", function(){
    console.log("valtech event has happened")
});
var count = 0;
let valtechHandler
setInterval(function(){
    myEvent.emit("valtech");
    count = count+1;
    if(count<5){
        myEvent.removeListener("valtech",valtechHandler)
    }
},1000)