var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

const mDSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    age: { type: Number, required: true }
}, { timestamps: true });

const mD = mongoose.model('mongooseDashboard', mDSchema);