const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
   email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:{
        type:String,
        required:true
    },
    expireToken:{
        type:Date,
        required:true
    }
})
const userModel = mongoose.model("userSchema",userSchema,"user");
module.exports = userModel;