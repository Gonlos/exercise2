const axios = require("axios").create({
  baseURL: `http://${ process.env.MESSAGE_APP || "localhost" }:3000/message`
});

class MessageApp {
  emit({ destination, body }) {
    return axios
      .post("/", { destination, body })
      .then(response => {
        // console.log("ok",response)
        return {
          status: response.status,
          data: response.data
        };
      })
      .catch(error => {
        // console.log("error",error)
        let data;
        data = error.response == undefined ? error : error.response.data;
        return {
          status: 500,
          data
        };
      });
  }
}

module.exports = new MessageApp();
