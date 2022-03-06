const Person = require('../models/personModel');
const Post = require('../models/postModel');
const cloudConfig = require('../helpers/cloudinary')


// @desc create a post
// @route POST /api/post
//@ access PRIVATE user/admin
const createPost = async(req, res)=>{
    try{
        const {title, description, categorie, ville, prix} = req.body;
        await Post.create({title, description, categorie, ville, prix, owner:req.personId})
        res.status(201).json({msg:'post created'})
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc get all posts
// @route GET /api/post
//@ access PRIVATE user/admin
const getPosts = async(req, res)=>{
    try{
        const posts = await Post.find({}).populate("owner","-password");
        res.status(200).json(posts)
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc get posts for owner
// @route GET /api/post/withId
//@ access PRIVATE - owner
const getPostsUser = async(req, res)=>{
    try{
        const posts = await Post.find({owner: req.personId}).populate('owner','-password -role -__v');
        res.status(200).json(posts)
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc delete a post by id
// @route DELETE /api/post/:postId
//@ access PRIVATE -owner
const deletePost = async(req,res)=>{
    try {
        await Post.findByIdAndDelete(req.params.postId)
        res.status(200).json({msg:'successfully deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc update a post by id
// @route PUT /api/post/:postId
//@ access PRIVATE -owner
const updatePost = async(req,res)=>{
    try {
        await Post.findByIdAndUpdate(req.params.postId,{...req.body})
        res.status(200).json({msg:'successfully updated'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}


// @desc get all posts filtered with categorie
// @route GET /api/post
//@ access PUBLIC
const getPostsFiltered = async(req, res)=>{
    try{
        const posts = await Post.find({categorie: req.params.categorie}).populate('owner','-password -role -__v');
        res.status(200).json(posts)
    }catch(error)
    {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    }
}

// @desc update post picture
// @route PUT /api/post/postPic
//@ access PRIVATE - owner
const updatePostPicture = async(req,res)=>{
    try {
        // const imageUrl = `/uploads/${req.file.filename}`
        const imgInfo = await cloudConfig.uploader.upload(req.file.path)
        await Post.findByIdAndUpdate(req.params.postId,{postPic:{imageURL:imgInfo.url,public_id:imgInfo.public_id}})
        res.json({msg:'post picture updated'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong'});
    } 
}



module.exports = {createPost,getPosts,getPostsUser,deletePost,updatePost,getPostsFiltered,updatePostPicture}