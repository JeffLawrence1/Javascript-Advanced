var people = require('./../controllers/1955.js');
module.exports = function(app) {

    app.get('/', function(req, res) {
        people.index(req, res);
    })
    app.get('/new/:name', function(req, res) {
        people.new(req, res);
    })
    app.get('/delete/:name', function(req, res) {
        people.delete(req, res);
    })
    app.get('/:name', function(req, res) {
        people.show(req, res);
    })
}