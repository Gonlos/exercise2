var express = require("express");
const router = express.Router();
const MessageApp = require("../MessageApp");

router.post("/", (req, res, next) => {
  const { destination, body } = req.body;
  MessageApp.emit({ destination, body }).then(response => {
    res
      .status(response.status)
      .send(
        `Env: ${
          process.env.NODE_ENV || "local"
        },\nStatus: ${
          response.status
        }, \nData: ${response.data}`
      );
  });
});

module.exports = router;
