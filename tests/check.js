let name='sw apna '
let name_split=name.split("a")
space_trim=name_split[2].trim()
console.log(space_trim.length)
//console.log(name_split)

for(let i=0; i<name_split.length;i++){
console.log(i,name_split[i])
res=name_split[i].trim()
console.log(res)
}

let date=23
let nextdate=100
let diff=nextdate-date
console.log(diff)

//parseint or toString or indexof

let person={
    firstName:'Tim',
    lastName:'Joe',
    fullname :function(){
       console.log(this.firstName+this.lastName)
    }    
}

for(let key in person){
    console.log(person[key])
}