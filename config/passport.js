const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const Company = require('../models/company');
const config = require('../config/database');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new jwtStrategy(opts, (jwt_payload, done) => { 
        if(jwt_payload.hasOwnProperty('id_user')){
            User.getUserById(jwt_payload.id_user, (err, user) => {
                if(err){
                    return done(err, false);
                }
                if(user){
                    return done(null, user);
                }else{
                    return done(null, false);
                }
            });    
        }else{
            Company.getCompanyById(jwt_payload.id_company, (err, company) => {
                if(err){
                    return done(err, false);
                }
                if(company){
                    return done(null, company);
                }else{
                    return done(null, false);
                }
            }); 
        }
        
    }));
}
