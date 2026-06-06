import React, { createContext, useReducer, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../models/User';
import { createUseContext } from './createUseContext';

export interface AuthState {
  user: User | null;
  userAuthData: { dni: string; phone: string } | null;
}

type AuthAction =
  | { type: 'LOGIN'; payload: { user: User; dni: string; phone: string } }
  | { type: 'LOGOUT' };

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload.user,
        userAuthData: { dni: action.payload.dni, phone: action.payload.phone },
      };
    case 'LOGOUT':
      return { user: null, userAuthData: null };
    default:
      return state;
  }
}

interface AuthContextType extends AuthState {
  isAuthenticated: boolean;
  login: (user: User, dni: string, phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null, userAuthData: null });

  const login = useCallback((user: User, dni: string, phone: string) => {
    dispatch({ type: 'LOGIN', payload: { user, dni, phone } });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
  }, []);

  const value = useMemo(() => ({
    ...state,
    isAuthenticated: !!state.user,
    login,
    logout,
  }), [state, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = createUseContext(AuthContext, 'Auth');