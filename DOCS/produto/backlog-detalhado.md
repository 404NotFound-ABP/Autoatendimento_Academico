# Backlog Detalhado do Produto

> Projeto: Aplicação web para autoatendimento da Secretaria Acadêmica da Fatec Jacareí.

## Objetivo

Organizar o backlog em formato rastreável, mantendo relação clara entre requisito, história de usuário, Definition of Ready e Definition of Done. Este documento não substitui o backlog da sprint; ele descreve os itens do produto e os critérios de aceite esperados para sua conclusão.

## Como ler este backlog

- Cada item abaixo representa uma entrega do produto, e não apenas uma tarefa de implementação.
- O item pode ser iniciado em uma sprint e concluído em outra, desde que o backlog da sprint registre o recorte comprometido.
- `DoR` indica o mínimo esperado antes de entrar em desenvolvimento.
- `DoD` indica o que precisa estar pronto para considerar o item concluído.

## Legenda de prioridade

| Prioridade | Uso no backlog |
| --- | --- |
| ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Itens obrigatórios para o MVP e para os requisitos centrais do desafio. |
| ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Itens importantes que ampliam a solução, mas podem entrar após o fluxo principal ficar estável. |
| ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Itens complementares que agregam valor sem bloquear a demonstração principal. |

## Planejamento atual das entregas

- `DW01`, `DW02`, `DW04` e `ES01` retornam da Sprint 1 como `carry-over` por terem sido entregues apenas de forma parcial ou mockada.
- A Sprint 2 passa a concentrar integração real do fluxo público, persistência, evidências documentais, revisão da tela inicial, tela de e-mail e documentação coerente com a implementação.
- A Sprint 3 permanece focada em operação interna completa, painéis administrativos, gestão de usuários, registro e consulta de logs e refinamentos finais.

## Itens DW

### RF01 (DW01) - Escolha inicial de curso ou perfil

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como aluno ou interessado externo, quero escolher meu curso ou perfil antes de iniciar a conversa, para que eu receba respostas adequadas ao meu contexto.
- **DoR:** Conteúdo inicial por curso validado com a secretaria, mensagem de abertura aprovada e nó raiz da conversa modelado no banco.
- **DoD:** Exibir as quatro opções iniciais, registrar a escolha do usuário e encaminhar corretamente para o fluxo correspondente.

### RF01 (DW02) - Navegação por menus e submenus em formato de chatbot

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como usuário do autoatendimento, quero navegar por menus e submenus guiados, para que eu localize informações sem depender de atendimento humano imediato.
- **DoR:** Árvore de navegação por curso mapeada, estrutura de nós e opções definida e comportamento de retorno planejado.
- **DoD:** Carregar menus a partir do banco, permitir navegação hierárquica com voltar e encerrar cada ramo com a resposta esperada.

### RF01, RF02 (DW03) - Consultas diretas no autoatendimento

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **História de usuário:** Como usuário do autoatendimento, quero fazer consultas diretas quando eu já souber o assunto desejado, para que eu encontre respostas com mais rapidez.
- **DoR:** Perguntas frequentes catalogadas, estratégia de busca definida e campo de consulta previsto na interface pública.
- **DoD:** Permitir consulta direta, localizar respostas cadastradas quando houver aderência e orientar o usuário quando a busca não resolver o caso.

### RF01, RF02 (DW04) - Respostas resumidas e padronizadas

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como usuário do autoatendimento, quero receber respostas claras e padronizadas ao final de cada fluxo, para que eu entenda a orientação sem ambiguidades.
- **DoR:** Textos oficiais validados com a secretaria, respostas resumidas aprovadas e relação entre assunto, curso e resposta definida.
- **DoD:** Apresentar respostas padronizadas nos fluxos finais, mantendo linguagem objetiva e coerência com o conteúdo oficial do desafio.

### RF02 (DW05) - Evidências documentais vinculadas

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como usuário do autoatendimento, quero visualizar o trecho documental que sustenta a resposta recebida, para que eu confie na orientação fornecida pelo sistema.
- **DoR:** Documentos oficiais reunidos, trechos relevantes identificados e metadados de fonte mapeados para cada resposta aplicável.
- **DoD:** Exibir evidência documental com nome do arquivo, página e seção ou âncora sempre que houver vínculo cadastrado para a resposta.

### RF07 (DW06) - Avaliação de satisfação do atendimento

