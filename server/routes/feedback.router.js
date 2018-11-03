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

router.delete('/:id', (req,res)=> {
    let id=req.params.id;
    let sqlText = (`DELETE FROM feedback WHERE "id"=$1`)
    pool.query(sqlText, [id])
    .then((response)=> {
        console.log(response);
        res.sendStatus(201);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(201)
    })
})

module.exports = router;
