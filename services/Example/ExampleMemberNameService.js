// importação da conexão com o banco
const connection = require('../../infrastructure/connection');

// criação de classe para ser exportada
class ExampleMemberNameService {
    // criação da função a ser utilizada no controller
    // sempre passar o res como parâmetro
    async getMemberName(res) {
        // atribuindo a query do sql a uma constante
        const sql = 'SELECT * FROM membersName';
        // realizando a query na conexão com o banco
        await connection.query(sql, (err, results) => {
            // a query retorna err com os erros e results com os resultados
            // caso exista erro, retornar o err
            if (err) {
                return err;
            }
            // timeout para aguardar o resultado da query
            setTimeout(() => {
                // retornando o results para o controller
                return res(results);
            });
        });
    }   

    async createMemberName(name, res) {
        const sql = `INSERT INTO membersName (name) VALUES ('${name}')`;
        await connection.query(sql, (err, results) => {
            if (err) {
                return 'err';
            }
            setTimeout(() => {
                return res(results);
            });
        });
    }
}

//exportação da classe para utilizar em outros arquivos
module.exports = ExampleMemberNameService;