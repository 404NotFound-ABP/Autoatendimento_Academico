# Autoatendimento Secretaria Acadêmica - Fatec Jacareí

Projeto base para o desafio ABP 2026-1 do 2º semestre do curso de DSM.

## Tema do Semestre

Aplicação Web para Autoatendimento da Secretaria Acadêmica da Fatec Jacareí.

## Desafio (problema)

A Secretaria Acadêmica da Fatec Jacareí recebe, de forma recorrente, dúvidas de alunos e de interessados externos, especialmente relacionadas a:

- Horários de aulas;
- Datas do calendário acadêmico;
- Regras de dispensa e aproveitamento de disciplinas;
- Estágio supervisionado;
- Estrutura curricular dos cursos (AACC, TG/TCC, obrigatoriedade e carga horária).

Esse cenário gera sobrecarga operacional, aumento no tempo de resposta e possíveis inconsistências nas orientações fornecidas, principalmente em períodos críticos do semestre, como rematrícula, ajustes de matrícula, trancamentos e exames finais.

O desafio proposto consiste no desenvolvimento de uma aplicação web de autoatendimento, baseada em um modelo de chatbot conversacional, capaz de:

- Conduzir o usuário por uma árvore de navegação estruturada (menus e perguntas guiadas);
- Permitir consultas diretas;
- Fornecer respostas objetivas, padronizadas e verificáveis.

Ao final de cada atendimento, o sistema deverá apresentar:

- Uma resposta resumida e clara;
- Quando aplicável, um trecho de evidência extraído de documentos oficiais, tais como:
  - Regulamento Geral dos Cursos Superiores das Fatecs;
  - Manual de Estágio;
  - Calendário Acadêmico;
  - PPC e horários dos cursos.

Essa abordagem garante rastreabilidade, confiabilidade da informação e redução de ambiguidades.

## Stack

- Frontend: React + TypeScript + Vite
- Backend: Node.js + TypeScript + Express + JWT
- Banco de Dados: PostgreSQL
- Orquestração: Docker Compose

## Estrutura

- `backend/`: API HTTP com autenticação JWT, RBAC e módulos de negócio
- `frontend/`: Interface React para navegação do autoatendimento
- `database/`: DDL/DML (schema e seed)

## Como subir a aplicação com Docker Compose

Pré-requisitos:

- Docker Engine e Docker Compose instalados.

Passo a passo:

1. Confira ou ajuste as variáveis no arquivo `.env` na raiz do repositório.
2. Suba todos os containers:
   ```bash
   docker compose up --build -d
   ```
3. Verifique se os serviços estão em execução:
   ```bash
   docker compose ps
   ```
4. Para acompanhar logs:
   ```bash
   docker compose logs -f
   ```
5. Para parar o ambiente:
   ```bash
   docker compose down
   ```

## URLs

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- pgAdmin: `http://localhost:5050`
- Healthcheck backend: `http://localhost:3000/health`

## Banco via Rede Interna

- A comunicação ocorre pela rede interna Docker `internal_net` (host `postgres`).
- Para administração do banco, utilize o pgAdmin.
- Configuração no pgAdmin:
  - Host: `postgres`
  - Port: `5432`
  - User: `secretaria_user`
  - Password: `secretaria_pass`
- Para acesso direto no host (ex.: DBeaver/psql), use:
  - Host: `localhost`
  - Port: `5433` (ou valor de `POSTGRES_PORT`)

## Usuários iniciais (seed)

- Admin: `admin@fatec.sp.gov.br` / `Admin@123`
- Secretária: `secretaria@fatec.sp.gov.br` / `Secretaria@123`



