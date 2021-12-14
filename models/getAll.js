const connection = require('../insfrastructure/connection.js');

class SelectAll{
    /*EXEMPLO */
    selectAllMembers(res){
        const sql = 'SELECT * FROM members';/**/

        connection.query(sql, (err, results) => {
            if(err) {
                console.log(err);
                res.status(400);
            } else {
                res.json(200);
            }
        });
    }
    
}