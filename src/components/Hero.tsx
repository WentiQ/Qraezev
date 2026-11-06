import { ArrowRight } from 'lucide-react';
import { NeuralField } from './NeuralField';

interface HeroProps {
  onOpenContact: (mode?: string) => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: 'calc(100svh - 4.5rem)' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sketch-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#D8D2C2" strokeWidth="0.5" strokeDasharray="3,3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sketch-grid)" />
        </svg>
      </div>

      <div className="site-container pt-32 pb-12 md:pt-32 md:pb-12 relative z-10">
        <div className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#8A8275] mb-14 md:mb-20 text-center">
          <span className="inline-block w-2 h-2 rounded-full bg-[#FFB800]" />
          <span>The Experience Layer for Physical AI</span>
          <span aria-hidden="true" className="text-[#BAAF96]">·</span>
          <span>Robot-Agnostic Cognitive Architecture</span>
        </div>

        <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto">
          <div data-neural-text className="mx-auto max-w-4xl 2xl:max-w-5xl space-y-12 md:space-y-16 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] 2xl:text-[68px] font-extrabold text-[#15120E] tracking-tight leading-[1.08] text-balance">
              Robots act.
              <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-[#15120E]">Experience helps them learn.</span>
                <svg
                  className="absolute left-0 -bottom-1 w-full h-4 -z-0 overflow-visible"
                  viewBox="0 0 400 16"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 2 8 C 80 14, 180 3, 270 11 C 330 16, 380 7, 398 9"
                    stroke="#FFB800"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeOpacity="0.75"
                  />
                  <path
                    d="M 12 11 C 95 6, 210 13, 310 8 C 360 5, 385 10, 395 8"
                    stroke="#15120E"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    opacity="0.35"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto max-w-2xl 2xl:max-w-3xl text-lg sm:text-xl 2xl:text-2xl text-[#443E37] leading-relaxed font-normal">
              QRAEZEV is developing a robot-agnostic cognitive layer: a persistent experience system that sits above existing control stacks, enabling machines to keep, reuse, and improve what they learn on the job.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenContact('pilot')}
                className="pilot-cta relative inline-flex items-center justify-center gap-3 pl-6 pr-2 py-2 text-sm font-bold uppercase tracking-wider text-white bg-[#15120E] hover:bg-[#302b25] active:translate-y-0.5 rounded-full shadow-[3px_3px_0px_0px_#15120E] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15120E]"
              >
                <span>Discuss a Pilot</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFB800] text-[#15120E]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#15120E] bg-white hover:bg-[#FAF8F3] border-1.5 border-[#15120E] rounded-[10px_4px_12px_6px] transition-colors shadow-[2px_2px_0px_0px_rgba(21,18,14,0.15)]"
              >
                <span>Explore the Architecture</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#D8D2C2]/70 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#6B6358]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#15120E]">Safety Guarded:</span>
                <span>Retains independent E-stop &amp; servo control</span>
              </div>
              <span className="hidden sm:inline text-[#D8D2C2]">|</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#15120E]">Hardware Agnostic:</span>
                <span>Adapts across 6-DOF, cobots, &amp; mobiles</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <NeuralField />
    </section>
  );
}
