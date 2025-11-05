const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  product: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Image', ImageSchema);
