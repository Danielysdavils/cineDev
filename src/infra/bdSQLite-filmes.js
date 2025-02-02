import sqlite3 from 'sqlite3';
const bdSQLite = new sqlite3.Database('./src/infra/filmes.db');


//Processamento de sinal
process.on('SIGINT', () =>
    bdSQLite.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

export {bdSQLite};