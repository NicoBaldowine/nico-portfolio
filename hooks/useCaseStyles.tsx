'use client';
import { useEffect } from 'react';
import { useColor } from '../context/ColorContext';

export function useCaseStyles(
  backgroundColor: string,
  textColor: string,
  accentColor: string,
  sectionId: string
) {
  const { setBackgroundColor, setTextColor, setAccentColor, setActiveSection } = useColor();

  useEffect(() => {
    setBackgroundColor(backgroundColor);
    setTextColor(textColor);
    setAccentColor(accentColor);
    setActiveSection(sectionId);
  }, [backgroundColor, textColor, accentColor, sectionId, setBackgroundColor, setTextColor, setAccentColor, setActiveSection]);
} 