const express = require("express");
const router = express.Router();
const { getMethod, postMethod } = require("../controllers/schema");

router.get("/schema", async (req, res) => {
  try {
    let data = await getMethod(req.query);
    res.json({
      statusCode: 200,
      data
    });
  } catch (err) {
    res.json({
      statusCode: 400,
      error: err
    });
  }
});

router.post("/schema", async (req, res) => {
  try {
    let body = req.body;
    let data = await postMethod(body);
    res.json({
      statusCode: 200,
      data
    });
  } catch (err) {
    res.json({
      statusCode: 400,
      error: err
    });
  }
});

module.exports = router;
