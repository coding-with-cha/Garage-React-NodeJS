const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    categorie:{
        type:String,
        required:true,
    },
    ville:{
        type:String,
        required:true,
    },
    prix:{
        type:Number,
        required:true,
    },
    postPic:{
        type: String,
        default: 'https://t3.ftcdn.net/jpg/01/80/31/10/240_F_180311099_Vlj8ufdHvec4onKSDLxxdrNiP6yX4PnP.jpg'
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'person', 
    }
})

module.exports = mongoose.model('post', postSchema)