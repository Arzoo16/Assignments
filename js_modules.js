 var result = {
    "status" : [],
    "error"  : [],
    "output" : [],
    "input" : []
}                                                                 

module.exports=
{
 addFunction : function(a,b)
{

    result.status.pop()
    result.error.pop()
    result.output.pop()
    result.input.pop()
    result.input.pop()



    if(isNaN(a) || isNaN(b))
    {
        result.status.push(" not okay");
        result.error.push("500,Not a number");
        result.input.push(a,b);

      
    }
   else
   {
       var add= a+b;
       result.status.push("okay");
       result.input.push(a,b);
       result.output.push(add);
      
         
   }
   return result;
   
   
},
squareFunction :function(a)
{

    result.status.pop()
    result.error.pop()
    result.output.pop()
    result.input.pop()


    if(isNaN(a))
    {
        result.status.push(" not okay");
        result.error.push("500,Not a number");
        result.input.push(a);
        
    }
   else
   {
       var square= a * a;
       result.status.push("okay");
       result.input.push(a);
       result.output.push(square);
       
      
   }
    return result;
},
multiFunction :function(a,b)
{
    
    result.status.pop()
    result.error.pop()
    result.output.pop()
    result.input.pop()
    result.input.pop()



    if(isNaN(a) || isNaN(b))
    {
        result.status.push(" not okay");
        result.error.push("500,Not a number");
        result.input.push(a,b);
        
    }
   else
   {
       var multi= a*b;
       result.status.push("okay");
       result.input.push(a,b);
       result.output.push(multi);
       
      
   }
   return result;
},
powerFunction : function(a,b)
{

    result.status.pop()
    result.error.pop()
    result.output.pop()
    result.input.pop()
    result.input.pop()




    if(isNaN(a) || isNaN(b))
    {
        result.status.push(" not okay");
        result.error.push("500,Not a number");
        result.input.push(a,b);
        
    }
   else
   {
       var power= a ** b;
       result.status.push("okay");
       result.input.push(a,b);
       result.output.push(power);
       
      
   }


},
squareRootFunction : function(a)
{

    result.status.pop()
    result.error.pop()
    result.output.pop()
    result.input.pop()


    if(isNaN(a))
    {
        result.status.push(" not okay");
        result.error.push("500,Not a number");
        result.input.push(a);
        
    }
   else
   {
       var sqrt= a **(0.5);
       result.status.push("okay");
       result.input.push(a);
       result.output.push(sqrt);
       
      
   }
    return result;
}

}

