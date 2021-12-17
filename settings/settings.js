const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const router = require('../routes');

module.exports = () => {
    const app = express();
    app.use(router);
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    consign()
        .include('controllers')
        .into(app);
    return app;
}