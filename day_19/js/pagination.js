var xhr = new XMLHttpRequest();
xhr.open('GET',"https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",true);
xhr.send();

var udata;

xhr.onload = function() 
{
    if(this.status == 200) 
    {
        var userdata = JSON.parse(this.responseText);
        console.log(userdata);
        udata = userdata;
        data(1);
    }
}
const cont = document.getElementById("container");
const ul = document.createElement("ul");
// ul.setAttribute("id",theList);
var start_page = 1;
var records_per_page = 10;
// pageLoad(start_page,records_per_page);
// function pageLoad(start_page,records_per_page){
const elem = document.createElement(`ul`);
for(var i = start_page ; i <=records_per_page ; i++){
    var li = document.createElement("li");
    li.innerText=i;
    ul.appendChild(li);
}
console.log("ul",ul);
// var btn = document.createElement("BUTTON");
// var t = document.createTextNode("NEXT");
// btn.setAttribute("class", "democlass");
// btn.appendChild(t);
cont.appendChild(ul);
// cont.appendChild(btn);
// }
// for(var i = start_page ; i <= records_per_page ; i++){
//     elem.appendChild(document.createElement(`li`));
// }
$("li").click(function ()
{
    $('li').val($(this).text());       
    var a = $(this).attr("value");
    console.log("value li "+ a);
    data(a);
});
$(".democlass").click(function(){
    console.log("click");;
    pageLoad(start_page+records_per_page,records_per_page+5)
})
function data(a)
{  
    var output = "";
    for(i=((a-1)*10);i<(a*10);i++)
    {
        output +='<tr>'+
                 '<td>'+ udata[i].id + '</td>'+
                 '<td>'+ udata[i].name + '</td>'+
                 '<td>'+ udata[i].email + '</td>'+ '<br>'
                 '</tr>';
    }
    document.getElementById('user').innerHTML = output;
}
