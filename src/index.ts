// Importa as bibliotecas do express
import express, { Express, Request, Response } from "express";
// Importa a biblioteca dotenv para ler o arquivo .env
import dotenv from "dotenv";
// Importa o endpoint
import { handleUserRequest } from "./endpoints/users";
import { getFirebaseAdmin } from "./firebase";

// Inicializa o framework de configuração
dotenv.config();

// Inicializa firebase 
getFirebaseAdmin();

// Cria uma instância servidor com express
const serverApp: Express = express();
const port = 3000;

// Registra o novo endpoint
serverApp.get("/api/user", handleUserRequest);

// Prepara o servidor para iniciar na porta
serverApp.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
