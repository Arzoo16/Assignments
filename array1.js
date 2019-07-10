var array= [0, 15, false, -22, '',undefined, 47, null];
var unwanted=['null', '0', '""', 'false', 'undefined'];

var newArray=[];
for(var i=0;i<array.length;i++)
{
if(array[i]!==null && array[i]!==0 && array[i]!=='' && array[i]!==false && array[i]!==undefined)
{
    newArray.push(array[i]);
}

}
console.log(newArray);