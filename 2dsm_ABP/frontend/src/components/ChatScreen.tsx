import { useEffect, useRef, useState } from 'react';
import { useChatFlow, ChatItem } from '../hooks/useChatFlow';
import { MessageBubble, TypingIndicator, LinkCard, ChipsRow, ConfirmRow, DoubtForm, RatingCard, RestartButton } from './ChatComponents';

interface ChatScreenProps {
  onBack: () => void;
  userType: string;
}

const COURSE_TABS: { label: string; full: string }[] = [
  { label: 'DSM', full: 'Desenvolvimento de software multiplataforma' },
  { label: 'GEO', full: 'Geoprocessamento' },
  { label: 'MARH', full: 'Meio ambiente e recursos hídricos' },
];

export default function ChatScreen({ onBack, userType }: ChatScreenProps) {
  const { items, startChat, startCourse, removeItem } = useChatFlow(userType);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [activeCourse, setActiveCourse] = useState<string | null>(null);

  useEffect(() => {
    startChat(userType);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [items]);

  const handleTabSelect = (full: string) => {
    if (activeCourse === full) return;
    setActiveCourse(full);
    startCourse(full);
  };

  const renderItem = (item: ChatItem) => {
    switch (item.type) {
      case 'msg':
        return <MessageBubble key={item.id} text={item.text!} from={item.from!} />;
      case 'typing':
        return <TypingIndicator key={item.id} />;
      case 'link':
         return <LinkCard key={item.id} url={item.url!} label={item.label} />;
      case 'chips':
        return (
          <ChipsRow
            key={item.id}
            label={item.label}
            options={item.options!}
            onSelect={(opt) => item.onSelect!(opt)}
          />
        );
      case 'confirm':
        return (
          <ConfirmRow
            key={item.id}
            label={item.label}
            onYes={() => { removeItem(item.id); item.onYes!(); }}
            onNo={() => { removeItem(item.id); item.onNo!(); }}
          />
        );
      
      case 'doubtForm':
        return (
          <DoubtForm
            key={item.id}
            isAluno={item.isAluno}
            onSubmit={(email, doubt) => item.onSubmit!(email, doubt)}
          />
        );
      case 'ratingCard':
        return (
          <RatingCard
            key={item.id}
            onRate={(rating) => item.onRate!(rating)}
          />
        );
       
        case 'restart':
        return (
          <RestartButton
            key={item.id}
            onRestart={() => {
              onBack();
            }}
          />
        );
        
        default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     <header className="bg-white shadow-sm shrink-0">
  <div className="px-4 py-2 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <button
        onClick={onBack}
        className="text-gray-500 text-2xl leading-none bg-transparent border-0 cursor-pointer p-0 mr-1"
      >
        ‹
      </button>
      <img
        src="/logo-fatec.png"
        alt="Fatec Jacareí"
        className="h-8 sm:h-10 object-contain"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
      <img
        src="/logo-cps.png"
        alt="CPS"
        className="h-6 sm:h-8 object-contain"
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
      />
    </div>
    <div className="flex items-center border border-gray-300 rounded overflow-hidden ml-2">
      <input
        className="text-sm outline-none px-2 py-1.5 w-24 sm:w-36 bg-transparent"
        placeholder="O que deseja localizar?"
      />
      <button className="bg-[#C0392B] text-white px-2 sm:px-3 py-1.5 text-sm hover:bg-[#96281B] transition-colors">
        🔍
      </button>
    </div>
  </div>
        {/* Abas de curso — só para aluno, clicáveis para trocar de curso */}
        {userType === 'aluno' && (
          <div className="bg-[#C0392B] flex">
            {COURSE_TABS.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => handleTabSelect(tab.full)}
                className={`flex-1 text-center text-white text-[13px] font-bold py-2 border-0 cursor-pointer transition-colors
                  ${i < COURSE_TABS.length - 1 ? 'border-r border-red-700' : ''}
                  ${activeCourse === tab.full ? 'bg-[#96281B]' : 'bg-transparent hover:bg-[#a93226]'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <div ref={bodyRef} className="flex-1 overflow-y-auto px-3.5 py-4 flex flex-col gap-3">
        {items.map(renderItem)}
      </div>
    </div>
  );
}