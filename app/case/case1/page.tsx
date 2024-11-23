'use client';
import { useSection } from '../../../hooks/useSection';
import Link from 'next/link';

const CASE_STYLES = {
  accent: '#A1BFE4',
  background: '#00091E',
  auxiliary: '#08122B'
} as const;

export default function CaseOnePage() {
  const sectionRef = useSection('case1', CASE_STYLES.background, '#FFFFFF', CASE_STYLES.accent);

  return (
    <main ref={sectionRef} className="relative min-h-screen w-full">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/#case1"
          className="group flex items-center px-6 py-3 border rounded-full transition-all duration-300"
          style={{ 
            color: CASE_STYLES.accent,
            borderColor: `${CASE_STYLES.accent}33`,
            backgroundColor: CASE_STYLES.background
          }}
        >
          <svg className="w-4 h-4 mr-2 rotate-180" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{stroke: CASE_STYLES.accent}}/>
          </svg>
          <span>Back</span>
        </Link>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1200px] mx-auto px-8 pt-32 pb-32">
        {/* Hero Section */}
        <div className="mb-32">
          <div className="flex flex-col max-w-[800px]">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-2 py-2 rounded-[8px] text-[12px] uppercase font-gellix tracking-[0.04em]"
                style={{color: CASE_STYLES.accent, backgroundColor: CASE_STYLES.auxiliary}}>
                UX Design
              </span>
              <span className="px-2 py-2 rounded-[8px] text-[12px] uppercase font-gellix tracking-[0.04em]"
                style={{color: CASE_STYLES.accent, backgroundColor: CASE_STYLES.auxiliary}}>
                Product Strategy
              </span>
            </div>

            <h1 className="text-[2.5rem] sm:text-[3.5rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-6"
              style={{color: CASE_STYLES.accent}}>
              Travel Wallet
            </h1>

            <p className="text-[18px] font-inter text-white/80 leading-[1.6] mb-12">
              Reimagining how travelers manage their expenses and documents while abroad.
            </p>
          </div>

          <div className="w-full aspect-video rounded-[20px]" style={{backgroundColor: CASE_STYLES.auxiliary}} />
        </div>

        {/* Main Content */}
        <div className="space-y-32">
          {/* Problem */}
          <section>
            <h2 className="text-[24px] font-gellix mb-8" style={{color: CASE_STYLES.accent}}>The Problem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[16px]" style={{backgroundColor: CASE_STYLES.auxiliary}}>
                <h3 className="text-[18px] font-gellix mb-4" style={{color: CASE_STYLES.accent}}>Challenge</h3>
                <p className="text-[16px] font-inter text-white/60 leading-[1.6]">
                  Travelers struggle with managing multiple currencies and keeping track of important documents while abroad.
                </p>
              </div>
              <div className="p-8 rounded-[16px]" style={{backgroundColor: CASE_STYLES.auxiliary}}>
                <h3 className="text-[18px] font-gellix mb-4" style={{color: CASE_STYLES.accent}}>Opportunity</h3>
                <p className="text-[16px] font-inter text-white/60 leading-[1.6]">
                  Create a digital solution that simplifies travel expense management and document storage.
                </p>
              </div>
            </div>
          </section>

          {/* Goals */}
          <section>
            <h2 className="text-[24px] font-gellix mb-8" style={{color: CASE_STYLES.accent}}>Goals</h2>
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-4 p-6 rounded-[16px]" style={{backgroundColor: CASE_STYLES.auxiliary}}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: CASE_STYLES.background}}>
                    <span style={{color: CASE_STYLES.accent}}>{num}</span>
                  </div>
                  <p className="text-[16px] font-inter text-white/60">Goal description {num}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Add more sections following similar pattern */}
        </div>
      </div>
    </main>
  );
} 