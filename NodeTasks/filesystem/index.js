const fs = require("fs");
var express = require('express');
var app = express();

app.use("/createfile",()=>{
    var date_ob = new Date();
var day = ("0" + date_ob.getDate()).slice(-2);
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();
var date = year + "-" + month + "-" + day;
console.log(date);
var hours = date_ob.getHours();
var minutes = date_ob.getMinutes();
var seconds = date_ob.getSeconds();
  var dateTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
console.log(dateTime);
var writeStream = fs.createWriteStream("date-time.txt");
writeStream.write(dateTime);
writeStream.write("Thank You.");
writeStream.end();

})
const testFolder = './filesystem';
app.use("/getfiles",()=>{
    console.log("im here");
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
})
app.listen(3000,()=>{
    console.log("server started at port 3000");
});