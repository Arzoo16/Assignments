var arr1=[" ","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var arr2=[" "," ","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
var th=[" ","thousand","million","billion","trillion","quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion","Undecillion","Duodecillion","Tredecillion","Quattuordecillion","Quindecillion","Sexdecillion","Septendecillion","Octodecillion","Novemdecillion","Vigintillion","Centillion"];
//var num='123456789';
var i=0;
var arr=[];
var no=[];
var n=[];
var index=0
var k=[];


function reverseString(num) {                //to reverse the string
    return num.toString().split("").reverse().join("");
}
num=reverseString('7869');

//console.log(num); // print reverse string
while(num.length!=0) // to break the string into chunks
{
    var no=num.substring(0,3);
    var num=num.substring(3);
    //console.log(no);
    arr.push(no);

}
console.log(arr); //to print the array in which chunks are stored
var rev=arr.reverse();
//console.log(rev);
for(i=0;i<arr.length;i++) // the part of code to take each value of array and print its reverse for correct output
{
//var k=reverseString(arr[i]);
//console.log(k);

var k=reverseString(arr[i]);
var z = arr.length


console.log(toHundred(k));
console.log(th[z-i-1]); //print array to append the value of number eg. thousand,billion etc

}
function toHundred(k)
{

    var h = parseInt(k/100)
    var H = arr1[h]
    if(h!=0){
    console.log(H+"Hundred");}
    var Ts = k%100          //100 val
    if(Ts<=19)
    {
        console.log(arr1[Ts])
    }
    else
    {
        tt = parseInt(Ts/10)
        dd = Ts%10
        console.log(arr2[tt] + arr1[dd])
    }

    
     if (k<=19)
    {
        if(k==0)
        {
            console.log("zero");
        }
    //console.log(arr1[k]);
    }
    
    if(k>19 && k<100)              //for 2 digit
    {
    var d = k%10;
    var t = parseInt(k/10);
    //console.log(arr2[t]+arr1[d]);
    }
}
  
    



    
