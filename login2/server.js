var express = require('express');
var app = express();
var path = require('path');
var bp = require('body-parser')
var port = 8000;
var session = require('express-session');
var bcrypt = require('bcrypt')
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

app.use(express.static(path.join(__dirname, '/static')));
app.use(bp.urlencoded({extended: true}));
app.use(session({secret: "poop"}));


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
require('./config/mongoose');
require('./config/routes')(app);


app.listen(port, function(){
    console.log("we are listening on port 8000");
})