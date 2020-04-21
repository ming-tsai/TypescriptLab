import express from "express";
import { save, get, getAll } from "./db/db";
import { asNumber, asString } from "./typecheck/typecheck";

const server = express();

server.use(express.json());

//get /api/names
server.get("/api/names/", (_request, response) => {
  try {
    response.send(JSON.stringify(getAll()));
  } catch (error) {
    response.sendStatus(500);
    response.send(error);
  }
});

//get /api/names/{index}
server.get("/api/names/:index", (request, response) => {
  try {
    const requestIndex = asString(request.params.index);
    const index = asNumber(requestIndex);
    response.send(JSON.stringify(get(index)));
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
});

//post /api/names
server.post("/api/names", (request, response) => {
  try {
    const name = asString(request.body.name);
    save(name);
    response.sendStatus(201);
  } catch (error) {
    console.error(error.message);
    response.sendStatus(500);
  }
});

const port = 2251;
server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
