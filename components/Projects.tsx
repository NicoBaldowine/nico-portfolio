'use client';
import { useSection } from '../hooks/useSection';
import { HiArrowRight } from 'react-icons/hi';

const CASE_STYLES = {
  accent: '#FFFFFF',
  background: '#161616',
  auxiliary: '#2D2D2D'
} as const;

const projects = [
  {
    title: "Quizland, React-native App",
    description: "A mobile quiz app that generates questions using AI technology.",
    href: "#"
  },
  {
    title: "Effective User Testing for Your Products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "#"
  },
  {
    title: "Design Systems in Product Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "#"
  }
];

const Projects = () => {
  const sectionRef = useSection('projects', CASE_STYLES.background, '#FFFFFF', CASE_STYLES.accent);

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="min-h-screen w-screen flex items-center justify-center snap-start py-16 md:py-0"
    >
      <div className="w-full max-w-[1600px] mx-auto pl-12 md:pl-[240px] pr-4 md:pr-[40px]">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-6 md:hidden">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.href}
              className="flex items-center gap-4 group"
            >
              {/* Image Box */}
              <div 
                className="w-[100px] h-[100px] shrink-0 rounded-[12px]"
                style={{ backgroundColor: CASE_STYLES.auxiliary }}
              />
              
              {/* Content */}
              <div className="flex-grow min-w-0">
                <h3 
                  className="text-[1.25rem] font-gellix tracking-[-0.02em] leading-[110%] mb-2 truncate"
                  style={{ color: CASE_STYLES.accent }}
                >
                  {project.title}
                </h3>
                <p className="text-[14px] font-inter text-white/40 leading-[140%] line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Arrow */}
              <HiArrowRight 
                className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity duration-300" 
                style={{ color: CASE_STYLES.accent }}
              />
            </a>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">
              <div 
                className="w-full aspect-video rounded-[20px] mb-6"
                style={{ backgroundColor: CASE_STYLES.auxiliary }}
              />
              <h3 
                className="text-[2rem] font-gellix tracking-[-0.02em] leading-[110%] mb-3"
                style={{ color: CASE_STYLES.accent }}
              >
                {project.title}
              </h3>
              <p className="text-[16px] font-inter text-white/40 leading-[140%] mb-6">
                {project.description}
              </p>
              <div className="flex">
                <a 
                  href={project.href}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 