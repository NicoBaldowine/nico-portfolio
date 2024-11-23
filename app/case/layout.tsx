'use client';
import VerticalNav from '../../components/VerticalNav';
import { ColorProvider } from '../../context/ColorContext';

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ColorProvider>
      <div className="relative min-h-screen" style={{ backgroundColor: '#00091E' }}>
        <VerticalNav />
        {children}
      </div>
    </ColorProvider>
  );
} 