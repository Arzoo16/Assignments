function checkPerfect()
{
    document.getElementById("demo").innerHTML="given is perfect number:-";

    var sum=0;
    var i=1;
   var num = document.getElementById("num").value
   
    for(i=1;i<=(num/2);i++)
    {
        if(num%i==0)
        {
            sum=sum+i;
        }
        
    }
    if(sum==num)
    {
        
    document.getElementById("demo").innerHTML="given is perfect number:-"+num;
    }
    else{
        document.getElementById("demo").innerHTML="given is not perfect number:-"+num;
       
    }
}
checkPerfect()
