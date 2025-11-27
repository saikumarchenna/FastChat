import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AuthView } from './views/AuthView';
import { ChatView } from './views/ChatView';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  // Simple state-based routing
  if (!user) {
    return <AuthView />;
  }

  return <ChatView />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;