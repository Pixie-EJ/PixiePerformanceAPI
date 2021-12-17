const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

// importar aqui os controllers
const ExampleMemberNameController = require('./controllers/Example/ExampleMemberNameController');


// 1 - utilizar .get para buscar infos e .post para cadastrar infos
// 2 - o primeiro parâmetro é a rota, pode ser escolhido qualquer nome
// 3 - o segundo parâmetro é utilizado das rotas POST
// 4 - no último parâmetro, basta acessar a função do controller que faz o desejado  
router.get("/membersName", new ExampleMemberNameController().handleGetMemberName);

router.post("/membersName/create", jsonParser, new ExampleMemberNameController().handleCreateMemberName);

module.exports = router;