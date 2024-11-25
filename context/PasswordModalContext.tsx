'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type PasswordModalContextType = {
  isOpen: boolean;
  activeCase: string | null;
  hasAccess: boolean;
  openModal: (caseId: string) => void;
  closeModal: () => void;
};

const ACCESS_EXPIRY_DAYS = 7;

const PasswordModalContext = createContext<PasswordModalContextType | undefined>(undefined);

export function PasswordModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [hasAccess, setHasAccess] = useState(false);

  // Check for valid access token on mount
  useEffect(() => {
    const checkAccess = () => {
      const accessToken = localStorage.getItem('portfolioAccess');
      if (accessToken) {
        const { expiry } = JSON.parse(accessToken);
        if (new Date().getTime() < expiry) {
          setHasAccess(true);
        } else {
          localStorage.removeItem('portfolioAccess');
          setHasAccess(false);
        }
      }
    };

    checkAccess();
    // Add event listener to check access across tabs/windows
    window.addEventListener('storage', checkAccess);
    return () => window.removeEventListener('storage', checkAccess);
  }, []);

  const openModal = (caseId: string) => {
    // Only open modal if user doesn't have access
    if (!hasAccess) {
      setActiveCase(caseId);
      setIsOpen(true);
    } else {
      // If they have access, redirect directly
      window.location.href = `/case/${caseId}`;
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveCase(null);
  };

  return (
    <PasswordModalContext.Provider value={{ isOpen, activeCase, hasAccess, openModal, closeModal }}>
      {children}
    </PasswordModalContext.Provider>
  );
}

export function usePasswordModal() {
  const context = useContext(PasswordModalContext);
  if (context === undefined) {
    throw new Error('usePasswordModal must be used within a PasswordModalProvider');
  }
  return context;
} 