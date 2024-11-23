'use client';
import { useColor } from '../context/ColorContext';

const Header = () => {
  const { textColor } = useColor();

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-sm pl-[100px]">
      <div className="max-w-[1424px] w-full mx-auto px-12 lg:px-20">
        <div 
          className="h-[80px] flex justify-between items-center"
          style={{ color: textColor }}
        >
          <a 
            href="#" 
            className="text-xl font-medium transition-colors"
          >
            Nico
          </a>

          <div className="flex items-center gap-12">
            <a href="#work" className="text-base transition-colors">Work</a>
            <a href="#projects" className="text-base transition-colors">Projects</a>
            <a href="https://linkedin.com" className="text-base transition-colors">LinkedIn</a>
            <a href="#contact" className="text-base transition-colors">Contact me</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 