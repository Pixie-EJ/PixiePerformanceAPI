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
}

module.exports = RuleService;