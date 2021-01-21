var arr=[1,2,3,4,1,2,5,4];
var sum=0;

var sumarr= function()
{
for(var i=0;i<arr.length;i++)
{
    sum=sum + parseInt(arr[i]);
   
}
console.log(sum);
}

sumarr(arr);