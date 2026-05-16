# FAQtec

<p align="center">
  <strong>Aplicacao web de autoatendimento academico para a Secretaria Academica da Fatec Jacarei.</strong>
</p>

<p align="center">
  <a href="#contexto-do-desafio">Contexto</a> •
  <a href="#arquitetura-geral">Arquitetura</a> •
  <a href="#como-executar">Execucao</a> •
  <a href="#documentacao">Documentacao</a>
</p>

---

<a id="contexto-do-desafio"></a>

## Contexto do desafio 📝

O **FAQtec** nasce do desafio academico proposto para o ABP 2026-1 da Fatec Jacarei: reduzir a sobrecarga da Secretaria Academica em duvidas recorrentes de alunos e interessados externos, especialmente sobre horarios, calendario academico, dispensa de disciplinas, estagio supervisionado e estrutura curricular.

O desafio oficial solicitado pelo cliente interno esta registrado em [Autoatendimento_Academico/DOCS/referencias/Desafio.pdf](Autoatendimento_Academico/DOCS/referencias/Desafio.pdf).

## Objetivo do sistema ✅

O sistema deve funcionar como um chatbot conversacional capaz de:

- conduzir o usuario por uma arvore de navegacao com menus e submenus;
- permitir consultas sobre temas academicos recorrentes;
- apresentar respostas objetivas e padronizadas;
- exibir evidencias documentais quando houver vinculo com a resposta;
- encaminhar duvidas nao resolvidas para a Secretaria Academica.

## Estado atual do repositorio 🔎

- O frontend atual ja possui um fluxo publico navegavel, mas ainda depende fortemente de dados mockados.
- O backend em TypeScript ja expoe rotas HTTP e documentacao Swagger, mas a separacao completa em camadas e a protecao das rotas administrativas fazem parte do trabalho da Sprint 2.
- O banco PostgreSQL ja possui schema e seed iniciais, mas a modelagem ainda esta em revisao para sustentar documentos, chunks, evidencias e logs de forma mais completa.
- O replanejamento das correcoes apontadas pelo professor foi incorporado ao backlog do produto, aos READMEs das sprints e a documentacao principal do repositorio.

<a id="arquitetura-geral"></a>

## Arquitetura geral 🧱

| Camada | Papel no projeto | Situacao atual |
| --- | --- | --- |
| Frontend | Interface do chatbot e futuros paineis internos | Implementado em React + TypeScript, com fluxo publico inicial |
| Backend | API HTTP, regras de negocio, autenticacao e integracao com banco | Implementado em Node.js + Express + TypeScript |
| Banco de dados | Persistencia dos nos de navegacao, usuarios, perguntas, logs e evidencias | Implementado em PostgreSQL, com schema e seed iniciais |
| Documentacao | Requisitos, backlog, sprints, processo e diagramas | Mantida na pasta `Autoatendimento_Academico/DOCS/` |

## Estrutura do repositorio 📂

```text
.
├── Autoatendimento_Academico/
│   ├── 2dsm_ABP/
│   │   ├── backend/
│   │   │   ├── src/
│   │   │   │   ├── controllers/
│   │   │   │   ├── routes/
│   │   │   │   ├── server/
│   │   │   │   └── server.ts
│   │   │   ├── package.json
│   │   │   └── tsconfig.json
│   │   ├── frontend/
│   │   │   ├── src/
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   └── App.tsx
│   │   │   ├── package.json
│   │   │   └── vite.config.ts
│   │   ├── init/
│   │   │   ├── 01_schema.sql
│   │   │   └── 02_seed.sql
│   │   ├── docker-compose.yml
│   │   └── .gitignore
│   ├── DOCS/
│   │   ├── diagrama/
│   │   ├── processo/
│   │   ├── produto/
│   │   ├── referencias/
│   │   ├── sprints/
│   │   └── README.md
│   └── README.md
├── README (1).md
└── README.md
```

### Organizacao das pastas 📋

- `Autoatendimento_Academico/2dsm_ABP/`: aplicacao principal com frontend, backend, banco e orquestracao local.
- `Autoatendimento_Academico/2dsm_ABP/backend/src/`: controllers, rotas, servidor e regras de negocio.
- `Autoatendimento_Academico/2dsm_ABP/frontend/src/`: componentes, hooks e interface principal do fluxo publico.
- `Autoatendimento_Academico/2dsm_ABP/init/`: scripts SQL de schema e seed do banco.
- `Autoatendimento_Academico/DOCS/`: documentacao funcional, tecnica e de processo.

