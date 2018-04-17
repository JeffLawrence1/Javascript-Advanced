var hello = require('./../controllers/hello.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        hello.index(req, res);
    })
}