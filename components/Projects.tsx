'use client';
import { useSection } from '../hooks/useSection';

const CASE_STYLES = {
  accent: '#FFFFFF',
  background: '#161616',
  auxiliary: '#2D2D2D'
} as const;

const Projects = () => {
  const sectionRef = useSection('projects', CASE_STYLES.background, '#FFFFFF', CASE_STYLES.accent);

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="min-h-screen w-screen flex items-center justify-center snap-start"
    >
      <div className="w-full max-w-[1600px] mx-auto pl-[240px] pr-[40px]">
        <div className="grid grid-cols-3 gap-24">
          {/* Project 1 */}
          <div className="flex flex-col">
            <div 
              className="w-[420px] h-[300px] rounded-[20px] mb-8"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            >
              {/* Image placeholder */}
            </div>
            <h3 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[110%] mb-[16px]"
              style={{ color: CASE_STYLES.accent }}
            >
              Quizland, React-native App made with AI
            </h3>
            <p className="text-[16px] font-inter text-white/40 leading-[140%] mb-[32px]">
              A mobile quiz app that generates questions using AI technology, making learning more interactive and personalized.
            </p>
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
                <span className="mr-2">See project</span>
                <svg 
                  className="w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
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

          {/* Project 2 */}
          <div className="flex flex-col">
            <div 
              className="w-[420px] h-[300px] rounded-[20px] mb-8"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            >
              {/* Image placeholder */}
            </div>
            <h3 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[110%] mb-[16px]"
              style={{ color: CASE_STYLES.accent }}
            >
              Effective User Testing for Your Products
            </h3>
            <p className="text-[16px] font-inter text-white/40 leading-[140%] mb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
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
                <span className="mr-2">See project</span>
                <svg 
                  className="w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
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

          {/* Project 3 */}
          <div className="flex flex-col">
            <div 
              className="w-[420px] h-[300px] rounded-[20px] mb-8"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            >
              {/* Image placeholder */}
            </div>
            <h3 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[110%] mb-[16px]"
              style={{ color: CASE_STYLES.accent }}
            >
              Design Systems in Product Development
            </h3>
            <p className="text-[16px] font-inter text-white/40 leading-[140%] mb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
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
                <span className="mr-2">See project</span>
                <svg 
                  className="w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="none" 
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

export default Projects; 