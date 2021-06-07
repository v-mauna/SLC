const aptRoute= require ("./apt");
const serviceAddress= require("./serviceAddress");

const router= require("express").Router();

router.use("/apt",aptRoute)
router.use("/service-address",serviceAddress)

module.exports= router
