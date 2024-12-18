'use client';
import Link from 'next/link';

const CASE_STYLES = {
  accent: '#A1BFE4',
  background: '#00091E',
  auxiliary: '#08122B',
} as const;

export default function CaseOnePage() {
  return (
    <div className="relative w-full overflow-visible">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/#case1"
          className="group flex items-center px-6 py-3 border rounded-full transition-all duration-300"
          style={{
            color: CASE_STYLES.accent,
            borderColor: `${CASE_STYLES.accent}33`,
            backgroundColor: CASE_STYLES.background,
          }}
        >
          <svg className="w-4 h-4 mr-2 rotate-180" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ stroke: CASE_STYLES.accent }}
            />
          </svg>
          <span>Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="w-full pt-32 pb-24">
        <div className="max-w-[1300px] mx-auto px-4 md:px-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {['UX Design', 'Product Strategy'].map((tag) => (
              <span 
                key={tag}
                className="px-2 py-2 rounded-[8px] text-[12px] uppercase font-gellix tracking-[0.04em]"
                style={{ 
                  color: CASE_STYLES.accent,
                  backgroundColor: CASE_STYLES.auxiliary 
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-8"
            style={{ color: CASE_STYLES.accent }}
          >
            Redesigning remittance
          </h1>

          {/* Divider Line */}
          <div 
            className="w-full h-[1px] mb-8"
            style={{ backgroundColor: `${CASE_STYLES.accent}33` }}
          />

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column - Subtitle */}
            <div>
              <h2 
                className="text-[24px] md:text-[32px] font-gellix tracking-[-0.02em] leading-[1.2]"
                style={{ color: CASE_STYLES.accent }}
              >
                Transforming how people send money across borders, redefining the future of financial transactions.
              </h2>
            </div>

            {/* Right Column - Description */}
            <div>
              <p className="text-[18px] font-inter text-white/80 leading-[1.6]">
                A revolutionary remittance platform built to solve the challenges of cross-border payments. Founded with the vision of making international transfers seamless, it was designed to address the complexities facing modern financial transactions.
              </p>
              <p className="text-[18px] font-inter text-white/80 leading-[1.6] mt-6">
                Working closely with the user community, we embarked on reimagining the remittance experience. We needed to create a platform that users could trust while delivering on the promise of efficient cross-border payments. This led us to developing intuitive solutions rather than complex processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image - 16:9 ratio */}
      <div className="w-full mb-12">
        <div className="max-w-[1300px] mx-auto px-4 md:px-4">
          <div 
            className="w-full aspect-[16/9] rounded-[24px]"
            style={{ backgroundColor: CASE_STYLES.auxiliary }}
          />
        </div>
      </div>

      {/* Two Images Section */}
      <div className="w-full mb-24">
        <div className="max-w-[1300px] mx-auto px-4 md:px-4">
          <div className="grid grid-cols-2 gap-12">
            <div 
              className="aspect-[3/4] rounded-[24px]"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            />
            <div 
              className="aspect-[3/4] rounded-[24px]"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-4">
        {/* Problem Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div>
            <h2 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ color: CASE_STYLES.accent }}
            >
              The Problem
            </h2>
          </div>
          <div>
            <p className="text-[18px] font-inter text-white/80 leading-[1.6] mb-12">
              Travelers often struggle with managing multiple aspects of their journey - 
              from keeping track of expenses in different currencies to storing important 
              travel documents securely.
            </p>
            <div 
              className="w-full aspect-video rounded-[24px]"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            />
          </div>
        </section>

        {/* Full Width Image Section */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-32">
          <div 
            className="w-full aspect-[21/9]"
            style={{ backgroundColor: CASE_STYLES.auxiliary }}
          />
        </div>

        {/* Research Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div>
            <h2 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ color: CASE_STYLES.accent }}
            >
              Research & Insights
            </h2>
          </div>
          <div>
            <p className="text-[18px] font-inter text-white/80 leading-[1.6] mb-12">
              Through extensive user research and interviews with frequent travelers, 
              we identified several key pain points and opportunities for improvement.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {[1,2,3,4].map((_, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-[16px]"
                  style={{ backgroundColor: CASE_STYLES.auxiliary }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section with Side Images */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div>
            <h2 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ color: CASE_STYLES.accent }}
            >
              The Solution
            </h2>
            <p className="text-[18px] font-inter text-white/80 leading-[1.6]">
              We designed a comprehensive yet intuitive mobile app that combines expense 
              tracking, document storage, and itinerary management.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[1,2].map((_, index) => (
              <div 
                key={index}
                className="aspect-[3/4] rounded-[16px]"
                style={{ backgroundColor: CASE_STYLES.auxiliary }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

