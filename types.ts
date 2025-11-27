export interface User {
  id: string;
  username: string;
  avatarUrl?: string;
  isOnline: boolean;
  lastSeen: number;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: number;
  type: 'text' | 'system';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface WebSocketMessage {
  type: 'MESSAGE' | 'USER_JOINED' | 'USER_LEFT' | 'TYPING';
  payload: any;
}