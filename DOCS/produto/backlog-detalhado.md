# Backlog Detalhado do Produto

> Projeto: Aplicacao Web para Autoatendimento da Secretaria Academica da Fatec Jacarei.

## Objetivo

Organizar o backlog em formato rastreavel, mantendo relacao clara entre requisito, user story, Definition of Ready e Definition of Done. Este documento nao substitui o backlog da sprint; ele descreve o item do produto e o criterio de aceite esperado para sua conclusao.

## Como ler este backlog

- Cada item abaixo representa uma entrega do produto, e nao apenas uma tarefa de implementacao.
- O item pode ser iniciado em uma sprint e concluido em outra, desde que o backlog da sprint registre o recorte comprometido.
- `DoR` indica o minimo esperado antes de entrar em desenvolvimento.
- `DoD` indica o que precisa estar pronto para considerar o item concluido.

## Legenda de Prioridade

| Prioridade | Uso no backlog |
| --- | --- |
| ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Itens obrigatorios para o MVP e para os requisitos centrais do desafio. |
| ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Itens importantes que ampliam a solucao, mas podem entrar apos o fluxo principal ficar estavel. |
| ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Itens complementares que agregam valor sem bloquear a demonstracao principal. |

## Planejamento Atual das Entregas

- `DW02`, `DW04` e `ES01` retornam da Sprint 1 como `carry-over` por terem sido entregues apenas de forma parcial ou mockada.
- A Sprint 2 passa a concentrar integracao real do fluxo publico, persistencia, evidencias documentais, seguranca minima e documentacao coerente com a implementacao.
- A Sprint 3 permanece focada em operacao interna completa, paineis administrativos, gestao de usuarios, consulta de logs e refinamentos finais.

## Backlog Funcional

### RF01 (DW01) - Escolha inicial de curso ou perfil

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como aluno ou interessado externo, quero escolher meu curso ou perfil antes de iniciar a conversa, para que eu receba respostas adequadas ao meu contexto.
- **DoR:** Conteudo inicial por curso validado com a secretaria, mensagem de abertura aprovada e no raiz da conversa modelado no banco.
- **DoD:** Exibir as quatro opcoes iniciais, registrar a escolha do usuario e encaminhar corretamente para o fluxo correspondente.

### RF01 (DW02) - Navegacao por menus e submenus em formato de chatbot

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como usuario do autoatendimento, quero navegar por menus e submenus guiados, para que eu localize informacoes sem depender de atendimento humano imediato.
- **DoR:** Arvore de navegacao por curso mapeada, estrutura de nos e opcoes definida e comportamento de retorno planejado.
- **DoD:** Carregar menus a partir do banco, permitir navegacao hierarquica com voltar e encerrar cada ramo com a resposta esperada.

### RF01, RF02 (DW03) - Consultas diretas no autoatendimento

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **User story:** Como usuario do autoatendimento, quero fazer consultas diretas quando eu ja souber o assunto desejado, para que eu encontre respostas com mais rapidez.
- **DoR:** Perguntas frequentes catalogadas, estrategia de busca definida e campo de consulta previsto na interface publica.
- **DoD:** Permitir consulta direta, localizar respostas cadastradas quando houver aderencia e orientar o usuario quando a busca nao resolver o caso.

### RF01, RF02 (DW04) - Respostas resumidas e padronizadas

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como usuario do autoatendimento, quero receber respostas claras e padronizadas ao final de cada fluxo, para que eu entenda a orientacao sem ambiguidades.
- **DoR:** Textos oficiais validados com a secretaria, respostas resumidas aprovadas e relacao entre assunto, curso e resposta definida.
- **DoD:** Apresentar respostas padronizadas nos fluxos finais, mantendo linguagem objetiva e coerencia com o conteudo oficial do desafio.

### RF02 (DW05) - Evidencias documentais vinculadas

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como usuario do autoatendimento, quero visualizar o trecho documental que sustenta a resposta recebida, para que eu confie na orientacao fornecida pelo sistema.
- **DoR:** Documentos oficiais reunidos, trechos relevantes identificados e metadados de fonte mapeados para cada resposta aplicavel.
- **DoD:** Exibir evidencia documental com nome do arquivo, pagina e secao ou ancora sempre que houver vinculo cadastrado para a resposta.

