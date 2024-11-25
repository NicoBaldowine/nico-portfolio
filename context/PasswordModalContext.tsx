'use client';

import React, { createContext, useContext, useState } from 'react';

type PasswordModalContextType = {
  isOpen: boolean;
  caseId: string | null;
  openModal: (caseId: string) => void;
  closeModal: () => void;
};

const PasswordModalContext = createContext<PasswordModalContextType | undefined>(undefined);

export function PasswordModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [caseId, setCaseId] = useState<string | null>(null);

  const openModal = (caseId: string) => {
    setIsOpen(true);
    setCaseId(caseId);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCaseId(null);
  };

  return (
    <PasswordModalContext.Provider value={{ isOpen, caseId, openModal, closeModal }}>
      {children}
    </PasswordModalContext.Provider>
  );
}

export const usePasswordModal = () => {
  const context = useContext(PasswordModalContext);
  if (!context) throw new Error('usePasswordModal must be used within PasswordModalProvider');
  return context;
}; 