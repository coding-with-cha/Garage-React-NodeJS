const express = require('express');
const { register, login, loadPersonInfo, updateProfile, allUsers, deleteUser, updateProfilePicture, updateFavoris, updateFavorisPull} = require('../controllers/personControllers');
const authMiddleware = require('../middlewares/authMiddleware');
const adminCheck = require('../middlewares/adminCheck');
const router = express.Router()
const personValidation = require('../middlewares/personValidator')
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
    '/profilePic', 
    authMiddleware, 
    upload.single('profilePicture'),
    updateProfilePicture
);


router.post('/register',
personValidation,
register); 

router.post('/login', 
personValidation,
login)

router.get('/personInfo',authMiddleware,loadPersonInfo)

router.get('/personInfo/:personId',authMiddleware,loadPersonInfo)

router.put('/:personId',authMiddleware,updateProfile)

router.delete('/:personId',authMiddleware,adminCheck,deleteUser)

router.get('/allUsers',authMiddleware,adminCheck,allUsers)

router.put('/favoris/favoris',authMiddleware,updateFavoris)

router.put('/favoris/pull', authMiddleware,updateFavorisPull)

module.exports = router;