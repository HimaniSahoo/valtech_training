const EventEmitter = require("events").EventEmitter;
let myEvent = new EventEmitter();
myEvent.addListener("valtech", function(){
    console.log("valtech event has happened")
});
setTimeout(function(){
    myEvent.emit("valtech")
},2000)

