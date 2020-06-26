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

router.post('/', (req,res) => {
    console.log('In the POST route');
    console.log(req.body);
    console.log(req.body.description);
    console.log(req.body.image_url);
    console.log('is authenticated?', req.isAuthenticated);
    const queryText = `INSERT INTO "item" (description, image_url)
                        VALUES ($1, $2)`;
    pool.query(queryText, [req.body.description, req.body.image_url])
        .then((result) => {
            console.log('In POST', result);
            res.sendStatus(201)
        }).catch((error) => {
            console.log('Error in POST', error);
            res.sendStatus(500);
        })
})
module.exports = router;