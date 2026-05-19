import { useState, useCallback } from 'react';



export interface ChatItem {
  id: number;
  type: string;
  text?: string;
  from?: string;
  url?: string;
  options?: string[];
  label?: string;
  isAluno?: boolean;
  onSelect?: (opt: string) => void;
  onYes?: () => void;
  onNo?: () => void;
  onSubmit?: (email: string, doubt: string) => void;
  onRate?: (rating: string) => void;
}


let idCounter = 0;
const uid = (): number => ++idCounter;

// ─────────────────────────────────────────────────────────────────────────────
// CONTEÚDO: NÃO SOU ALUNO
// ─────────────────────────────────────────────────────────────────────────────

const NAO_ALUNO_TOPICS = [
  'A Fatec possui cursos técnicos?',
  'Como ingressar na Fatec?',
  'Como realizar a matrícula?',
  'Cursos oferecidos na Fatec Jacareí',
  'Horários das aulas',
];

const NAO_ALUNO_RESPOSTAS = {
  'A Fatec possui cursos técnicos?': {
    texto: 'A Fatec oferece exclusivamente cursos de graduação tecnológica (ensino superior). Caso você esteja interessado em cursos técnicos de nível médio, recomendamos acessar o site da Etec Jacareí:',
    link: 'https://vestibulinho.etec.sp.gov.br/unidades-cursos/escola.asp?c=77',
  },
  'Como ingressar na Fatec?': {
    texto: 'O ingresso na Fatec ocorre por meio de vestibular. O processo seletivo é realizado duas vezes ao ano, com ingressos previstos para os meses de fevereiro e agosto. Para obter informações detalhadas sobre inscrições e datas, acesse o portal oficial do vestibular:',
    link: 'https://vestibular.fatec.sp.gov.br/home/',
  },
  'Como realizar a matrícula?': {
    texto: 'A matrícula dos candidatos aprovados no vestibular é realizada de forma totalmente online, por meio do portal oficial do vestibular, dentro do prazo estabelecido no calendário do processo seletivo.',
    link: null,
  },
  'Cursos oferecidos na Fatec Jacareí': {
    texto: 'A Fatec Jacareí oferece os seguintes cursos de graduação tecnológica:\n• Desenvolvimento de Software Multiplataforma\n• Geoprocessamento\n• Meio Ambiente e Recursos Hídricos\n\nTodos os cursos são oferecidos no período noturno, das 18h45 às 23h05, e possuem 3 anos de duração (6 semestres).',
    link: null,
  },
  'Horários das aulas': {
    texto: 'As aulas de todos os cursos da Fatec Jacareí ocorrem no período noturno, das 18h45 às 23h05.',
    link: null,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CONTEÚDO COMPARTILHADO
// ─────────────────────────────────────────────────────────────────────────────

const DATAS_IMPORTANTES = `Calendário acadêmico do 1º semestre letivo de 2026:
• Inscrições para vagas remanescentes e transferências: 12 a 18/01/2026
• Rematrícula de alunos veteranos: 12 a 18/01/2026
• Início das aulas: 09/02/2026
• Prazo para aproveitamento de estudos (Art. 76 – via SIGA): 19/02/2026
• Prazo para reconhecimento de competências (Art. 80, §1º): 19/02/2026
• Ajustes de matrícula (veteranos – Art. 26, §4º): 19/02/2026
• Exame de nivelamento com ajuste de horário (Art. 87, §1º): 21/02/2026
• Ajustes de matrícula (ingressantes – Art. 25, §2º): 23/02/2026
• Exame de nivelamento sem ajuste de horário: 27/02/2026
• Cancelamento por ausência de rematrícula (Art. 28): 02/03/2026
• Prazo final para desistência de disciplina (Art. 30): 25/03/2026
• Prazo final para trancamento (exceto ingressantes – Art. 31, §3º): 13/05/2026
• Término das aulas: 27/06/2026
• Período de exames finais (Art. 34): 06 a 08/07/2026`;

const DISPENSA_RESPOSTAS_COMUNS = {
  'Aproveitamento de estudos – disciplina cursada em outra instituição de ensino superior':
    'A solicitação deve ser realizada pelo SIGA, anexando:\n• Histórico escolar\n• Ementas das disciplinas cursadas\n\nRequisitos:\n• Disciplinas cursadas nos últimos 10 anos\n• Similaridade ≥ 70% → aprovação direta\n• Similaridade entre 50% e 70% → exame de proficiência\n• Similaridade < 50% → indeferimento\n\nReferência: Regulamento Geral dos Cursos Superiores das Fatecs – Seção I, p. 25.',
  'Reconhecimento de competências – disciplinas cursadas na Etec':
    'É possível solicitar reconhecimento de competências adquiridas em cursos técnicos da Etec, desde que estejam previamente mapeadas no sistema acadêmico.\n\nReferência: Regulamento Geral dos Cursos Superiores das Fatecs – Seção II, p. 27.',
  'Aproveitamento de conhecimentos e experiências anteriores':
    'Para solicitar, é necessário:\n• Diploma(s) ou certificado(s)\n• Realizar exame de proficiência\n\nComprovantes aceitos:\n• Declaração da empresa (experiência profissional)\n• Certificados de cursos cuja soma de carga horária seja equivalente à disciplina\n• Cursos realizados em empresas ou plataformas digitais (ex.: Coursera, Udemy)\n• Cursos de inglês para habilitação às provas de Inglês II, III e IV\n\nA solicitação deve ser formalizada por e-mail à Secretaria Acadêmica, informando o nome da disciplina e anexando os documentos.\n\nE-mail da Secretaria Acadêmica: f258acad@cps.sp.gov.br\n\nReferência: Regulamento Geral dos Cursos Superiores das Fatecs – Seção III, p. 27.',
  'Proficiência em Inglês':
    'No início do 3º semestre é aplicada a prova de proficiência em Inglês para todos os alunos.\n• Plataforma: NEPLE\n• Uso obrigatório de fones de ouvido\n• Aplicação exclusiva no início do 3º semestre\n\nNão é possível realizar a prova em outro período do curso.',
};

const DISPENSA_SUBTOPICOS_COMUNS = [
  'Aproveitamento de estudos – disciplina cursada em outra instituição de ensino superior',
  'Reconhecimento de competências – disciplinas cursadas na Etec',
  'Aproveitamento de conhecimentos e experiências anteriores',
  'Proficiência em Inglês',
];

const ESTAGIO_INICIO_COMUM = 'O estágio deve ser intermediado por empresa ou agente de integração conveniado ao Centro Paula Souza.\n\nApós conseguir a vaga, entre em contato com a Secretaria Administrativa: f258adm@cps.sp.gov.br';

const ESTAGIO_EQUIPARACAO_COMUM = 'Pode ser comprovado por:\n• Iniciação Científica\n• Monitoria\n• Atividade profissional na área\n\nConsultar anexos correspondentes no Manual de Estágio.';

// ─────────────────────────────────────────────────────────────────────────────
// DADOS POR CURSO
// ─────────────────────────────────────────────────────────────────────────────


const HORARIOS_LINKS: Record<string, Record<string, string>> = {
  'Desenvolvimento de software multiplataforma': {
    '1º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-dsm.pdf',
    '2º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-dsm.pdf',
    '3º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-dsm.pdf',
    '4º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-dsm.pdf',
    '5º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-dsm.pdf',
    '6º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-dsm.pdf',
  },
  'Geoprocessamento': {
    '1º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-geo.pdf',
    '2º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-geo.pdf',
    '3º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-geo.pdf',
    '4º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-geo.pdf',
    '5º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-geo.pdf',
    '6º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-geo.pdf',
  },
  'Meio ambiente e recursos hídricos': {
    '1º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-meio-ambiente-noturno.pdf',
    '2º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-meio-ambiente-noturno.pdf',
    '3º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-meio-ambiente-noturno.pdf',
    '4º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-meio-ambiente-noturno.pdf',
    '5º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-meio-ambiente-noturno.pdf',
    '6º semestre': 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/157/2026/02/horario-meio-ambiente-noturno.pdf',
  },
};

const SEMESTRES = ['1º semestre', '2º semestre', '3º semestre', '4º semestre', '5º semestre', '6º semestre'];



const CURSO_DATA = {
  'Desenvolvimento de software multiplataforma': {
    topicos: [
      'Atividades Complementares (AACC)',
      'Datas importantes do semestre',
      'Horário das aulas',
      'Disciplinas com atividades de extensão',
      'Disciplinas remotas',
      'Dispensa de disciplinas',
      'Estágio',
      'Portfólio',
      'Trabalho de Graduação (TG/TCC)',
    ],
    respostas: {
      'Atividades Complementares (AACC)':
        'O curso de Desenvolvimento de Software Multiplataforma não possui Atividades Acadêmico-Científico-Culturais (AACC) previstas em sua matriz curricular.',
      'Datas importantes do semestre': DATAS_IMPORTANTES,
      'Disciplinas com atividades de extensão':
        'No curso de DSM, as atividades de extensão estão vinculadas ao ABP e às seguintes disciplinas:\n\n2º semestre:\n• Engenharia de Software II\n• Desenvolvimento Web II\n• Banco de Dados Relacional\n• Técnicas de Programação I\n\n3º semestre:\n• Gestão Ágil de Projetos\n• Desenvolvimento Web III\n• Técnicas de Programação II\n• Interação Humano-Computador\n\n4º semestre:\n• Laboratório de Desenvolvimento Web\n• Integração e Entrega Contínua\n• Internet das Coisas e Aplicações\n\n5º semestre:\n• Laboratório de Desenvolvimento para Dispositivos Móveis\n• Computação em Nuvem I\n• Aprendizagem de Máquina\n\n6º semestre:\n• Laboratório de Desenvolvimento Multiplataforma\n• Processamento de Linguagem Natural\n• Computação em Nuvem II',
      'Disciplinas remotas':
        'No 5º semestre:\n• Inglês III\n• Fundamentos da Redação Técnica\n\nNo 6º semestre:\n• Todas as disciplinas são remotas.',
      'Horário das aulas':
        'O horário das aulas pode ser consultado através do link:',
      'Portfólio':
        'O curso não possui Trabalho de Graduação (TG). O TG é substituído pela construção do Portfólio Digital.\n\nOs projetos do 4º, 5º e 6º semestres compõem o portfólio.\nO portfólio deve ser hospedado em repositório privado.\n\nPara orientações, contate: marcelo.sudo@fatec.sp.gov.br',
      'Trabalho de Graduação (TG/TCC)':
        'O curso de DSM não possui Trabalho de Graduação (TG/TCC). O TG é substituído pela construção do Portfólio Digital.\n\nOs projetos do 4º, 5º e 6º semestres compõem o portfólio.\nO portfólio deve ser hospedado em repositório privado.\n\nPara orientações, contate: marcelo.sudo@fatec.sp.gov.br',
    },
    dispensa: {
      subtopicos: DISPENSA_SUBTOPICOS_COMUNS,
      respostas: DISPENSA_RESPOSTAS_COMUNS,
    },
    estagio: {
      subtopicos: ['Duração do estágio supervisionado', 'Início do estágio', 'Comprovação', 'Equiparação de estágio'],
      respostas: {
        'Duração do estágio supervisionado': 'Carga horária obrigatória: 240 horas\n\nPode iniciar: a partir do 1º semestre',
        'Início do estágio': ESTAGIO_INICIO_COMUM,
        'Comprovação':
          'Após concluir as 240 horas, o aluno deve elaborar o Relatório Final de Estágio, assinado pelo supervisor e encaminhado ao Professor Orientador.\n\nModelo: Anexos F e G do Manual de Estágio.',
        'Equiparação de estágio': ESTAGIO_EQUIPARACAO_COMUM,
      },
    },
  },

  'Geoprocessamento': {
    topicos: [
      'Atividades Complementares (AACC)',
      'Datas importantes do semestre',
      'Horário das aulas',
      'Disciplinas remotas',
      'Dispensa de disciplinas',
      'Disciplinas com atividades de extensão',
      'Estágio',
      'Portfólio',
      'Trabalho de Graduação (TG/TCC)',
    ],
    respostas: {
      'Atividades Complementares (AACC)':
        'É necessário cumprir 60 horas de Atividades Acadêmico Científico Culturais (AACC).\n\nO aluno poderá utilizar cursos extracurriculares, cursos de inglês, leitura de livros, participação em feiras como a FEITEC, visitas a museus e exposições, teatro e cinema, trabalho voluntário, visitas técnicas etc.',
      'Datas importantes do semestre': DATAS_IMPORTANTES,
      'Horário das aulas': 'O horário das aulas pode ser consultado através do link:',
      'Disciplinas remotas': 'Não possui disciplinas remotas.',
      'Disciplinas com atividades de extensão':
        'No curso de Geoprocessamento, as atividades de extensão estão vinculadas às disciplinas de Processamento Digital de Imagens, Cartografia Aplicada, Análise Ambiental por Geoprocessamento, Projetos em Geoprocessamento I e II e Geomarketing.',
      'Portfólio':
        'O curso de Geoprocessamento não possui Portfólio, mas possui o Trabalho de Graduação (TG) que deverá ser iniciado no 5º semestre.',
      'Trabalho de Graduação (TG/TCC)':
        'O Trabalho de Graduação (TG) deve ser iniciado no 5º semestre, na disciplina Projetos em Geoprocessamento I, e concluído no 6º semestre, na disciplina Projetos em Geoprocessamento II.\n\nPara iniciar o TG, o aluno deve contar com um professor orientador. Cabe ao aluno procurar um dos professores que possam atuar como orientador e discutir o tema a ser desenvolvido. O aluno pode ter um coorientador externo (fora da Fatec Jacareí).\n\nO TG deve ser elaborado no formato de artigo científico e apresentado perante uma banca examinadora composta por, no mínimo, três professores.\n\nO aluno poderá ser dispensado da redação do TG caso apresente artigo científico já publicado em revista ou simpósio, desde que figure como primeiro autor. Nessa situação, deverá apenas realizar a defesa do trabalho perante a banca de professores da Fatec.\n\nEvidência: Manual de Trabalho de Graduação.',
    },
    dispensa: {
      subtopicos: DISPENSA_SUBTOPICOS_COMUNS,
      respostas: DISPENSA_RESPOSTAS_COMUNS,
    },
    estagio: {
      subtopicos: ['Duração do estágio supervisionado', 'Início do estágio', 'Comprovação', 'Equiparação de estágio'],
      respostas: {
        'Duração do estágio supervisionado': 'Carga horária obrigatória: 180 horas\n\nPode iniciar: a partir do 4º semestre',
        'Início do estágio': ESTAGIO_INICIO_COMUM,
        'Comprovação':
          'Após concluir as 180 horas, o aluno deve elaborar o Relatório Final de Estágio, assinado pelo supervisor e encaminhado ao Professor Orientador (adilson.neves@fatec.sp.gov.br).\n\nModelo: Anexos F e G do Manual de Estágio.',
        'Equiparação de estágio': ESTAGIO_EQUIPARACAO_COMUM,
      },
    },
  },

  'Meio ambiente e recursos hídricos': {
    topicos: [
      'Atividades Complementares (AACC)',
      'Datas importantes do semestre',
      'Horário das aulas',
      'Disciplinas remotas',
      'Dispensa de disciplinas',
      'Estágio',
      'Portfólio',
      'Trabalho de Graduação (TG/TCC)',
    ],
    respostas: {
      'Atividades Complementares (AACC)':
        'É necessário cumprir 60 horas de Atividades Acadêmico Científico Culturais (AACC).\n\nO aluno poderá utilizar cursos extracurriculares, cursos de inglês, leitura de livros, participação em feiras como a FEITEC, visitas a museus e exposições, teatro e cinema, trabalho voluntário, visitas técnicas etc.',
      'Datas importantes do semestre': DATAS_IMPORTANTES,
      'Horário das aulas': 'O horário das aulas pode ser consultado através do link:',
      'Disciplinas remotas':
        'No 5º semestre:\n• 20% da carga horária de cada disciplina é remota\n\nNo 6º semestre:\n• Todas as disciplinas são remotas.',
      'Portfólio':
        'O curso de Meio Ambiente e Recursos Hídricos não possui Portfólio, mas possui o Trabalho de Graduação (TG) que deverá ser iniciado no 5º semestre.',
      'Trabalho de Graduação (TG/TCC)':
        'O Trabalho de Graduação (TG) deve ser iniciado no 5º semestre, na disciplina Projetos Ambientais I, e concluído no 6º semestre, na disciplina Projetos Ambientais II.\n\nPara iniciar o TG, o aluno deve contar com um professor orientador. Cabe ao aluno procurar um dos professores que possam atuar como orientador e discutir o tema a ser desenvolvido. O aluno pode ter um coorientador externo (fora da Fatec Jacareí).\n\nO TG deve ser elaborado no formato de artigo científico e apresentado perante uma banca examinadora composta por, no mínimo, três professores.\n\nO aluno poderá ser dispensado da redação do TG caso apresente artigo científico já publicado em revista ou simpósio, desde que figure como primeiro autor. Nessa situação, deverá apenas realizar a defesa do trabalho perante a banca de professores da Fatec.\n\nEvidência: Manual de Trabalho de Graduação.',
    },
    dispensa: {
      subtopicos: [
        'Disciplinas com atividades de extensão (MARH)',
        'Aproveitamento de estudos – disciplina cursada em outra instituição de ensino superior',
        'Reconhecimento de competências – disciplinas cursadas na Etec',
        'Aproveitamento de conhecimentos e experiências anteriores',
        'Proficiência em Inglês',
      ],
      respostas: {
        'Disciplinas com atividades de extensão (MARH)':
          'Atenção: Não é permitido solicitar aproveitamento em disciplinas que possuam atividades de extensão curricular.\n\n1º semestre:\n• Geociência Ambiental\n• Biologia\n• Química Geral\n\n2º semestre:\n• Hidrologia e Recursos Hídricos\n• Climatologia e Meteorologia\n• Microbiologia Ambiental\n\n4º semestre:\n• Educação Ambiental\n\n5º semestre:\n• Planejamento e Drenagem Urbana\n• Avaliação de Impactos Ambientais e Análise de Riscos\n• Projetos Ambientais I\n• Sistemas de Gestão e Auditorias Ambientais\n\n6º semestre:\n• Energias Alternativas\n• Turismo, Meio Ambiente e Recursos Hídricos\n• Ecotecnologia\n• Projetos Ambientais II',
        'Aproveitamento de estudos – disciplina cursada em outra instituição de ensino superior':
          DISPENSA_RESPOSTAS_COMUNS['Aproveitamento de estudos – disciplina cursada em outra instituição de ensino superior'],
        'Reconhecimento de competências – disciplinas cursadas na Etec':
          DISPENSA_RESPOSTAS_COMUNS['Reconhecimento de competências – disciplinas cursadas na Etec'],
        'Aproveitamento de conhecimentos e experiências anteriores':
          DISPENSA_RESPOSTAS_COMUNS['Aproveitamento de conhecimentos e experiências anteriores'],
        'Proficiência em Inglês': DISPENSA_RESPOSTAS_COMUNS['Proficiência em Inglês'],
      },
    },
    estagio: {
      subtopicos: ['Duração do estágio supervisionado', 'Início do estágio', 'Comprovação', 'Equiparação de estágio'],
      respostas: {
        'Duração do estágio supervisionado': 'Carga horária obrigatória: 180 horas\n\nPode iniciar: a partir do 4º semestre',
        'Início do estágio': ESTAGIO_INICIO_COMUM,
        'Comprovação':
          'Após concluir as 180 horas, o aluno deve elaborar o Relatório Final de Estágio, assinado pelo supervisor e encaminhado ao Professor Orientador.\n\nModelo: Anexos F e G do Manual de Estágio.',
        'Equiparação de estágio': ESTAGIO_EQUIPARACAO_COMUM,
      },
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────────────────────────────────────────

export function useChatFlow(userType?: string) {
  const [items, setItems] = useState<ChatItem[]>([]);
  
  const addItem = useCallback((item: Omit<ChatItem, 'id'>) => {
    setItems((prev) => [...prev, { id: uid(), ...item }]);
  }, []);;

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const withTyping = useCallback((cb: () => void, delay: number = 1000) => {
    const typingId = uid();
    setItems((prev) => [...prev, { id: typingId, type: 'typing' }]);
    setTimeout(() => {
      setItems((prev) => prev.filter((i) => i.id !== typingId));
      cb();
    }, delay);
  }, []);

 const showRatingAndEnd = useCallback(() => {
    withTyping(() => {
      addItem({
        type: 'ratingCard',
        onRate: (rating) => {
          const messages: Record<string, string> = {
            'Ruim': 'Lamentamos que sua experiência não tenha sido satisfatória. Vamos trabalhar para melhorar! 😔',
            'Satisfatório': 'Obrigado pelo feedback! Estamos sempre buscando melhorar. 🙂',
            'Bom': 'Fico feliz que tenha sido útil! Sempre que precisar, estarei aqui. 😊',
            'Muito bom': 'Que ótimo! Fico muito feliz em ter ajudado! 😄',
            'Ótimo': 'Uau, que avaliação incrível! Obrigado pela confiança! 🌟',
          };
          withTyping(() => {
            addItem({ type: 'msg', from: 'bot', text: messages[rating] ?? 'Obrigado pela avaliação!' });
            withTyping(() => {
              addItem({ type: 'restart' });
            });
          });
        },
      });
    });
  }, [withTyping, addItem]);

  const showEndOption = useCallback((onContinue?: () => void) => {
    withTyping(() => {
      const opts = onContinue
        ? ['Continuar atendimento', 'Finalizar atendimento']
        : ['Nos envie sua dúvida', 'Finalizar atendimento'];

      addItem({
        type: 'chips',
        label: onContinue ? 'Como deseja prosseguir?' : 'O que você gostaria de fazer?',
        options: opts,
        onSelect: (opt) => {
          addItem({ type: 'msg', from: 'user', text: opt });

          if (opt === 'Continuar atendimento' && onContinue) {
            onContinue();
            return;
          }

          if (opt === 'Nos envie sua dúvida') {
            withTyping(() => {
              addItem({
                type: 'doubtForm',
                isAluno: userType === 'aluno',
                onSubmit: (_email, _doubt) => {
                  withTyping(() => {
                    addItem({
                      type: 'msg',
                      from: 'bot',
                      text: 'Sua dúvida foi enviada com sucesso! Fique atento ao seu e-mail institucional para receber atualizações. 📧',
                    });
                    showEndOption(undefined);
                  });
                },
              });
            });
            return;
          }

          // Finalizar atendimento
          showRatingAndEnd();
        },
      });
    });
  }, [withTyping, addItem, showRatingAndEnd]);

  const askSatisfacao = useCallback((onSim: () => void) => {
    withTyping(() => {
      addItem({
        type: 'chips',
        label: 'Conseguiu encontrar o que queria?',
        options: ['Sim', 'Não'],
        onSelect: (opt) => {
          addItem({ type: 'msg', from: 'user', text: opt });

          if (opt === 'Sim') {
            showEndOption(onSim);
          } else {
            showEndOption(undefined);
          }
        },
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withTyping, addItem, showEndOption]);

  const askNaoAlunoTopic = useCallback(() => {
    withTyping(() => {
      addItem({
        type: 'chips',
        label: 'Para qual assunto você gostaria de obter informações?',
        options: NAO_ALUNO_TOPICS,
        onSelect: (topic) => {
          addItem({ type: 'msg', from: 'user', text: topic });
          const resposta = NAO_ALUNO_RESPOSTAS[topic];
          withTyping(() => {
            addItem({ type: 'msg', from: 'bot', text: resposta.texto });
            if (resposta.link) addItem({ type: 'link', url: resposta.link, label: 'Acesse o link abaixo para mais informações:' });
            askSatisfacao(() => askNaoAlunoTopic());
          });
        },
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withTyping, addItem, askSatisfacao]);

  const askCourseTopics = useCallback((course: string) => {
    const courseData = CURSO_DATA[course];
    if (!courseData) return;

    const showTopicMenu = () => {
      withTyping(() => {
        addItem({
          type: 'chips',
          label: `Sobre o curso de ${course}, o que você gostaria de saber?`,
          options: courseData.topicos,
          onSelect: (topic) => {
            addItem({ type: 'msg', from: 'user', text: topic });

            if (topic === 'Estágio') {
              withTyping(() => {
                addItem({
                  type: 'chips',
                  label: 'Escolha a opção de estágio:',
                  options: courseData.estagio.subtopicos,
                  onSelect: (sub) => {
                    addItem({ type: 'msg', from: 'user', text: sub });
                    withTyping(() => {
                      addItem({ type: 'msg', from: 'bot', text: courseData.estagio.respostas[sub] });
                      if (sub === 'Equiparação de estágio') {
                        addItem({ type: 'link', url: 'https://fatecjacarei.cps.sp.gov.br/estagio/', label: 'Acesse o Manual de Estágio:' });
                      }
                      askSatisfacao(() => showTopicMenu());
                    });
                  },
                });
              });
              return;
            }

            if (topic === 'Horário das aulas') {
              withTyping(() => {
                addItem({
                  type: 'chips',
                  label: 'Qual semestre você deseja consultar?',
                  options: SEMESTRES,
                  onSelect: (sem) => {
                    addItem({ type: 'msg', from: 'user', text: sem });
                    const link = HORARIOS_LINKS[course]?.[sem];
                    withTyping(() => {
                      if (link) addItem({ type: 'link', url: link });
                      askSatisfacao(() => showTopicMenu());
                    });
                  },
                });
              });
              return;
            }
            if (topic === 'Dispensa de disciplinas') {
              withTyping(() => {
                addItem({
                  type: 'chips',
                  label: 'Atenção: Não é permitido solicitar aproveitamento em disciplinas que possuam atividades de extensão curricular.\n\nEscolha a modalidade desejada:',
                  options: courseData.dispensa.subtopicos,
                  onSelect: (sub) => {
                    addItem({ type: 'msg', from: 'user', text: sub });
                    withTyping(() => {
                      addItem({ type: 'msg', from: 'bot', text: courseData.dispensa.respostas[sub] });
                      askSatisfacao(() => showTopicMenu());
                    });
                  },
                });
              });
              return;
            }

            const texto = courseData.respostas[topic];
            withTyping(() => {
              addItem({ type: 'msg', from: 'bot', text: texto });
              askSatisfacao(() => showTopicMenu());
            });
          },
        });
      });
    };

    showTopicMenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withTyping, addItem, askSatisfacao]);

  const startChat = useCallback((userType: string) => {
    setItems([]);
    withTyping(() => {
      if (userType === 'externo') {
        addItem({ type: 'msg', from: 'bot', text: 'Olá! eu sou o FAQtec e estou aqui para tirar suas dúvidas' });
        askNaoAlunoTopic();
      } else {
        addItem({ type: 'msg', from: 'bot', text: 'Olá! eu sou o FAQtec e estou aqui para tirar suas dúvidas 😊' });
        withTyping(() => {
          addItem({ type: 'msg', from: 'bot', text: 'Selecione o seu curso nas abas acima (DSM, GEO ou MARH) para começarmos!' });
        });
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCourse = useCallback((course: string) => {
    setItems([]);
    withTyping(() => {
      addItem({ type: 'msg', from: 'bot', text: `Você selecionou o curso de ${course}. O que você gostaria de saber?` });
      askCourseTopics(course);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [askCourseTopics, withTyping, addItem]);

  return { items, startChat, startCourse, removeItem, addItem };
}
