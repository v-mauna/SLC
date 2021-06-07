const router = require ("express").Router();
// const mongojs =require("mongoose");
const path =require("path");
const db = require("../../models");


// how do i structure this?
//Original Code
// router.post("/serviceaddress", ({ body }, res) => {
//     db.Event.create(body)
//         .then(dbAptform => {
//             res.json(dbAptform);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });
// router.post("/serviceaddress", ({ body }, res) => {
//     db.Event.findOne(body)
//         .then(dbAptform => {
//             res.json(dbAptform);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });
//

//Revised Code with try/catch blocks added as well as revised functions to be async

router.post("/service-address", async({ body }, res, next) => {
    try{
        const newServiceAddress = await db.Event.create(body)
        res.json(newServiceAddress)
    }catch(error){
        console.log(`error in serviceAddress API === ${error.message}`)
        res.status(400).json(error);
        next(error)
    }})

  // Should this be put or post?

  router.post("/service-address", async({ body }, res, next) => {
    try {
        const updatedServiceAddress = await db.Event.findOne(body)
        res.json(updatedServiceAddress)
    } catch (error) {
        console.log(`Error in serviceAddress API === ${error.message}`)
        res.status(400).json(error)
        next(error)
    }
  })


module.exports = router;