- **Prioridade:** ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green)
- **História de usuário:** Como usuário do autoatendimento, quero registrar minha avaliação sobre a interação, para que meu feedback fique disponível para a equipe.
- **DoR:** Opções de satisfação definidas, relacionamento com o atendimento modelado e experiência de encerramento planejada.
- **DoD:** Permitir uma única avaliação por interação, registrar o feedback e retornar confirmação de sucesso ao usuário.

### RF05 (DW08) - Tela de e-mail para envio de dúvidas

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **História de usuário:** Como usuário do autoatendimento, quero acessar uma tela ou formulário para informar meu e-mail e minha dúvida ao final do atendimento, para que eu possa solicitar retorno da secretaria quando o chatbot não resolver meu caso.
- **DoR:** Fluxo de encerramento definido, campos obrigatórios do formulário aprovados e orientação sobre uso de e-mail institucional planejada para alunos.
- **DoD:** Exibir no frontend a tela ou o formulário de e-mail com campos de contato e dúvida, validação de preenchimento, orientação textual adequada ao perfil do usuário e confirmação visual de envio integrada ao fluxo do atendimento.

## Itens TP

### RF03 (TP01) - Perfis de acesso do sistema

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como equipe do projeto, quero ter perfis de acesso definidos para o público e para a área interna, para que cada usuário visualize apenas as funcionalidades compatíveis com seu papel.
- **DoR:** Perfis do sistema definidos com a secretaria, matriz de acesso validada e rotas públicas e privadas mapeadas.
- **DoD:** Disponibilizar os três perfis previstos no desafio, mantendo acesso público para Aluno e acesso autenticado para os perfis internos.

### RF04 (TP02) - Gestão administrativa de menus, submenus e respostas

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como administrador, quero criar, editar e excluir menus e respostas do autoatendimento, para que o conteúdo do chatbot fique atualizado sem depender de alterações manuais no código.
- **DoR:** Regras de CRUD administrativo definidas, modelo de nós validado e tratamento de integridade de dados mapeado.
- **DoD:** Permitir ao administrador manter menus e respostas pelo painel interno, com persistência correta e reflexo imediato na navegação.

### RF04 (TP03) - Gestão de usuários da secretaria

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **História de usuário:** Como administrador, quero cadastrar, editar e desativar usuários da secretaria, para que o acesso ao painel interno fique sob controle institucional.
- **DoR:** Campos obrigatórios, política de ativação e fluxo de cadastro dos usuários da secretaria definidos com antecedência.
- **DoD:** Permitir a gestão de usuários da secretaria com papel definido, persistência correta e armazenamento seguro das senhas.

### RF05 (TP04) - Encaminhamento de pergunta à secretaria

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como usuário do autoatendimento, quero que minha dúvida enviada pelo formulário do app seja encaminhada à secretaria, para que eu receba retorno humano sobre o caso.
- **DoR:** Campos da pergunta, e-mail para retorno, status inicial e integração com o fluxo público definidos para o atendimento.
- **DoD:** Receber os dados enviados pelo frontend, salvar a dúvida com as informações informadas e retornar confirmação ao fluxo público.

### RF06 (TP05) - Acompanhamento e atualização das dúvidas recebidas

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como Secretaria Acadêmica, quero acompanhar as perguntas enviadas pelos usuários e atualizar seus status, para que eu controle o andamento dos atendimentos internos.
- **DoR:** Painel interno da secretaria planejado, status permitidos definidos e regras de acesso validadas.
- **DoD:** Listar as dúvidas recebidas, permitir a mudança de status e persistir as atualizações com controle de acesso adequado.

### RF09, RF10, RF11 (TP06) - Login, JWT e autorização por papel

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como Secretaria Acadêmica ou administrador, quero fazer login com segurança e acessar somente as funcionalidades autorizadas ao meu perfil, para que o painel interno fique protegido contra acessos indevidos.
- **DoR:** Fluxo de login definido, payload do JWT validado, regras de RBAC mapeadas e middlewares previstos para as rotas internas.
- **DoD:** Autenticar usuários internos com login e senha, emitir JWT, validar token nas rotas administrativas e bloquear acessos indevidos por papel.

## Itens BD

