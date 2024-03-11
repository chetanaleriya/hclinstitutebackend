const mongoose=require("mongoose")
const RegisterSchema=mongoose.Schema({
    uname:String,
    uemail:String,
    ucontact:Number,
    uaddress:String
})
module.exports=RegisterModel=mongoose.model("registration",RegisterSchema)
