const map1=new Map();

const fs = require('fs');
const path="./files/";
var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)
prompts.question("enter the book name to search :",function(name){
var key=fs.readdirSync(path);
    
for(i=0;i<key.length;i++)
{
    map1.set(key[i],1);
}

if(map1.has(name.toString()+".txt")){
console.log("\nbook is present..");
}
else{
    console.log("\nnot present");
    createbook();
    function createbook()
{
    
    fs.writeFileSync(path+name+".txt","") 
    console.log("\nFile Created !! \n")   
}
}
console.log("Files present in the directory "+path+": \n")
console.log(map1.keys())
console.log(map1)

});

