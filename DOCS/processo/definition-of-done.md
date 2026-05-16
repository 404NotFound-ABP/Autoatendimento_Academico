# Definition of Done (DoD)

## Como usar este anexo

Este anexo resume o que caracteriza a conclusao de cada item do backlog do produto. Ele deve ser lido em conjunto com `DOCS/produto/backlog-do-produto.md`, `DOCS/produto/backlog-detalhado.md` e os READMEs de sprint.

## Observacao importante

- O DoD documenta o criterio de conclusao do item no produto, nao apenas o recorte de uma sprint.
- Um item pode ser iniciado em uma sprint e concluido em outra, desde que isso fique registrado no backlog da sprint como `carry-over` ou `slice parcial`.
- Um item so deve ser marcado como concluido quando atender integralmente ao DoD abaixo.
- Quando uma sprint entregar apenas parte do item, o README da sprint deve explicitar o que foi entregue, o que permaneceu pendente e para qual sprint o restante foi replanejado.

## Itens Funcionais

| US / RF | Prioridade | Done resumido |
| --- | --- | --- |
| DW01 / RF01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir as quatro opcoes iniciais, registrar a escolha do usuario e encaminhar corretamente para o fluxo correspondente. |
| DW02 / RF01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Carregar menus a partir do banco, permitir navegacao hierarquica com voltar e encerrar cada ramo com a resposta esperada. |
| DW03 / RF01, RF02 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Permitir consulta direta, localizar respostas cadastradas quando houver aderencia e orientar o usuario quando a busca nao resolver o caso. |
| DW04 / RF01, RF02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Apresentar respostas padronizadas nos fluxos finais, mantendo linguagem objetiva e coerencia com o conteudo oficial do desafio. |
| DW05 / RF02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir evidencia documental com nome do arquivo, pagina e secao ou ancora sempre que houver vinculo cadastrado para a resposta. |
| TP04 / RF05 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir o formulario no fim do atendimento, salvar a duvida com os dados informados e confirmar o recebimento ao usuario. |
| DW06 / RF07 | ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Permitir uma unica avaliacao por interacao, registrar o feedback e retornar confirmacao de sucesso ao usuario. |
| TP01 / RF03 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar os tres perfis previstos no desafio, mantendo acesso publico para Aluno e acesso autenticado para Secretaria Academica e Administrador. |
| TP02 / RF04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Permitir ao administrador manter menus e respostas pelo painel interno, com persistencia correta e reflexo imediato na navegacao. |
| BD01 / RF02, RF04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Cadastrar, editar e remover documentos, chunks e metadados, preservando o vinculo entre evidencia e resposta final. |
| TP03 / RF04 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Permitir a gestao de usuarios da secretaria com papel definido, persistencia correta e armazenamento seguro das senhas. |
| TP05 / RF06 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Listar as duvidas recebidas, permitir a mudanca de status e persistir as atualizacoes com controle de acesso adequado. |
| BD02 / RF04, RF08 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Registrar cada interacao com fluxo, pergunta, satisfacao e horario, mantendo os logs disponiveis para consulta administrativa. |
| TP06 / RF09, RF10, RF11 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Autenticar usuarios internos com login e senha, emitir JWT, validar token nas rotas administrativas e bloquear acessos indevidos por papel. |

## Itens Tecnicos e de Entrega

| Item | Prioridade | Done resumido |
| --- | --- | --- |
| BD03 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar o esquema do PostgreSQL com DDL e DML aplicados e dados iniciais suficientes para sustentar o chatbot e suas evidencias. |
| DW07 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Executar o frontend em React com TypeScript, cobrindo desktop e mobile e separando de forma clara interface, hooks e servicos principais. |
| TP07 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar a API em Node.js com TypeScript, com rotas documentadas e organizacao coerente em rotas, controllers, services, repositories e middlewares. |
| TP08 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Subir PostgreSQL, backend e frontend com Docker Compose, mantendo a aplicacao funcional sem execucao local fora dos containers. |
| ES01 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Entregar README principal, READMEs das pastas principais e os diagramas UML obrigatorios de forma coerente com a implementacao realizada. |
| TP09 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Usar JWT com expiracao, armazenar senhas com hash seguro, proteger variaveis sensiveis por ambiente e evitar exposicao de dados sensiveis nas respostas da API. |
| TP10 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Executar validacao de desempenho nos fluxos principais e registrar que o tempo de resposta ficou adequado ao uso interativo do sistema. |
