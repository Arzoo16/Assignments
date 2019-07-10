   
    var number='2038';
    num = ('' + number).split('').map(function(digit)  {return +digit;});
    var newArray=[];
    newArray.push(num[0]);
    for(var i=0;i<num.length;i++)
    {
    if( (num[i]%2==0 || num[i]==0) &&  (num[i+1]%2==0 || num[i+1]==0))
    {
        
      newArray.push('-');
      newArray.push(num[i+1]);

    }
    else{
        
        newArray.push(num[i+1]);
    }
    }
    var array2=[];
    array2=newArray.join("");   
    console.log(array2);
    

