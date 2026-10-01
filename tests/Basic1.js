/*//import { test,expect } from "@playwright/test"

console.log("hello world")
let a=4
let b= 20.76
//let c='Swapna'
let c=a+b
let required=true
console.log(typeof(a),",",typeof(b),",",typeof(c),",",typeof(required))

const flag= true // cant change flag value as its declared as const

if(!flag)// value is still not change just negation is applied
{
    console.log("condition statisfied")
}
else{
    console.log(flag)
    console.log("condition not statisfied")
}
// comments
/*
abc
dcgs*/
//variables are loosely typed---var can hold any type of data---
//var,(let,const---ES6 engine)--explore---ITS CALLED AS IDENTIFIERS
//var have smart intelligence- at runtime decide tyoe of the variable

//we cant redeclare variable with let keyword but with var its possible
//reassigning is allowed with LET not redeclare
//rassigning and redeclaring both are allowed with VAR identifier

//loops
/*let i=0
while(i<10){
    i++
    console.log(i)
}

do{
   i++
   console.log(i) 
}while(i<10);

for(let k=0;k<=7;k++)
{
    console.log(k)
}
*/


console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")
//from 1 to 10 find common multiple values for 2 and 3
let n=0 
for (let k=1;k<=100;k++)
 {
    
    if(k%2==0 && k%5==0)
        n++
    console.log(k)
    if(n==3)
    break
 }



