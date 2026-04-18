# FAQtec

<p align="center">
  <strong>Plataforma web de autoatendimento acadêmico para a Secretaria Acadêmica da Fatec Jacareí.</strong>
</p>

<p align="center">
  <a href="#documentacao">Documentação</a> •
  <a href="#backlog">Backlog</a> •
  <a href="#sprints">Sprints</a> •
  <a href="#aplicacao">Aplicação</a>
</p>

---

## Visão Geral 📝

O **FAQtec** foi criado para centralizar dúvidas frequentes da Secretaria Acadêmica em uma única plataforma, reduzindo a sobrecarga do atendimento manual e melhorando o acesso a informações institucionais por alunos e público externo.

A aplicação organiza o atendimento em fluxos guiados, consultas objetivas e respostas baseadas em documentos oficiais, tornando o processo mais claro, rápido e rastreável.

## Problema 🧩

Atualmente, grande parte das orientações acadêmicas depende de atendimento humano para esclarecer temas recorrentes, como:

- Matrícula e rematrícula
- Calendário acadêmico
- Horários de aula
- Estágio supervisionado
- Estrutura curricular dos cursos
- Documentos e procedimentos institucionais

Esse modelo aumenta o tempo de resposta, gera retrabalho e dificulta a padronização das informações repassadas.

## Solução Proposta ✅

O FAQtec propõe uma aplicação web de autoatendimento capaz de:

- Conduzir o usuário por menus e submenus guiados;
- Permitir consultas sobre temas acadêmicos recorrentes;
- Apresentar respostas objetivas e padronizadas;
- Exibir evidências documentais vinculadas às respostas;
- Encaminhar dúvidas não resolvidas para a Secretaria Acadêmica.

<a id="documentacao"></a>

## Documentação 📁

Toda a documentação do projeto está centralizada na pasta [DOCS](DOCS/README.md).

<p align="center">
  <a href="DOCS/README.md">
    <img alt="Documentação" src="https://img.shields.io/badge/Documenta%C3%A7%C3%A3o-DOCS-1F4B99?style=for-the-badge" />
  </a>
  <a href="DOCS/produto/backlog-do-produto.md">
    <img alt="Backlog do Produto" src="https://img.shields.io/badge/Backlog-Produto-0F766E?style=for-the-badge" />
  </a>
  <a href="DOCS/produto/backlog-detalhado.md">
    <img alt="Backlog Detalhado" src="https://img.shields.io/badge/Backlog-Detalhado-7C3AED?style=for-the-badge" />
  </a>
  <a href="DOCS/sprints/README.md">
    <img alt="Sprints" src="https://img.shields.io/badge/Sprints-Acompanhamento-C2410C?style=for-the-badge" />
  </a>
  <a href="2dsm%20ABP/app%20-%20aluno/README.md">
    <img alt="Aplicação" src="https://img.shields.io/badge/Aplica%C3%A7%C3%A3o-README-334155?style=for-the-badge" />
  </a>
</p>

### Links Rápidos 📎

| Categoria | Acesso |
| --- | --- |
| Índice geral | [DOCS/README.md](DOCS/README.md) |
| Definition of Ready | [DOCS/processo/definition-of-ready.md](DOCS/processo/definition-of-ready.md) |
| Definition of Done | [DOCS/processo/definition-of-done.md](DOCS/processo/definition-of-done.md) |
| Referências e anexos | [DOCS/referencias/README.md](DOCS/referencias/README.md) |

<a id="backlog"></a>

## Backlog 🧾

O backlog do projeto está organizado em documentos complementares para facilitar a visão geral, o refinamento e o acompanhamento das entregas.

