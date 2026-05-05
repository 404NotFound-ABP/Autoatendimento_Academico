import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '@/server/config/swagger.js';
import routes from '@/routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());

// Rota do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

// ... outras rotas POST e PUT

const PORT = process.env.PORT || 3666;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});