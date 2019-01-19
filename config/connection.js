var mysql = require('mysql');
var config = require('./database');
var connection;

function connectDatabase(){
    if(!connection){
        connection = mysql.createConnection(config.database);
        connection.connect((err) => {
            if(!err){
                console.log('Database is connected');
            }else{
                console.log('Error connecting database');
            }   
        });
    }
    return connection;
}

module.exports = connectDatabase();
