import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (mode?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [floatingVisible, setFloatingVisible] = useState(false);
  const [attachedMenuOpen, setAttachedMenuOpen] = useState(false);
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - previousScrollY;

      // At the top of the page, floating header hides so attached header shines
      if (currentScrollY <= 60) {
        setFloatingVisible(false);
      } else if (floatingMenuOpen) {
        setFloatingVisible(true);
      } else if (scrollDelta > 5) {
        // Scrolling down -> smoothly disappear
        setFloatingVisible(false);
      } else if (scrollDelta < -5) {
        // Scrolling up -> smoothly reappear
        setFloatingVisible(true);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [floatingMenuOpen]);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Approach', href: '#approach' },
    { label: 'Products', href: '#products' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Validation', href: '#validation' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <>
      {/* 1. ATTACHED HEADER: Attached completely to homescreen with zero separation line */}
      <header className="relative w-full z-30 bg-transparent">
        {/* Matching subtle sketch grid pattern for seamless homescreen integration */}
        <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="attached-sketch-grid" width="72" height="72" patternUnits="userSpaceOnUse">
                <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#D8D2C2" strokeWidth="0.5" strokeDasharray="3,3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#attached-sketch-grid)" />
          </svg>
        </div>

        <div className="site-container h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8 relative z-10 px-4 sm:px-8">
          {/* Zone 1: Brand lockup */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg font-bold tracking-tight text-[#15120E] whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm py-1"
          >
            <img src="/assets/images/logo_inverted.svg" alt="QRAEZEV Logo" className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 object-contain" />
            <span className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-[-0.035em] text-[#15120E] leading-none">
              Qraezev
            </span>
          </a>

          {/* Zone 2: Navigation links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-[14px] font-medium text-[#443E37]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#15120E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FFB800] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContact('pilot')}
              className="pilot-cta flex items-center gap-3 pl-4 pr-1.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#15120E] hover:bg-[#302b25] active:translate-y-0.5 rounded-full transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15120E] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Discuss a Pilot</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB800] text-[#15120E]">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setAttachedMenuOpen(!attachedMenuOpen)}
            aria-label={attachedMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 text-[#15120E] hover:bg-[#E8E4D9] rounded transition-colors cursor-pointer"
          >
            {attachedMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer (Attached) */}
        {attachedMenuOpen && (
          <div className="md:hidden border-t border-[#D8D2C2] bg-[#F3F1EA] px-5 py-4 space-y-4 shadow-md animate-in slide-in-from-top-2 duration-200 relative z-20">
            <nav className="flex flex-col space-y-2.5 text-sm font-medium text-[#15120E]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setAttachedMenuOpen(false)}
                  className="py-1.5 border-b border-[#E8E4D9] hover:text-[#FFB800] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setAttachedMenuOpen(false);
                  onOpenContact('pilot');
                }}
                className="pilot-cta w-full flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#15120E] hover:bg-[#302b25] rounded-full transition-colors cursor-pointer"
              >
                <span>Discuss a Pilot</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB800] text-[#15120E]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. FLOATING STICKY HEADER: Smoothly disappears on scroll down, reappears on scroll up */}
      <header
        aria-label="Sticky Navigation"
        className={`fixed top-3 sm:top-4 left-0 right-0 z-50 mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-4rem)] max-w-[96vw] 2xl:max-w-[92vw] rounded-full bg-[#F3F1EA]/90 backdrop-blur-md border border-[#D8D2C2]/60 shadow-md transition-[transform,opacity] duration-300 ease-out ${
          floatingVisible || floatingMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-[calc(100%+2rem)] opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-10 h-14 sm:h-18 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Brand lockup */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg font-bold tracking-tight text-[#15120E] whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm py-1"
          >
            <img src="/assets/images/logo_inverted.svg" alt="QRAEZEV Logo" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-contain" />
            <span className="text-xl sm:text-2xl md:text-[28px] font-extrabold tracking-[-0.035em] text-[#15120E] leading-none">
              Qraezev
            </span>
          </a>

          {/* Zone 2: Navigation links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#443E37]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#15120E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FFB800] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContact('pilot')}
              className="pilot-cta flex items-center gap-3 pl-4 pr-1.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#15120E] hover:bg-[#302b25] active:translate-y-0.5 rounded-full transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15120E] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Discuss a Pilot</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB800] text-[#15120E]">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setFloatingMenuOpen(!floatingMenuOpen)}
            aria-label={floatingMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-1.5 text-[#15120E] hover:bg-[#E8E4D9] rounded transition-colors cursor-pointer"
          >
            {floatingMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer (Floating) */}
        {floatingMenuOpen && (
          <div className="md:hidden border-t border-[#D8D2C2] bg-[#F3F1EA] px-5 py-4 space-y-4 rounded-b-3xl shadow-lg">
            <nav className="flex flex-col space-y-2.5 text-sm font-medium text-[#15120E]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setFloatingMenuOpen(false)}
                  className="py-1.5 border-b border-[#E8E4D9] hover:text-[#FFB800] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setFloatingMenuOpen(false);
                  onOpenContact('pilot');
                }}
                className="pilot-cta w-full flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#15120E] hover:bg-[#302b25] rounded-full transition-colors cursor-pointer"
              >
                <span>Discuss a Pilot</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB800] text-[#15120E]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
