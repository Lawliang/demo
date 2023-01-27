const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    note: String
})

module.exports = mongoose.model('note', noteSchema);