function checkCount()
{
    
    var cnt=0;
    var c = document.getElementById("c").value
    while(c>0)
    {
        c=parseInt(c/10);
        cnt++;
    }
    document.getElementById("demo").innerHTML="digit count is :-"+cnt;

}
