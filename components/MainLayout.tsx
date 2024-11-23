'use client';
import { useColor } from '../context/ColorContext';
import VerticalNav from './VerticalNav';
import Hero from './Hero';
import CaseOne from './CaseOne';
import CaseTwo from './CaseTwo';
import CaseThree from './CaseThree';
import CaseFour from './CaseFour';
import CaseFive from './CaseFive';
import CaseSix from './CaseSix';
import Projects from './Projects';

const MainLayout = () => {
  const { backgroundColor } = useColor();
  
  return (
    <main 
      className="relative transition-colors duration-500"
      style={{ backgroundColor }}
    >
      <VerticalNav />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Hero />
        <CaseOne />
        <CaseTwo />
        <CaseThree />
        <CaseFour />
        <CaseFive />
        <CaseSix />
        <Projects />
      </div>
    </main>
  );
};

export default MainLayout; 