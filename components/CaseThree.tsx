'use client';
import { useSection } from '../hooks/useSection';

const CASE_STYLES = {
  accent: '#FFFFFF',
  background: '#161616',
  auxiliary: '#2D2D2D'
} as const;

const CaseThree = () => {
  const sectionRef = useSection('case3', CASE_STYLES.background, '#FFFFFF', CASE_STYLES.accent);

  return (
    <section 
      ref={sectionRef}
      id="case3"
      className="min-h-screen w-screen flex items-center justify-center snap-start"
    >
      <div className="w-full max-w-[1600px] mx-auto pl-12 md:pl-[240px] pr-4 md:pr-[40px]">
        <div className="flex flex-col items-center text-center">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-[12px] justify-center">
            <span 
              className="px-2 py-2 rounded-[8px] text-[12px] uppercase font-gellix tracking-[0.04em]"
              style={{ 
                color: CASE_STYLES.accent,
                backgroundColor: CASE_STYLES.auxiliary 
              }}
            >
              UX Design
            </span>
            <span 
              className="px-2 py-2 rounded-[8px] text-[12px] uppercase font-gellix tracking-[0.04em]"
              style={{ 
                color: CASE_STYLES.accent,
                backgroundColor: CASE_STYLES.auxiliary 
              }}
            >
              Product Strategy
            </span>
          </div>

          {/* Title */}
          <h2 
            className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-gellix tracking-[-0.02em] leading-[110%] mb-[12px] max-w-[800px]"
            style={{ color: CASE_STYLES.accent }}
          >
            Shinkai, AI Made simple
          </h2>

          {/* Description - Actualizado mb-[24px] */}
          <p className="text-[14px] md:text-[16px] font-inter text-white/40 leading-[140%] max-w-[600px] mb-4 md:mb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Button Container */}
          <div className="flex mb-8 md:mb-0">
            <a 
              href="#" 
              className="group flex items-center px-6 py-3 border rounded-full transition-all duration-300"
              style={{ 
                color: CASE_STYLES.accent,
                borderColor: `${CASE_STYLES.accent}33`
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = CASE_STYLES.accent}
              onMouseOut={e => e.currentTarget.style.borderColor = `${CASE_STYLES.accent}33`}
            >
              <span className="mr-2">See case</span>
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ 
                    stroke: CASE_STYLES.accent,
                    opacity: 0.33
                  }}
                  className="group-hover:!opacity-100 transition-all duration-300"
                />
              </svg>
            </a>
          </div>

          {/* Full Width Image */}
          <div 
            className="w-full max-w-[1000px] aspect-[1200/500] rounded-[20px] mt-8 md:mt-16 relative overflow-hidden"
            style={{ backgroundColor: CASE_STYLES.auxiliary }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-[80%] md:w-[90%] lg:w-full aspect-[16/9] rounded-[12px]"
                style={{ backgroundColor: CASE_STYLES.background }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseThree; 