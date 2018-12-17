const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const connection = require('../config/connection');

/*
 * company_registration schema
 */
class CompanySchema{
    constructor(email, name, password){
        this.email = email;
        this.name = name;
        this.password = password;
    }
}

module.exports = CompanySchema;

module.exports.getCompanyById = function(id, callback){
    var sql = "SELECT * " +
              "FROM company_registration " +
              "WHERE id_company = " + id;
    connection.query(sql, (err, result) => {
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);
    });
}

module.exports.getCompanyByEmail = function(email, callback){
    var sql = "SELECT * " +
              "FROM company_registration " +
              "WHERE email = " + '\'' + email + '\'';
    connection.query(sql, (err, result) => {
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);
    });
}

module.exports.addCompany = function(newCompany, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newCompany.password, salt, (err, hash) => {
            if(err){
                console.log(newCompany.name, newCompany.password);
                throw err;
            }
            newCompany.password = hash;
            var sql = "INSERT INTO company_registration (email, name, password) "+
                      "VALUES (" + '\'' + newCompany.email + '\'' + "," + 
                                   '\'' + newCompany.name + '\'' + "," + 
                                   '\'' + newCompany.password + '\'' + ")";  
            console.log(sql);
            connection.query(sql, function(err, result){
                if(err){
                    throw(err);
                }
                console.log('record inserted in company_registration');
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

