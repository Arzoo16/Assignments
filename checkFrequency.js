function checkFrequency()
{

    
    var i,cnt,n;
    var count=[];
   var num = document.getElementById("num").value
   
   for(i=0;i<10;i++)
   {
       count[i]=0;
   }


   //n=num;
   while(num!=0)
   {
       cnt=num%10;
       
       num/=10;
       count[cnt] +=1;
   }
   //var out = ""
    for(i=0;i<10;i++)
    {   
    document.getElementById("demo"+i).innerHTML="occurences of digits:- "+i+"is"+count[i];
   
    }
    
}

