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
// function foo(data){
//   console.log(data);
//  var arr = data.filter(countries)
// function countries(data){
//    return data.population<200000;
// }
// console.log("arr:"+arr);
// }
// smallvalues = a.filter(function(x) { return x < 3 });  
function foo(data){
    console.log(data);
    
//    var countryPopulation =  data.filter(function(x) {
//         return x;

    // });
    // {data.map(datas)=>{
    //     <h4>datas.</h4>
    // }}
     
    //  console.log("arr:"+countryPopulation);
     }