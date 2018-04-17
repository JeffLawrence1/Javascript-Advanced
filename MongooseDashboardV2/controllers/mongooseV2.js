var mongoose = require('mongoose');
var mD = mongoose.model('mongooseDashboard');

module.exports = {
    index: function(req, res) {
        mD.find({}, function(error, results) {
            if (error) { console.log(error); }
            return res.render('Index', { mDs: results })
        })
    },

    new: function(req, res) {
        return res.render('new');
    },

    create: function(req, res) {
        mD.create(req.body, function(error, result) {
            if (error) { console.log(error); }
            return res.redirect('/');
        })
    },

    find: function(req, res) {
        mD.find({ _id: req.params.id }, function(error, response) {
            if (error) { console.log(error); }
            return res.render('show', { mDs: response[0] });
        })
    },

    edit: function(req, res) {
        mD.find({ _id: req.params.id }, function(error, response) {
            if (error) { console.log(error); }
            return res.render('edit', { mDs: response[0] });
        })
    },

    update: function(req, res) {
        mD.update({ _id: req.params.id }, req.body, function(error, result) {
            if (error) { console.log(error); }
            return res.redirect('/');
        })
    },

    delete: function(req, res) {
        mD.remove({ _id: req.params.id }, function(error, result) {
            if (error) { console.log(error); }
            return res.redirect('/');
        })
    }
}