import { ArrowUp, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#15120E] py-16 text-sm text-[#D8D2C2]">
      <div className="site-container">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/15">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/assets/images/logo.svg" alt="" className="h-8 w-8 object-contain" />
              <img src="/assets/images/wordmark_w.png" alt="QRAEZEV" className="h-auto w-28 object-contain" />
            </div>
            
            <p className="text-sm text-[#D8D2C2] leading-relaxed max-w-sm">
              The persistent experience layer for physical AI. Helping deployed machines use accumulated operational experience to make better future decisions.
            </p>

            <div className="pt-1 text-[11px] text-[#B9B2A5]">
              Software Runtime · Embedded Architecture · Physical Intelligence
            </div>
          </div>

          {/* In-page navigation links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F3F1EA] font-bold block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-y-3 gap-x-5 text-sm">
              <a href="#problem" className="hover:text-[#FFB800] transition-colors">The Problem</a>
              <a href="#approach" className="hover:text-[#FFB800] transition-colors">Cognitive Loop</a>
              <a href="#products" className="hover:text-[#FFB800] transition-colors">Software & Embedded</a>
              <a href="#architecture" className="hover:text-[#FFB800] transition-colors">Safety Boundary</a>
              <a href="#validation" className="hover:text-[#FFB800] transition-colors">Validation Principles</a>
              <a href="#roadmap" className="hover:text-[#FFB800] transition-colors">R&D Roadmap</a>
              <a href="#team" className="hover:text-[#FFB800] transition-colors">Founders</a>
              <a href="#contact" className="hover:text-[#FFB800] transition-colors">Pilot Inquiries</a>
            </div>
          </div>

          {/* Contact & Scientific Foundation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#F3F1EA] font-bold block mb-3">
              Direct Contact
            </span>
            <div className="space-y-3">
              <a
                href="mailto:dineshpolavarapu66@gmail.com"
                className="flex items-center gap-2 text-xs font-semibold text-[#F3F1EA] hover:text-[#FFB800] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
                <span className="break-all">dineshpolavarapu66@gmail.com</span>
              </a>
              <a
                href="mailto:kankati.mokshagnaanurag@gmail.com"
                className="flex items-center gap-2 text-xs font-semibold text-[#F3F1EA] hover:text-[#FFB800] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
                <span className="break-all">kankati.mokshagnaanurag@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dinesh-polavarapu-134029306/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#F3F1EA] hover:text-[#FFB800] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
                <span>Dinesh on LinkedIn</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mokshagnaanurag/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#F3F1EA] hover:text-[#FFB800] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
                <span>Mokshagna on LinkedIn</span>
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#B9B2A5] hover:text-[#FFB800] transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#B9B2A5]">
          <p className="max-w-2xl leading-relaxed">
            <strong>Research Notice:</strong> QRAEZEV is in early-stage research and development. Technical architectures, benchmark hypotheses, and deployment specifications represent engineering directions under active validation.
          </p>
          <div className="whitespace-nowrap shrink-0">
            © 2026 QRAEZEV. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
