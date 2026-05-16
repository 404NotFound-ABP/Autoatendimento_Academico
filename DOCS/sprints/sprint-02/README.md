# Sprint 02

## Status

![Status](https://img.shields.io/badge/Status-Em%20andamento-FACC15)

## Período

| Marco | Data |
| --- | --- |
| Entrega prevista | 25/05/2026 |

## Objetivo

Transformar o MVP mockado da Sprint 1 em um fluxo público real, integrado e reproduzível, corrigindo as pendências estruturais apontadas na avaliação e preparando a base técnica e documental necessária para a área interna do sistema.

## Sprint Backlog

| ID | Frente | Item | Prioridade | Origem | Recorte da Sprint |
| --- | --- | --- | --- | --- | --- |
| ES01 | Documentação | Documentação do repositório e diagramas UML | ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow) | Carry-over da Sprint 1 | Corrigir README principal, READMEs das pastas principais e entregar diagramas de Casos de Uso, Classes, Sequência e Componentes coerentes com a implementação. |
| DW02 | Frontend | Navegação por menus e submenus | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Carry-over da Sprint 1 | Migrar o fluxo principal do chatbot para navegação baseada em dados persistidos no banco por meio da API. |
| DW05 | Frontend | Evidências documentais vinculadas | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Planejado para Sprint 2 | Exibir evidência documental vinculada às respostas, com referência rastreável no fluxo público. |
| DW07 | Frontend | Frontend em React com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Planejado para Sprint 2 | Reorganizar o frontend para integração com serviços, separação entre lógica e interface e tipagem mais robusta. |
| BD03 | Backend e Dados | Modelagem e carga inicial do banco PostgreSQL | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Planejado para Sprint 2 | Revisar a modelagem para sustentar navegação, respostas, perguntas, logs, documentos e evidências, com seed suficiente para o MVP. |
| TP07 | Backend e Dados | API em Node.js com TypeScript | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Planejado para Sprint 2 | Refatorar a API com separação em camadas, padronização de rotas e documentação coerente dos endpoints. |
| TP04 | Backend e Dados | Encaminhamento de perguntas para a secretaria | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Planejado para Sprint 2 | Permitir o envio real de dúvidas ao final do atendimento, com persistência no banco. |
| BD01 | Backend e Dados | Gestão de documentos, chunks e metadados | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Antecipado da Sprint 3 | Implementar a estrutura mínima de dados e vínculo com respostas para sustentar evidências documentais no fluxo público; a gestão administrativa completa fica para a Sprint 3. |
| BD02 | Backend e Dados | Registro e consulta de logs administrativos | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Antecipado da Sprint 3 | Persistir os logs essenciais de navegação, envio de dúvida e satisfação; a consulta administrativa detalhada fica para a Sprint 3. |
| TP01 | Autenticação e Acesso | Perfis de acesso do sistema | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Planejado para Sprint 2 | Formalizar os perfis Aluno, Secretaria Acadêmica e Administrador com matriz de acesso coerente entre frontend, backend e documentação. |
| TP06 | Autenticação e Acesso | Login, JWT e autorização por papel | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Planejado para Sprint 2 | Implementar autenticação mínima no backend, emissão de JWT, Bearer Token e proteção das rotas administrativas já existentes. |
| TP09 | Autenticação e Acesso | Segurança com hash e JWT | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Planejado para Sprint 2 | Aplicar hash seguro para senhas, expiração de token e uso correto de variáveis de ambiente para informações sensíveis. |
| TP08 | Infraestrutura e Implementação | Ambiente completo com Docker Compose | ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red) | Antecipado da Sprint 3 | Subir frontend, backend e PostgreSQL com comando único, com `.env.example` e documentação de inicialização reproduzível. |

## Entregas esperadas

- Fluxo público do chatbot executando com navegação baseada em banco de dados e API.
- Respostas finais padronizadas com exibição de evidências documentais vinculadas.
- Envio de dúvidas com persistência real no banco de dados.
- Registro inicial de logs de navegação e satisfação do atendimento.
- Proteção mínima das rotas administrativas com autenticação, JWT e autorização por papel.
- Ambiente completo executando com Docker Compose.
- Documentação do repositório e diagramas UML atualizados e coerentes com a implementação.

## Evidências

- Links dos PRs e commits relacionados às entregas da sprint.
- Capturas ou gravação da execução integrada do fluxo público.
- Evidência da execução do ambiente com Docker Compose.
- Links para Swagger ou documentação atualizada dos endpoints.
- Links dos diagramas UML e do modelo de dados revisado.

## Tasks

- O detalhamento das tasks, responsáveis e status será registrado pelo Scrum Master antes do fechamento da sprint.
- Esta seção permanece em aberto apenas para não antecipar a quebra em tarefas neste momento do planejamento.
- Antes da avaliação final, a sprint deve conter tasks rastreáveis para atender integralmente à rubrica.

## Burndown

- O burndown da sprint será consolidado pelo Scrum Master e anexado antes do encerramento da sprint.

## Riscos e Impedimentos

- Mudanças no modelo de dados podem impactar a API e a integração do frontend.
- A implementação de autenticação e proteção de rotas pode exigir refatoração de endpoints já existentes.
- A ausência de seed suficiente ou de vínculo correto com evidências pode comprometer a demonstração do MVP real.
- O atraso na documentação ou nos diagramas pode prejudicar a avaliação mesmo com avanço técnico.

## Observações

- Itens originalmente previstos para a Sprint 3 foram antecipados quando necessários para atender à rubrica da Sprint 2 e reduzir retrabalho.
- Consulta direta mais avançada (`DW03`) e painéis internos completos (`TP02`, `TP03`, `TP05`) permanecem priorizados para a Sprint 3.
- Um item só deve ser considerado concluído quando estiver coerente com o DoD do produto, mesmo que tenha sido iniciado em sprint anterior.
