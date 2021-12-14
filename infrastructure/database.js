class Database {
    init(connection){
        this.connection = connection;
        this.createDatabase();
    }

    createDatabase(){
        const sql = `CREATE /*NOME BANCO*/ IF NOT EXISTS ...`;
        this.connection.query(sql, (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Database not exists, creating...");
            }
        });
    }
}

module.exports = Database;