import { Router } from 'express';
import { login, me } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// POST /auth/login  →  autentica e retorna o JWT
router.post('/login', login);

// GET  /auth/me     →  retorna dados do usuário logado
router.get('/me', authMiddleware, me);

export default router;
