const router= require("express").Router()
const { model } = require("../models/User")
const apiRoutes= require("./api")
const authRoutes= require("./auth")


// router.use("/api",apiRoutes)
router.use("/auth",authRoutes)
router.use("/api",apiRoutes)


module.exports = router
