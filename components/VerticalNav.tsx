'use client';
import { useColor } from '../context/ColorContext';
import { usePathname } from 'next/navigation';

const mainSections = [
  { id: 'hero', name: 'Hello' },
  { 
    id: 'case1', 
    name: 'Travel Wallet'
  },
  { id: 'case2', name: 'Redesigning Remittance' },
  { id: 'case3', name: 'AI made simple' },
  { id: 'case4', name: 'Mobile Strategy' },
  { id: 'case5', name: 'Recycling revolution' },
  { id: 'case6', name: 'Reimagine Telco' },
  { id: 'projects', name: 'Projects' }
] as const;

const socialLinks = [
  { id: 'linkedin', name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { id: 'contact', name: 'Email me', href: '#contact' }
];

const VerticalNav = () => {
  const { textColor, activeSection, accentColor } = useColor();
  const pathname = usePathname();
  const isDetailPage = pathname.includes('/case/');

  if (isDetailPage) return null;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-[240px] hidden md:flex flex-col justify-between py-4 z-50 pointer-events-auto font-gellix">
        {/* Top - Logo */}
        <div className="w-full pl-8 pt-2">
          <a 
            href="/" 
            className="text-sm font-gellix hover:opacity-70 transition-all duration-300"
            style={{ 
              color: textColor,
              transition: 'color 0.5s ease-in-out'
            }}
          >
            Nico Baldovino
          </a>
        </div>

        {/* Middle - Main Navigation */}
        <div className="w-full pl-8">
          <ul className="flex flex-col gap-2">
            {mainSections.map((section) => (
              <li key={section.id}>
                <>
                  <a
                    href={section.id === 'hero' && isDetailPage 
                      ? '/' 
                      : `/${isDetailPage ? '' : '#'}${section.id}`
                    }
                    className="text-sm font-gellix transition-all duration-300 block pr-4"
                    style={{ 
                      color: activeSection === section.id ? accentColor : textColor,
                      transition: 'color 0.5s ease-in-out'
                    }}
                  >
                    <span 
                      className={`transition-opacity duration-300 ${
                        activeSection === section.id 
                          ? 'opacity-100' 
                          : 'opacity-40 hover:opacity-100'
                      }`}
                    >
                      {section.name}
                    </span>
                  </a>
                </>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom - Social Links */}
        <div className="w-full pl-8">
          <ul className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target={link.id === 'linkedin' ? '_blank' : undefined}
                  rel={link.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                  className="text-sm font-gellix opacity-40 hover:opacity-100 transition-all duration-300"
                  style={{ 
                    color: textColor,
                    transition: 'color 0.5s ease-in-out'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Dots Navigation */}
      <nav className="fixed left-3 top-1/2 -translate-y-1/2 md:hidden z-50">
        <ul className="flex flex-col gap-2">
          {mainSections.map((section) => (
            <li key={section.id}>
              <a
                href={section.id === 'hero' && isDetailPage 
                  ? '/' 
                  : `/${isDetailPage ? '' : '#'}${section.id}`
                }
                className="block w-1.5 h-1.5 rounded-full transition-all duration-300 relative group"
                style={{ 
                  backgroundColor: activeSection === section.id 
                    ? accentColor 
                    : 'rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Tooltip on hover */}
                <span 
                  className="absolute left-6 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-gellix whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: textColor }}
                >
                  {section.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default VerticalNav; 