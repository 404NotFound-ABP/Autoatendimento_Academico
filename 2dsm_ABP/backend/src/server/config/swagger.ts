export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Chatbot FAQtech Jacareí",
    version: "1.0.0",
    description: "Documentação das rotas de autoatendimento da FAQtech",
  },
  paths: {
    "/admin/nodes/all": {
      get: {
        tags: ["Admin"],
        summary: "Lista todos os nós (Menu) de forma linear",
        responses: { 
          "200": { description: "Lista retornada com sucesso" },
          "500": { description: "Erro interno no servidor" }
        },
      },
    },
    "/admin/nodes/create": {
      post: {
        tags: ["Admin"],
        summary: "Cria nó com upload de PDF opcional",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                required: ["title"], // Adicionado para indicar que o título é obrigatório
                properties: {
                  parent_id: {
                    type: "integer",
                    nullable: true,
                    default: null,
                    description: "ID do nó pai. Deixe vazio para nós raiz (DSM, Geo, etc)"
                  },
                  title: {
                    type: "string",
                    description: "Título/opção de clique do nó"
                  },
                  content: {
                    type: "string",
                    nullable: true,
                    default: null,
                    description: "Conteúdo da resposta"
                  },
                  file: {
                    type: "string",
                    format: "binary",
                    nullable: true,
                    description: "Arquivo PDF de evidência"
                  },
                  link: {
                    type: "string",
                    nullable: true,
                    default: null,
                    description: "URL externa (Opcional)"
                  },
                  display_order: { type: "integer", default: 0 },
                  is_active: { type: "boolean", default: true }
                }
              }
            }
          }
        },
        responses: { 
          "201": { description: "Nó criado com sucesso" },
          "500": { description: "Erro ao criar nó" }
        },
      }
    },
    "/admin/nodes/{id}": {
      put: {
        tags: ["Admin"],
        summary: "Atualiza um nó existente",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do nó a ser atualizado",
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  parent_id: { type: "integer", nullable: true, default: null, description: "ID do nó pai" },
                  title: { type: "string", description: "Título/opção de clique do nó" },
                  content: { type: "string", nullable: true, default: null, description: "Conteúdo da resposta" },
                  file: { type: "string", format: "binary", nullable: true, description: "Arquivo PDF de evidência" },
                  link: { type: "string", nullable: true, default: null, description: "URL externa (Opcional)" },
                  display_order: { type: "integer", default: 0 },
                  is_active: { type: "boolean", default: true }
                }
              }
            }
          }
        },
        responses: { 
          "200": { description: "Nó atualizado com sucesso" },
          "404": { description: "Nó não encontrado" }
        },
      },
      delete: {
        tags: ["Admin"],
        summary: "Deleta um nó existente",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do nó a ser deletado",
            schema: { type: "integer" },
          },
        ],
        responses: { 
          "200": { description: "Nó deletado com sucesso" },
          "500": { description: "Erro ao deletar nó" }
        }
      }
    },
    "/admin/nodes/filter/{id}": {
      get: {
        tags: ["Admin"],
        summary: "Retorna a árvore completa de uma classe principal",
        description: "Usa uma query recursiva para buscar todos os filhos e netos de um nó raiz.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID da classe principal (ex: 1 para DSM)",
            schema: { type: "integer" },
          },
        ],
        responses: { 
          "200": { description: "Árvore retornada com sucesso" },
          "404": { description: "Classe principal não encontrada ou sem ramos" }
        }
      }
    },
    "/api/options/{id}": {
      get: {
        tags: ["API Pública"], 
        summary: "Endpoint de navegação do chat",
        description: "Retorna um menu de próximos botões ou a resposta final em formato de folha.",
        parameters: [
          {
            name: "id",
            in: "path",
            required: false,
            description: "ID do nó atual clicado pelo usuário. Deixe vazio ou 0 para iniciar o chat.",
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": { 
            description: "Sucesso. Pode retornar { type: 'menu', options: [...] } ou { type: 'answer', data: {...} }" 
          },
          "404": { description: "Conteúdo não encontrado" },
          "500": { description: "Erro interno ao processar navegação" }
        }
      } 
    },
    "/api/deve/deletall": {
      "delete": {
        "tags": ["DEV"],
        "summary": "Rota dev que DELETA TODO O BANCO. CUIDADO CARAÍ!!",
        "description": "Atenção: Esta rota executa um DELETE sem WHERE na tabela navigation_nodes. Uso exclusivo para ambiente de testes/desenvolvimento.",
        "responses": {
          "200": {
            "description": "Todos os registros foram apagados com sucesso."
          },
          "500": {
            "description": "Erro interno ao tentar limpar o banco."
          }
        }
      }
    }
  }
};