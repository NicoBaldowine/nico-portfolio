'use client';
import { useSection } from '../hooks/useSection';

const CASE_STYLES = {
  accent: '#4A298C',
  background: '#EBE1FF',
  auxiliary: '#D9CBF5'
} as const;

const CaseSix = () => {
  const sectionRef = useSection('case6', CASE_STYLES.background, '#000000', CASE_STYLES.accent);

  return (
    <section 
      ref={sectionRef}
      id="case6"
      className="min-h-screen w-screen flex items-center justify-center snap-start"
    >
      <div className="w-full max-w-[1600px] mx-auto pl-12 md:pl-[240px] pr-4 md:pr-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Image */}
          <div 
            className="w-full aspect-[750/620] rounded-[20px] relative overflow-hidden order-2 lg:order-1"
            style={{ backgroundColor: CASE_STYLES.auxiliary }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-[200px] md:w-[280px] lg:w-[320px] aspect-[3/4] rounded-[12px]"
                style={{ 
                  backgroundColor: CASE_STYLES.background,
                  transform: 'translateY(20%)'
                }}
              />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="flex flex-col order-1 lg:order-2">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-[12px]">
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
              className="text-[4.5rem] font-gellix tracking-[-0.02em] leading-[110%] mb-[12px]"
              style={{ color: CASE_STYLES.accent }}
            >
              Reimagine
              <br />
              Telco
            </h2>

            {/* Description */}
            <p className="text-[16px] font-inter text-black/40 leading-[140%] max-w-[90%] mb-[56px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Button Container */}
            <div className="flex">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSix; 