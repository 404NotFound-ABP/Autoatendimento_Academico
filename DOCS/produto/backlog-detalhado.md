# Backlog Detalhado do Produto

> Projeto: Aplicação Web para Autoatendimento da Secretaria Acadêmica da Fatec Jacareí.


## Objetivo

Organizar o backlog no formato mais próximo do exemplo do professor, com rastreabilidade entre requisito funcional e user story, além de DoR e DoD resumidos por item.

## Legenda de Prioridade

| Prioridade | Uso no backlog |
| --- | --- |
| ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Itens obrigatórios para o MVP e para os requisitos centrais do desafio. |
| ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Itens importantes que ampliam a solução, mas podem entrar após o fluxo principal ficar estável. |
| ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green) | Itens complementares que agregam valor sem bloquear a demonstração principal. |

## Backlog Funcional

Cada item abaixo relaciona a user story ao requisito funcional correspondente e resume o que precisa estar pronto antes de entrar em desenvolvimento e o que caracteriza a entrega concluída.

## Atendimento ao Usuário

### RF01 (DW01) • O sistema deve permitir escolher o curso ou perfil logo no início do atendimento.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como aluno ou interessado externo, quero escolher meu curso ou perfil antes de iniciar a conversa, para que eu receba respostas adequadas ao meu contexto.
- **DoR:** Conteúdo inicial por curso validado com a secretaria, mensagem de abertura aprovada e nó raiz da conversa modelado no banco.
- **DoD:** Exibir as quatro opções iniciais, registrar a escolha do usuário e encaminhar corretamente para o fluxo correspondente.
- **Requisitos complementares:** Não se aplica.

### RF01 (DW02) • O sistema deve permitir navegar por menus e submenus em formato de chatbot.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como usuário do autoatendimento, quero navegar por menus e submenus guiados, para que eu localize informações sem depender de atendimento humano imediato.
- **DoR:** Árvore de navegação por curso mapeada, estrutura de nós e opções definida e comportamento de retorno planejado.
- **DoD:** Carregar menus a partir do banco, permitir navegação hierárquica com voltar e encerrar cada ramo com a resposta esperada.
- **Requisitos complementares:** Não se aplica.

### RF01, RF02 (DW03) • O sistema deve permitir consultas diretas no autoatendimento.

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **User story:** Como usuário do autoatendimento, quero fazer consultas diretas quando eu já souber o assunto desejado, para que eu encontre respostas com mais rapidez.
- **DoR:** Perguntas frequentes catalogadas, estratégia de busca definida e campo de consulta previsto na interface pública.
- **DoD:** Permitir a consulta direta, localizar respostas cadastradas quando houver aderência e orientar o usuário quando a busca não resolver o caso.
- **Requisitos complementares:** Não se aplica.

### RF01, RF02 (DW04) • O sistema deve apresentar respostas resumidas, objetivas e padronizadas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como usuário do autoatendimento, quero receber respostas claras e padronizadas ao final de cada fluxo, para que eu entenda a orientação sem ambiguidades.
- **DoR:** Textos oficiais validados com a secretaria, respostas resumidas aprovadas e relação entre assunto, curso e resposta definida.
- **DoD:** Apresentar respostas padronizadas nos fluxos finais, mantendo linguagem objetiva e coerência com o conteúdo oficial do desafio.
- **Requisitos complementares:** RP05.

### RF02 (DW05) • O sistema deve exibir evidências documentais vinculadas às respostas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como usuário do autoatendimento, quero visualizar o trecho documental que sustenta a resposta recebida, para que eu confie na orientação fornecida pelo sistema.
- **DoR:** Documentos oficiais reunidos, trechos relevantes identificados e metadados de fonte mapeados para cada resposta aplicável.
- **DoD:** Exibir evidência documental com nome do arquivo, página e seção sempre que houver vínculo cadastrado para a resposta.
- **Requisitos complementares:** RP05.

### RF05 (TP04) • O sistema deve permitir encaminhar perguntas à Secretaria Acadêmica.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como usuário do autoatendimento, quero enviar minha dúvida para a secretaria quando o chatbot não resolver meu problema, para que eu receba retorno humano sobre o caso.
- **DoR:** Campos da pergunta, e-mail, status inicial e ponto de encerramento do fluxo definidos para o atendimento público.
- **DoD:** Exibir o formulário no fim do atendimento, salvar a dúvida com os dados informados e confirmar o recebimento ao usuário.
- **Requisitos complementares:** Não se aplica.

