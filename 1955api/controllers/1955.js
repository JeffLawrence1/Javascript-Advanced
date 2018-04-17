var mongoose = require('mongoose');
var person = mongoose.model('person');

module.exports = {
    index: function(req, res) {
        person.find({}, function(error, result) {
            if (error) { console.log(error); }
            return res.json({ result });
        })
    },
    new: function(req, res) {
        var pers = new person({ name: req.params.name })
        pers.save(function(error) {
            return res.redirect('/');
        })
    },
    delete: function(req, res) {
        person.remove({ name: req.params.name }, function(error) {
            if (error) { console.log(error); }
            return res.redirect('/');
        })
    },
    show: function(req, res) {
        person.findOne({ name: req.params.name }, function(error, result) {
            if (error) { console.log(error); }
            return res.json({ result });
        })
    }
}