var mongoose = require('mongoose');
var User = mongoose.model("User")
var bcrypt = require('bcrypt')
module.exports = {

    index:  function(req, res){
            return res.render("index")
        },
    addUser: function(req,res){
        bcrypt.hash(req.body.password, 10, function(err, hash){
            User.create({username: req.body.username, password: hash}, function(err, user){
                return res.redirect('/')
            })
        });
    },
    loginUser: function(req, res){
        console.log(req.body);
        User.findOne({username: req.body.username}, function(err, user){
            if(err)
            {
                console.log("error");
                return res.redirect('/error')
            }else{
                console.log(user);
                let username = user.username;
                let hash = user.password;
                console.log(hash);
                console.log("unhashed password");
                bcrypt.compare(req.body.password, hash, function(err,res){
                    console.log(req.body.password);
                    if(res){
                        console.log("Passwords do match");
                        return res.redirect('/')
                    }else{
                        console.log("Passwords do not match");
                        return res.render('/error')
                    }
                })
            }
        })
    }
    }