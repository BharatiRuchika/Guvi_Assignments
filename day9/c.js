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
//  console.log(data);
//  array1.forEach(element => console.lfog(element));
 data.forEach(item =>
    console.log(item.name,item.capital,item.flag)

    )
data.forEach(function(item){
        console.log(item.name);
        console.log(item.capital);
        console.log(item.flag);
      })
   
}