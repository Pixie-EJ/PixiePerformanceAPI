const connection = require('../infrastructure/connection');

class RuleService {
    async getRule(res) {
        const sql = 'SELECT * FROM rules';
        await connection.query(sql, (err, results) => {
            if (err) {
                return err;
            }
            setTimeout(() => {
                return res(results);
            });
        });
    }   

    async create(body, res){
        const sql = `INSERT INTO rules (name, point, has_multiplier, enterprises_id) VALUES (?, ?, ?, ?)`;
        const {name, point, has_multiplier, enterprises_id} = body;
        await connection.query(sql, [name, point, has_multiplier, enterprises_id],(err, results) => {
            if (err) {
                return err;
            }
            setTimeout(() => {
                return res(results);
            });
        });
    }
}

module.exports = RuleService;