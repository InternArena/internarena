const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const connection = require('../config/connection');

/*
 *  user_registration Schema
 */
class CvSchema {
    
    /*
    constructor(name, email, username, description, address, age){
        this.name = name;
        this.email = email;
        this.username = username;
        this.description = description;
        this.address = address;
        this.age = age;
    }
    */
}

module.exports = CvSchema;

module.exports.getCvProfileById = function(id, callback){
    var sql = "SELECT * " +
              "FROM cv " +
              "WHERE id_cv = " + id;
    connection.query(sql, function(err, result){
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);//(may get more than one row)
    });  
}
module.exports.editCvByUsername = function(fullDetails, callback){
    var sql = "UPDATE cv " +  
              "SET description = " + '\'' + fullDetails['description'] + '\'' + " , " + 
              "WHERE username = " + '\'' + fullDetails['username'] + '\'' + " ; ";
    console.log(sql);
}

/*
module.exports.editUserProfileByUsername = function(userProfile, callback){
    var strAux = "";
    for(var property in userProfile){
        if(userProfile.hasOwnProperty(property) && userProfile[property]){
            if(property == 'name' || property == 'username' || property == 'description' || 
                property == 'address' || property == 'age'){
                strAux += property + " = " + '\'' + userProfile[property] + '\'' +" , ";
            }
        }
    }
    //console.log(userProfile);
    if(strAux.length > 3){
        strAux = strAux.slice(0, strAux.length - 2);
    }
    var sql = "UPDATE user_profile " +  
              "SET " + strAux +
              "WHERE username = " + '\'' + userProfile.username + '\'';
    connection.query(sql, (err, result) => {
        if(err){
            callback(1);
            throw err;
        }
        callback(null);
    });
}
*/
