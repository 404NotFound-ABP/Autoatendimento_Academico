# Requisitos do Projeto

## Requisitos Funcionais

| ID | Requisito | Descrição breve |
| --- | --- | --- |
| RF01 | Navegação conversacional | O sistema deve funcionar como chatbot com menus e submenus hierárquicos, guiando o usuário conforme suas escolhas. |
| RF02 | Repositório de conhecimento | O sistema deve manter uma base estruturada com nós de navegação, perguntas, respostas, documentos, chunks e metadados. |
| RF03 | Perfis de usuário | O sistema deve atender os perfis Aluno, Secretaria Acadêmica e Administrador, com acessos distintos. |
| RF04 | Gestão de conteúdo | O administrador deve poder gerenciar menus, respostas, documentos, usuários da secretaria e logs. |
| RF05 | Encaminhamento de pergunta | Ao final do atendimento, o usuário deve poder enviar uma dúvida para a secretaria, com texto e e-mail para retorno, preferencialmente institucional quando aplicável. |
| RF06 | Gestão de perguntas | A Secretaria Acadêmica deve poder listar perguntas recebidas e atualizar o status de cada uma. |
| RF07 | Avaliação de satisfação | O usuário deve poder informar se gostou ou não da interação com o sistema. |
| RF08 | Registro de logs | O sistema deve registrar navegação, perguntas enviadas, satisfação e data/hora de cada atendimento. |
| RF09 | Autenticação | Secretaria Acadêmica e Administrador devem acessar por login e senha, enquanto o Aluno permanece sem autenticação. |
| RF10 | Autorização por papel | O sistema deve aplicar RBAC para limitar cada funcionalidade ao papel correto. |
| RF11 | Proteção de rotas | As rotas administrativas devem ser protegidas por middleware com validação obrigatória do token. |

## Requisitos Não Funcionais

| ID | Requisito | Descrição breve |
| --- | --- | --- |
| RNF01 | Usabilidade e responsividade | A interface deve ser simples, clara e adaptada para navegadores e dispositivos móveis. |
| RNF02 | Desempenho | O sistema deve responder rapidamente, inclusive em consultas ao banco e na recuperação de trechos documentais. |
| RNF03 | Documentação técnica | O projeto deve incluir visão geral, modelo de dados, arquitetura, execução e documentação da API. |
| RNF04 | Modelagem UML | O projeto deve apresentar diagramas de casos de uso, classes, sequência e componentes. |
| RNF05 | Containerização | O sistema deve rodar com Docker usando, no mínimo, containers de PostgreSQL, backend e frontend. |
| RNF06 | Orquestração de containers | O ambiente deve poder ser iniciado com comando único usando ferramenta como Docker Compose. |
| RNF07 | Documentação do repositório | O repositório deve ter READMEs, descrição das funcionalidades, estrutura, diagramas e instruções de execução. |
| RNF08 | Autenticação com JWT | A autenticação deve usar JWT com identificador, papel e expiração enviados no cabeçalho Authorization. |
| RNF09 | Segurança | O sistema deve proteger senhas, chaves sensíveis, expiração de token e dados expostos pela API. |

## Restrições de Projeto

| ID | Restrição | Descrição breve |
| --- | --- | --- |
| RP01 | Frontend | O frontend deve ser desenvolvido obrigatoriamente em React com TypeScript. |
| RP02 | Backend | O backend deve ser desenvolvido obrigatoriamente em Node.js com TypeScript e endpoints HTTP. |
| RP03 | Banco de dados | O banco deve ser, obrigatoriamente, PostgreSQL, com uso explícito de DDL e DML. |
| RP04 | Execução containerizada | Toda a aplicação deve rodar exclusivamente por meio de containers Docker. |
| RP05 | MVP | O escopo deve priorizar um MVP funcional com navegação completa, respostas estruturadas e evidências documentais. |
| RP06 | JWT obrigatório | A autenticação deve ser implementada no backend com JWT, sem depender apenas do frontend. |
