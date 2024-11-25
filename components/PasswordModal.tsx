'use client';

import { useState } from 'react';
import { usePasswordModal } from '../context/PasswordModalContext';
import { useRouter } from 'next/navigation';

const CASE_PASSWORDS = {
  case2: 'nico2025',
  case4: 'nico2025'
} as const;

const SuccessIcon = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="mb-6"
  >
    <circle cx="24" cy="24" r="24" fill="#4CAF50" fillOpacity="0.1"/>
    <path 
      d="M32 18L21 29L16 24" 
      stroke="#4CAF50" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function PasswordModal() {
  const router = useRouter();
  const { isOpen, closeModal, activeCase } = usePasswordModal();
  const [isRequestMode, setIsRequestMode] = useState(false);
  const [isRequestSuccess, setIsRequestSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeCase && password === CASE_PASSWORDS[activeCase as keyof typeof CASE_PASSWORDS]) {
      const expiry = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days
      localStorage.setItem('portfolioAccess', JSON.stringify({ expiry }));
      closeModal();
      router.push(`/case/${activeCase}`);
    } else {
      setError('Invalid password');
    }
  };

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/request-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) throw new Error('Failed to send request');
      
      setIsRequestSuccess(true);
    } catch (error) {
      console.error('Failed to send password request:', error);
      // Handle error if needed
    }
  };

  const handleBackToPassword = () => {
    setIsRequestSuccess(false);
    setIsRequestMode(false);
    setError('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-[20px] saturate-0 flex items-center justify-center z-50">
      <div className="bg-[#1C1C1C] rounded-2xl p-12 max-w-md w-full relative border border-white/10">
        <button
          onClick={closeModal}
          className="absolute top-12 right-12 text-white/40 hover:text-white/80 transition-colors"
        >
          ✕
        </button>

        {(isRequestMode || isRequestSuccess) && (
          <button
            onClick={handleBackToPassword}
            className="absolute top-12 left-12 text-white/40 hover:text-white/80 transition-colors"
          >
            ←
          </button>
        )}

        {!isRequestMode ? (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-3 mb-6">
              <h2 className="text-[2rem] font-gellix tracking-[-0.02em] text-white">Password Required</h2>
              <p className="text-white/60 font-inter text-[14px] leading-[140%]">
                In order to see this case, you need to enter a password provided by Nico Baldovino.
              </p>
            </div>

            <div className="space-y-[2px]">
              <label className="text-white text-[12px] font-inter">Password</label>
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className={`w-full p-3 bg-white/5 border ${error ? 'border-[#FF0000]' : 'border-white/10'} 
                  rounded-lg text-white font-inter text-[14px] focus:outline-none 
                  ${error ? 'focus:border-[#FF0000]' : 'focus:border-white/30'}
                  transition-colors`}
                placeholder="Enter password"
              />
              {error && (
                <p style={{ color: '#FF0000' }} className="text-[12px] font-inter mt-[2px]">
                  {error}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-white text-black font-gellix rounded-full 
                  hover:bg-white/90 transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsRequestMode(true);
                  setError('');
                }}
                className="w-full py-3 px-6 border border-white/10 text-white font-gellix 
                  rounded-full hover:bg-white/5 transition-colors"
              >
                Request Password
              </button>
            </div>
          </form>
        ) : isRequestSuccess ? (
          <div className="mt-8 flex flex-col items-center">
            <SuccessIcon />
            <div className="space-y-3 text-center">
              <h2 className="text-[2rem] font-gellix tracking-[-0.02em] text-white">Request Sent</h2>
              <p className="text-white/60 font-inter text-[14px] leading-[140%]">
                Thank you for your interest. You will be contacted back with the password as soon as possible.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="w-full py-3 px-6 border border-white/10 text-white font-gellix 
                rounded-full hover:bg-white/5 transition-colors mt-12"
            >
              Back Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleRequestSubmit} className="mt-8">
            <div className="space-y-3 mb-6">
              <h2 className="text-[2rem] font-gellix tracking-[-0.02em] text-white">Request Password</h2>
              <p className="text-white/60 font-inter text-[14px] leading-[140%]">
                Fill out the form below to request access to this case study. We'll get back to you shortly.
              </p>
            </div>

            <div className="space-y-3">
              <div className="space-y-[2px]">
                <label className="text-white text-[12px] font-inter">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white 
                    font-inter text-[14px] focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-[2px]">
                <label className="text-white text-[12px] font-inter">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white 
                    font-inter text-[14px] focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-white text-black font-gellix rounded-full 
                  hover:bg-white/90 transition-colors"
              >
                Request Password
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 