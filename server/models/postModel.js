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
        imageURL:String,
        public_id:String,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'person', 
    }
})

module.exports = mongoose.model('post', postSchema)