### RF05 (TP04) - Encaminhamento de pergunta a secretaria

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como usuario do autoatendimento, quero enviar minha duvida para a secretaria quando o chatbot nao resolver meu problema, para que eu receba retorno humano sobre o caso.
- **DoR:** Campos da pergunta, e-mail, status inicial e ponto de encerramento do fluxo definidos para o atendimento publico.
- **DoD:** Exibir o formulario no fim do atendimento, salvar a duvida com os dados informados e confirmar o recebimento ao usuario.

### RF07 (DW06) - Avaliacao de satisfacao do atendimento

- **Prioridade:** ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green)
- **User story:** Como usuario do autoatendimento, quero registrar se gostei ou nao gostei da interacao, para que meu feedback fique registrado para a equipe.
- **DoR:** Opcoes de satisfacao definidas, relacionamento com o atendimento modelado e experiencia de encerramento planejada.
- **DoD:** Permitir uma unica avaliacao por interacao, registrar o feedback e retornar confirmacao de sucesso ao usuario.

## Perfis, Administracao Interna e Conteudo

### RF03 (TP01) - Perfis de acesso do sistema

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como equipe do projeto, quero ter perfis de acesso definidos para publico e area interna, para que cada usuario visualize apenas as funcionalidades compativeis com seu papel.
- **DoR:** Perfis do sistema definidos com a secretaria, matriz de acesso validada e rotas publicas e privadas mapeadas.
- **DoD:** Disponibilizar os tres perfis previstos no desafio, mantendo acesso publico para Aluno e acesso autenticado para os perfis internos.

### RF04 (TP02) - Gestao administrativa de menus, submenus e respostas

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como administrador, quero criar, editar e excluir menus e respostas do autoatendimento, para que o conteudo do chatbot fique atualizado sem depender de alteracoes manuais no codigo.
- **DoR:** Regras de CRUD administrativo definidas, modelo de nos validado e tratamento de integridade de dados mapeado.
- **DoD:** Permitir ao administrador manter menus e respostas pelo painel interno, com persistencia correta e reflexo imediato na navegacao.

### RF02, RF04 (BD01) - Gestao de documentos, chunks e metadados

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como administrador, quero cadastrar e manter documentos oficiais e seus trechos indexados, para que as evidencias do autoatendimento permaneçam atualizadas e rastreaveis.
- **DoR:** Tipos de documento, metadados obrigatorios e vinculo entre resposta e trecho definidos para o painel administrativo.
- **DoD:** Cadastrar, editar e remover documentos, chunks e metadados, preservando o vinculo entre evidencia e resposta final.

### RF04 (TP03) - Gestao de usuarios da secretaria

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **User story:** Como administrador, quero cadastrar, editar e desativar usuarios da secretaria, para que o acesso ao painel interno fique sob controle institucional.
- **DoR:** Campos obrigatorios, politica de ativacao e fluxo de cadastro dos usuarios da secretaria definidos com antecedencia.
- **DoD:** Permitir a gestao de usuarios da secretaria com papel definido, persistencia correta e armazenamento seguro das senhas.

## Secretaria e Rastreabilidade

### RF06 (TP05) - Acompanhamento e atualizacao das duvidas recebidas

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como secretaria academica, quero acompanhar as perguntas enviadas pelos usuarios e atualizar seus status, para que eu controle o andamento dos atendimentos internos.
- **DoR:** Painel interno da secretaria planejado, status permitidos definidos e regras de acesso validadas.
- **DoD:** Listar as duvidas recebidas, permitir a mudanca de status e persistir as atualizacoes com controle de acesso adequado.

### RF04, RF08 (BD02) - Registro e consulta de logs administrativos

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como administrador, quero consultar os registros das interacoes realizadas no autoatendimento, para que eu acompanhe o fluxo navegado, as duvidas enviadas e o feedback registrado.
- **DoR:** Eventos de log definidos, modelo de armazenamento criado e campos de consulta administrativa planejados para o painel.
- **DoD:** Registrar cada interacao com fluxo, pergunta, satisfacao e horario, mantendo os logs disponiveis para consulta administrativa.

## Seguranca e Controle de Acesso

