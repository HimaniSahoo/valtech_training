// let message:string = "welcome everyone to valtech india";
// alert(message);

//let users:Number = 123;

// let users:string[] = ["valtech"];
// alert(users);

// let user:Array<string> = ["valtech india"]
// alert(user);

//let hero:(number | Array<string | number>)= ["ironman",234];

// function adder(num1:number, num2:number):string{
//     return "total is"+ num1 + num2;
// }

function adder(num1:number, num2:number, num3?:number):string{
    return "total is"+ num1 + num2;
}

// class Person{
//     name:string;
//     constructor(hname:string){
//         this.name = hname;
//     }
//     canWalk(){
//         return "I can walk";
//     }
   
// }

interface IPerson{
    name:string;
    canWalk():string;
}
class Person implements IPerson{
    constructor(public name:string){
        // this.name = hname;
    }
    canWalk(){
        return "I can walk";
    }
   
}

interface IHero{
    title:string;
    firstname:string;
    lastname:string;
    name:string;
    fullname():string;
    sayname():string;


}

class Hero extends Person implements IHero{
    // title = "default title";
    // firstname = "default firstname";
    // lastname = "default lastname";
    #mission = "my secret mission";   //# is used to indicate private property
    static version = 10001;
    constructor(
        public title:string,
        public firstname:string,
        public lastname:string, 
        name:string){
        super(name);
        // this.title = htitle;
        // this.firstname = fname;
        // this.lastname = lname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    static saypower(){
        return 7;
    }
    get mission(){
        return this.#mission;
    }
    set mission(mission){
        this.#mission = mission;
    }
    sayname(){
        return this.name;
    }
};




