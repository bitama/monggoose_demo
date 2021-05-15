const mongoose = require('mongoose');
const RockSchema = new mongoose.Schema({
    name: String,
    color: String,
    fell: String,
    weight:Number,
    foundDate:Date
})
const Rock = mongoose.model("Rock", RockSchema);
module.exports = Rock;