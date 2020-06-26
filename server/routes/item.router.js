const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// targets /api/item
router.get("/", (req, res) => {
  console.log("In item GET route");
  let queryText = `SELECT * FROM "item"`;
  pool
    .query(queryText)
    .then((result) => {
      console.log("result", result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Theres an error in item.router", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  //   console.log("In the POST route");
  //   console.log(req.body);
  //   console.log(req.body.description);
  //   console.log(req.body.image_url);
  console.log("is authenticated?", req.isAuthenticated);
  //needs user_id
  const queryText = `INSERT INTO "item" (description, image_url, user_id)
                        VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [
      req.body.description,
      req.body.image_url,
      req.body.user_id
      //   req.body.user_id,
    ])
    .then((result) => {
      console.log("In POST", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error in POST", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  queryText = `DELETE FROM "item" WHERE id=$1;`;

  pool
    .query(queryText, [id])
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("DB DELETE ERR", error);
    });
});
module.exports = router;
