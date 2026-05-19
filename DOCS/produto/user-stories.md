# Histórias de Usuário

Organizadas por sigla e descritas na estrutura Como / Quero / Para que, com seus respectivos critérios de aceitação.

## Itens DW

### DW01 • O sistema deve permitir escolher o curso ou perfil logo no início do atendimento.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF01
- **Como:** Aluno ou interessado externo.
- **Quero:** Escolher meu curso ou perfil antes de iniciar a conversa.
- **Para que:** Receber respostas adequadas ao meu contexto.

**Critérios de aceitação**

1. Ao acessar o sistema, o usuário deve visualizar a saudação inicial e as opções DSM, Geoprocessamento, MARH e Não sou aluno.
2. A opção selecionada deve direcionar o usuário para a árvore de atendimento correta.
3. A escolha inicial deve ser registrada no contexto da sessão para uso no restante da navegação.
4. O usuário deve conseguir reiniciar o atendimento e escolher outra opção inicial sem recarregar o sistema.

### DW02 • O sistema deve permitir navegar por menus e submenus em formato de chatbot.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF01
- **Como:** Usuário do autoatendimento.
- **Quero:** Navegar por menus e submenus guiados.
- **Para que:** Localizar informações sem depender de atendimento humano imediato.

**Critérios de aceitação**

1. Os menus e submenus devem ser carregados a partir dos dados cadastrados no banco de dados.
2. Cada escolha do usuário deve levar ao próximo nó correto da árvore de navegação.
3. O sistema deve permitir voltar para a etapa anterior e retornar ao menu inicial.
4. Quando o fluxo chegar a uma resposta final, o atendimento deve oferecer os próximos passos possíveis.

### DW03 • O sistema deve permitir consultas diretas no autoatendimento.

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RF01, RF02
- **Como:** Usuário do autoatendimento.
- **Quero:** Fazer consultas diretas quando eu já souber o assunto desejado.
- **Para que:** Encontrar respostas com mais rapidez.

**Critérios de aceitação**

1. O sistema deve disponibilizar um campo de consulta direta além da navegação guiada.
2. A busca deve comparar a pergunta digitada com perguntas e respostas padronizadas do repositório de conhecimento.
3. Quando houver correspondência válida, o sistema deve exibir a resposta relacionada ao tema consultado.
4. Quando não houver correspondência suficiente, o sistema deve orientar o usuário a seguir pela navegação guiada ou encaminhar a dúvida à secretaria.

### DW04 • O sistema deve apresentar respostas resumidas, objetivas e padronizadas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF01, RF02, RP05
- **Como:** Usuário do autoatendimento.
- **Quero:** Receber respostas claras e padronizadas ao final de cada fluxo.
- **Para que:** Entender a orientação sem ambiguidades.

**Critérios de aceitação**

1. Ao final de cada fluxo, o sistema deve exibir uma resposta resumida em linguagem clara.
2. A resposta apresentada deve ser compatível com o conteúdo oficial previamente cadastrado.
3. O texto não deve expor termos internos do sistema nem informações técnicas desnecessárias ao usuário final.
4. Quando houver evidências cadastradas, a resposta deve manter o vínculo com a fonte correspondente.

### DW05 • O sistema deve exibir evidências documentais vinculadas às respostas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF02, RP05
- **Como:** Usuário do autoatendimento.
- **Quero:** Visualizar o trecho documental que sustenta a resposta recebida.
- **Para que:** Confiar na orientação fornecida pelo sistema.

**Critérios de aceitação**

1. Quando houver evidência aplicável, o sistema deve mostrar o trecho do documento oficial relacionado à resposta.
2. A evidência deve informar pelo menos nome do documento, página e seção ou âncora, quando disponível.
3. A evidência exibida deve estar vinculada à resposta atualmente apresentada ao usuário.
4. Se uma resposta não possuir evidência cadastrada, o sistema não deve inventar fonte nem trecho documental.

