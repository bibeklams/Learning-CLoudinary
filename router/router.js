const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinary } = require('../config/cloudinary'); 
const Image=require('../models/Image');

// Cloudinary storage setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'my_uploads',        // Cloudinary folder
    allowed_formats: ['jpg', 'png', 'jpeg'], // allowed file types
  },
});

const upload = multer({ storage: storage });

// Home route
router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});
    res.render('home', { images });
  } catch (err) {
    console.error(err);
    res.render('home', { images: [] });
  }
});


// Show add image form
router.get('/add-image', (req, res) => {
  res.render('add-image'); // add-image.ejs
});

// Handle form submission
router.post('/add-image', upload.single('image'), async (req, res) => {
  try {
    const productName = req.body.product;        // from form input
    const imageUrl = req.file.path;              // Cloudinary uploaded URL

    // Save to MongoDB
    const newImage = new Image({
      product: productName,
      image: imageUrl,
    });

    await newImage.save();

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong!');
  }
});
// Dashboard route to show all images
router.get('/dashboard', async (req, res) => {
  try {
    const images = await Image.find({});
    res.render('dashboard', { images }); // pass all images to EJS
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong!');
  }
});


module.exports = router;
