var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var ordinal = ["st","nd","rd","th"];
var indexc=0;
var count;

for(i=0, count=1; indexc<color.length; i++, indexc++, count++)
{
   
   
   if(count>3)
   {
    console.log(count + ordinal[3]+" choice is "+ color[i]);
   }
   else{
   console.log(count + ordinal[i]+" choice is "+ color[i]);
   }
   
}
