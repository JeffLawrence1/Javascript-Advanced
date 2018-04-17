var mongoose = require('mongoose');
// var hello = mongoose.model('hello');

module.exports = {
    index: function(req, res) {
        return res.render('index')
    }

}