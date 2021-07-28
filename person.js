class Perople{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    getData(){
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}
// want to export this module or obj to andother class
module.exports=Perople;