## Tecnologias utilizadas 💻

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img alt="Swagger UI" src="https://img.shields.io/badge/Swagger_UI-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" />
  <img alt="Multer" src="https://img.shields.io/badge/Multer-4B5563?style=for-the-badge" />
  <img alt="dotenv" src="https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge" />
</p>

<p align="center">
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img alt="pg" src="https://img.shields.io/badge/pg-1F2937?style=for-the-badge" />
  <img alt="Docker Compose" src="https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

## Variaveis de ambiente 🔐

Atualmente, o projeto utiliza variaveis de ambiente para conexao com o banco e configuracao do backend.

| Variavel | Uso |
| --- | --- |
| `PORT` | Porta do backend |
| `DB_HOST` | Host do PostgreSQL |
| `DB_PORT` | Porta do PostgreSQL |
| `DB_NAME` | Nome do banco |
| `DB_USER` | Usuario do banco |
| `DB_PASSWORD` | Senha do banco |

### Onde configurar 📍

- Para `docker compose`, crie um arquivo `.env` em `Autoatendimento_Academico/2dsm_ABP/`.
- Para executar o backend localmente fora do Docker, replique as mesmas variaveis em `Autoatendimento_Academico/2dsm_ABP/backend/.env` ou exporte-as no ambiente de execucao.

<a id="como-executar"></a>

## Como executar 🚀

### Pre-requisitos

- Node.js 20 ou superior
- npm
- Docker e Docker Compose

### Modo atual do repositorio

No estado atual do codigo, o `docker-compose.yml` sobe banco e backend. O frontend ainda deve ser executado separadamente via Vite.

#### 1. Subir banco e backend com Docker Compose

Crie `Autoatendimento_Academico/2dsm_ABP/.env` com as variaveis listadas acima e execute:

```bash
docker compose up --build
```

Comando a partir de `Autoatendimento_Academico/2dsm_ABP/`.

#### 2. Executar o frontend localmente

Em `Autoatendimento_Academico/2dsm_ABP/frontend/`:

```bash
npm install
npm run dev
```

#### 3. Executar o backend localmente

Em `Autoatendimento_Academico/2dsm_ABP/backend/`:

```bash
npm install
npm run dev
```

### Build

Frontend, em `Autoatendimento_Academico/2dsm_ABP/frontend/`:

```bash
npm run build
```

Backend, em `Autoatendimento_Academico/2dsm_ABP/backend/`:

```bash
npm run build
```

## Endpoints principais 🌐

- Swagger: `http://localhost:3666/api-docs`
- API publica: `http://localhost:3666/api`
- Rotas administrativas atuais: `http://localhost:3666/admin`

> Observacao: a protecao completa das rotas administrativas com JWT e RBAC faz parte do escopo priorizado da Sprint 2.

<a id="documentacao"></a>

## Documentacao 📁

Toda a documentacao do projeto esta centralizada em `Autoatendimento_Academico/DOCS/`.

<p align="center">
  <a href="Autoatendimento_Academico/DOCS/README.md">
    <img alt="Documentacao" src="https://img.shields.io/badge/Documentacao-DOCS-1F4B99?style=for-the-badge" />
  </a>
  <a href="Autoatendimento_Academico/DOCS/produto/backlog-do-produto.md">
    <img alt="Backlog do Produto" src="https://img.shields.io/badge/Backlog-Produto-0F766E?style=for-the-badge" />
  </a>
  <a href="Autoatendimento_Academico/DOCS/produto/backlog-detalhado.md">
    <img alt="Backlog Detalhado" src="https://img.shields.io/badge/Backlog-Detalhado-7C3AED?style=for-the-badge" />
  </a>
  <a href="Autoatendimento_Academico/DOCS/sprints/README.md">
    <img alt="Sprints" src="https://img.shields.io/badge/Sprints-Acompanhamento-C2410C?style=for-the-badge" />
  </a>
  <a href="Autoatendimento_Academico/2dsm_ABP/frontend/README.md">
    <img alt="Aplicacao" src="https://img.shields.io/badge/Aplicacao-README-334155?style=for-the-badge" />
  </a>
</p>

### Links rapidos 📎