### RF02, RF04 (BD01) - Gestão de documentos, chunks e metadados

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como administrador, quero cadastrar e manter documentos oficiais e seus trechos indexados, para que as evidências do autoatendimento permaneçam atualizadas e rastreáveis.
- **DoR:** Tipos de documento, metadados obrigatórios e vínculo entre resposta e trecho definidos para o painel administrativo.
- **DoD:** Cadastrar, editar e remover documentos, chunks e metadados, preservando o vínculo entre evidência e resposta final.

### RF04, RF08 (BD02) - Registro e consulta de logs administrativos

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **História de usuário:** Como administrador, quero consultar os registros das interações realizadas no autoatendimento, para que eu acompanhe o fluxo navegado, as dúvidas enviadas e o feedback registrado.
- **DoR:** Eventos de log definidos, modelo de armazenamento criado e campos de consulta administrativa planejados para o painel.
- **DoD:** Registrar cada interação com fluxo, pergunta, satisfação e horário, mantendo os logs disponíveis para consulta administrativa.

## Backlog técnico e de entrega

### DW07 - Frontend em React com TypeScript

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP01, RNF01
- **Descrição:** Implementar a interface pública, a tela de e-mail e os painéis internos com separação clara entre componentes, hooks, serviços e estados principais, mantendo responsividade para desktop e mobile.
- **DoR:** Fluxos principais definidos, navegação de telas planejada e padrão visual escolhido para o projeto.
- **DoD:** Executar o frontend em React com TypeScript, cobrindo desktop e mobile e separando, de forma clara, interface, hooks e serviços principais.

### TP07 - API em Node.js com TypeScript

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP02, RNF03
- **Descrição:** Expor endpoints para navegação, autenticação, conteúdo administrativo, perguntas, satisfação e integração com logs, com organização coerente em rotas, controllers, services, repositories e middlewares.
- **DoR:** Contrato das rotas definido, regras de negócio priorizadas e estrutura do projeto backend preparada.
- **DoD:** Disponibilizar a API em Node.js com TypeScript, com rotas documentadas e organização coerente em rotas, controllers, services, repositories e middlewares.

### TP08 - Ambiente completo com Docker Compose

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RNF05, RNF06, RP04
- **Descrição:** Executar PostgreSQL, backend e frontend exclusivamente por containers, com comando único de inicialização e variáveis de ambiente documentadas.
- **DoR:** Imagens e dependências de cada serviço definidas, variáveis de ambiente mapeadas e estratégia de orquestração acordada.
- **DoD:** Subir PostgreSQL, backend e frontend com Docker Compose, mantendo a aplicação funcional sem execução local fora dos containers.

### TP09 - Segurança com hash e JWT

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RNF08, RNF09
- **Descrição:** Garantir uso de JWT no backend, hash seguro para senhas, expiração de token e proteção de informações sensíveis por variáveis de ambiente.
- **DoR:** Chaves sensíveis separadas em ambiente, biblioteca de hash definida e política de expiração acordada.
- **DoD:** Usar JWT com expiração, armazenar senhas com hash seguro, proteger variáveis sensíveis por ambiente e evitar exposição de dados sensíveis nas respostas da API.

### TP10 - Validação básica de desempenho

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RNF02
- **Descrição:** Verificar tempo de resposta do backend, consultas ao banco e exibição de evidências nos principais fluxos do chatbot.
- **DoR:** Cenários críticos de consulta definidos, pontos de medição escolhidos e massa de dados mínima disponível para testes.
- **DoD:** Executar validação de desempenho nos fluxos principais e registrar que o tempo de resposta ficou adequado ao uso interativo do sistema.

### BD03 - Modelagem e carga inicial do banco PostgreSQL

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP03, RNF03
- **Descrição:** Estruturar tabelas, relacionamentos e dados iniciais para navegação, respostas, documentos, chunks, satisfação e perguntas encaminhadas.
- **DoR:** Modelo de dados aprovado, entidades identificadas e scripts iniciais de banco planejados.
- **DoD:** Disponibilizar o esquema do PostgreSQL com DDL e DML aplicados e dados iniciais suficientes para sustentar o chatbot e suas evidências.

### ES01 - Documentação e diagramas UML

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RNF04, RNF07
- **Descrição:** Manter README principal, READMEs por pasta e diagramas de Casos de Uso, Classes, Sequência e Componentes alinhados à implementação real do repositório.
- **DoR:** Escopo consolidado, arquitetura definida e padrão de documentação escolhido para o grupo.
- **DoD:** Entregar README principal, READMEs das pastas principais e os diagramas UML obrigatórios de forma coerente com a implementação realizada.
