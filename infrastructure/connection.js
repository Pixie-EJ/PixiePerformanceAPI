const mariadb = require('mariadb');

const connection = mariadb.createPool({
    host: 'HOSTNAME', 
    user:'USER', 
    password: 'PASSWORD',
    connectionLimit: '?',
});

module.exports = connection;