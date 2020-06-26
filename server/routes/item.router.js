const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('In item GET route');
    let queryText = `SELECT * FROM "item"`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Theres an error in item.router', error);
        res.sendStatus(500);
    })
})

module.exports = router;