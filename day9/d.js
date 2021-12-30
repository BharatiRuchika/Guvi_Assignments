var url="https://restcountries.eu/rest/v2/all";
var xhr = new XMLHttpRequest();
xhr.open("GET",url);
xhr.onload = function(){
    var data = JSON.parse(this.response);
    foo(data);
}
xhr.onerror = function(){
    console.log("error",this.statusText);
}
xhr.send();
function foo(data){
   let initialValue = 0;
   data.forEach(item=>console.log(item.population));
    let sum = data.reduce(function(prev,next){
        return prev + next.population;
    },initialValue);
    console.log(sum);
}






 
 
 