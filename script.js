var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    var i;
    
for(i=0;i<data.length;i++)

{

   
 var completeurl='http://api.openweathermap.org/data/2.5/weather?lat='+data[i].latlng[0]+'&lon='+data[i].latlng[1]+'&appid=f78b82b68336b1ac9b876f11d1e28963';
var tem=function()
{var request= new XMLHttpRequest();
    request.open('GET',completeurl,true);
    request.send();
    request.onload=function(){
        var wedata=JSON.parse(this.response);
        console.log(wedata.coord,'TEMP is '+wedata.main.temp);
       
      
}
}
tem();
} 
}

