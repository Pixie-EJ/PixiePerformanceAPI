const getAll = require('../models/getAll.js');

module.exports = app => {
    app.get('/members', (req, res)=> {
        getAll.selectAllMembers(res);
    });
}