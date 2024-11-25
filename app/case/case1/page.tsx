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

      {/* Content Container */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 py-32">
        {/* Main Content - reduced space-y from 32 to 16 */}
        <div className="space-y-16">
          {/* Intro Section */}
          <section>
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-[12px] justify-center">
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

            {/* Title and Description */}
            <div className="max-w-[800px] mx-auto text-center">
              <h1
                className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-gellix tracking-[-0.02em] leading-[110%] mb-[12px]"
                style={{ color: CASE_STYLES.accent }}
              >
                Redesigning remittance
              </h1>
              <p 
                className="text-[14px] md:text-[16px] font-inter text-white/40 leading-[140%] mb-16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </section>

          {/* Hero Image - adjusted spacing in parent div */}
          <div className="w-screen relative left-1/2 -translate-x-1/2 px-6 -mt-16">
            <div 
              className="w-full aspect-video rounded-[24px]"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            />
          </div>

          {/* Problem Section - Now directly after hero image */}
          <section className="max-w-[800px] mx-auto">
            <h2 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ color: CASE_STYLES.accent }}
            >
              The Problem
            </h2>
            <p className="text-[18px] font-inter text-white/80 leading-[1.6] mb-12">
              Travelers often struggle with managing multiple aspects of their journey - 
              from keeping track of expenses in different currencies to storing important 
              travel documents securely. The existing solutions are either too focused on 
              a single aspect or too complex to use while on the go.
            </p>
            <div 
              className="w-full aspect-video rounded-[24px]"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            />
          </section>

          {/* Research Section */}
          <section className="max-w-[800px] mx-auto">
            <h2 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ color: CASE_STYLES.accent }}
            >
              Research & Insights
            </h2>
            <p className="text-[18px] font-inter text-white/80 leading-[1.6] mb-12">
              Through extensive user research and interviews with frequent travelers, 
              we identified several key pain points and opportunities for improvement 
              in the travel management experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                "85% of travelers struggle with expense tracking",
                "73% want better document organization",
                "92% prefer a single app solution",
                "68% need offline access to information"
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-[16px]"
                  style={{ backgroundColor: CASE_STYLES.auxiliary }}
                >
                  <p className="text-[16px] font-inter text-white/80">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
            <div 
              className="w-full aspect-video rounded-[24px]"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            />
          </section>

          {/* Solution Section */}
          <section className="max-w-[800px] mx-auto">
            <h2 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ color: CASE_STYLES.accent }}
            >
              The Solution
            </h2>
            <p className="text-[18px] font-inter text-white/80 leading-[1.6] mb-12">
              We designed a comprehensive yet intuitive mobile app that combines expense 
              tracking, document storage, and itinerary management in a single, 
              user-friendly interface.
            </p>
            <div 
              className="w-full aspect-[21/9] rounded-[24px]"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
