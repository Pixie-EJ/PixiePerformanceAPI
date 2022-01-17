const connection = require('./infrastructure/connection');
const Database = require('./infrastructure/database');
const express = require('express');
const router = require('./routes');
//const consign = require('consign');

try {
    const app = express();
    const db = new Database();
    
    app.use(router);
    app.use(express.json());
    app.listen('3001', () => {
        console.log('Servidor rodando na porta 3001')
    })
    
    db.init(connection);
    connection.query('USE gerenciador_pontos')
} catch (error) {
    console.log(error);
}

