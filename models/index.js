const mongoose = require("mongoose");
const ServiceAddress = require('./ServiceAddress')
const Event = require('./Event')
const User = require('./User')

module.exports= {
    User,
    Event,
    ServiceAddress
}
