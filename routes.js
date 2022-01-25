const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const cors = require('cors');
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

// importar aqui os controllers
const ExampleMemberNameController = require('./controllers/Example/ExampleMemberNameController');
const CategoryController = require('./controllers/CategoryController');
const RuleController = require('./controllers/RuleController');
const MemberController = require('./controllers/MemberController');
const SquadController = require('./controllers/SquadController');

const origin = 'localhost:3000'
const allowCors = cors({origin})

// 1 - utilizar .get para buscar infos e .post para cadastrar infos
// 2 - o primeiro parâmetro é a rota, pode ser escolhido qualquer nome
// 3 - o parâmetro jsonParser é utilizado nas rotas POST
// 4 - o parâmetro allowCors é utilizado em todas as requests para ajudar a proteger a API
// 4 - no último parâmetro, basta acessar a função do controller que faz o desejado  
router.get("/membersName", new ExampleMemberNameController().handleGetMemberName);

router.get("/rules", allowCors, new RuleController().handleGetRule);

router.get("/members", allowCors, new MemberController().handleGetMember);

router.post("/membersName/create", allowCors, jsonParser, new ExampleMemberNameController().handleCreateMemberName);

router.post("/category/create", allowCors, jsonParser, new CategoryController().handleCreateCategory);

router.post("/members/create", allowCors, jsonParser, new MemberController().handleCreateMember);

router.post("/rules/create", allowCors, jsonParser, new RuleController().handleCreateRule);

router.post("/squad/create", jsonParser, new SquadController().handleCreateSquad);

module.exports = router;