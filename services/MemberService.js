const connection = require('../infrastructure/connection');

class MemberService {
    async create(body, res) {
        const sql = 'INSERT INTO members (name, email, active, role, enterprises_id) VALUES (?,?,?,?,?)';
        const {name, email, active, role, enterprises_id} = body;
        await connection.query(sql, [name, email, active, role, enterprises_id], (err, results) => {
            if (err) {
                return err;
            }
            setTimeout(() => {
                return res(results);
            });
        });
    }   
}

module.exports = MemberService;