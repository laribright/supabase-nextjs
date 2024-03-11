import { createContext } from 'react';

interface AuthModalContext {
  isAuthModalOpen: boolean;
  toggleAuthModal: () => void;
  closeAuthModal: (value: false) => void;
}

const AuthModalContext = createContext<AuthModalContext>({
  isAuthModalOpen: false,
  toggleAuthModal: () => null,
  closeAuthModal: () => null,
});

export default AuthModalContext;
