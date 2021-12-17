// importação do serviço utilizado
const ExampleMemberNameService = require('../../services/Example/ExampleMemberNameService');

// criação de classe para ser exportada
class ExampleMemberNameController {
    // criação da função a ser utilizada e chamada no arquivo routes.js
    // sempre passar como parâmetro o request e response
    handleGetMemberName(request, response) {
        // atribuindo um novo serviço a uma constante 'service'
        const service = new ExampleMemberNameService();
        // chamando a função do serviço
        service.getMemberName((res) => {
            // res é o retorno da função
            return response.json(res)
        })            
    }

    handleCreateMemberName(request, response) {
        const { name } = request.body;
        const service = new ExampleMemberNameService();
        service.createMemberName(name, (res) => {
            return response.json(res)
        })
    }
}

//exportação da classe para utilizar em outros arquivos
module.exports = ExampleMemberNameController;
