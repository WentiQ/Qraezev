import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Footer() {
  const [wordmarkInView, setWordmarkInView] = useState(false);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;

    // Check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setWordmarkInView(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWordmarkInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Problem', href: '#problem' },
    { label: 'Approach', href: '#approach' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact us', href: '#contact' },
  ];

  return (
    <footer
      className="w-full relative overflow-hidden border-t border-[#2E241D] rounded-t-2xl sm:rounded-t-[44px] md:rounded-t-[56px] shadow-2xl transition-all"
      style={{
        backgroundColor: '#141312',
        backgroundImage: `
          radial-gradient(ellipse 95% 75% at 50% 108%, #C6704D 0%, #A34C28 26%, #5C2511 50%, #251610 72%, #141312 92%)
        `,
      }}
    >
      {/* Dynamic warm ambient bloom that activates when wordmark appears */}
      <div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[85%] h-[360px] pointer-events-none rounded-full blur-[100px] transition-all duration-[1400ms] ease-out"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(235, 120, 65, 0.45) 0%, rgba(190, 85, 38, 0.22) 50%, transparent 80%)',
          opacity: wordmarkInView ? 1 : 0.2,
          transform: wordmarkInView ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.7)',
        }}
      />

      {/* Architectural Logo Outline in Background - Fully Visible & Perfectly Contained */}
      <div
        className="absolute inset-x-0 top-0 bottom-8 sm:bottom-16 md:bottom-20 flex items-center justify-center pointer-events-none select-none z-0 px-4 transition-all duration-[1200ms] ease-out"
        style={{
          opacity: wordmarkInView ? 0.75 : 0.55,
          transform: wordmarkInView ? 'scale(1)' : 'scale(0.95)',
        }}
      >
        <svg
          viewBox="-12 -12 398 443"
          className="h-[62%] sm:h-[72%] md:h-[80%] max-h-[340px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[520px] w-auto max-w-[85vw] drop-shadow-[0_0_24px_rgba(255,184,0,0.3)]"
          fill="none"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="footerLogoOutlineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA066" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFB800" stopOpacity="1" />
              <stop offset="100%" stopColor="#D46215" stopOpacity="0.85" />
            </linearGradient>
            <filter id="outlineGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>
            <g id="footerLogoUnit">
              <polygon
                points="258,0 258,196 165,128"
                fill="none"
                stroke="url(#footerLogoOutlineGrad)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <polygon
                points="144,0 258,0 88,228 0,160"
                fill="none"
                stroke="url(#footerLogoOutlineGrad)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </g>
          </defs>

          {/* Primary Ribbon Outline */}
          <use href="#footerLogoUnit" filter="url(#outlineGlow)" />

          {/* Interlocking Partner Ribbon Outline */}
          <use
            href="#footerLogoUnit"
            transform="translate(116 191) rotate(180 129 114)"
            filter="url(#outlineGlow)"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto pt-10 sm:pt-16 md:pt-24 px-4 sm:px-12 md:px-16 lg:px-20 pb-0">
        
        {/* Top Row: Navigation Links & Contact / Social Block with ScrollReveal */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-6">
          
          {/* Left Column: Vertical Navigation */}
          <ScrollReveal delay={80} scaleFrom={0.93} blurFrom={12}>
            <nav aria-label="Footer Navigation" className="flex flex-col space-y-2.5 sm:space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm sm:text-lg md:text-[21px] font-normal text-white/95 hover:text-[#FFA066] transition-colors tracking-tight"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </ScrollReveal>

          {/* Right Column: Founder Contact Info */}
          <ScrollReveal delay={180} scaleFrom={0.93} blurFrom={12} className="flex flex-col items-start sm:items-end text-left sm:text-right space-y-2 sm:space-y-3">
            {/* Direct Details with Original Founder Emails */}
            <div className="space-y-1.5 text-xs sm:text-[13.5px] leading-relaxed tracking-normal font-normal">
              <div>
                <span className="text-white/45">Dinesh: </span>
                <a
                  href="mailto:dineshpolavarapu66@gmail.com"
                  className="hover:text-[#FFA066] transition-colors text-white/95"
                >
                  dineshpolavarapu66@gmail.com
                </a>
              </div>
              <div>
                <span className="text-white/45">Mokshagna: </span>
                <a
                  href="mailto:kankati.mokshagnaanurag@gmail.com"
                  className="hover:text-[#FFA066] transition-colors text-white/95"
                >
                  kankati.mokshagnaanurag@gmail.com
                </a>
              </div>
              <div className="text-white/60 pt-0.5">
                Visakhapatnam, Andhra Pradesh, India
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Mid-Row: Subtle Research Notice & Copyright inside the attached dark footer */}
        <ScrollReveal delay={250} scaleFrom={0.95} blurFrom={8}>
          <div className="mt-8 sm:mt-14 md:mt-18 pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] text-white/45 font-mono">
            <p className="text-center sm:text-left">
              Research Notice: QRAEZEV is building a persistent experience layer for physical AI.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <span>© 2026 QRAEZEV. All rights reserved.</span>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Area: Monumental illuminated Qraezev Wordmark with dynamic blur-to-clear scale entrance */}
        <div 
          ref={wordmarkRef}
          className="mt-6 sm:mt-10 md:mt-18 -mb-2 sm:-mb-3 md:-mb-5 overflow-hidden select-none pointer-events-none flex justify-center items-end"
        >
          <h2
            className="font-bold leading-[0.74] text-center w-full will-change-transform"
            style={{
              fontSize: 'clamp(2.75rem, 16vw, 19rem)',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 230, 210, 0.44) 48%, rgba(255, 205, 160, 0.82) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: wordmarkInView ? 1 : 0,
              transform: wordmarkInView
                ? 'translateY(0px) scale(1)'
                : 'translateY(42px) scale(0.86)',
              filter: wordmarkInView
                ? 'blur(0px) drop-shadow(0 0 65px rgba(230, 115, 60, 0.55))'
                : 'blur(22px) drop-shadow(0 0 0px rgba(230, 115, 60, 0))',
              letterSpacing: wordmarkInView ? '-0.035em' : '0.04em',
              transitionProperty: 'opacity, transform, filter, letter-spacing',
              transitionDuration: '1350ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Qraezev
          </h2>
        </div>

      </div>
    </footer>
  );
}
