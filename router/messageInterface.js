var express = require("express");
const router = express.Router();
const axios = require("axios").create({
  baseURL: "http://messageapp:3000/message"
});

router.post("/", (req, res, next) => {
  const { destination, body } = req.body;

  axios
    .post("/", { destination, body })
    .then(response => {
      console.log("response-----------------");
      res.send(`${response.data}`);
    })
    .catch(err => {
      console.log("ERR");
      console.log(err);
      res.send(err.data);
    });
});
module.exports = router;
