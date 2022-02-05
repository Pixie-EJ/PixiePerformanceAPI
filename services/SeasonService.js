const connection = require('../infrastructure/connection');

class SeasonService{
    async create(body, res){
        const sql = "INSERT INTO seasons (name, description, started_at, ended_at, enterprises_id) VALUES (?,?,?,?,?)";
        const {name, description, started_at, ended_at, enterprises_id} = body;
        await connection.query(
            sql,
            [name, description, started_at, ended_at, enterprises_id],
            (err, results) => {
                if(err){
                    return err;
                }

                setTimeout(() => {
                    return res(results);
                  });
            }
        )

    }
}
module.exports = SeasonService;