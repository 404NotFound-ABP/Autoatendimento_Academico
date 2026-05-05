# Backend — Autenticação JWT

> Node.js + TypeScript + PostgreSQL + JWT  
> Projeto ABP 2026-1 — Fatec Jacareí

---

## Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- npm

---

## Instalação

```bash
cd backend
npm install
cp .env.example .env
# Edite o .env com suas credenciais do banco
```

---

## Banco de dados

```bash
# Cria o banco e o usuário (se ainda não existirem)
psql -U postgres -c "CREATE USER fatec_user WITH PASSWORD '123';"
psql -U postgres -c "CREATE DATABASE autoatendimento_db OWNER fatec_user;"

# Executa seed (insere admin e secretaria de teste)
npm run db:seed
```

**Usuários criados pelo seed:**

| email                        | senha      | role       |
|------------------------------|------------|------------|
| admin@fatec.sp.gov.br        | Admin@123  | ADMIN      |
| secretaria@fatec.sp.gov.br   | secretaria123 | SECRETARIA |

> ⚠️ Troque as senhas em produção usando o utilitário:
> ```bash
> npx ts-node src/utils/hashPassword.ts novasenha
> ```

---

## Executar em desenvolvimento

```bash
npm run dev
# Servidor em http://localhost:3666
```

---

## Endpoints

### POST `/auth/login`
Autentica o usuário e retorna o JWT.

**Body:**
```json
{
  "email": "admin@fatec.sp.gov.br",
  "password": "Admin@123"
}
```

**Resposta 200:**
```json
{
  "token": "eyJhbGci...",
  "user": {
    "id": "07558c62-...",
    "email": "admin@fatec.sp.gov.br",
    "role": "ADMIN",
    "name": "Administrador"
  }
}
```

---

### GET `/auth/me`
Retorna os dados do usuário autenticado.

**Header:** `Authorization: Bearer <token>`

**Resposta 200:**
```json
{
  "user": {
    "id": "07558c62-...",
    "email": "admin@fatec.sp.gov.br",
    "role": "ADMIN",
    "name": "Administrador"
  }
}
```

---

### GET `/admin/perguntas`
Lista perguntas. Requer role: `ADMIN` ou `SECRETARIA`.

### PATCH `/admin/perguntas/:id/status`
Atualiza status de uma pergunta. Requer role: `ADMIN` ou `SECRETARIA`.

### GET `/admin/usuarios`
Lista usuários. Requer role: `ADMIN`.

### POST `/admin/usuarios`
Cria usuário. Requer role: `ADMIN`.

### GET `/admin/logs`
Visualiza logs. Requer role: `ADMIN`.

---

## Erros de autenticação

| Status | Mensagem                             | Causa                              |
|--------|--------------------------------------|------------------------------------|
| 400    | email e password são obrigatórios    | Body incompleto                    |
| 401    | Credenciais inválidas                | E-mail não existe ou senha errada  |
| 401    | Token não fornecido                  | Header Authorization ausente       |
| 401    | Token expirado                       | Token venceu (8h)                  |
| 401    | Token inválido                       | Token adulterado                   |
| 403    | Acesso negado                        | Role sem permissão                 |

---

## Uso do middleware em novas rotas

```typescript
import { authMiddleware, authorize } from '../middlewares/authMiddleware';

// Qualquer usuário autenticado
router.get('/rota', authMiddleware, handler);

// Apenas ADMIN
router.post('/rota', authMiddleware, authorize('ADMIN'), handler);

// ADMIN ou SECRETARIA
router.get('/rota', authMiddleware, authorize('ADMIN', 'SECRETARIA'), handler);
```
