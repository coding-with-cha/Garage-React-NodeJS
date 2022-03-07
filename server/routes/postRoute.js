const express = require('express');
const { createPost, getPosts, getPostsUser, deletePost, updatePost, getPostsFiltered, updatePostPicture } = require('../controllers/postControllers');
const adminCheckMiddleware = require('../middlewares/adminCheck');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router()
const multer = require('multer')
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage: storage });

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './img-uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + file.originalname
//       cb(null, uniqueSuffix)
//     }
//   })

// const upload = multer({ storage: storage })

router.put(
    '/postPic/:postId', 
    authMiddleware, 
    upload.single('postPicture'),
    updatePostPicture
);


router.get('/',authMiddleware,getPosts);
router.post('/',authMiddleware,createPost);
router.get('/withId',authMiddleware,getPostsUser);
router.delete('/:postId',authMiddleware,deletePost)
router.put('/:postId',authMiddleware,updatePost)
router.get('/:categorie',getPostsFiltered)

module.exports = router; 