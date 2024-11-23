'use client';
import { useSection } from '../hooks/useSection';

const HERO_STYLES = {
  accent: '#FFFFFF',
  background: '#161616'
} as const;

const Hero = () => {
  const sectionRef = useSection('hero', HERO_STYLES.background, '#FFFFFF', HERO_STYLES.accent);

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className="min-h-screen w-screen flex items-center justify-center snap-start"
    >
      <div className="w-full max-w-[1600px] mx-auto pl-12 md:pl-[240px] pr-4 md:pr-[40px]">
        <div className="flex flex-col justify-center gap-6 md:gap-8">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-gellix tracking-[-0.02em] leading-[110%]">
            Nico Baldovino, Product Designer
            <br />
            <span className="text-gray-400">+12 years aligning business goals with user needs.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] font-inter text-white/40 leading-[140%] w-full">
            Beginning my career in startups and progressing through medium-sized firms, 
            I've honed my skills in diverse environments including <br className="hidden md:block" />
            consulting agencies and larger corporations. Born in Chile, currently based in Denver, Colorado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 