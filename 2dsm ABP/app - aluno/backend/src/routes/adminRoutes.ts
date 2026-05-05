import { Router, Request, Response } from 'express';
import { authMiddleware, authorize } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas admin exigem autenticação
router.use(authMiddleware);

// ─── Perguntas ────────────────────────────────────────────────────────────────
router.get('/perguntas', authorize('ADMIN', 'SECRETARIA'), (_req: Request, res: Response) => {
  res.json({ message: 'Lista de perguntas — a implementar.' });
});

router.patch('/perguntas/:id/status', authorize('ADMIN', 'SECRETARIA'), (req: Request, res: Response) => {
  res.json({ message: `Status da pergunta ${req.params.id} — a implementar.` });
});

// ─── Usuários ─────────────────────────────────────────────────────────────────
router.get('/usuarios', authorize('ADMIN'), (_req: Request, res: Response) => {
  res.json({ message: 'Lista de usuários — a implementar.' });
});

router.post('/usuarios', authorize('ADMIN'), (_req: Request, res: Response) => {
  res.json({ message: 'Criação de usuário — a implementar.' });
});

// ─── Logs ─────────────────────────────────────────────────────────────────────
router.get('/logs', authorize('ADMIN'), (_req: Request, res: Response) => {
  res.json({ message: 'Logs — a implementar.' });
});

export default router;
