const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
/*
 * User register
 */
router.post('/register', (req, res, next) => {    
    var newUser = new User(
        req.body.name,
        req.body.email,
        req.body.username,
        req.body.password   
    );
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        }else{
            res.json({success: true, msg: 'Success in adding user'});
        }
    });
});

/*
 * User authenticate
 */
router.post('/authenticate', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    User.getUserByUsername(username, (err, user) => {
        if(err){
            throw err;
        }
        if(!user){
            res.json({success: false, msg: 'User not found'});
            return;
        }
        User.comparePasswords(password, user.password, (err, isMatch) => {
            if(err)
                throw err;
            if(isMatch){
                const token = jwt.sign({
                    id_user : user.id_user, 
                    name : user.name, 
                    username : user.username,  
                    email : user.email,
                    password : user.password
                },
                config.secret, {
                    expiresIn: '3600m'
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user.id_user,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                res.json({success: false, msg: 'Wrong password'});
                return;
            }
        });
    });
});

/*
 * User profile
 */
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //console.log(req.user);
    res.json({user: req.user});
});

module.exports = router;
