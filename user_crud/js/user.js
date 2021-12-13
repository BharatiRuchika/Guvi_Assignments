async function getUsers(){
    const data = await fetch("https://611f26df9771bf001785c796.mockapi.io/user1");
    const users = await data.json();
    console.log(users);
    document.querySelector(".user_list").innerHTML = '';
    users.forEach((user)=>
        createUser(user));
}


function createUser(user){
  console.log("im here");
  const info = document.createElement('div');
  info.setAttribute("class","container");
  info.innerHTML = `<div class="avtar-container">
                <img class="avatar" src=${user.avatar}
                width="150px" height="150px"></div>
                <div class="details"><h3>${user.name}</h3>
                <p>${new Date(user.createdAt).toDateString()}</p>
                <button onclick="deleteUser(${user.id})">Delete</button>
               
                </div>`;
// user_list.append(info);
// document.body.append(user_list);
document.querySelector(".user_list").append(info);
}

getUsers();
// async function editUser(id){
//     console.log("im here");
//     console.log("id",id);
//     document.querySelector(".btn").innerText = "Edit User";
//     if(document.querySelector(".btn").click){
    
//         if(document.querySelector(".btn").innerText = "Edit User"){
//             putUser(id);
//         }
//     }
    
// }


async function deleteUser(id){
   const data = await fetch("https://611f26df9771bf001785c796.mockapi.io/user1/"+id,{method:"DELETE"});
   const user = await data.json();
   console.log(user);
   getUsers();
}
// deleteUser("14");


async function addUser(){
    console.log("add call");
    const data = await fetch("https://611f26df9771bf001785c796.mockapi.io/user1",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({
            // document.querySelector(".user_list")
            name: document.getElementsByTagName("input")[0].value,
            avatar:document.getElementsByTagName("input")[1].value,
            createdAt:new Date().toISOString()
        })
    })
    getUsers();
}
    // async function putUser(id){
    //     console.log("put user called");
    //     var new_name = document.getElementsByTagName("input")[0].value;
    //     var new_avtar = document.getElementsByTagName("input")[1].value;
    //     const data = await fetch("https://611f26df9771bf001785c796.mockapi.io/user1/"+id,{
    //         method:"PUT",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             name: new_name,
    //             avatar: new_avtar
                
    //         })
    //     })
    // }
   
   
    // putUser(23);


