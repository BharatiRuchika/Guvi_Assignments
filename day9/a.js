var url="https://restcountries.eu/rest/v2/all";
var xhr = new XMLHttpRequest();
xhr.open("GET",url);
xhr.onload = function(){
    var data = JSON.parse(this.response);
    console.log("data",data);
    foo(data);
}
xhr.onerror = function(){
    console.log("error",this.statusText);
}
xhr.send();
function foo(data){
    console.log("function call");
  console.log(data);
  for(var i=0;i<data.length;i++){
      if(data[i].region=="Asia"){
          console.log(data[i].name);
      }
  }
}