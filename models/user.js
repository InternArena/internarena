const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const connection = require('../config/connection');

/*
 *  User Schema
 */
class UserSchema {
    constructor(name, email, username, password){
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

module.exports = UserSchema;

module.exports.getUserById = function(id, callback){
    var sql = "SELECT * " +
              "FROM user_registration " +
              "WHERE id_user = " + id;
    connection.query(sql, function(err, result){
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);//(may get more than one row)
    });  
}
module.exports.getUserByUsername = function(username, callback){
    var sql = "SELECT * " +
              "FROM user_registration " +
              "WHERE username = " + '\'' + username + '\'';
    connection.query(sql, function(err, result){
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);
    });
}
//var User = module.exports = UserSchema;
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){
                console.log(newUser.name, newUser.password);
                throw err;
            }
            newUser.password = hash;
            var sql = "INSERT INTO user_registration (name, email, username, password) "+
                      "VALUES (" + '\'' + newUser.name + '\'' + "," + 
                                   '\'' + newUser.email + '\'' + "," +
                                   '\'' + newUser.username + '\'' + "," + 
                                   '\'' + newUser.password + '\'' + ")";  
            console.log(sql);
            connection.query(sql, function(err, result){
                if(err){
                    throw(err);
                }
                console.log('record inserted');
            });
            callback();
        });
    });
} 
module.exports.comparePasswords = function(inputPassword, hashedOkPassword, callback){
    bcrypt.compare(inputPassword, hashedOkPassword, (err, isMatch) => {
        if(err){
            console.log(inputPassword);
            console.log(hashedOkPassword);
            throw err;
        }
        callback(null, isMatch);
    });
}
