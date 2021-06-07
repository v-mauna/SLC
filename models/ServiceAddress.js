const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceAddressSchema = new Schema({
  address: {
    type: String,
    trim: true,
    required: true
  },
  city: {
    type: String,
    trim: true,
    required: true
  },
  state: {
    type: String,
  },
  zipcode:{
    type: Number,
    required: true
  }

});



module.exports = mongoose.model('ServiceAddress', serviceAddressSchema);
