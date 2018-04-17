let express = require('express'),
    app = express(),
    bp = require('body-parser'),
    path = require('path'),

    port = 8000;

app.use(bp.json());
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
require('./config/mongoose.js');
require('./config/routes')(app);

app.listen(port, function() {
    console.log(`We are listening on port ${port}`);
});