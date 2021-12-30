var strArray= ["<option>Jazz</option>",
      "<option>Blues</option>",
      "<option>New Age</option>",
      "<option>Classical</option>",
      "<option>Opera</option>"]
      for(var i=0;i<strArray.length;i++){
          console.log(strArray[i]);
      }
     strArray.forEach(function(item){
         console.log(item);
     })