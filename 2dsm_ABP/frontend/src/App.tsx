import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ChatScreen from './components/ChatScreen';

type Screen = 'welcome' | 'chat';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [userType, setUserType] = useState<string>('');

  const handleSelect = (type: string): void => {
    setUserType(type);
    setScreen('chat');
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full">
        {screen === 'welcome' ? (
          <WelcomeScreen onSelect={handleSelect} />
        ) : (
          <ChatScreen userType={userType} onBack={() => setScreen('welcome')} />
        )}
      </div>
    </div>
  );
}