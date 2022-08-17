const exp = require("express");
const app = exp();

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

app.get("/", (request, response) => {
  const output = `${day}-${month}-${year}`;
  response.send(date);
});

module.exports = app;
