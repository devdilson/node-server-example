// Importa as bibliotecas do express
import express, { Express, Request, Response } from "express";
// Importa a biblioteca dotenv para ler o arquivo .env
import dotenv from "dotenv";
dotenv.config();
import { handleUserRequest } from "./endpoints/users";

// Cria uma instância servidor com express
const app: Express = express();
const port = 3000;

app.get("/", handleUserRequest);

// Prepara o servidor para iniciar na porta
app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
