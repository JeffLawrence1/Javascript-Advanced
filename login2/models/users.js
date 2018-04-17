var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: {type: String, required: true},
        password: {type: String, requried: true}
    }
)
mongoose.model("User", UserSchema);