### DW06 • O sistema deve permitir que o usuário avalie sua satisfação com o atendimento.

- **Prioridade:** ![Prioridade Baixa](https://img.shields.io/badge/Prioridade-Baixa-green)
- **Requisitos relacionados:** RF07
- **Como:** Usuário do autoatendimento.
- **Quero:** Registrar minha avaliação sobre a interação.
- **Para que:** Manter meu feedback registrado para a equipe.

**Critérios de aceitação**

1. Ao final do atendimento, o sistema deve disponibilizar pelo menos uma opção de avaliação de satisfação.
2. O usuário deve conseguir registrar apenas uma avaliação por interação encerrada.
3. A avaliação deve ser vinculada ao atendimento correspondente com data e hora.
4. Após a avaliação, o sistema deve confirmar que o feedback foi registrado.

### DW08 • O sistema deve exibir uma tela de e-mail para envio de dúvidas ao final do atendimento.

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RF05
- **Como:** Usuário do autoatendimento.
- **Quero:** Informar meu e-mail e minha dúvida em uma tela própria do app.
- **Para que:** Solicitar retorno da secretaria quando o chatbot não resolver meu caso.

**Critérios de aceitação**

1. Ao final do atendimento, o sistema deve oferecer acesso à tela ou ao formulário de e-mail.
2. A interface deve exibir, no mínimo, um campo de e-mail e um campo de dúvida.
3. Para alunos, a interface deve orientar o uso do e-mail institucional; para público externo, deve aceitar e-mail comum.
4. O frontend deve validar o preenchimento mínimo antes do envio.
5. Após o envio, o sistema deve exibir confirmação visual coerente com o fluxo do atendimento.

## Itens TP

### TP01 • O sistema deve contemplar os perfis de aluno, Secretaria Acadêmica e administrador.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF03
- **Como:** Equipe do projeto.
- **Quero:** Ter perfis de acesso definidos para público e área interna.
- **Para que:** Garantir que cada usuário visualize apenas as funcionalidades compatíveis com seu papel.

**Critérios de aceitação**

1. O perfil Aluno deve permanecer com acesso público, sem autenticação.
2. Os perfis Secretaria Acadêmica e Administrador devem existir como perfis autenticados no sistema.
3. As funcionalidades internas devem considerar o perfil do usuário autenticado.
4. A identificação de perfil deve estar refletida no backend e na navegação disponível para cada papel.

### TP02 • O sistema deve permitir ao administrador gerenciar menus, submenus e respostas do chatbot.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF04
- **Como:** Administrador.
- **Quero:** Criar, editar e excluir menus e respostas do autoatendimento.
- **Para que:** Manter o conteúdo do chatbot atualizado sem depender de alterações manuais no código.

**Critérios de aceitação**

1. O administrador autenticado deve conseguir criar, editar e excluir nós de navegação e respostas finais.
2. As alterações devem ser persistidas no banco de dados e refletidas na navegação do chatbot.
3. O sistema deve impedir o acesso dessa funcionalidade a perfis que não sejam administrador.
4. Ao excluir um nó com dependências, o sistema deve tratar a integridade dos dados antes de concluir a operação.

### TP03 • O sistema deve permitir ao administrador gerenciar usuários do perfil Secretaria Acadêmica.

- **Prioridade:** ![Prioridade Media](https://img.shields.io/badge/Prioridade-Media-yellow)
- **Requisitos relacionados:** RF04, RNF09
- **Como:** Administrador.
- **Quero:** Cadastrar, editar e desativar usuários da secretaria.
- **Para que:** Manter o acesso ao painel interno sob controle institucional.

**Critérios de aceitação**

1. O administrador deve conseguir cadastrar, editar e desativar usuários do perfil Secretaria Acadêmica.
2. Cada usuário interno deve possuir login, senha e papel definidos no sistema.
3. As senhas não devem ser armazenadas em texto puro; devem usar hash seguro.
4. Usuários sem papel de administrador não devem acessar essa gestão.

### TP04 • O sistema deve permitir encaminhar perguntas à Secretaria Acadêmica.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF05
- **Como:** Usuário do autoatendimento.
- **Quero:** Encaminhar minha dúvida para a secretaria quando o chatbot não resolver meu problema.
- **Para que:** Receber retorno humano sobre o caso.

**Critérios de aceitação**

1. O sistema deve receber os dados enviados pela tela ou pelo formulário de e-mail ao final do atendimento.
2. A pergunta deve ser salva com status inicial Em aberto e com registro de data e hora.
3. O envio deve permanecer vinculado ao e-mail informado para retorno posterior.
4. Após o processamento, o usuário deve visualizar uma mensagem de confirmação do recebimento da dúvida.

### TP05 • O sistema deve permitir à Secretaria Acadêmica listar e atualizar o status das perguntas recebidas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF06
- **Como:** Secretaria Acadêmica.
- **Quero:** Acompanhar as perguntas enviadas pelos usuários e atualizar seus status.
- **Para que:** Controlar o andamento dos atendimentos internos.

**Critérios de aceitação**

1. A Secretaria Acadêmica autenticada deve conseguir acessar a lista de perguntas enviadas pelos usuários.
2. A listagem deve exibir pelo menos texto da dúvida, e-mail informado, status e data e hora de envio.
3. A secretaria deve conseguir alterar o status para Em aberto, Em atendimento ou Respondida.
4. Usuários não autenticados ou sem papel de secretaria não devem acessar essa funcionalidade.

### TP06 • O sistema deve autenticar usuários internos, controlar acesso por papel e proteger as rotas administrativas.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF09, RF10, RF11, RNF08, RNF09, RP06
- **Como:** Secretaria Acadêmica ou administrador.
- **Quero:** Fazer login com segurança e acessar somente as funcionalidades autorizadas ao meu perfil.
- **Para que:** Manter o painel interno protegido contra acessos indevidos.

**Critérios de aceitação**

1. Ao informar credenciais válidas, o usuário interno deve receber autenticação bem-sucedida no backend.
2. A autenticação deve gerar JWT contendo identificador do usuário, papel e tempo de expiração.
3. Rotas administrativas devem exigir token válido e papel apropriado antes de liberar acesso.
4. Requisições sem autenticação ou com papel inadequado devem retornar erro apropriado sem expor informações sensíveis.

## Itens BD

### BD01 • O sistema deve permitir ao administrador gerenciar documentos oficiais, chunks e metadados.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF02, RF04
- **Como:** Administrador.
- **Quero:** Cadastrar e manter documentos oficiais e seus trechos indexados.
- **Para que:** Garantir que as evidências do autoatendimento permaneçam atualizadas e rastreáveis.

**Critérios de aceitação**

1. O administrador deve conseguir cadastrar documentos oficiais com seus metadados relevantes.
2. O administrador deve conseguir associar trechos ou chunks às respostas cadastradas no sistema.
3. Deve ser possível editar ou remover documentos e evidências desatualizadas.
4. A relação entre resposta, documento e metadados deve ser preservada para consulta posterior.

### BD02 • O sistema deve registrar logs completos das interações e permitir sua consulta administrativa.

- **Prioridade:** ![Prioridade Alta](https://img.shields.io/badge/Prioridade-Alta-red)
- **Requisitos relacionados:** RF04, RF08
- **Como:** Administrador.
- **Quero:** Consultar os registros das interações realizadas no autoatendimento.
- **Para que:** Acompanhar o fluxo navegado, as dúvidas enviadas e o feedback registrado.

**Critérios de aceitação**

1. O sistema deve registrar o fluxo completo de navegação realizado em cada atendimento.
2. O log deve armazenar perguntas enviadas à secretaria, registro de satisfação e data e hora da interação.
3. Os registros devem ser persistidos sem expor dados sensíveis, como senha ou token.
4. Quando a funcionalidade administrativa estiver disponível, o administrador deve conseguir consultar os logs de navegação.
