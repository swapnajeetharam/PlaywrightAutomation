/*var scores1=[12,3,19,16,14]
console.log(scores1.sort())
console.log(scores1.sort(),typeof(scores1))
res=scores1.sort(function(a,b){
    return(a-b)
})
console.log(res)
console.log(scores1.sort((a,b)=>a-b))*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*Functions:-block of code- to perform particular task.
             Functions are executed when they are called or invoked
             Parameters allow you to send values to a function
             Parameters are listed in parentheses in the function definition
             Function parameters and arguments are distinct concepts
             Parameters are the names listed in the function definition
             Arguments are the values received by the function
Function Expressions
A function expression is a function stored in a variable
The variable name can be used to call the function

Arrow Functions is a short syntax for function expressions
You can skip the function keyword
You can skip the return keyword
You can skip the curly brackets

2 types of functions:
1. Named function
2. Anonymous function

anonymous function: do not have function name
*/


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function add(a,b)
{
    return a+b
}
const res1=(a,b)=>a+b//anonymous function, a,b parameters of the function
//let res=(add(5,6))
console.log(add(5,6))
console.log(res1(5,6))

//++++++++++++++++++++++++++++++++++++++++++++++*/

//block of code
//var=global level/functional
//let=global level/block level, cant be reintialized

var greet="morning"
  greet="after noon"
  if(1==1){
    let greet="evening"
  }
  function add(a,b){
    let greet="night"
    console.log(greet)
    return ((a+b))
  }
  console.log(greet)
  console.log(add(6,6))
