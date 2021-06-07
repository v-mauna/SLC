const router = require ("express").Router();
const mongoose =require("mongoose");
const path =require("path");
const { brotliDecompress } = require("zlib");
const db = require("../../models");


// how do i structure this?

router.post("/aptform", async({ body ,user}, res,next) => {
  try {
    console.log(`user === ${user}`)
    body.userId = mongoose.Types.ObjectId(user._id)
    const aptForm = await db.Event.create(body)
    res.json(aptForm)

  } catch (error) {
    console.log(`Error in apt.js router: ${error.message}`)
    res.status(400).json(err);
  }
})

  router.put("/aptform", async({body}, res,next) => {
  try{
    console.log(`body in aptForm request === ${body}`)
    const updatedForm = await Workout.findByIdAndUpdate(
        req.params.id,
    )
    res.json(updatedForm)
  }catch(error){
    console.log(`error in aptForm router put request === ${error.message}`)
    next(error)
  }})






  
module.exports = router

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

const Event = mongoose.model("event", EventSchema);

module.exports = Event;

