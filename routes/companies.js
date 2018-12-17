const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Company = require('../models/company');
const config = require('../config/database');

/*
 * Company register
 */
router.post('/register', (req, res, next) => {
    var newCompany = new Company(
        req.body.email,
        req.body.name,
        req.body.password
    );
    Company.addCompany(newCompany, (err, company) => {
        if(err){
            res.json({success: false, msg: 'Failed to register company'});
        }else{
            res.json({success: true, msg: 'Success in adding company'});
        }
    });
});

/*
 * Company auth
 */
router.post('/authenticate', (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;
    Company.getCompanyByEmail(email, (err, company) => {
        if(err){
            throw err;
        }
        if(!company){
            res.json({success: false, msg: 'Company not found'});
            return;
        }
        Company.comparePasswords(password, company.password, (err, isMatch) => {
            if(err)
                throw err;
            if(isMatch){
                const token = jwt.sign({
                    id_company: company.id_company,
                    email: company.email,
                    name: company.name,
                    password: company.password
                },
                config.secret, {
                    expiresIn: '3600m'
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    company: {
                        id: company.id_company,
                        email: company.email,
                        name: company.name,
                    }
                });
            }else{
                res.json({success: false, msg: 'Wrong password'});
                return;
            }
        });
    });
});

/*
 * Company profile
 */
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({company: req.user});// nu stiu de ce nu merge cu company
});

module.exports = router;
