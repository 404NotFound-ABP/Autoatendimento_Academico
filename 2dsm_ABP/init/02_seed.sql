INSERT INTO navigation_nodes (id, parent_id, title, content) VALUES
(1, NULL, 'Desenvolvimento de Software Multiplataforma', 'Bem-vindo ao atendimento de DSM. Como posso ajudar?'),
(2, NULL, 'Geoprocessamento', 'Bem-vindo ao atendimento de Geoprocessamento. O que você procura?'),
(3, NULL, 'Meio Ambiente e Recursos Hídricos', 'Bem-vindo ao atendimento de MARH. Selecione uma opção:'),
(4, NULL, 'Não sou aluno', 'Para qual assunto você gostaria de obter informações?');

select setval('navigation_nodes_id_seq', (SELECT MAX(id) FROM navigation_nodes));

INSERT INTO navigation_nodes (parent_id, title, content) VALUES
(1, 'Atividades Complementares (AACC)', 'O curso de DSM não possui Atividades Acadêmico-Científico-Culturais (AACC) previstas em sua matriz curricular.');


INSERT INTO navigation_nodes (parent_id, title, content) VALUES
(4, 'Como ingressar na Fatec?', 'O ingresso na Fatec ocorre por meio de vestibular. O processo seletivo é realizado duas vezes ao ano.');
