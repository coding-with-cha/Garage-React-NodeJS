const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    adress:{
        type:String,
        default: '',
    },
    phoneNumber:{
        type:Number,
        default: '',
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user',
    },   
    profilePic:{
        type: String,
        default: 'https://t3.ftcdn.net/jpg/00/96/64/82/240_F_96648253_b7qx251KoUludX778xi1dZb37gSPyVzP.jpg',
    },
    favoris:{
        type: [{}],
    },
    modePayement:{
        type: String,
        default: '',
    },
    statut:{
        type: String,
        default: '',
    }
})

module.exports = mongoose.model('person', personSchema)