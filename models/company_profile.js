const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const connection = require('../config/connection');

/*
 *  user_registration Schema
 */
class CompanyProfileSchema {
    constructor(name, email, description, industry, address, site){
        this.name = name;
        this.email = email;
        this.description = description;
        this.industry = industry;
        this.address = address;
        this.site = site;
    }
}

module.exports = CompanyProfileSchema;

module.exports.getCompanyProfileById = function(id, callback){
    var sql = "SELECT * " +
              "FROM company_profile " +
              "WHERE id_company = " + id;
    connection.query(sql, function(err, result){
        if(err){
            callback(1, null);
            throw err;
        }
        callback(null, result[0]);//(may get more than one row)
    });  
}
module.exports.editCompanyProfileByEmail = function(companyProfile, callback){
    var strAux = "";
    console.log(companyProfile);
    for(var property in companyProfile){
        if(companyProfile.hasOwnProperty(property) && companyProfile[property]){
            if(property == 'name' || property == 'description' || property == 'industry' || 
                property == 'address' || property == 'site' || property == 'email'){
                strAux += property + " = " + '\'' + companyProfile[property] + '\'' +" , ";
            }
        }
    }
    if(strAux.length > 3){
        strAux = strAux.slice(0, strAux.length - 2);
    }
    console.log(sql);
    var sql = "UPDATE company_profile " +  
              "SET " + strAux +
              "WHERE email = " + '\'' + companyProfile.email + '\'';
    connection.query(sql, (err, result) => {
        if(err){
            callback(1);
            throw err;
        }
        callback(null);
    });
}
