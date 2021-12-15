import connection from '../../infrastructure/connection';

class GetMemberService {
    async execute(name, type, date) {
        const sql = 'SELECT * FROM members';

        connection.query(sql, (err, results) => {
            if (err) {
                return res.status(400);
            }
            return results;
        });
    }   
}

export { GetMemberService };