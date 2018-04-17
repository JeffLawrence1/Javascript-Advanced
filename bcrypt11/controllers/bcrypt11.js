var mongoose = require('mongoose');
var password = mongoose.model('password');

module.exports = {
    index: function(req, res) {
        password.find({}, function(error, result) {
            if (error) { console.log(error); }
            return res.render('index', { passwords: result });
        })
    },

    create: function(req, res) {
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            password.create({ name: req.body.name, password: hash }, function(error, result) {
                if (error) { console.log(error); }
                console.log(password);
                return res.redirect('/');
            })
        })
    }
}