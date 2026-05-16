# Backend

## Responsabilidade da pasta

Esta pasta concentra a API HTTP do FAQtec, responsavel por expor rotas publicas e administrativas, integrar o sistema ao PostgreSQL e sustentar autenticacao, persistencia e regras de negocio.

## Tecnologias

- Node.js
- Express
- TypeScript
- PostgreSQL (`pg`)
- Swagger UI
- Multer
- dotenv

## Organizacao interna atual

| Caminho | Papel |
| --- | --- |
| `src/server.ts` | Inicializacao do servidor Express |
| `src/routes/` | Agrupamento das rotas publicas e administrativas |
| `src/controllers/` | Controllers atuais da API |
| `src/server/config/` | Configuracoes de banco, Swagger e upload |

## Scripts principais

Em `2dsm_ABP/backend/`:

```bash
npm install
npm run dev
npm run build
```

## Variaveis de ambiente

O backend depende, no minimo, de:

- `PORT`
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`

Para execucao local, configure essas variaveis em `2dsm_ABP/backend/.env` ou exporte-as no ambiente de execucao.

## Situacao atual

- O backend ja expoe rotas HTTP e documentacao Swagger em `/api-docs`.
- A estrutura ainda esta em consolidacao para atender a separacao esperada entre routes, controllers, services, repositories e middlewares.
- A Sprint 2 prioriza essa reorganizacao, alem de autenticacao com JWT, protecao de rotas e persistencia real do fluxo publico.
