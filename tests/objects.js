//object is collection of properties
const people = require("./class")
let person={
    firstName:'Tim',
    lastName:'Joe',
    fullname :function(){
    console.log(this.firstName+this.lastName)
    }    
}
person.age=30
console.log(person)
console.log(person.fullname())
console.log(person.lastName)
console.log(person['lastName'])

console.log(person)
console.log(person.firstName='Steve')
console.log(person['firstName'])
console.log(person.firstName)
person.gender='Male'
console.log(person)
delete person.gender

console.log(('age' in person),('gender' in person))

for(let key in person){
    console.log(person[key])
}

let new_class=new people("Swapna",25,)

