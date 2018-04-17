var mongoose = require('./../controllers/mongooseV2.js');
module.exports = function(app) {

    app.get('/', function(req, res) {
        mongoose.index(req, res);
    })

    app.get('/new', function(req, res) {
        mongoose.new(req, res);
    })


    app.post('/', function(req, res) {
        mongoose.create(req, res);
    })


    app.get('/:id', function(req, res) {
        mongoose.find(req, res)
    })

    app.get('/:id/edit/', function(req, res) {
        mongoose.edit(req, res)
    })

    app.post('/:id', function(req, res) {
        mongoose.update(req, res)
    })

    app.post('/:id/delete', function(req, res) {
        mongoose.delete(req, res)
    })
}