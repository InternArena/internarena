const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const connection = require('../config/connection');

/*
 * job_offer schema
 */
class JobOfferSchema{
    constructor(name, description, id_company, skill){
        this.name = name;
        this.description = description;
        this.id_company = id_company;
        this.skill = skill;
    }
}

module.exports = JobOfferSchema;

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
module.exports.getJobOfferById = function(id, callback){
    var sql = "SELECT * " +
              "FROM job_offer " +
              "WHERE id_offer = " + id;
    connection.query(sql, (err, result) => {
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);
    });
}

module.exports.addJobOffer = function(newJobOffer, callback){
    var sql = "INSERT INTO job_offer (name, description, id_company) " +
              "VALUES ("  + '\'' + newJobOffer.name + '\'' + ","
                          + '\'' + newJobOffer.description + '\'' + ","
                          + newJobOffer.id_company + ")";
    //console.log(sql);
    connection.query(sql, function(err, result){
        if(err){
            throw(err);
        }
        console.log(result['insertId']);
        var id_offer = result['insertId'];
        console.log(newJobOffer.skill);
        //module.exports.getCvIdByIdUser(fullDetails['id_user'], function(err, result){
        module.exports.getSkillIdByName(newJobOffer.skill, function(err, result){  
            var sql = "INSERT INTO linker_skill_offer (id_skill, id_offer) " + 
                      "VALUES (" + result['id_skill'] + "," + 
                                 + id_offer + ")";
            console.log(sql);
            connection.query(sql, function(err, result){
                if(err){
                    throw err;
                }
                callback();
            });
        });
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
module.exports.getJobOfferPage = function(idUser, newJobOfferPage, callback){
    module.exports.getCvIdByIdUser(idUser, function(err, result){
        //console.log(result);
        var sql = "CALL matching_cv_job_offer(" + idUser + "," + newJobOfferPage + ")";
        console.log(sql);
        connection.query(sql, (err, result) => {
            if(err){
                callback(1, null);
                throw(err);
            }
            console.log(result[0]);
            callback(null, result);
        });
    });
}
