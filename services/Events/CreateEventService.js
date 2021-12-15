import connection from '../../infrastructure/connection';

class CreateEventService {
    async execute(name, type, date) {
        const sql = `INSERT INTO events (nome, tipo, data) VALUES (${name}, ${type}, ${date})`;

        connection.query(sql, (err, results) => {
            if (err) {
                return res.status(400);
            }
            return results;
        });
    }   
}

export { CreateEventService };

