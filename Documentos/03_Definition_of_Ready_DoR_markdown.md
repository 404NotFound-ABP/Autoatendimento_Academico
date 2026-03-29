# Anexo - Definition of Ready (DoR)

> Projeto: Aplicacao Web para Autoatendimento da Secretaria Academica da Fatec Jacarei

> Documento gerado em 29/03/2026

## Como usar este anexo

Este anexo consolida, em formato de consulta rapida, o que deve estar pronto antes de cada item do backlog entrar na sprint. Os mesmos textos tambem aparecem no backlog principal ao lado de cada RF e US.

## Itens Funcionais

| US / RF | Prioridade | Ready resumido |
| --- | --- | --- |
| US01 / RF01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Conteudo inicial por curso validado com a secretaria, mensagem de abertura aprovada e no raiz da conversa modelado no banco. |
| US02 / RF01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Arvore de navegacao por curso mapeada, estrutura de nos e opcoes definida e comportamento de retorno planejado. |
| US03 / RF01, RF02 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Perguntas frequentes catalogadas, estrategia de busca definida e campo de consulta previsto na interface publica. |
| US04 / RF01, RF02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Textos oficiais validados com a secretaria, respostas resumidas aprovadas e relacao entre assunto, curso e resposta definida. |
| US05 / RF02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Documentos oficiais reunidos, trechos relevantes identificados e metadados de fonte mapeados para cada resposta aplicavel. |
| US10 / RF05 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Campos da pergunta, e-mail, status inicial e ponto de encerramento do fluxo definidos para o atendimento publico. |
| US12 / RF07 | ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Opcoes de satisfacao definidas, relacionamento com o atendimento modelado e experiencia de encerramento planejada. |
| US06 / RF03 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Perfis do sistema definidos com a secretaria, matriz de acesso validada e rotas publicas e privadas mapeadas. |
| US07 / RF04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Regras de CRUD administrativo definidas, modelo de nos validado e tratamento de integridade de dados mapeado. |
| US08 / RF02, RF04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Tipos de documento, metadados obrigatorios e vinculo entre resposta e trecho definidos para o painel administrativo. |
| US09 / RF04 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Campos obrigatorios, politica de ativacao e fluxo de cadastro dos usuarios da secretaria definidos com antecedencia. |
| US11 / RF06 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Painel interno da secretaria planejado, status permitidos definidos e regras de acesso validadas. |
| US13 / RF04, RF08 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Eventos de log definidos, modelo de armazenamento criado e campos de consulta administrativa planejados para o painel. |
| US14 / RF09, RF10, RF11 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Fluxo de login definido, payload do JWT validado, regras de RBAC mapeadas e middlewares previstos para as rotas internas. |

## Itens Tecnicos e de Entrega

| Item | Prioridade | Ready resumido |
| --- | --- | --- |
| BT01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Modelo de dados aprovado, entidades identificadas e scripts iniciais de banco planejados. |
| BT02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Fluxos principais definidos, navegacao de telas planejada e padrao visual escolhido para o projeto. |
| BT03 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Contrato das rotas definido, regras de negocio priorizadas e estrutura do projeto backend preparada. |
| BT04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Imagens e dependencias de cada servico definidas, variaveis de ambiente mapeadas e estrategia de orquestracao acordada. |
| BT05 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Escopo consolidado, arquitetura definida e padrao de documentacao escolhido para o grupo. |
| BT06 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Chaves sensiveis separadas em ambiente, biblioteca de hash definida e politica de expiracao acordada. |
| BT07 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Cenarios criticos de consulta definidos, pontos de medicao escolhidos e massa de dados minima disponivel para testes. |

## Regra de uso

- Se o DoR do item nao estiver atendido, ele deve voltar para refinamento antes de entrar em desenvolvimento.
- A PO valida prioridade, clareza do objetivo e aderencia ao desafio antes da sprint.
- A equipe valida dependencias tecnicas, dados necessarios e seguranca antes de iniciar a implementacao.
