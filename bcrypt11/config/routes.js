var password = require('./../controllers/bcrypt11.js');
module.exports = function(app) {

    app.get('/', function(req, res) {
        password.index(req, res);
    })
    app.post('/new', function(req, res) {
        password.create(req, res);
    })
}