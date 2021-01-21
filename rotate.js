var num=[1,2,3,4];
var k=2;
var rotate= function()
{
let i=0;
while(i<k)
{
    num.unshift(num.pop());
    i++;
}
console.log(num);
}
rotate(num,k);