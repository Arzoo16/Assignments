var numbers=[2,6,4,8,9,7,0,1];
const fs = require('fs');
var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)
prompts.question("enter the number :",function(number){
if(numbers.includes(number))
{
    console.log("Value present");
    
}
else
{
    console.log("Value not present");
    
}
process.exit();
});
