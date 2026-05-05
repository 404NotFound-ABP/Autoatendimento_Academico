import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     Number(process.env.DB_PORT) || 5432,
  user:     process.env.DB_USER     || 'fatec_user',
  password: process.env.DB_PASSWORD || '123',
  database: process.env.DB_NAME     || 'autoatendimento_db',
});
