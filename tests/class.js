//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//classes
module.exports = class people
{
    age=30///class variable , do not change
    location='Mysuru' //1 way to define
    get location(){   //2nd way---called properties
        return "Dwaraka"
    }
    //constructor is a method which excetues by default
    //  when a new object is created
    constructor(firstName,lastname){
        this.firstName=firstName
        this.lastName=lastname
    }
    //method
    fullName(){
       console.log(this.firstName+this.lastName) 

    }
}

let people_one=new people("Ram","Sita")
console.log(people_one.location)
console.log(people_one.age)
console.log(people_one.fullName())

let people=new people("Shiv","Shakti")
console.log(people.fullName())