### RF07 (DW06) • O sistema deve permitir que o usuário avalie sua satisfação com o atendimento.

- **Prioridade:** ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green)
- **User story:** Como usuário do autoatendimento, quero registrar se gostei ou não gostei da interação, para que meu feedback fique registrado para a equipe.
- **DoR:** Opções de satisfação definidas, relacionamento com o atendimento modelado e experiência de encerramento planejada.
- **DoD:** Permitir uma única avaliação por interação, registrar o feedback e retornar confirmação de sucesso ao usuário.
- **Requisitos complementares:** Não se aplica.

## Perfis, Administração Interna e Conteúdo

### RF03 (TP01) • O sistema deve contemplar os perfis de aluno, Secretaria Acadêmica e administrador.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como equipe do projeto, quero ter perfis de acesso definidos para público e área interna, para que cada usuário visualize apenas as funcionalidades compatíveis com seu papel.
- **DoR:** Perfis do sistema definidos com a secretaria, matriz de acesso validada e rotas públicas e privadas mapeadas.
- **DoD:** Disponibilizar os três perfis previstos no desafio, mantendo acesso público para aluno e acesso autenticado para os perfis internos.
- **Requisitos complementares:** Não se aplica.

### RF04 (TP02) • O sistema deve permitir ao administrador gerenciar menus, submenus e respostas do chatbot.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como administrador, quero criar, editar e excluir menus e respostas do autoatendimento, para que o conteúdo do chatbot fique atualizado sem depender de alterações manuais no código.
- **DoR:** Regras de CRUD administrativo definidas, modelo de nós validado e tratamento de integridade de dados mapeado.
- **DoD:** Permitir ao administrador manter menus e respostas pelo painel interno, com persistência correta e reflexo imediato na navegação.
- **Requisitos complementares:** Não se aplica.

### RF02, RF04 (BD01) • O sistema deve permitir ao administrador gerenciar documentos oficiais, chunks e metadados.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como administrador, quero cadastrar e manter documentos oficiais e seus trechos indexados, para que as evidências do autoatendimento permaneçam atualizadas e rastreáveis.
- **DoR:** Tipos de documento, metadados obrigatórios e vínculo entre resposta e trecho definidos para o painel administrativo.
- **DoD:** Cadastrar, editar e remover documentos e trechos indexados, preservando o vínculo entre evidência e resposta final.
- **Requisitos complementares:** Não se aplica.

### RF04 (TP03) • O sistema deve permitir ao administrador gerenciar usuários do perfil Secretaria Acadêmica.

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **User story:** Como administrador, quero cadastrar, editar e desativar usuários da secretaria, para que o acesso ao painel interno fique sob controle institucional.
- **DoR:** Campos obrigatórios, política de ativação e fluxo de cadastro dos usuários da secretaria definidos com antecedência.
- **DoD:** Permitir a gestão de usuários da secretaria com papel definido, persistência correta e armazenamento seguro das senhas.
- **Requisitos complementares:** RNF09.

## Secretaria e Rastreabilidade

### RF06 (TP05) • O sistema deve permitir à Secretaria Acadêmica listar e atualizar o status das perguntas recebidas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como secretaria acadêmica, quero acompanhar as perguntas enviadas pelos usuários e atualizar seus status, para que eu controle o andamento dos atendimentos internos.
- **DoR:** Painel interno da secretaria planejado, status permitidos definidos e regras de acesso validadas.
- **DoD:** Listar as dúvidas recebidas, permitir a mudança de status e persistir as atualizações com controle de acesso adequado.
- **Requisitos complementares:** Não se aplica.

### RF04, RF08 (BD02) • O sistema deve registrar logs completos das interações e permitir sua consulta administrativa.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como administrador, quero consultar os registros das interações realizadas no autoatendimento, para que eu acompanhe o fluxo navegado, as dúvidas enviadas e o feedback registrado.
- **DoR:** Eventos de log definidos, modelo de armazenamento criado e campos de consulta administrativa planejados para o painel.
- **DoD:** Registrar cada interação com fluxo, pergunta, satisfação e horário, mantendo os logs disponíveis para consulta administrativa.
- **Requisitos complementares:** Não se aplica.

## Segurança e Controle de Acesso

