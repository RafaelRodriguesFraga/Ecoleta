import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        
        //Padroniza o acesso a pasta de acordo com seu SO    }
        filename: path.resolve(__dirname, 'database.sqlite' ),
    },
    useNullAsDefault: true,
});

export default connection;