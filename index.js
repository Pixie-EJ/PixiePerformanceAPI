const utilSettings = require('./settings/settings.js');
const connection = require('./infrastructure/connection.js');
const Database = require('./infrastructure/database.js');

const port = 5600;

try {
    connection.getConnection().then((res) => {
        console.log(`Connected to database: ${res}`);
    }).catch((err) => {
        console.log(err);
    });
} catch (error) {
    console.log(error);
}


