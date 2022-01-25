const connection = require("../infrastructure/connection");

class SquadService {

  async create(body, res){
    const sql =
      "INSERT INTO teams (name, enterprises_id) VALUES (?,?)";

    const {name, enterprises_id} = body;

    await connection.query(
      sql,
      [name, enterprises_id],
      (err, results) => {
        if (err) {
          return err;
        }

        setTimeout(() => {
          return res(results);
        });
      }
    );
  }
}

module.exports = SquadService;
