'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type ColorContextType = {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  activeSection: string;
  setBackgroundColor: (color: string) => void;
  setTextColor: (color: string) => void;
  setAccentColor: (color: string) => void;
  setActiveSection: (section: string) => void;
  setColors: (bg: string, text: string, accent: string) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [accentColor, setAccentColor] = useState('#FFFFFF');
  const [activeSection, setActiveSection] = useState('');

  const setColors = (bg: string, text: string, accent: string) => {
    setBackgroundColor(bg);
    setTextColor(text);
    setAccentColor(accent);
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  }, [backgroundColor, textColor]);

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
        setColors,
      }}
    >
      {children}
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