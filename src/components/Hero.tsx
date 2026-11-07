import { ArrowRight } from 'lucide-react';
import { NeuralField } from './NeuralField';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onOpenContact: (mode?: string) => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex flex-col justify-center items-center overflow-hidden bg-[#F3F1EA] py-6 sm:py-12 lg:py-16"
    >
      {/* 1. Subtle Architectural Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sketch-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#D8D2C2" strokeWidth="0.5" strokeDasharray="3,3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sketch-grid)" />
        </svg>
      </div>

      {/* 2. Ambient Warm Radial Illumination */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[900px] h-[350px] sm:h-[400px] rounded-full pointer-events-none blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, #FFB800 0%, #D46215 50%, transparent 80%)',
        }}
      />

      {/* 3. Text & Content Layer: Monumental & Clean */}
      <div 
        data-neural-text
        className="site-container relative z-10 flex flex-col justify-center items-center text-center px-1.5 sm:px-8 max-w-5xl mx-auto my-auto"
      >
        {/* Monumental Headline */}
        <ScrollReveal delay={100} duration={1000} scaleFrom={0.93} blurFrom={16} className="max-w-4xl mx-auto mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[80px] xl:text-[88px] font-extrabold text-[#15120E] tracking-tight leading-[1.05] sm:leading-[1.03] text-balance drop-shadow-xs">
            Robots act.
            <br />
            <span className="font-light text-[#736B5E]">Experience helps them learn.</span>
          </h1>
        </ScrollReveal>

        {/* Crisp, Spacious Subtitle */}
        <ScrollReveal delay={250} duration={950} scaleFrom={0.94} blurFrom={12}>
          <p className="max-w-xl sm:max-w-3xl text-sm sm:text-base md:text-xl text-[#554E44] font-light leading-relaxed mb-6 sm:mb-10">
            A persistent cognitive runtime above existing robot controllers. Machines retain operational experience to make better decisions.
          </p>
        </ScrollReveal>

        {/* Prominent Homescreen Action CTAs (Guaranteed above the fold) */}
        <ScrollReveal delay={400} duration={900} scaleFrom={0.92} blurFrom={14} className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-6 sm:mb-10">
          <button
            onClick={() => onOpenContact('pilot')}
            className="inline-flex items-center gap-2.5 sm:gap-3.5 pl-5 pr-2 py-2.5 sm:pl-8 sm:pr-3.5 sm:py-3.5 text-xs sm:text-base font-bold text-white bg-[#15120E] hover:bg-[#2C2620] active:scale-[0.98] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <span>Discuss a Pilot</span>
            <span className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#FFB800] text-[#15120E] group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
          </button>

          <a
            href="#approach"
            className="inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base font-semibold text-[#15120E] bg-white/80 hover:bg-white border border-[#D8D2C2] hover:border-[#15120E] rounded-full transition-all duration-300 backdrop-blur-xs shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>Explore Architecture</span>
          </a>
        </ScrollReveal>

        {/* Monospace Architecture Telemetry Status Line */}
        <ScrollReveal delay={550} duration={850} scaleFrom={0.95} blurFrom={10} className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-1.5 text-[10px] sm:text-xs font-mono text-[#8A8275] uppercase tracking-wider">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D46215]" />
            <span>Deterministic Safety Gateway</span>
          </div>
          <span className="text-[#D8D2C2] hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
            <span>Low-Latency Memory Retrieval</span>
          </div>
          <span className="text-[#D8D2C2] hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A8275]" />
            <span>Robot-Agnostic Schema</span>
          </div>
        </ScrollReveal>

      </div>

      {/* 4. Interactive Neural Field Particles (Softly Blurred Background Effect) */}
      <NeuralField />
    </section>
  );
}
