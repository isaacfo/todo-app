// const personname = 'Milla'

// console.log(`hello ${personname}`);

// console.log('that should not have worked correctly.');

// const pgPromise = require('pg-promise');
// const pgp = require('pg-promise')();

const pgp = require('pg-promise')();
const db = pgp({
    host:'localhost',
    port: 5432,
    database:'node-todo-app-db'

});
// example of grabbing all the rows
function getAll() {
    return db.any('select * from todos');
       
    
getAll()
    .then(results => {
            console.log(results);
            console.log
        })

}


// RETRIEVE
// example of grabbing one row
function getbyid(id) {
    return db.one(`select * from todos where id = $1`)
        .catch(err => {
            //got nuthing
            return {
                name: 'no todo found.'
            };
        })

}

// getbyid(2)
//     .then(result => {
//         console.log(result);
//     })
// CREATE
// example of adding a row
function add(name, completed) {
return db.result( `insert into todos (name, completed)
    values
        ($1, $2)
        returning id`, [name, completed])
}

// add('walk the dog', false)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);

//     })

// UPDATE
// example of updating a row

// example of deleting a row
// DELETE
function deletebyid(id) {
    return db.result(`delete from todos where id = $1`, [id])
        
}

deletebyid(9)
    .then(result =>{
        console.log(result.rowCount);

    })