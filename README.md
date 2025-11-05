## Cloudinary Image Upload Project


This is a Node.js & Express.js project that demonstrates uploading images to Cloudinary and storing the image URLs in MongoDB. Users can view all uploaded images on a dashboard.

The project uses Multer, CloudinaryStorage, EJS templates, and dotenv for configuration.

## 🚀 Live Demo

You can see the project live here: https://learning-c-loudinary.vercel.app

## 🛠 Features

Upload images directly to Cloudinary.

Store product name + image URL in MongoDB.

Dashboard to display all uploaded images.

Simple EJS frontend for upload and viewing.

Fully functional local development setup.

## 🧰 Tech Stack

Node.js

Express.js

MongoDB (Atlas)

Mongoose

Cloudinary

Multer & multer-storage-cloudinary

EJS (for templating)

dotenv (for environment variables)

## 📂 Project Structure
cloudinary-practice/
├─ app.js
├─ router/
│   └─ router.js
├─ config/
│   └─ cloudinary.js
├─ models/
│   └─ Image.js
├─ views/
│   ├─ home.ejs
│   ├─ add-image.ejs
│   └─ dashboard.ejs
├─ .env
├─ package.json
└─ .gitignore
