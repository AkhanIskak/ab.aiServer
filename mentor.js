const mongoose = require('mongoose')

const MentorModel =new mongoose.Schema({
    name:{
        type:String,
       
        maxlength:100,
        required:true
        
    },
    email:{
        type:String,
      unique:true,
        maxlength:100,
        required:true
    },
    number:{
        type:String,
        unique:false,
        maxlength:100,
        required:true,
    },
    place:{
        type:String,
        
        maxlength:100,
        required:true
    },

    lang:{
        type:String,
        
        maxlength:100,
        required:true
    },
    student:{
        type:Boolean,

        required:true,

    }
})
const Mentor = mongoose.model("mentors",MentorModel)
module.exports=Mentor