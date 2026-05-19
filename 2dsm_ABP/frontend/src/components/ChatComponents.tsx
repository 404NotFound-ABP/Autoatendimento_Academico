import { useState } from 'react';

// Avatar do bot
function BotAvatar() {
  return (
    <div className="shrink-0 w-8 h-8 rounded-full overflow-hidden bg-[#005C6D] flex items-center justify-center">
      <img
        src="/foto-bot.png"
        alt="bot"
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).outerHTML = '<span class="text-base">🤖</span>';
        }}
      />
    </div>
  );
}

// Bolha de mensagem
interface MessageBubbleProps {
  text: string;
  from: string;
}
export function MessageBubble({ text, from }: MessageBubbleProps) {
  const isBot = from === 'bot';

  if (isBot) {
    return (
      <div className="flex flex-col self-start animate-fadeUp gap-1.5">
        <BotAvatar />
        <div className="bg-[#005c6d] text-white px-4 py-3 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line max-w-[80%]">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[65%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed text-gray-600 bg-[#d9dde0] self-end animate-fadeUp">
      {text}
    </div>
  );
}

// Typing indicator
export function TypingIndicator() {
  return (
    <div className="flex flex-col self-start animate-fadeUp gap-1.5">
      <BotAvatar />
      <div className="flex gap-1 items-center px-4 py-3 bg-[#005c6d] rounded-2xl">
        {[0, 200, 400].map((delay) => (
          <span
            key={delay}
            className="w-[7px] h-[7px] rounded-full bg-white/70 animate-bounce3"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

// Link copiável
interface LinkCardProps {
  url: string;
  label?: string;
}
export function LinkCard({ url, label }: LinkCardProps) {
  const handleCopy = () => navigator.clipboard.writeText(url).catch(() => {});
  return (
    <div className="flex flex-col self-start animate-fadeUp gap-1.5 max-w-[80%]">
      <BotAvatar />
      <div className="bg-[#005C6D] rounded-2xl px-4 py-3 flex flex-col gap-2">
        <span className="text-white text-[13px] leading-relaxed">
          {label ?? 'Ok, aqui está o link que te leva direto para a grade horária do seu curso:'}
        </span>
        <button
  onClick={() => {
    navigator.clipboard.writeText(url).catch(() => {});
    window.open(url, '_blank');
  }}
  title="Clique para abrir o link"
  className="flex items-center gap-2 bg-[#004757] text-white text-[12px] px-3 py-2
             rounded-xl hover:opacity-80 transition-opacity
             text-left break-all cursor-pointer border-0 overflow-hidden w-full"
>
  <span className="flex-1">{url}</span>
  <span className="text-base shrink-0">&#128203;</span>
</button>
      </div>
    </div>
  );
}

// Chips de seleção — dentro do card verde junto com a mensagem do bot
interface ChipsRowProps {
  options: string[];
  onSelect: (opt: string) => void;
  label?: string;
}
export function ChipsRow({ options, onSelect, label }: ChipsRowProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (opt: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (selected) return;
    setSelected(opt);
    const row = e.currentTarget.closest('.chips-row');
    row?.querySelectorAll('button').forEach((b) => {
      (b as HTMLButtonElement).disabled = true;
    });
    onSelect(opt);
  };

  return (
    <div className="flex flex-col self-start animate-fadeUp gap-1.5 max-w-[85%]">
      <BotAvatar />
      <div className="bg-[#005c6d] rounded-2xl px-4 py-3 flex flex-col gap-3">
        {label && (
          <span className="text-white text-[13px] leading-relaxed">{label}</span>
        )}
        <div className="chips-row flex flex-wrap gap-2">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={(e) => handleClick(opt, e)}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold border border-white/40
                cursor-pointer transition-colors duration-150 disabled:cursor-default
                ${selected === opt
                  ? 'bg-white text-[#1a4a3a] border-white'
                  : selected !== null
                    ? 'bg-transparent text-white/40 border-white/20'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Botões Sim/Não
interface ConfirmRowProps {
  onYes: () => void;
  onNo: () => void;
  label?: string;
}
export function ConfirmRow({ onYes, onNo, label }: ConfirmRowProps) {
  return (
    <div className="flex flex-col self-start animate-fadeUp gap-1.5">
      <BotAvatar />
      <div className="bg-[#005c6d] rounded-2xl px-4 py-3 flex flex-col gap-3">
        {label && (
          <span className="text-white text-[13px] leading-relaxed">{label}</span>
        )}
        <div className="flex gap-2">
          <button
            onClick={onYes}
            className="px-5 py-1.5 rounded-full bg-[#1D9E75] text-white text-[13px] font-bold
                       hover:opacity-90 transition-opacity border-0 cursor-pointer"
          >
            ✓ Sim
          </button>
          <button
            onClick={onNo}
            className="px-5 py-1.5 rounded-full bg-[#C0392B] text-white text-[13px] font-bold
                       hover:opacity-90 transition-opacity border-0 cursor-pointer"
          >
            ✗ Não
          </button>
        </div>
      </div>
    </div>
  );
}
// Card de formulário de dúvida
interface DoubtFormProps {
  onSubmit: (email: string, doubt: string) => void;
  isAluno?: boolean;
}
export function DoubtForm({ onSubmit, isAluno }: DoubtFormProps) {
  const [email, setEmail] = useState('');
  const [doubt, setDoubt] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!email.trim() || !doubt.trim()) return;
    setSent(true);
    onSubmit(email, doubt);
  };

  return (
    <div className="flex flex-col self-start animate-fadeUp gap-1.5 max-w-[85%]">
      <BotAvatar />
      <div className="bg-[#C0392B] rounded-2xl px-4 py-3 flex flex-col gap-3">
        <span className="text-white text-[13px] font-semibold leading-relaxed">
          Por favor nos conte qual é a sua dúvida?
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-white/80 text-[11px]">
            {isAluno ? 'Nos informe seu E-mail institucional:' : 'Nos informe seu E-mail:'}
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu E-mail aqui..."
            disabled={sent}
            className="rounded-lg px-3 py-2 text-[12px] text-gray-700 bg-white border-0 outline-none placeholder-gray-400 disabled:opacity-60"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-white/80 text-[11px]">Escreva sua dúvida:</span>
          <textarea
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
            placeholder="Digite aqui..."
            disabled={sent}
            rows={3}
            className="rounded-lg px-3 py-2 text-[12px] text-gray-700 bg-white border-0 outline-none placeholder-gray-400 resize-none disabled:opacity-60"
          />
        </div>
        {!sent && (
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="px-5 py-1.5 rounded-lg bg-[#1D9E75] text-white text-[12px] font-bold
                         hover:opacity-90 transition-opacity border-0 cursor-pointer"
            >
              Enviar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Card de avaliação com emojis
interface RatingCardProps {
  onRate: (rating: string) => void;
}
export function RatingCard({ onRate }: RatingCardProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const ratings: { emoji: string; label: string }[] = [
    { emoji: '😠', label: 'Ruim' },
    { emoji: '😐', label: 'Satisfatório' },
    { emoji: '🙂', label: 'Bom' },
    { emoji: '😊', label: 'Muito bom' },
    { emoji: '😁', label: 'Ótimo' },
  ];

  const handleRate = (label: string) => {
    if (selected) return;
    setSelected(label);
    onRate(label);
  };

  return (
    <div className="flex flex-col self-start animate-fadeUp gap-1.5 max-w-[85%]">
      <BotAvatar />
      <div className="bg-[#005c6d] rounded-2xl px-4 py-3 flex flex-col gap-3">
        <span className="text-white text-[13px] leading-relaxed">
          Poderia avaliar o nosso atendimento?
        </span>
        <div className="flex gap-3 justify-around">
          {ratings.map((r) => (
            <button
              key={r.label}
              onClick={() => handleRate(r.label)}
              disabled={!!selected}
              className={`flex flex-col items-center gap-1 bg-transparent border-0 cursor-pointer
                transition-opacity disabled:cursor-default
                ${selected && selected !== r.label ? 'opacity-30' : 'opacity-100'}`}
            >
              <span className="text-2xl">{r.emoji}</span>
              <span className="text-white text-[10px]">{r.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Botão voltar ao início
interface RestartButtonProps {
  onRestart: () => void;
}
export function RestartButton({ onRestart }: RestartButtonProps) {
  return (
    <div className="flex justify-center animate-fadeUp mt-2">
      <button
        onClick={onRestart}
        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C0392B] text-white
                   text-[13px] font-bold hover:bg-[#96281B] transition-colors border-0 cursor-pointer shadow"
      >
        ↩ Voltar ao início
      </button>
    </div>
  );
}