const mysql = require('mysql2');
require('dotenv').config();

const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

const newDatabaseConnection = mysql.createPool({
    host: process.env.NEW_DB_HOST,
    user: process.env.NEW_DB_USER,
    password: process.env.NEW_DB_PASSWORD,
    database: process.env.NEW_DB_DATABASE,
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log("Error in DB connection: " + JSON.stringify(err, undefined, 2));
    } else {
        console.log("DB connected successfully");
    }
});

newDatabaseConnection.getConnection((err, connection) => {
    if (err) {
        console.log("Error in new DB connection: " + JSON.stringify(err, undefined, 2));
    } else {
        console.log("New DB connected successfully");
        connection.release();
    }
});

module.exports = {
    mysqlConnection,
    newDatabaseConnection
};
