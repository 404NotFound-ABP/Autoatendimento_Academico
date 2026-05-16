# Frontend

## Responsabilidade da pasta

Esta pasta concentra a interface web do FAQtec. O frontend e responsavel pelo fluxo publico do chatbot e, nas proximas etapas do projeto, tambem dara suporte aos paineis internos do sistema.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS

## Organizacao interna

| Caminho | Papel |
| --- | --- |
| `src/App.tsx` | Composicao principal da aplicacao |
| `src/components/` | Componentes reutilizaveis da interface |
| `src/hooks/` | Hooks que concentram comportamento do fluxo |
| `src/data.ts` | Dados auxiliares atualmente usados pelo frontend |
| `src/assets/` | Recursos visuais do frontend |

## Scripts principais

Em `2dsm_ABP/frontend/`:

```bash
npm install
npm run dev
npm run build
```

## Situacao atual

- O frontend ja demonstra o fluxo publico do chatbot.
- Parte relevante do fluxo ainda depende de dados mockados locais.
- A Sprint 2 prioriza integrar este frontend a API e melhorar a separacao entre interface, hooks e servicos.
