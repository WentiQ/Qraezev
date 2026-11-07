import { ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProductDirectionProps {
  onOpenContact: (mode?: string) => void;
}

export function ProductDirection({ onOpenContact }: ProductDirectionProps) {
  return (
    <section id="products" className="relative bg-[#F3F1EA] text-[#15120E] py-16 sm:py-32 md:py-48 lg:py-60 overflow-hidden border-t border-[#D8D2C2]">
      
      <div className="site-container relative z-10 px-1.5 sm:px-8 max-w-6xl mx-auto">
        
        {/* Section Header: Expansive Negative Space & Monumental Typography */}
        <ScrollReveal scaleFrom={0.92} blurFrom={14} className="text-center max-w-3xl mx-auto mb-12 sm:mb-24 md:mb-36">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] sm:leading-[1.02] text-[#15120E]">
            One cognitive core.
            <br />
            <span className="text-[#8A8275] font-light">Two deployment forms.</span>
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#554E44] font-light leading-relaxed max-w-2xl mx-auto">
            First prove the architecture in software. Then engineer hardware around measured workloads.
          </p>
        </ScrollReveal>

        {/* The Two Embodiments: Spacious, Breathable Diptych (Low Text, High Impact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 md:gap-20 mb-14 sm:mb-28 md:mb-40">
          
          {/* Form 01: Software Runtime */}
          <ScrollReveal delay={100} scaleFrom={0.91} blurFrom={16}>
            <div className="h-full flex flex-col justify-between p-4 sm:p-10 lg:p-14 rounded-2xl sm:rounded-[36px] md:rounded-[42px] bg-white border border-[#D8D2C2] shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-[#E8DFC8]">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#D46215]">
                    Product A · Immediate Wedge
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-[#15120E] bg-[#FFB800] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold">
                    Software Runtime
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FAF8F3] border border-[#E8DFC8] text-[#D46215] flex items-center justify-center mb-4 sm:mb-6">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#15120E] tracking-tight mb-3 sm:mb-4">
                  QRAEZEV Software
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-[#554E44] font-light leading-relaxed mb-6 sm:mb-10">
                  Runs on existing robot PCs, edge boxes, or simulation. Adds a persistent memory layer via an adapter SDK without dedicated hardware.
                </p>

                {/* 3 Clean Spec Points */}
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-[#E8DFC8] text-xs sm:text-sm font-mono text-[#554E44]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8A8275]">Deployment Target</span>
                    <span className="text-[#15120E] font-semibold">Robot PC / Edge / Sim</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8A8275]">Integration</span>
                    <span className="text-[#15120E] font-semibold">Robot Adapter SDK</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8A8275]">Safety Isolation</span>
                    <span className="text-[#15120E] font-semibold">100% Preserved Controller</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-[#E8DFC8] flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-mono text-[#8A8275]">Available for Pilots</span>
                <button
                  onClick={() => onOpenContact('software')}
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#15120E] hover:text-[#D46215] transition-colors cursor-pointer"
                >
                  <span>Discuss Software Pilot</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D46215]" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Form 02: Embedded Module */}
          <ScrollReveal delay={220} scaleFrom={0.91} blurFrom={16}>
            <div className="h-full flex flex-col justify-between p-4 sm:p-10 lg:p-14 rounded-2xl sm:rounded-[36px] md:rounded-[42px] bg-[#15120E] text-[#F3F1EA] border border-[#2A241D] shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-white/10">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FFA066]">
                    Product B · Onboard Brain
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-white/60 bg-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                    Dedicated Module
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-[#FFA066] flex items-center justify-center mb-4 sm:mb-6">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
                  QRAEZEV Embedded
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-[#D8D2C2]/80 font-light leading-relaxed mb-6 sm:mb-10">
                  A self-contained compute module inside the robot. Dedicated memory and robot I/O operating 100% locally without cloud dependency.
                </p>

                {/* 3 Clean Spec Points */}
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-white/10 text-xs sm:text-sm font-mono text-[#D8D2C2]/70">
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Physical Location</span>
                    <span className="text-white font-semibold">Internal Robot Chassis</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Network Dependency</span>
                    <span className="text-white font-semibold">100% Offline-First</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40">Memory Persistence</span>
                    <span className="text-white font-semibold">Survives Power Loss</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-mono text-white/40">Hardware Co-Design</span>
                <button
                  onClick={() => onOpenContact('embedded')}
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FFA066] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Hardware Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFA066]" />
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* The Co-Design Law: Spacious, High-Contrast Thesis */}
        <ScrollReveal delay={150} scaleFrom={0.93} blurFrom={14}>
          <div className="pt-10 sm:pt-16 md:pt-20 border-t border-[#D8D2C2] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#D46215] block mb-2">
                Core Hardware Principle
              </span>
              <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#15120E] tracking-tight leading-snug">
                &ldquo;Do not design custom hardware before understanding the actual computational workload.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-white border border-[#D8D2C2] text-[#15120E] shadow-2xs font-semibold">
                1. Software Runtime
              </span>
              <span className="text-[#8A8275]">→</span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-white border border-[#D8D2C2] text-[#15120E] shadow-2xs font-semibold">
                2. Workload Profiling
              </span>
              <span className="text-[#8A8275]">→</span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-white border border-[#D8D2C2] text-[#15120E] shadow-2xs font-semibold">
                3. Reference Prototype
              </span>
              <span className="text-[#8A8275]">→</span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-[#15120E] text-[#FFB800] font-bold">
                4. Production Module
              </span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
