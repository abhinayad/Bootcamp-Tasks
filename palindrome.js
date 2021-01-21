var arr = ['ars', 'cac', 'mom', 'dad',123,121];
var pali= function(words){
    
 var p=words.split("").reverse().join("");
  if(p==words)
  {
console.log(words);
}
else 
return false;

}
for(var i=0;i<arr.length;i++)
{
pali(arr[i]);
}


