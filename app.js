const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const connection = require('./config/connection');
const config = require('./config/database');
const app = express();

const port = 8080;
const users = require('./routes/users');
const companies = require('./routes/companies');

/*
 * Setting app CORS manually
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
 * Set static folders
 */
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Body parser
 */
app.use(bodyParser.json());

/*
* Passport
*/
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

/*
 * use users
 */
app.use('/users', users);

/*
 * use companies 
 */
app.use('/companies',companies);

/*
 * Index route
 */
app.get('/',(req, res) => {
    res.send('Invalid nothing');
});

/*
 *
 */
app.get("*",(req, res)=>{
    res.send('Invalid endpoint');
});

/*
 * Setting the server that listens to port
 */
const server = app.listen(port, () => {
    console.log('Server started on port' + port);
});

/*
 *  Setting database
 */
//test
connection.query('SELECT name FROM user_registration', (err, rows, fields) => {
    if(err){
        console.log('error');
        throw(err);
    }
    console.log('the actor name is ', rows[0]);
});












