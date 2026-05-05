interface Card {
  icon: string;
  title: string;
  sub: string;
  type: string;
}

interface WelcomeScreenProps {
  onSelect: (type: string) => void;
}

export default function WelcomeScreen({ onSelect }: WelcomeScreenProps) {
  const cards: Card[] = [
    { icon: '🎓', title: 'Sou aluno', sub: 'Já sou aluno Fatec', type: 'aluno' },
    { icon: '❓', title: 'Não sou aluno', sub: 'Estou interessado na Fatec', type: 'externo' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
  <div className="flex items-center gap-3">
  <img
    src="/logo-fatec.png"
    alt="Fatec Jacareí"
    className="h-10 sm:h-14 object-contain"
  />
  <img
    src="/logo-cps.png"
    alt="Centro Paula Souza"
    className="h-8 sm:h-12 object-contain"
  />
</div>
  <div className="flex items-center border border-gray-300 rounded overflow-hidden">
    <input
      className="text-sm outline-none px-3 py-1.5 w-44 bg-transparent"
      placeholder="O que deseja localizar?"
    />
    <button className="bg-[#C0392B] text-white px-3 py-1.5 text-sm hover:bg-[#96281B] transition-colors">
      🔍
    </button>
  </div>
</header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 gap-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold text-gray-900">Olá! eu sou o FAQtec</h1>
          <img src="/foto-bot.png"
            alt="FAQtec"
            className="h-20 sm:h-24 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).outerHTML = '<span class="text-4xl">🤖</span>';
            }}
          />
        </div>

        <p className="text-gray-500 text-base text-center">
          Por favor se identifique para começarmos o nosso bate-papo.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-2 w-full max-w-md">
          {cards.map((card) => (
            <button
              key={card.type}
              onClick={() => onSelect(card.type)}
              className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-2 text-left
                         hover:-translate-y-1 hover:shadow-md transition-all duration-150 cursor-pointer"
            >
              <span className="text-3xl">{card.icon}</span>
              <span className="text-sm font-bold text-gray-900">{card.title}</span>
              <span className="text-xs text-gray-500 leading-relaxed">{card.sub}</span>
              <div className="flex items-center gap-1 mt-1 text-xs font-bold text-[#C0392B]">
                Acessar
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}