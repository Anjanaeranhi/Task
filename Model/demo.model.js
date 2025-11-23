const { Schema, model } = require("mongoose");

const schema = Schema({
    Id: {type: String, unique: true},
    name : {type: String, required: true},
    mobile: {type: Number, required: true},
    location: {type: String, required: true}
})
const demoModel = model('demo', schema)
module.exports = {demoModel}