# Backlog do Produto

Este documento resume o backlog principal do FAQtec, relacionando cada item aos requisitos do desafio em `DOCS/referencias/Desafio.pdf`. O objetivo deste arquivo é manter a visão executiva do produto; os critérios detalhados permanecem em `backlog-detalhado.md`.

## Documentos relacionados

- [Requisitos](requisitos.md)
- [Histórias de usuário](user-stories.md)
- [Definition of Ready (DoR)](../processo/definition-of-ready.md)
- [Definition of Done (DoD)](../processo/definition-of-done.md)
- [Backlog detalhado](backlog-detalhado.md)

## Legenda de prioridade

| Prioridade | Uso no backlog |
| --- | --- |
| ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Itens obrigatórios para o MVP e para os requisitos centrais do desafio. |
| ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Itens importantes que ampliam a solução, mas podem entrar após o fluxo principal ficar estável. |
| ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Itens complementares que agregam valor sem bloquear a demonstração principal. |

## Backlog funcional

| ID | Título | Prioridade | Requisitos | Dependências críticas |
| --- | --- | --- | --- | --- |
| DW01 | Escolha inicial de curso ou perfil | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01 | Conteúdo inicial validado e tela de entrada responsiva |
| DW02 | Navegação por menus e submenus | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01 | BD03, TP07 |
| DW03 | Consultas diretas no autoatendimento | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF01, RF02 | BD03, TP07 |
| DW04 | Respostas resumidas e padronizadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01, RF02 | DW02, BD03 |
| DW05 | Evidências documentais vinculadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF02 | BD01, BD03, TP07 |
| DW06 | Avaliação de satisfação do atendimento | ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | RF07 | TP07, BD02 |
| DW08 | Tela de e-mail para envio de dúvidas | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF05 | DW07, TP04 |
| TP01 | Perfis de acesso do sistema | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF03 | TP06, TP09 |
| TP02 | Gestão de menus e respostas pelo administrador | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF04 | TP06, TP07, BD03 |
| TP03 | Gestão de usuários da secretaria | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF04 | TP06, TP09 |
| TP04 | Encaminhamento de perguntas para a secretaria | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF05 | TP07, BD03 |
| TP05 | Acompanhamento e atualização das dúvidas recebidas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF06 | TP04, TP06, TP07 |
| TP06 | Login, JWT e autorização por papel | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF09, RF10, RF11 | TP07, TP09 |
| BD01 | Gestão de documentos, chunks e metadados | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF02, RF04 | BD03, TP07 |
| BD02 | Registro e consulta de logs administrativos | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF04, RF08 | TP07, BD03 |

## Itens técnicos e de entrega

| ID | Título | Prioridade | Dependências críticas |
| --- | --- | --- | --- |
| DW07 | Frontend em React com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Fluxos definidos e contrato da API |
| TP07 | API em Node.js com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | BD03 e definição de rotas |
| TP08 | Ambiente completo com Docker Compose | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Imagens, variáveis de ambiente e serviços da stack |
| TP09 | Segurança com hash e JWT | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | TP06 e variáveis de ambiente |
| TP10 | Validação básica de desempenho | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Fluxos principais integrados |
| BD03 | Modelagem e carga inicial do banco PostgreSQL | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Requisitos do desafio e massa de dados inicial |
| ES01 | Documentação e diagramas UML | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Estrutura real do repositório e escopo consolidado |

## Estratégia de entrega atual

- `DW01`, `DW02`, `DW04` e `ES01` foram iniciados na Sprint 1, mas retornam como `carry-over` por não atenderem integralmente ao DoD.
- A Sprint 2 passa a priorizar integração real entre frontend, backend e PostgreSQL, revisão da tela inicial, evidências documentais, tela de e-mail, persistência básica, proteção mínima das rotas administrativas e documentação coerente com a implementação.
- Itens de operação interna completos, como `TP02`, `TP03`, `TP05` e `BD02`, permanecem planejados para a Sprint 3 após a base técnica do MVP estar estabilizada.
