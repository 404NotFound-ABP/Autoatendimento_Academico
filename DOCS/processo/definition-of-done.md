# Definition of Done (DoD)

## Como usar este anexo

Este anexo resume o que caracteriza a conclusão de cada item do backlog do produto. Ele deve ser lido em conjunto com `DOCS/produto/backlog-do-produto.md`, `DOCS/produto/backlog-detalhado.md` e os READMEs de sprint.

## Observação importante

- O DoD documenta o critério de conclusão do item no produto, e não apenas o recorte de uma sprint.
- Um item pode ser iniciado em uma sprint e concluído em outra, desde que isso fique registrado no backlog da sprint como `carry-over` ou `recorte parcial`.
- Um item só deve ser marcado como concluído quando atender integralmente ao DoD abaixo.
- Quando uma sprint entregar apenas parte do item, o README da sprint deve explicitar o que foi entregue, o que permaneceu pendente e para qual sprint o restante foi replanejado.

## Itens DW

| US / RF | Prioridade | Done resumido |
| --- | --- | --- |
| DW01 / RF01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir as quatro opções iniciais, registrar a escolha do usuário e encaminhar corretamente para o fluxo correspondente. |
| DW02 / RF01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Carregar menus a partir do banco, permitir navegação hierárquica com voltar e encerrar cada ramo com a resposta esperada. |
| DW03 / RF01, RF02 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Permitir consulta direta, localizar respostas cadastradas quando houver aderência e orientar o usuário quando a busca não resolver o caso. |
| DW04 / RF01, RF02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Apresentar respostas padronizadas nos fluxos finais, mantendo linguagem objetiva e coerência com o conteúdo oficial do desafio. |
| DW05 / RF02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir evidência documental com nome do arquivo, página e seção ou âncora, sempre que houver vínculo cadastrado para a resposta. |
| DW06 / RF07 | ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Permitir uma única avaliação por interação, registrar o feedback e retornar confirmação de sucesso ao usuário. |
| DW08 / RF05 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Entregar a tela de e-mail no frontend, integrada ao encerramento do atendimento, com campos de contato e dúvida, validação visual e confirmação de envio coerente com o fluxo do app. |

## Itens TP

| US / RF | Prioridade | Done resumido |
| --- | --- | --- |
| TP01 / RF03 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar os três perfis previstos no desafio, mantendo acesso público para Aluno e acesso autenticado para Secretaria Acadêmica e Administrador. |
| TP02 / RF04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Permitir ao administrador manter menus e respostas pelo painel interno, com persistência correta e reflexo imediato na navegação. |
| TP03 / RF04 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Permitir a gestão de usuários da secretaria com papel definido, persistência correta e armazenamento seguro das senhas. |
| TP04 / RF05 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Receber os dados enviados pelo frontend, salvar a dúvida com as informações informadas e retornar confirmação ao fluxo público. |
| TP05 / RF06 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Listar as dúvidas recebidas, permitir a mudança de status e persistir as atualizações com controle de acesso adequado. |
| TP06 / RF09, RF10, RF11 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Autenticar usuários internos com login e senha, emitir JWT, validar token nas rotas administrativas e bloquear acessos indevidos por papel. |

## Itens BD

| US / RF | Prioridade | Done resumido |
| --- | --- | --- |
| BD01 / RF02, RF04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Cadastrar, editar e remover documentos, chunks e metadados, preservando o vínculo entre evidência e resposta final. |
| BD02 / RF04, RF08 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Registrar cada interação com fluxo, pergunta, satisfação e horário, mantendo os logs disponíveis para consulta administrativa. |

## Itens técnicos e de entrega

| Item | Prioridade | Done resumido |
| --- | --- | --- |
| DW07 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Executar o frontend em React com TypeScript, cobrindo desktop e mobile e separando, de forma clara, interface, hooks e serviços principais. |
| TP07 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar a API em Node.js com TypeScript, com rotas documentadas e organização coerente em rotas, controllers, services, repositories e middlewares. |
| TP08 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Subir PostgreSQL, backend e frontend com Docker Compose, mantendo a aplicação funcional sem execução local fora dos containers. |
| TP09 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Usar JWT com expiração, armazenar senhas com hash seguro, proteger variáveis sensíveis por ambiente e evitar exposição de dados sensíveis nas respostas da API. |
| TP10 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Executar validação de desempenho nos fluxos principais e registrar que o tempo de resposta ficou adequado ao uso interativo do sistema. |
| BD03 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar o esquema do PostgreSQL com DDL e DML aplicados e dados iniciais suficientes para sustentar o chatbot e suas evidências. |
| ES01 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Entregar README principal, READMEs das pastas principais e os diagramas UML obrigatórios de forma coerente com a implementação realizada. |
