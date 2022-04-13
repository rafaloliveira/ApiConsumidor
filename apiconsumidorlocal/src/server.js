const express = require("express");

const app = express();
const data = require("./api/data.json");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  return response.json(data);
});

app.listen(8080, () => {
  console.log("api rodando na porta 8080");
});
