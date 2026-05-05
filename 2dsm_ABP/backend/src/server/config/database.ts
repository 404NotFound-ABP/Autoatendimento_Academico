import {Pool} from "pg";
import * as dotenv from "dotenv";

dotenv.config();

// Configuração do Banco usando process.env
export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

pool.on("connect", () => {
  console.log("Base de dados conectada com sucesso!");
});

pool.on("error", (err) => {
  console.error("Erro na conexão com a base de dados:", err);
});
