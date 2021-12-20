const connection = require("../infrastructure/connection");

class CategoryService {

  async create(res, body) {
    const sql =
      "INSERT INTO categories (name, description, enterprises_id) VALUES (?,?,?)";

    const {name, description, enterprises_id} = body;

    await connection.query(
      sql,
      [name, description, enterprises_id],
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

module.exports = CategoryService;
