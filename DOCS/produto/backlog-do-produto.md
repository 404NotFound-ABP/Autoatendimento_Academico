# Backlog do Produto

Este documento resume o backlog principal do FAQtec, relacionando cada item aos requisitos do desafio em `DOCS/referencias/Desafio.pdf`. O objetivo deste arquivo e manter a visao executiva do produto; os criterios detalhados permanecem em `backlog-detalhado.md`.

## Documentos Relacionados

- [Requisitos](requisitos.md)
- [User stories](user-stories.md)
- [Definition of Ready (DoR)](../processo/definition-of-ready.md)
- [Definition of Done (DoD)](../processo/definition-of-done.md)
- [Backlog detalhado](backlog-detalhado.md)

## Legenda de Prioridade

| Prioridade | Uso no backlog |
| --- | --- |
| ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Itens obrigatorios para o MVP e para os requisitos centrais do desafio. |
| ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Itens importantes que ampliam a solucao, mas podem entrar apos o fluxo principal ficar estavel. |
| ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Itens complementares que agregam valor sem bloquear a demonstracao principal. |

## Backlog Funcional

| ID | Titulo | Prioridade | Requisitos | Dependencias criticas |
| --- | --- | --- | --- | --- |
| DW01 | Escolha inicial de curso ou perfil | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01 | Conteudo inicial validado e tela de entrada responsiva |
| DW02 | Navegacao por menus e submenus | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01 | BD03, TP07 |
| DW03 | Consultas diretas no autoatendimento | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF01, RF02 | BD03, TP07 |
| DW04 | Respostas resumidas e padronizadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01, RF02 | DW02, BD03 |
| DW05 | Evidencias documentais vinculadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF02 | BD01, BD03, TP07 |
| TP01 | Perfis de acesso do sistema | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF03 | TP06, TP09 |
| TP02 | Gestao de menus e respostas pelo administrador | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF04 | TP06, TP07, BD03 |
| BD01 | Gestao de documentos, chunks e metadados | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF02, RF04 | BD03, TP07 |
| TP03 | Gestao de usuarios da secretaria | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF04 | TP06, TP09 |
| TP04 | Encaminhamento de perguntas para a secretaria | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF05 | TP07, BD03 |
| TP05 | Acompanhamento e atualizacao das duvidas recebidas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF06 | TP04, TP06, TP07 |
| DW06 | Avaliacao de satisfacao do atendimento | ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | RF07 | TP07, BD02 |
| BD02 | Registro e consulta de logs administrativos | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF04, RF08 | TP07, BD03 |
| TP06 | Login, JWT e autorizacao por papel | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF09, RF10, RF11 | TP07, TP09 |

## Itens Tecnicos e de Entrega

| ID | Titulo | Prioridade | Dependencias criticas |
| --- | --- | --- | --- |
| BD03 | Modelagem e carga inicial do banco PostgreSQL | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Requisitos do desafio e massa de dados inicial |
| DW07 | Frontend em React com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Fluxos definidos e contrato da API |
| TP07 | API em Node.js com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | BD03 e definicao de rotas |
| TP08 | Ambiente completo com Docker Compose | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Imagens, variaveis de ambiente e servicos da stack |
| ES01 | Documentacao e diagramas UML | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Estrutura real do repositorio e escopo consolidado |
| TP09 | Seguranca com hash e JWT | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | TP06 e variaveis de ambiente |
| TP10 | Validacao basica de desempenho | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Fluxos principais integrados |

## Estrategia de Entrega Atual

- `DW02`, `DW04` e `ES01` foram iniciados na Sprint 1, mas retornam como `carry-over` por nao atenderem integralmente ao DoD.
- A Sprint 2 passa a priorizar integracao real entre frontend, backend e PostgreSQL, evidencias documentais, persistencia basica, protecao minima das rotas administrativas e documentacao coerente com a implementacao.
- Itens de operacao interna completos, como `TP02`, `TP03`, `TP05` e a consulta administrativa avancada de `BD02`, permanecem planejados para a Sprint 3 apos a base tecnica do MVP estar estabilizada.
