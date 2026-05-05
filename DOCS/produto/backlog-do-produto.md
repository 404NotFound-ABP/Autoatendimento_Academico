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
| DW01 | Escolha inicial de curso ou perfil | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01 |
| DW02 | Navegação por menus e submenus | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01 |
| DW03 | Consultas diretas no autoatendimento | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF01, RF02 |
| DW04 | Respostas resumidas e padronizadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF01, RF02 |
| DW05 | Evidências documentais vinculadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF02 |
| TP01 | Perfis de acesso do sistema | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF03 |
| TP02 | Gestão de menus e respostas pelo administrador | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF04 |
| BD01 | Gestão de documentos, chunks e metadados | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF02, RF04 |
| TP03 | Gestão de usuários da secretaria | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | RF04 |
| TP04 | Encaminhamento de perguntas para a secretaria | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF05 |
| TP05 | Acompanhamento e atualização das dúvidas recebidas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF06 |
| DW06 | Avaliação de satisfação do atendimento | ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | RF07 |
| BD02 | Registro e consulta de logs administrativos | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF04, RF08 |
| TP06 | Login, JWT e autorização por papel | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | RF09, RF10, RF11 |

## Itens Técnicos e de Entrega

| ID | Título | Prioridade |
| --- | --- | --- |
| BD03 | Modelagem e carga inicial do banco PostgreSQL | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| DW07 | Frontend em React com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| TP07 | API em Node.js com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| TP08 | Ambiente completo com Docker Compose | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| ES01 | Documentação e diagramas UML | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) |
| TP09 | Segurança com hash e JWT | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) |
| TP10 | Validação básica de desempenho | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) |

## Observação

Os critérios detalhados de aceite e prontidão foram mantidos fora deste arquivo para evitar duplicação e facilitar a manutenção.
