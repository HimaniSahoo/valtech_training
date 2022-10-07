"use strict";
// let message:string = "welcome everyone to valtech india";
// alert(message);
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Hero_mission;
//let users:Number = 123;
// let users:string[] = ["valtech"];
// alert(users);
// let user:Array<string> = ["valtech india"]
// alert(user);
//let hero:(number | Array<string | number>)= ["ironman",234];
// function adder(num1:number, num2:number):string{
//     return "total is"+ num1 + num2;
// }
function adder(num1, num2, num3) {
    return "total is" + num1 + num2;
}
class Person {
    constructor(name) {
        this.name = name;
        // this.name = hname;
    }
    canWalk() {
        return "I can walk";
    }
}
class Hero extends Person {
    constructor(title, firstname, lastname, name) {
        super(name);
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        // title = "default title";
        // firstname = "default firstname";
        // lastname = "default lastname";
        _Hero_mission.set(this, "my secret mission"); //# is used to indicate private property
        // this.title = htitle;
        // this.firstname = fname;
        // this.lastname = lname;
    }
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    static saypower() {
        return 7;
    }
    get mission() {
        return __classPrivateFieldGet(this, _Hero_mission, "f");
    }
    set mission(mission) {
        __classPrivateFieldSet(this, _Hero_mission, mission, "f");
    }
    sayname() {
        return this.name;
    }
}
_Hero_mission = new WeakMap();
Hero.version = 10001;
;
