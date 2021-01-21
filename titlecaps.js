let str="hEllO gUvI";

    str=str.toLowerCase().split(' ');
    let title=function ()
{for(i in str)
{
   str[i]=str[i].charAt(0).toUpperCase() +str[i].slice(1); 
}
 console.log(str.join(' '));
}

title();