### RF09, RF10, RF11 (TP06) - Login, JWT e autorizacao por papel

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como secretaria academica ou administrador, quero fazer login com seguranca e acessar somente as funcionalidades autorizadas ao meu perfil, para que o painel interno fique protegido contra acessos indevidos.
- **DoR:** Fluxo de login definido, payload do JWT validado, regras de RBAC mapeadas e middlewares previstos para as rotas internas.
- **DoD:** Autenticar usuarios internos com login e senha, emitir JWT, validar token nas rotas administrativas e bloquear acessos indevidos por papel.

## Backlog Tecnico e de Entrega

### BD03 - Modelagem e carga inicial do banco PostgreSQL

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP03, RNF03
- **Descricao:** Estruturar tabelas, relacionamentos e dados iniciais para navegacao, respostas, documentos, chunks, logs, satisfacao e perguntas encaminhadas.
- **DoR:** Modelo de dados aprovado, entidades identificadas e scripts iniciais de banco planejados.
- **DoD:** Disponibilizar o esquema do PostgreSQL com DDL e DML aplicados e dados iniciais suficientes para sustentar o chatbot e suas evidencias.

### DW07 - Frontend em React com TypeScript

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP01, RNF01
- **Descricao:** Implementar a interface publica e os paineis internos com separacao clara entre componentes, hooks, servicos e estados principais, mantendo responsividade para desktop e mobile.
- **DoR:** Fluxos principais definidos, navegacao de telas planejada e padrao visual escolhido para o projeto.
- **DoD:** Executar o frontend em React com TypeScript, cobrindo desktop e mobile e separando de forma clara interface, hooks e servicos principais.

### TP07 - API em Node.js com TypeScript

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP02, RNF03
- **Descricao:** Expor endpoints para navegacao, autenticacao, conteudo administrativo, perguntas, satisfacao e logs, com organizacao coerente em rotas, controllers, services, repositories e middlewares.
- **DoR:** Contrato das rotas definido, regras de negocio priorizadas e estrutura do projeto backend preparada.
- **DoD:** Disponibilizar a API em Node.js com TypeScript, com rotas documentadas e organizacao coerente em rotas, controllers, services, repositories e middlewares.

### TP08 - Ambiente completo com Docker Compose

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RNF05, RNF06, RP04
- **Descricao:** Executar PostgreSQL, backend e frontend exclusivamente por containers, com comando unico de inicializacao e variaveis de ambiente documentadas.
- **DoR:** Imagens e dependencias de cada servico definidas, variaveis de ambiente mapeadas e estrategia de orquestracao acordada.
- **DoD:** Subir PostgreSQL, backend e frontend com Docker Compose, mantendo a aplicacao funcional sem execucao local fora dos containers.

### ES01 - Documentacao e diagramas UML

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RNF04, RNF07
- **Descricao:** Manter README principal, READMEs por pasta e diagramas de Casos de Uso, Classes, Sequencia e Componentes alinhados a implementacao real do repositorio.
- **DoR:** Escopo consolidado, arquitetura definida e padrao de documentacao escolhido para o grupo.
- **DoD:** Entregar README principal, READMEs das pastas principais e os diagramas UML obrigatorios de forma coerente com a implementacao realizada.

### TP09 - Seguranca com hash e JWT

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RNF08, RNF09
- **Descricao:** Garantir uso de JWT no backend, hash seguro para senhas, expiracao de token e protecao de informacoes sensiveis via variaveis de ambiente.
- **DoR:** Chaves sensiveis separadas em ambiente, biblioteca de hash definida e politica de expiracao acordada.
- **DoD:** Usar JWT com expiracao, armazenar senhas com hash seguro, proteger variaveis sensiveis por ambiente e evitar exposicao de dados sensiveis nas respostas da API.

### TP10 - Validacao basica de desempenho

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RNF02
- **Descricao:** Verificar tempo de resposta do backend, consultas ao banco e exibicao de evidencias nos principais fluxos do chatbot.
- **DoR:** Cenarios criticos de consulta definidos, pontos de medicao escolhidos e massa de dados minima disponivel para testes.
- **DoD:** Executar validacao de desempenho nos fluxos principais e registrar que o tempo de resposta ficou adequado ao uso interativo do sistema.
