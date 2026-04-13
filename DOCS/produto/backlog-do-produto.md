# Backlog do Produto

Este documento resume o backlog principal do projeto e aponta para os documentos detalhados de apoio.

## Documentos Relacionados

- [User stories](user-stories.md)
- [Definition of Ready (DoR)](../processo/definition-of-ready.md)
- [Definition of Done (DoD)](../processo/definition-of-done.md)
- [Backlog detalhado](backlog-detalhado.md)

## Legenda de Prioridade

| Prioridade | Uso no backlog |
| --- | --- |
| ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Itens obrigatórios para o MVP e para os requisitos centrais do desafio. |
| ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Itens importantes que ampliam a solução, mas podem entrar após o fluxo principal ficar estável. |
| ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Itens complementares que agregam valor sem bloquear a demonstração principal. |

## Backlog Funcional

| ID | Título | Prioridade | Requisitos |
| --- | --- | --- | --- |
| US01 | Escolha inicial de curso ou perfil | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01 |
| US02 | Navegação por menus e submenus | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01 |
| US03 | Consultas diretas no autoatendimento | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF01, RF02 |
| US04 | Respostas resumidas e padronizadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01, RF02 |
| US05 | Evidências documentais vinculadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF02 |
| US06 | Perfis de acesso do sistema | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF03 |
| US07 | Gestão de menus e respostas pelo administrador | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF04 |
| US08 | Gestão de documentos, chunks e metadados | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF02, RF04 |
| US09 | Gestão de usuários da secretaria | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF04 |
| US10 | Encaminhamento de perguntas para a secretaria | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF05 |
| US11 | Acompanhamento e atualização das dúvidas recebidas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF06 |
| US12 | Avaliação de satisfação do atendimento | ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | RF07 |
| US13 | Registro e consulta de logs administrativos | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF04, RF08 |
| US14 | Login, JWT e autorização por papel | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF09, RF10, RF11 |

## Itens Técnicos e de Entrega

| ID | Título | Prioridade |
| --- | --- | --- |
| BT01 | Modelagem e carga inicial do banco PostgreSQL | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| BT02 | Frontend em React com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| BT03 | API em Node.js com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| BT04 | Ambiente completo com Docker Compose | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| BT05 | Documentação e diagramas UML | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) |
| BT06 | Segurança com hash e JWT | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| BT07 | Validação básica de desempenho | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) |

## Observação

Os critérios detalhados de aceite e prontidão foram mantidos fora deste arquivo para evitar duplicação e facilitar a manutenção.
