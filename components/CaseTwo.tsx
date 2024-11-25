'use client';
import { useSection } from '../hooks/useSection';
import { usePasswordModal } from '../context/PasswordModalContext';

const CASE_STYLES = {
  accent: '#D85A2A',
  background: '#F8D4B8',
  auxiliary: '#F7C9A6'
} as const;

const LockIcon = () => (
  <svg 
    className="w-4 h-4" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg 
    className="w-4 h-4" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M5 12H19M19 12L12 5M19 12L12 19" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const CaseTwo = () => {
  const sectionRef = useSection('case2', CASE_STYLES.background, '#000000', CASE_STYLES.accent);
  const { openModal, hasAccess } = usePasswordModal();

  return (
    <section 
      ref={sectionRef}
      id="case2"
      className="min-h-screen w-screen flex items-center justify-center snap-start"
    >
      <div className="w-full max-w-[1600px] mx-auto pl-12 md:pl-[240px] pr-4 md:pr-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
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
              className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-gellix tracking-[-0.02em] leading-[110%] mb-[12px]"
              style={{ color: CASE_STYLES.accent }}
            >
              Redesigning Remittance
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] font-inter text-black/40 leading-[140%] max-w-[90%] mb-4 md:mb-[56px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Button Container */}
            <div className="flex mb-8 md:mb-0">
              <button 
                onClick={() => openModal('case2')}
                className="group flex items-center px-6 py-3 border rounded-full transition-all duration-300"
                style={{ 
                  color: CASE_STYLES.accent,
                  borderColor: CASE_STYLES.auxiliary
                }}
              >
                <span className="mr-2">See case</span>
                {hasAccess ? (
                  <ArrowIcon />
                ) : (
                  <LockIcon />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseTwo; 