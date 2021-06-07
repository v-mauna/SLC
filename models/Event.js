const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  location: {
    type: String,
    trim: true,
    required: true
  },
  contact: {
    type: String,
    trim: true,
    required: true
  },
  service: {
    type: String,
    trim: true
  },
  time:{
    type: String,
    required: true
  },
  day:{
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },
  note:{
      type: String,
      trim: true
  },
  userId:{
    type : Schema.Types.ObjectId,
    ref: "User"
  }

});


module.exports = mongoose.model('Event', EventSchema);

