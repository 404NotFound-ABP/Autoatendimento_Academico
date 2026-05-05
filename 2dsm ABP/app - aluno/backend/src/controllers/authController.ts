import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../config/database';
import { JwtPayload, UserRow } from '../types';

const JWT_SECRET  = process.env.JWT_SECRET  || 'dev_secret_troque_em_producao';
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN || '8h';

// POST /auth/login
export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'email e password são obrigatórios.' });
    return;
  }

  try {
    const result = await pool.query<UserRow>(
      'SELECT * FROM users WHERE email = $1',
      [email.trim().toLowerCase()]
    );

    const user = result.rows[0];

    if (!user) {
      res.status(401).json({ message: 'Credenciais inválidas.' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      res.status(401).json({ message: 'Credenciais inválidas.' });
      return;
    }

    const payload: JwtPayload = {
      id:    user.id,
      email: user.email,
      role:  user.role,
      name:  user.name,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES as jwt.SignOptions['expiresIn'],
    });

    res.status(200).json({
      token,
      user: {
        id:    user.id,
        email: user.email,
        role:  user.role,
        name:  user.name,
      },
    });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
}

// GET /auth/me  →  retorna os dados do usuário logado (token já validado pelo middleware)
export function me(req: Request, res: Response): void {
  const user = (req as Request & { user: JwtPayload }).user;
  res.status(200).json({ user });
}
