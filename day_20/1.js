// const cont = document.getElementById("container");
const cont = document.getElementById("container");
console.log("cont",cont);
var h1 = document.createElement('h1');
var i=10;
console.log(i);
setTimeout(() => {
    h1.innerText = i--;
    cont.appendChild(h1);
    setTimeout(() => {
        h1.innerHTML = i--;
        setTimeout(() => {
            h1.innerHTML = i--;
            setTimeout(() => {
                h1.innerHTML = i--;
                setTimeout(()=>{
                    h1.innerHTML = i--;
                    setTimeout(()=>{
                        h1.innerHTML = i--;
                        setTimeout(()=>{
                            h1.innerHTML = i--;
                            setTimeout(()=>{
                                h1.innerHTML = i--;
                                setTimeout(() => {
                                    h1.innerHTML = i--;
                                    setTimeout(() => {
                                        h1.innerHTML = i--;
                                       
                                      
                                    setTimeout(() => {
                                        h1.innerText = "Happy New Year";
                                    }, 1000);
                                }, 1000);
                            },1000)
                        },1000)
                    },1000) 
                },1000) 
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
    },1000);