| Categoria | Acesso |
| --- | --- |
| Indice geral | [Autoatendimento_Academico/DOCS/README.md](Autoatendimento_Academico/DOCS/README.md) |
| Definition of Ready | [Autoatendimento_Academico/DOCS/processo/definition-of-ready.md](Autoatendimento_Academico/DOCS/processo/definition-of-ready.md) |
| Definition of Done | [Autoatendimento_Academico/DOCS/processo/definition-of-done.md](Autoatendimento_Academico/DOCS/processo/definition-of-done.md) |
| Diagramas | [Autoatendimento_Academico/DOCS/diagrama/README.md](Autoatendimento_Academico/DOCS/diagrama/README.md) |
| Referencias e anexos | [Autoatendimento_Academico/DOCS/referencias/README.md](Autoatendimento_Academico/DOCS/referencias/README.md) |

## Backlog 🧾

O backlog do projeto esta organizado em documentos complementares para facilitar a visao geral, o refinamento e o acompanhamento das entregas.

| Categoria | Acesso |
| --- | --- |
| Backlog do Produto | [Autoatendimento_Academico/DOCS/produto/backlog-do-produto.md](Autoatendimento_Academico/DOCS/produto/backlog-do-produto.md) |
| Backlog Detalhado | [Autoatendimento_Academico/DOCS/produto/backlog-detalhado.md](Autoatendimento_Academico/DOCS/produto/backlog-detalhado.md) |
| User stories | [Autoatendimento_Academico/DOCS/produto/user-stories.md](Autoatendimento_Academico/DOCS/produto/user-stories.md) |
| Requisitos | [Autoatendimento_Academico/DOCS/produto/requisitos.md](Autoatendimento_Academico/DOCS/produto/requisitos.md) |

## Cronograma das sprints 📅

| Sprint | Status | Entrega prevista | Frentes principais | Documento |
| --- | --- | --- | --- | --- |
| Sprint 01 | ![Status](https://img.shields.io/badge/Status-Encerrada%20com%20carry--over-F59E0B) | 05/05/2026 | Prototipo do fluxo publico e documentacao inicial | [Abrir](Autoatendimento_Academico/DOCS/sprints/sprint-01/README.md) |
| Sprint 02 | ![Status](https://img.shields.io/badge/Status-Em%20andamento-FACC15) | 25/05/2026 | Integracao real, persistencia, seguranca minima e documentacao | [Abrir](Autoatendimento_Academico/DOCS/sprints/sprint-02/README.md) |
| Sprint 03 | ![Status](https://img.shields.io/badge/Status-Planejamento-3B82F6) | 22/06/2026 | Area interna, operacao administrativa e refinamentos finais | [Abrir](Autoatendimento_Academico/DOCS/sprints/sprint-03/README.md) |

## Aplicacao

A documentacao tecnica dos modulos permanece nos READMEs especificos:

- [README principal do projeto interno](Autoatendimento_Academico/README.md)
- [README do frontend](Autoatendimento_Academico/2dsm_ABP/frontend/README.md)
- [README do backend](Autoatendimento_Academico/2dsm_ABP/backend/README.md)
- [README do banco e scripts SQL](Autoatendimento_Academico/2dsm_ABP/init/README.md)

## Status do projeto 📌

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/Status-Em%20desenvolvimento%20e%20replanejamento-2563EB?style=for-the-badge" />
</p>

Projeto academico em desenvolvimento. O replanejamento atual prioriza a conversao do fluxo mockado da Sprint 1 em um MVP publico real, integrado e reproduzivel na Sprint 2.

## Equipe 💼

| Funcao | Nome | Contatos |
| --- | --- | :---: |
| Project Owner | Luiza Goncalves Manchini | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/luiza-manchini) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiza-manchini-b51a7b336/) |
| Scrum Master | Felipe Faria Machado | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/felipefmac) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/felipefariamachado) |
| Dev Team | Ariana Ferreira dos Santos | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/arianaferresan) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://br.linkedin.com/in/arianaferreira) |
| Dev Team | Eloah Sousa da Silva | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/eloahsousaa) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eloah-sousa-650038349/) |
| Dev Team | Lucas Monteiro Correia | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/lucasmonteiro14) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucasmonteirocorreia) |
| Dev Team | Pedro Goncalves Sampaio | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PedroSmp) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-sampaio-463a77375) |
| Dev Team | William Max dos Santos Silva | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/WilliamM4x) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/william-max-7b8036140/) |

---

<p align="center">
  Desenvolvido para o ABP 2026-1 • Fatec Jacarei
</p>
