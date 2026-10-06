//swapna jeetharam is an employee of PwC- ram'
var name='swapna jeetharam is a an employee of PwC ram'
var first_char=name[0]

/*var split_name=name.split("a")
console.log(split_name,split_name[2].trim().length)
console.log(first_char,split_name)
console.log(name.length)
console.log(name.slice(0,5))

for (let i = 0; i < split_name.length; i++) {
    if (split_name[i] == "") {
        continue;
    } else {
        console.log(split_name[i]);
    }
}*/

let res1=name.indexOf("ram")
console.log(res1)

let count=0
while(res1!==-1){
    count++
    res2 =name.indexOf("ram",(res2+1)) 
    console.log(res2)   
}
console.log(count)



