'use client';
import { useEffect, useRef } from 'react';
import { useColor } from '../context/ColorContext';

export function useSection(
  sectionId: string,
  backgroundColor: string,
  textColor: string,
  accentColor: string
) {
  const { setBackgroundColor, setTextColor, setAccentColor, setActiveSection } = useColor();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setBackgroundColor(backgroundColor);
          setTextColor(textColor);
          setAccentColor(accentColor);
          setActiveSection(sectionId);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionId, backgroundColor, textColor, accentColor, setBackgroundColor, setTextColor, setAccentColor, setActiveSection]);

  return sectionRef;
} 