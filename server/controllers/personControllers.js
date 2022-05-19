const cloudinary = require("cloudinary").v2;
const Person = require('../models/personModel');
const bcrypt = require('bcryptjs')
const{validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');

// @desc register new person
// @route POST /api/person/register
//@ access PUBLIC
const register = async(req,res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        const {name, email, password} = req.body;
        const existPerson = await Person.findOne({email})
        if (existPerson) return res.status(400).json({msg:
            'you have already registered'});
        const hashedPassword = await bcrypt.hash(password,10);
        const newPerson = await Person.create({name,email,password:hashedPassword});
        res.status(201).json({msg:'user created'})
    }catch(error){
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    } 
}

// @desc login as person
// @route POST /api/person/login
//@ access PUBLIC
const login = async(req, res)=>{
    try{
        const{email, password}= req.body;
        const existPerson = await Person.findOne({email})
        if (!existPerson) return res.status(400).json({msg:
            'you have to register first.'});
        const validatePassword = await bcrypt.compare(password, existPerson.password)
        if(!validatePassword) return res.status(400).json({msg: 'wrong password'});
        const token = await jwt.sign({sub: existPerson._id, role: existPerson.role},
            process.env.SECRET_KEY,{expiresIn:'30d'});
        res.json({token, role: existPerson.role});
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc load person info
// @route GET /api/person/personInfo
//@ access PRIVATE - owner
const loadPersonInfo = async(req,res)=>{
    try{
        const personInfo = await Person.findById(req.personId).select('-password')
        res.json(personInfo) 
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}


// @desc update a profile by id
// @route PUT /api/person/:personId
//@ access PRIVATE -owner
const updateProfile = async(req,res)=>{
    try {
        const personInfo = await Person.findByIdAndUpdate(req.personId,{...req.body})
        res.json(personInfo)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}


// @desc load All users
// @route GET /api/person/allUsers
//@ access PRIVATE - admin
const allUsers = async(req,res)=>{
    try{
        const all = await Person.find({role: "user"})
        res.status(200).json(all)
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc delete a user by id
// @route DELETE /api/person/:personId
//@ access PRIVATE - admin
const deleteUser = async(req,res)=>{
    try {
        await Person.findByIdAndDelete(req.params.personId)
        res.status(200).json({msg:'successfully deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
} 

// @desc update user profile picture
// @route PUT /api/person/profilePic
//@ access PRIVATE - owner
const updateProfilePicture = async(req,res)=>{
    try {
        const imageInfo = await cloudinary.uploader.upload(req.file.path)
        console.log(imageInfo.url)
        await Person.findByIdAndUpdate(req.personId,{profilePic:imageInfo.url})
        res.json({msg:'profile picture updated'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    } 
}


// @desc update a favoris by id
// @route PUT /api/person/favoris
//@ access PRIVATE - owner
const updateFavoris = async(req,res)=>{
    try {
        await Person.findByIdAndUpdate(req.personId,{
            $push: {favoris: req.body}
        })
        res.status(200).json({msg:'successfully updated'})
        } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc pull from favoris
// @route PUT /api/person/favoris/pull
//@ access PRIVATE - owner
const updateFavorisPull = async(req,res)=>{
    try {
        await Person.findByIdAndUpdate(req.personId,{
            $pull: {favoris: req.body}
        })
        res.status(200).json({msg:'successfully updated'})
        } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

module.exports = {register,login, loadPersonInfo, updateProfile, allUsers, deleteUser, updateProfilePicture, updateFavoris, updateFavorisPull}