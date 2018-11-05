const personname = 'Milla'

console.log(`hello ${personname}`);

console.log('that should not have worked correctly.');

// const pgPromise = require('pg-promise');
// const pgp = require('pg-promise')();

const pgp = require('pg-promise')();
const db = pgp({
    host:'localhost',
    port: 5432,
    database:'node-todo-app-db'

});

db.any('select * from todos')
    .then(results => {
        console.log(results);
    })