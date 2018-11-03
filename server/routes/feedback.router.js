const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res)=> {
    console.log('request received')
    feedback = req.body;
    feeling = feedback.feeling;
    understanding = feedback.understanding;
    support = feedback.support;
    comments = feedback.comments;
    sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES($1,$2,$3,$4)`;
    pool.query(sqlText,[feeling, understanding, support, comments])
    .then((response)=> {
        res.send(response)
    }).catch((err)=> {
        console.log(err);
        res.send(err)
    })

})

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;
