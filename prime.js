var arr = [-2, 3, 4, 5, 6, 7];
var num;
arr = arr.filter(function(num){
for (var i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) 
return false;
}
return true;
});
 console.log(arr);