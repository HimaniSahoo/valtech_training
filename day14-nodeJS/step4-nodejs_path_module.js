var path = require("path");
//console.log("C:\Valtech_Training\day14-nodeJS\step4-nodejs_path_module.js");

//console.log(path.resolve("C://Valtech_Training/day14-nodeJS/step4-nodejs_path_module.js"));

/*
var list = ["users"];
var files = ["index.html"]
console.log(path.join(list[0], files[0]));
*/

var list = ["users","admin","guest"];
var files = ["index.html","detail.html","profile.html"]
console.log(path.join(list[Math.floor(Math.random() *list.length)], files[Math.floor(Math.random() *files.length)])); //this must be used
console.log(path.join(list[Math.round(Math.random() *list.length)], files[Math.round(Math.random() *files.length)]));