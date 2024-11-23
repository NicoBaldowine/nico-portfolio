'use client';
import { createContext, useContext, useState } from 'react';

type ColorContextType = {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  activeSection: string;
  setBackgroundColor: (color: string) => void;
  setTextColor: (color: string) => void;
  setAccentColor: (color: string) => void;
  setActiveSection: (section: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [accentColor, setAccentColor] = useState('#FFFFFF');
  const [activeSection, setActiveSection] = useState('');

  return (
    <ColorContext.Provider
      value={{
        backgroundColor,
        textColor,
        accentColor,
        activeSection,
        setBackgroundColor,
        setTextColor,
        setAccentColor,
        setActiveSection,
      }}
    >
      <div style={{ backgroundColor, color: textColor }}>
        {children}
      </div>
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
} 