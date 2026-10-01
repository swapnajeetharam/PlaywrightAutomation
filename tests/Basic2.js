var marks=Array(6)
var marks=new Array(1,2,5,6,7,54)

/*var marks=[1,5,7,5]
console.log(marks)
console.log(typeof(marks))

console.log(marks[3])
marks[3]=16
console.log(marks)
console.log(marks.length)
//update an array,towards the last
marks.push(20)
console.log(marks)
marks.pop()//delete from last
console.log(marks)
marks.unshift(19)
console.log(marks)
console.log(marks.indexOf(16))
console.log(marks.includes(7))*/
sum=0
let totalMarks=marks.reduce((sum,marks)=>sum+marks,0) //another way of writing sum of arra
for(let i=0;i<marks.length;i++){
    //console.log(marks[i])
    sum=sum+marks[i]
    console.log(marks[i])    
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(sum,totalMarks) 

var scores=[12,13,14,16]
//create a new array with even numbers of scores array
var new_scores=[]
for(let i=0;i<scores.length;i++){
    if(scores[i]%2==0){
        new_scores.push(scores[i])
    }
}

evennum=scores.filter(scores=>scores%2==0)
console.log("even number array ",evennum) 

scores.evennumber

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fruits=["banana","apple","grapes","orange"]
fruits.sort()
console.log(fruits)

var scores1=[12,3,19,16,14]

console.log(scores1.sort(),typeof(scores1))

console.log(scores1.sort((a,b)=>a-b))




