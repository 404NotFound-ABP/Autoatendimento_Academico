# Banco de Dados e Scripts SQL

## Responsabilidade da pasta

Esta pasta concentra os scripts SQL usados para inicializar a base PostgreSQL do projeto.

## Organizacao interna

| Arquivo | Papel |
| --- | --- |
| `01_schema.sql` | Cria tipos, tabelas e relacionamentos iniciais do sistema |
| `02_seed.sql` | Insere a carga inicial de dados para o chatbot |

## Como esta pasta e usada

- no fluxo com Docker Compose, os arquivos em `init/` sao montados no container do PostgreSQL para inicializacao automatica;
- em revisoes locais, os scripts tambem podem ser executados manualmente para validar schema e seed;
- a Sprint 2 prioriza ampliar a modelagem e a carga inicial para sustentar navegacao, perguntas, logs, documentos e evidencias.

## Observacao

Embora esta pasta represente a camada de banco do projeto, a documentacao geral do dominio de dados tambem deve ser mantida em `DOCS/diagrama/` e nos artefatos de backlog quando a modelagem evoluir.
