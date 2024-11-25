'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useColor } from '../../../context/ColorContext';

const CASE_STYLES = {
  accent: '#D85A2A',
  background: '#F8D4B8',
  auxiliary: '#F7C9A6'
} as const;

export default function CaseTwoPage() {
  useEffect(() => {
    document.body.style.backgroundColor = CASE_STYLES.background;
  }, []);

  return (
    <div className="relative w-full overflow-visible" style={{ backgroundColor: CASE_STYLES.background }}>
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/#case2"
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
            Redefining digital banking
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
                Transforming traditional banking into a seamless digital experience
              </h2>
            </div>

            {/* Right Column - Description */}
            <div>
              <p className="text-[18px] font-inter text-black/60 leading-[1.6]">
                A revolutionary digital banking platform built to address the evolving needs of modern consumers. Founded with the vision of making banking more accessible and user-friendly, it challenges traditional banking norms.
              </p>
              <p className="text-[18px] font-inter text-black/60 leading-[1.6] mt-6">
                Working closely with users and financial experts, we reimagined the banking experience from the ground up. Our goal was to create a platform that combines security with simplicity, making financial management intuitive for everyone.
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
            <p className="text-[18px] font-inter text-black/60 leading-[1.6] mb-12">
              Traditional banking systems often create friction in daily financial 
              activities, with complex interfaces and outdated processes that don't 
              align with modern user expectations.
            </p>
            <div 
              className="w-full aspect-video rounded-[24px]"
              style={{ backgroundColor: CASE_STYLES.auxiliary }}
            />
          </div>
        </section>

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
            <p className="text-[18px] font-inter text-black/60 leading-[1.6] mb-12">
              Through extensive user research and analysis of banking patterns, 
              we identified key opportunities to simplify and enhance the digital 
              banking experience.
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

        {/* Solution Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div>
            <h2 
              className="text-[2rem] font-gellix tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ color: CASE_STYLES.accent }}
            >
              The Solution
            </h2>
            <p className="text-[18px] font-inter text-black/60 leading-[1.6]">
              We developed an intuitive digital banking platform that simplifies 
              financial management while maintaining robust security measures.
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