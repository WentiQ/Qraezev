import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (mode?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - previousScrollY;

      if (currentScrollY <= 20 || scrollDelta < -4 || mobileMenuOpen) {
        setVisible(true);
      } else if (scrollDelta > 4) {
        setVisible(false);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

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
    <header className={`sticky top-4 z-40 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[96vw] 2xl:max-w-[92vw] rounded-full bg-[#F3F1EA]/90 backdrop-blur-md border border-[#D8D2C2]/60 shadow-md transition-[transform,opacity] duration-300 ease-out ${
      visible || mobileMenuOpen
        ? 'translate-y-0 opacity-100'
        : '-translate-y-[calc(100%+1rem)] opacity-0 pointer-events-none'
    }`}>
      <div className="w-full px-6 sm:px-8 lg:px-10 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single wordmark lockup */}
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-[#15120E] whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm py-1"
        >
          <img src="/assets/images/logo_inverted.svg" alt="" className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 object-contain" />
          <img src="/assets/images/wordmark_logo.png" alt="QRAEZEV" className="h-auto w-28 object-contain" />
        </a>

        {/* Zone 2: Concise single-line navigation links */}
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

        {/* Zone 3: Single primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenContact('pilot')}
            className="pilot-cta flex items-center gap-3 pl-4 pr-1.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#15120E] hover:bg-[#302b25] active:translate-y-0.5 rounded-full transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15120E] whitespace-nowrap shrink-0"
          >
            <span>Discuss a Pilot</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB800] text-[#15120E]">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 text-[#15120E] hover:bg-[#E8E4D9] rounded transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D8D2C2] bg-[#F3F1EA] px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-[15px] font-medium text-[#15120E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#E8E4D9] hover:text-[#FFB800] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('pilot');
              }}
              className="pilot-cta w-full flex items-center justify-between gap-3 pl-4 pr-1.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#15120E] hover:bg-[#302b25] rounded-full transition-colors"
            >
              <span>Discuss a Pilot</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFB800] text-[#15120E]">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
