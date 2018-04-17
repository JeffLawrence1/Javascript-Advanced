var home = require("./../controllers/home.js")

module.exports = function(app){
    app.get('/', function(req,res){
        home.index(req,res);
    })
    app.post('/addUser', function(req, res){
        home.addUser(req,res);
    })
    app.post('/loginUser', function(req,res){
        home.loginUser(req,res);
    })
    // app.post('/create', function(req,res){
    //     home.create(req, res)
    // })
}