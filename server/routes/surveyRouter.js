const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const survey = req.body;
    console.log(survey)
    const queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;
    const queryParams = [
        survey.feeling,      
        survey.understanding,
        survey.support,
        survey.comments           
    ]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
});

module.exports = router