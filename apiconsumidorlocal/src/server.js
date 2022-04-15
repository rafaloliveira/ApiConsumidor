const express = require("express");

const app = express();
const titulo1 = require("./api/titulo1.json");
const titulo2 = require("./api/titulo2.json");

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/titulo1", (request, response) => {
  return response.json(titulo1);
});
app.get("/titulo2", (request, response) => {
  return response.json(titulo2);
});

app.listen(8080, () => {
  console.log("api rodando na porta 8080");
});
