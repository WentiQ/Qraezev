import { ShieldCheck, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function ArchitectureSection() {
  const planes = [
    {
      num: '01',
      name: 'Cognitive Plane',
      owner: 'QRAEZEV Runtime',
      authority: 'Task Proposals Only',
      role: 'Maintains context, queries memory, and proposes bounded task actions.',
      borderAccent: 'border-[#FFB800]/40',
      tagColor: 'text-[#FFB800] bg-[#FFB800]/10 border-[#FFB800]/30',
      dotColor: 'bg-[#FFB800]',
    },
    {
      num: '02',
      name: 'Control Plane',
      owner: 'Existing Robot Controller',
      authority: 'Physical Actuation Authority',
      role: 'Executes high-rate joint servoing, trajectory generation, and motor currents.',
      borderAccent: 'border-white/15',
      tagColor: 'text-white/80 bg-white/5 border-white/15',
      dotColor: 'bg-white',
    },
    {
      num: '03',
      name: 'Safety Plane',
      owner: 'Safety Gateway / Safety PLC',
      authority: 'Supreme Safety Authority',
      role: 'Enforces hard limits, E-stops, and interlocks to stop motion independently.',
      borderAccent: 'border-[#FFB800]/40',
      tagColor: 'text-[#FFB800] bg-[#FFB800]/10 border-[#FFB800]/30',
      dotColor: 'bg-[#FFB800]',
    },
  ];

  const pipelineSteps = [
    { step: '01', title: 'Schema Check', desc: 'Validates types, params & units' },
    { step: '02', title: 'Capability Check', desc: 'Verifies supported skills' },
    { step: '03', title: 'Constraint Check', desc: 'Enforces workspace & velocity bounds' },
    { step: '04', title: 'Safety Gate', desc: 'Hardware interlocks approve move' },
  ];

  return (
    <section id="architecture" className="relative text-[#F3F1EA] overflow-hidden bg-[#15120E] pb-16 sm:pb-32 md:pb-48 lg:pb-60">
      
      {/* Deep, Ultra-Smooth Atmospheric Eased Gradient Transition from #F3F1EA to Solid #15120E */}
      <div className="absolute top-0 inset-x-0 h-[320px] sm:h-[580px] md:h-[720px] pointer-events-none select-none overflow-hidden z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              #F3F1EA 0%,
              rgba(243, 241, 234, 0.99) 8%,
              rgba(241, 238, 230, 0.95) 16%,
              rgba(235, 229, 217, 0.88) 25%,
              rgba(223, 212, 194, 0.78) 35%,
              rgba(195, 178, 150, 0.65) 45%,
              rgba(150, 130, 98, 0.52) 55%,
              rgba(100, 82, 56, 0.65) 65%,
              rgba(60, 48, 32, 0.82) 75%,
              rgba(35, 28, 20, 0.94) 85%,
              rgba(24, 20, 15, 0.98) 92%,
              #15120E 100%
            )`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(120% 70% at 50% 50%, rgba(255, 184, 0, 0.22) 0%, rgba(200, 110, 10, 0.12) 45%, transparent 80%)',
          }}
        />

        <div className="absolute top-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-b from-[#F3F1EA] to-transparent" />
      </div>

      <div className="site-container relative z-10 px-1.5 sm:px-8 max-w-6xl mx-auto pt-24 sm:pt-44 md:pt-60 lg:pt-72">
        
        {/* Section Header: Expansive Negative Space & Monumental Typography */}
        <ScrollReveal scaleFrom={0.92} blurFrom={14} className="text-center max-w-3xl mx-auto mb-12 sm:mb-24 md:mb-36">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] sm:leading-[1.02] text-white">
            Guarded intelligence.
            <br />
            <span className="text-[#FFB800] font-light">Deterministic safety.</span>
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#D8D2C2]/80 font-light leading-relaxed max-w-2xl mx-auto">
            Safety lives outside the neural network. QRAEZEV proposes bounded actions; existing controllers authorize every move.
          </p>
        </ScrollReveal>

        {/* The Three Decoupled Planes: Spacious, Breathable Triptych */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-24 md:mb-40">
          {planes.map((plane, idx) => (
            <ScrollReveal key={plane.num} delay={idx * 120} scaleFrom={0.91} blurFrom={16}>
              <div
                className={`h-full rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-8 lg:p-12 border ${plane.borderAccent} bg-white/[0.02] backdrop-blur-xs flex flex-col justify-between transition-all hover:bg-white/[0.04]`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-white/10">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#FFB800]">
                      Plane {plane.num}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-white/40">
                      {plane.owner}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 flex items-center gap-2.5">
                    <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${plane.dotColor}`} />
                    {plane.name}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-[#D8D2C2]/80 font-light leading-relaxed mb-6 sm:mb-8">
                    {plane.role}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-white/10 text-[11px] sm:text-xs font-mono">
                  <span className="text-white/40 block mb-1">Authority:</span>
                  <span className="text-[#F3F1EA] font-semibold">{plane.authority}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* The Action Guard Pipeline: Open Kinetic Stream (No Nested Boxes) */}
        <div className="pt-10 sm:pt-16 md:pt-20 border-t border-white/10">
          
          <ScrollReveal scaleFrom={0.93} blurFrom={12} className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 md:mb-20">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#FFB800] block mb-2 sm:mb-3">
              Zero-Bypass Policy
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              The Action Guard Pipeline
            </h3>
          </ScrollReveal>

          {/* 4 Open Steps Connected by Arrows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
            {pipelineSteps.map((p, idx) => (
              <ScrollReveal key={p.step} delay={idx * 90} scaleFrom={0.92} blurFrom={14}>
                <div
                  className="h-full p-5 sm:p-7 rounded-2xl sm:rounded-[32px] bg-white/[0.03] border border-white/10 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-[10px] sm:text-xs font-mono text-[#FFB800] font-bold">Step {p.step}</span>
                      {idx < pipelineSteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-white/20 hidden lg:block" />
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">{p.title}</h4>
                    <p className="text-xs sm:text-sm text-white/60 font-light">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Fail-Safe Reassurance Strip */}
          <ScrollReveal delay={200} scaleFrom={0.94} blurFrom={12}>
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#FFB800]/[0.04] border border-[#FFB800]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs font-mono">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB800] shrink-0" />
                <span className="text-white/80 text-[11px] sm:text-xs">
                  <strong className="text-white">Fail-Safe Guarantee:</strong> If QRAEZEV stops, encounters uncertainty, or times out, the existing robot controller remains fully operational and halts or recovers safely.
                </span>
              </div>
              <span className="text-[#FFB800] font-bold shrink-0 text-[11px] sm:text-xs">Zero Safety Single Point of Failure</span>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
