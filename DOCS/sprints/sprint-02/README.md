# Sprint 02

## Status

![Status](https://img.shields.io/badge/Status-Planejamento-3B82F6)

## Período

| Marco | Data |
| --- | --- |
| Entrega prevista | 25/04/2026 |

## Objetivo

Finalizar o núcleo funcional do sistema, consolidando frontend e backend e preparando a integração principal com a base de dados e as regras de acesso.

## Sprint Backlog

| ID | Frente | Item | Prioridade | Recorte da Sprint |
| --- | --- | --- | --- | --- |
| DW03 | Frontend | Consultas diretas no autoatendimento | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Implementar a consulta direta como complemento à navegação guiada. |
| DW05 | Frontend | Evidências documentais vinculadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir a referência documental vinculada à resposta apresentada ao usuário. |
| DW07 | Frontend | Frontend em React com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Finalizar o frontend do fluxo principal e da integração com os serviços desta etapa. |
| TP04 | Backend e Dados | Encaminhamento de perguntas para a secretaria | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Permitir o envio da dúvida ao final do atendimento. |
| BD03 | Backend e Dados | Modelagem e carga inicial do banco PostgreSQL | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Revisar a modelagem existente, validar a estrutura e preparar a base para integração. |
| TP07 | Backend e Dados | API em Node.js com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Implementar a API necessária para sustentar a navegação, autenticação e encaminhamento de perguntas. |
| TP01 | Autenticação e Acesso | Perfis de acesso do sistema | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Estruturar o acesso público e os perfis internos previstos no sistema. |
| TP06 | Autenticação e Acesso | Login, JWT e autorização por papel | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Implementar a autenticação inicial de usuários internos e o controle de acesso por papel. |
| TP09 | Autenticação e Acesso | Segurança com hash e JWT | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Aplicar hash de senha, JWT e proteções básicas de segurança do backend. |
| ES01 | Documentação | Documentação e diagramas UML | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Produzir o diagrama de classes e o diagrama de componentes nesta sprint. |

## Entregas

- Frontend principal finalizado para o fluxo público previsto no MVP evoluído.
- Backend funcional para navegação, autenticação e envio de dúvidas.
- Integração principal com a base de dados revisada.
- Diagrama de classes e diagrama de componentes.

## Evidências

- Adicionar links dos PRs, commits, telas integradas e demonstrações desta sprint.
- Adicionar os links do diagrama de classes e do diagrama de componentes quando estiverem finalizados.

## Tasks

- O detalhamento das tasks e a explosão em cards será feito posteriormente com o Scrum Master.

## Burndown

- O burndown será feito posteriormente com o Scrum Master.

## Riscos e Impedimentos

- A integração entre frontend, backend e banco pode demandar ajustes no contrato da API e no modelo já existente.
- Atrasos na autenticação e no controle de acesso podem impactar o início das entregas internas previstas para a Sprint 03.
- A ampliação de escopo para a área administrativa completa pode comprometer o foco desta sprint.

## Observações

- O foco desta sprint é fechar frontend e backend do núcleo do produto.
- O banco já existente entra em revisão e validação para suportar a integração real desta etapa.
- Painel administrativo completo, pgAdmin, diagrama de sequência e documentação de testes ficam para a Sprint 03.
