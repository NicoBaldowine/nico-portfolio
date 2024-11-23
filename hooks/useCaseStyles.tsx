'use client';
import { useEffect } from 'react';
import { useColor } from '../context/ColorContext';

export function useCaseStyles(
  backgroundColor: string,
  textColor: string,
  accentColor: string,
  sectionId: string
) {
  const { setColors, setActiveSection } = useColor();

  useEffect(() => {
    setColors(backgroundColor, textColor, accentColor);
    setActiveSection(sectionId);
  }, [backgroundColor, textColor, accentColor, sectionId, setColors, setActiveSection]);
} 