| Categoria | Acesso |
| --- | --- |
| Backlog do Produto | [DOCS/produto/backlog-do-produto.md](DOCS/produto/backlog-do-produto.md) |
| Backlog Detalhado | [DOCS/produto/backlog-detalhado.md](DOCS/produto/backlog-detalhado.md) |
| User stories | [DOCS/produto/user-stories.md](DOCS/produto/user-stories.md) |
| Requisitos | [DOCS/produto/requisitos.md](DOCS/produto/requisitos.md) |

<a id="sprints"></a>

## Cronograma das Sprints 📅

| Sprint | Status | Entrega prevista | Documento |
| --- | --- | --- | --- |
| Sprint 01 | ![Status](https://img.shields.io/badge/Status-Em%20andamento-FACC15) | 04/05/2026 | [Abrir](DOCS/sprints/sprint-01/README.md) |
| Sprint 02 | ![Status](https://img.shields.io/badge/Status-Planejamento-3B82F6) | 25/04/2026 | [Abrir](DOCS/sprints/sprint-02/README.md) |
| Sprint 03 | ![Status](https://img.shields.io/badge/Status-Planejamento-3B82F6) | 22/06/2026 | [Abrir](DOCS/sprints/sprint-03/README.md) |

## Estrutura do Repositório 📂

```text
.
├── DOCS/
│   ├── processo/
│   ├── produto/
│   ├── referencias/
│   ├── sprints/
│   └── README.md
├── 2dsm ABP/
│   ├── app - aluno/
│   │   ├── .gitignore
│   │   ├── backend/
│   │   ├── database/
│   │   ├── docker-compose.yml
│   │   ├── frontend/
│   │   └── README.md
│   └── arquivos/
└── README.md
```

### Organização das Pastas 📋

- `DOCS/`: documentação funcional, processual e acompanhamento das sprints.
- `2dsm ABP/app - aluno/`: aplicação principal com frontend, backend, banco e orquestração local.
- `2dsm ABP/arquivos/`: documentos acadêmicos utilizados como base de conhecimento.

<a id="aplicacao"></a>

## Aplicação

A documentação técnica da aplicação permanece no módulo principal:

- [README da aplicação](2dsm%20ABP/app%20-%20aluno/README.md)
- [README do banco](2dsm%20ABP/app%20-%20aluno/database/README.md)
- [README dos scripts SQL](2dsm%20ABP/app%20-%20aluno/database/init/README.md)

## Tecnologias Utilizadas 💻

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img alt="JWT" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
</p>

<p align="center">
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img alt="Docker" src="https://img.shields.io/badge/Docker%20Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

## Status do Projeto 📌

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/Status-Em%20organiza%C3%A7%C3%A3o%20e%20desenvolvimento-2563EB?style=for-the-badge" />
</p>

Projeto acadêmico em desenvolvimento, com foco na construção de uma plataforma de autoatendimento confiável, organizada e sustentada por documentação centralizada.

## Equipe 💼

A equipe do projeto é formada por alunos do curso de Desenvolvimento de Software Multiplataforma.

| Função | Nome | Contatos |
| --- | --- | :---: |
| Project Owner | Luiza Gonçalves Manchini | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/luiza-manchini) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiza-manchini-b51a7b336/) |
| Scrum Master | Felipe Faria Machado | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/felipefmac) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/felipefariamachado) |
| Dev Team | Ariana Ferreira dos Santos | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/arianaferresan) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://br.linkedin.com/in/arianaferreira) |
| Dev Team | Eloah Sousa da Silva | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/eloahsousaa) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eloah-sousa-650038349/) |
| Dev Team | Lucas Monteiro Correia | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/lucasmonteiro14) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucasmonteirocorreia) |
| Dev Team | Pedro Gonçalves Sampaio | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/PedroSmp) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-sampaio-463a77375) |
| Dev Team | William Max dos Santos Silva | [![GitHub](https://img.shields.io/badge/GitHub-Perfil-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/WilliamM4x) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/william-max-7b8036140/) |

---

<p align="center">
  Desenvolvido para o ABP 2026-1 • Fatec Jacareí
</p>
