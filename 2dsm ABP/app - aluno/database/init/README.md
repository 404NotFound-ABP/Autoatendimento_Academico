# Scripts de Inicialização (`init/`)

Os arquivos desta pasta são executados em ordem alfabética quando o container PostgreSQL é inicializado com um volume vazio.

## Arquivos

- `01_schema.sql`
  - Cria extensões e tipos (`user_role`, `inquiry_status`, `satisfaction_flag`).
  - Cria as tabelas principais (`users`, `navigation_nodes`, `inquiries`, `interaction_logs`).
  - Executa um bloco de compatibilização para bases legadas (remoções/ajustes de colunas e tabelas antigas).
- `02_seed.sql`
  - Cria/atualiza usuários padrão (`ADMIN` e `SECRETARIA`).
  - Faz carga inicial da árvore de navegação e respostas.

## Observações

- Os scripts são idempotentes na maior parte dos comandos (`IF EXISTS` / `IF NOT EXISTS` e `ON CONFLICT`).
- Mudanças no conteúdo de `init/` não são reaplicadas automaticamente em bancos já inicializados.
- Para reaplicar desde o início, recrie o volume do banco (ex.: remover `postgres_data` no ambiente Docker).
