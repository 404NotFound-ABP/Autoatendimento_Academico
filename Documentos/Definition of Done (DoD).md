# Definition of Done (DoD)

## Como usar este anexo

Este anexo resume o que caracteriza a conclusao de cada item do backlog. Ele serve como referencia de aceite rapido e deve ser lido junto do backlog principal.

## Itens Funcionais

| US / RF | Prioridade | Done resumido |
| --- | --- | --- |
| US01 / RF01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir as quatro opcoes iniciais, registrar a escolha do usuario e encaminhar corretamente para o fluxo correspondente. |
| US02 / RF01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Carregar menus a partir do banco, permitir navegacao hierarquica com voltar e encerrar cada ramo com a resposta esperada. |
| US03 / RF01, RF02 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Permitir a consulta direta, localizar respostas cadastradas quando houver aderencia e orientar o usuario quando a busca nao resolver o caso. |
| US04 / RF01, RF02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Apresentar respostas padronizadas nos fluxos finais, mantendo linguagem objetiva e coerencia com o conteudo oficial do desafio. |
| US05 / RF02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir evidencia documental com nome do arquivo, pagina e secao sempre que houver vinculo cadastrado para a resposta. |
| US10 / RF05 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Exibir o formulario no fim do atendimento, salvar a duvida com os dados informados e confirmar o recebimento ao usuario. |
| US12 / RF07 | ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Permitir uma unica avaliacao por interacao, registrar o feedback e retornar confirmacao de sucesso ao usuario. |
| US06 / RF03 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar os tres perfis previstos no desafio, mantendo acesso publico para aluno e acesso autenticado para os perfis internos. |
| US07 / RF04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Permitir ao administrador manter menus e respostas pelo painel interno, com persistencia correta e reflexo imediato na navegacao. |
| US08 / RF02, RF04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Cadastrar, editar e remover documentos e trechos indexados, preservando o vinculo entre evidencia e resposta final. |
| US09 / RF04 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Permitir a gestao de usuarios da secretaria com papel definido, persistencia correta e armazenamento seguro das senhas. |
| US11 / RF06 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Listar as duvidas recebidas, permitir a mudanca de status e persistir as atualizacoes com controle de acesso adequado. |
| US13 / RF04, RF08 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Registrar cada interacao com fluxo, pergunta, satisfacao e horario, mantendo os logs disponiveis para consulta administrativa. |
| US14 / RF09, RF10, RF11 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Autenticar usuarios internos com login e senha, emitir JWT, validar token nas rotas administrativas e bloquear acessos indevidos por papel. |

## Itens Tecnicos e de Entrega

| Item | Prioridade | Done resumido |
| --- | --- | --- |
| BT01 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar o esquema do PostgreSQL com DDL e DML aplicados e dados iniciais suficientes para sustentar o chatbot. |
| BT02 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Executar o frontend em React com TypeScript, cobrindo desktop e mobile para os fluxos publicos e internos previstos. |
| BT03 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Disponibilizar a API em Node.js com TypeScript e documentar os endpoints necessarios para integracao com o frontend. |
| BT04 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Subir PostgreSQL, backend e frontend com Docker Compose, mantendo a aplicacao funcional sem execucao local fora dos containers. |
| BT05 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Entregar os READMEs atualizados e os diagramas UML obrigatorios de forma coerente com a implementacao realizada. |
| BT06 | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Usar JWT com expiracao, armazenar senhas com hash seguro e evitar exposicao de dados sensiveis nas respostas da API. |
| BT07 | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Executar validacao de desempenho nos fluxos principais e registrar que o tempo de resposta ficou adequado ao uso interativo do sistema. |

