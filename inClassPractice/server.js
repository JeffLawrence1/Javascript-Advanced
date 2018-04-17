let express = require('express'),
    app = express(),
    path = require('path'),
    session = require('express-session'),
    bp = require('body-parser'),
    port = 8000;

app.use(express.static(path.join(__dirname, '/static')));
app.use(bp.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// require('./config/mongoose.js');
require('./config/routes')(app);


app.listen(port, function() {
    console.log(`We are listening on port ${port}`);
});