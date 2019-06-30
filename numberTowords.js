var arr1=[" ","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var arr2=[" "," ","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
var th=[" ","thousand","million","billion","trillion","quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion","Undecillion","Duodecillion","Tredecillion","Quattuordecillion","Quindecillion","Sexdecillion","Septendecillion","Octodecillion","Novemdecillion","Vigintillion","Centillion"];
//var num='123456789';
var i=0;
var arr=[];
var no=[];
var n=[];
var index=0




    

function reverseString(num) {                //to reverse the string
    return num.split("").reverse().join("");
}
num=reverseString('121111132148256372312717687512400');

console.log(num); // print reverse string
while(num.length!=0) // to break the string into chunks
{
    var no=num.substring(0,3);
    var num=num.substring(3);
    console.log(no);
    arr.push(no);

}
console.log(arr); //to print the array in which chunks are stored
for(i=0;i<arr.length;i++) // the part of code to take each value of array and print its reverse for correct output
{
n=reverseString(arr[i]);

console.log(th[i]);

console.log(toHundred(n)); 

 //print array to append the value of number eg. thousand,billion etc
}
function toHundred(n)
{

    var h = parseInt(n/100)
    var H = arr1[h]
    console.log(H+"Hundred");
    var Ts = n%100          //100 val
    if(Ts<=19)
    {
        console.log(arr1[Ts])
    }
    else
    {
        tt = parseInt(Ts/10)
        dd = Ts%10
        console.log(arr2[tt]+arr1[dd])
    }

    
     if (n<=19)
    {
    console.log(arr1[n]);
    }
    
    if(n>19 && n<100)              //for 2 digit
    {
    var d = n%10;
    var t = parseInt(n/10);
    console.log(arr2[t]+arr1[d]);
    }
    
}   
    
       /*if(n>=100 && n<1000)         //for 3digit //not used now
    {
        console.log(toHundred(num));
    }
    
    if(n>=1000 && n<10000)
    {
        var th = parseInt(n/1000)
        var k = n%1000
        console.log(arr1[th]+"Thousand");
        console.log(hundred(n));
    }*
    
}*/



    
