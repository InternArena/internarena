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

module.exports.getSkillIdByName = function(skillName, callback){
    var sql = "SELECT id_skill " +
              "FROM skill " +
              "WHERE name = " + '\'' + skillName + '\'';
    connection.query(sql, function(err, result){
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);
    });
}
module.exports.getCvIdByIdUser = function(idUser, callback){
    var sql = "SELECT id_cv " +
              "FROM cv " +
              "WHERE id_user = " + idUser;
    connection.query(sql, function(err, result){
        //console.log(err);
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);
    });
}
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
              "SET description = " + '\'' + fullDetails['description'] + '\'' + 
              "WHERE id_user = " + fullDetails['id_user'];
    //console.log(fullDetails['skills'][0]);
    connection.query(sql, function(err, result){
        if(err){
            callback(1);
            throw err;
        }
        //console.log("dupa primul log");
        //var skillName = fullDetails['skills'][0];
        module.exports.getCvIdByIdUser(fullDetails['id_user'], function(err, result){
            if(err){
                callback(1);
                throw err;
            }
            id_cv = result['id_cv'];
            module.exports.getSkillIdByName(fullDetails['skills'][0], function(err, result){
                if(err){
                    callback(1);
                    throw err;
                }
                id_skill = result['id_skill'];
                //console.log(id_cv['id_cv']);
                //console.log(id_skill['id_skill']);
                var sql = "INSERT INTO linker_skill_cv (id_skill, id_cv) " + 
                          "VALUES (" + id_skill + "," + 
                                     + id_cv + ")";
                connection.query(sql, function(err, result){
                    if(err){
                        callback(1);
                        throw err;
                    }
                    callback(null);
                });
            });
        });
        //callback(null);
        //sql = "";
        //callback(null);-la final
    });
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