### RF09, RF10, RF11 (TP06) • O sistema deve autenticar usuários internos, controlar acesso por papel e proteger as rotas administrativas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **User story:** Como secretaria acadêmica ou administrador, quero fazer login com segurança e acessar somente as funcionalidades autorizadas ao meu perfil, para que o painel interno fique protegido contra acessos indevidos.
- **DoR:** Fluxo de login definido, payload do JWT validado, regras de RBAC mapeadas e middlewares previstos para as rotas internas.
- **DoD:** Autenticar usuários internos com login e senha, emitir JWT, validar token nas rotas administrativas e bloquear acessos indevidos por papel.
- **Requisitos complementares:** RNF08, RNF09, RP06.

## Backlog Técnico e de Entrega

Itens de sustentação técnica e acadêmica que garantem aderência às restrições, aos requisitos não funcionais e ao formato de entrega pedido no desafio.

### BD03 • Modelar o banco PostgreSQL e o repositório de conhecimento com DDL e DML explícitos.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP03, RNF03.
- **Descrição:** Estruturar tabelas, relacionamentos e dados iniciais para nós de navegação, respostas, documentos, chunks e metadados.
- **DoR:** Modelo de dados aprovado, entidades identificadas e scripts iniciais de banco planejados.
- **DoD:** Disponibilizar o esquema do PostgreSQL com DDL e DML aplicados e dados iniciais suficientes para sustentar o chatbot.

### DW07 • Construir o frontend em React com TypeScript com foco em clareza e responsividade.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP01, RNF01.
- **Descrição:** Implementar a interface pública e os painéis internos com adaptação para navegadores e dispositivos móveis.
- **DoR:** Fluxos principais definidos, navegação de telas planejada e padrão visual escolhido para o projeto.
- **DoD:** Executar o frontend em React com TypeScript, cobrindo desktop e mobile para os fluxos públicos e internos previstos.

### TP07 • Construir o backend HTTP em Node.js com TypeScript e documentar suas rotas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RP02, RNF03.
- **Descrição:** Expor endpoints para autenticação, navegação, conteúdo administrativo, perguntas, satisfação e logs.
- **DoR:** Contrato das rotas definido, regras de negócio priorizadas e estrutura do projeto backend preparada.
- **DoD:** Disponibilizar a API em Node.js com TypeScript e documentar os endpoints necessários para integração com o frontend.

### TP08 • Containerizar a aplicação completa e subir o ambiente com Docker Compose.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RNF05, RNF06, RP04.
- **Descrição:** Executar PostgreSQL, backend e frontend exclusivamente por containers, com comando único de inicialização.
- **DoR:** Imagens e dependências de cada serviço definidas, variáveis de ambiente mapeadas e estratégia de orquestração acordada.
- **DoD:** Subir PostgreSQL, backend e frontend com Docker Compose, mantendo a aplicação funcional sem execução local fora dos containers.

### ES01 • Produzir a documentação do repositório e os diagramas UML obrigatórios.

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RNF04, RNF07.
- **Descrição:** Manter README principal, READMEs por pasta e diagramas de casos de uso, classes, sequência e componentes.
- **DoR:** Escopo consolidado, arquitetura definida e padrão de documentação escolhido para o grupo.
- **DoD:** Entregar os READMEs atualizados e os diagramas UML obrigatórios de forma coerente com a implementação realizada.

### TP09 • Aplicar segurança operacional com JWT, hash de senha, expiração de token e variáveis de ambiente.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RNF08, RNF09, RP06.
- **Descrição:** Garantir uso de JWT no backend, bcrypt para senhas, expiração de token e proteção de informações sensíveis.
- **DoR:** Chaves sensíveis separadas em ambiente, biblioteca de hash definida e política de expiração acordada.
- **DoD:** Usar JWT com expiração, armazenar senhas com hash seguro e evitar exposição de dados sensíveis nas respostas da API.

### TP10 • Validar desempenho de consultas e recuperação de evidências para uso interativo.

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RNF02.
- **Descrição:** Verificar tempo de resposta do backend, consultas ao banco e exibição de trechos documentais nos principais fluxos do chatbot.
- **DoR:** Cenários críticos de consulta definidos, pontos de medição escolhidos e massa de dados mínima disponível para testes.
- **DoD:** Executar validação de desempenho nos fluxos principais e registrar que o tempo de resposta ficou adequado ao uso interativo do sistema.
