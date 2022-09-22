import Person from "./modules/person.js";

class Hero extends Person{
    title = "default title";
    firstname = "default firstname";
    lastname = "default lastname";
    #mission = "my secret mission";   //# is used to indicate private property
    static version = 10001;
    constructor(htitle,fname,lname,hname){
        super(hname);
        this.title = htitle;
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname(){
        return this.first+" "+this.lastname;
    }
    static saypower(){
        return 7;
    }
    get mission(){
        return this.#mission;
    }
    set mission(mission){
        this.#mission = nmission;
    }
    sayname(){
        return this.name;
    }
};

export default Hero;