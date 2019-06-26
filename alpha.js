function check()
{
    var c = document.getElementById("c").value
    if(c>='a' && c<='z')
    {
    document.getElementById("demo").innerHTML="Character is an aplhabet";
    }
    else{
        document.getElementById("demo").innerHTML="Character is not an aplhabet";
    }

}
