const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');
const UserProfile = require('../models/user_profile');
const JobOffer = require('../models/job_offer');
const Cv = require('../models/cv');

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
    res.json({user: req.user});
});

/*
 * Full profile
 */
router.get('/full-profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    console.log(req.headers);
    UserProfile.getUserProfileById(req.user.id_user, (err, userProfile) => {
        res.json({user: userProfile});
    });
});

/*
 * Edit full profile
 */
router.post('/edit-full-profile', (req, res, next) => {
    UserProfile.editUserProfileByUsername(req.body, () => {
        //console.log(req.body);
        res.json({success: true, msg:"Profile edited"});
    });
});

/*
 * Get all offers
 */
router.get('/get-job-offers', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //console.log(req.headers.firstofferindex);
    //res.json({asd:true});
    JobOffer.getJobOfferPage(req.headers.firstofferindex, (err, jobOffers) => {
        //console.log(jobOffers[0]);
        res.json({response: jobOffers[0]});
    });
});

/*
 *  Edit user cv
 */
router.post('/edit-cv', (req, res, next) => {
    console.log(req.body);
    Cv.editCvByUsername(req.body, () => {
        console.log("1");
        res.json({success: true, msg:"Cv edited"});
    });
});

module.exports = router;
