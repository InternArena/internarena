const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const connection = require('../config/connection');

/*
 * job_offer schema
 */
class JobOfferSchema{
    constructor(name, description, id_company){
        this.name = name;
        this.description = description;
        this.id_company = id_company;
    }
}

module.exports = JobOfferSchema;

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
        //console.log('job offer added');
    });
    callback(); 
} 

module.exports.getJobOfferPage = function(newJobOfferPage, callback){
    var sql = "CALL get_job_offers(" + newJobOfferPage + ")";
    connection.query(sql, (err, result) => {
        if(err){
            callback(1, null);
            throw(err);
        } 
        callback(null, result);
    });
}
