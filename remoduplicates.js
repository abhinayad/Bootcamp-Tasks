var arr=[1,2,3,4,1,2,5,4];

var sortarr= function()
{
let sar=[...new Set(arr)];
return sar;

}();
console.log(sortarr);