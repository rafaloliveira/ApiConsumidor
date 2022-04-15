const express = require("express");

const app = express();
const titulo1 = require("./api/titulo1.json");
const titulo2 = require("./api/titulo2.json");
const titulo3 = require("./api/titulo3.json");
const titulo4 = require("./api/titulo4.json");
const titulo5 = require("./api/titulo5.json");
const titulo6 = require("./api/titulo6.json");

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/titulo1", (request, response) => {
  return response.json(titulo1);
});
app.get("/titulo2", (request, response) => {
  return response.json(titulo2);
});
app.get("/titulo3", (request, response) => {
  return response.json(titulo3);
});
app.get("/titulo4", (request, response) => {
  return response.json(titulo4);
});
app.get("/titulo5", (request, response) => {
  return response.json(titulo5);
});
app.get("/titulo6", (request, response) => {
  return response.json(titulo6);
});

app.listen(8080, () => {
  console.log("api rodando na porta 8080");
});
