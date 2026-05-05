import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes  from './routes/authRoutes';
import adminRoutes from './routes/adminRoutes';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 3666;

// ─── Middlewares globais ───────────────────────────────────────────────────
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
  ],
  credentials: true,
}));
app.use(express.json());

// ─── Rotas ────────────────────────────────────────────────────────────────
app.use('/auth',  authRoutes);
app.use('/admin', adminRoutes);

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 genérico
app.use((_req, res) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

// ─── Inicia servidor ──────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`   Ambiente: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
