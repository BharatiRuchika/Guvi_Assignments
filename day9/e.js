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
    console.log(data);
    var country = data.filter(function(item){
      if(item.currencies[0].symbol=="$"){
          return item.currencies;
      }
    })
    console.log(country);
    // data.forEach(function(item){
    //     console.log(item.currencies[0].symbol);
    // })
}
