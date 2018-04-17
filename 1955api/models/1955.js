var mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
}, { timestamps: true });

const person = mongoose.model('person', personSchema);