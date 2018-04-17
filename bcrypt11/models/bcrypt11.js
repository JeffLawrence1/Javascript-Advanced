var mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    password: { type: String, required: true },
}, { timestamps: true });




const password = mongoose.model('password', passwordSchema);