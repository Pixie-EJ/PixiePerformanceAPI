const utilSettings = require('./settings/settings.js');
const connection = require('./infrastructure/connection.js');
const Database = require('./infrastructure/database.js');

const port = 5600;

connection.connect(
    (err) =>{
        if(err){
            console.log(err);
        } else {
            console.log('Connected to the database');

            const app = utilSettings();

            Database.init(connection);

            app.listen(port, ()=> {
                console.log('Server is running on port ' + port);
            });

        }
    }
);

