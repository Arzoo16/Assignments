//const map1=new Map();


var freqMap = {};
var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)
prompts.question("enter the string :\n",function(word){

  var words = word.replace(/[.]\S/g, '').split(/\s/);  
  console.log(words);
var freq=wordFreq(words);
function wordFreq(words) {
words.forEach(function(w)
{
    if(!freqMap[w])
    {
      freqMap[w]=0;
    }
    freqMap[w]+=1;
  });
  return freqMap;
}
Object.keys(freq).forEach(function(word) {
  console.log("count of " + word + " is " + freq[word]);
});
process.exit();
});
