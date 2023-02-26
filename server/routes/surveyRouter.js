const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

// inserts survey to database
router.post('/', (req, res) => {
    const survey = req.body;
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

// selects all surveys from database
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "id" DESC';
    pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      res.sendStatus(500);
    });
  });

// deletes survey from database by id
router.delete('/:id', async (req, res) => {
    const queryText = `
        DELETE FROM "feedback"
        WHERE id = $1;
    `;
    const queryParams = [req.params.id];

    pool.query(queryText, queryParams)
        .then(
            res.sendStatus(204)   
        )
        .catch((err) => {
            res.sendStatus(500);
        });
});

// updates 'flagged' property from the database by survey id
router.put('/:id', async (req, res) =>{
  const flagged = !req.body.flagged
  const id = req.params.id

  const queryText = `
        UPDATE "feedback"
        SET "flagged" = $1
        WHERE id = $2;
    `;
  const queryParams = [flagged, id]

  pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(204);
        })
        .catch((err) => {
            res.sendStatus(500);
        });
})

module.exports = router