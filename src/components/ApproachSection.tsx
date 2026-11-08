import { ShieldCheck, Database } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function ApproachSection() {
  const loopStages = [
    {
      num: '01',
      phase: 'Observe',
      title: 'State Ingestion',
      desc: 'Consumes joint states, forces, and vision via robot-agnostic schemas.',
      cadence: 'Canonical Frame',
    },
    {
      num: '02',
      phase: 'Remember',
      title: 'Memory Retrieval',
      desc: 'Retrieves relevant past episodes, failure modes, and recoveries.',
      cadence: 'Low-Latency Index',
    },
    {
      num: '03',
      phase: 'Reason',
      title: 'Bounded Planning',
      desc: 'Evaluates candidate actions within strict physical safety limits.',
      cadence: 'Task / Skill Level',
    },
    {
      num: '04',
      phase: 'Learn',
      title: 'Consolidation',
      desc: 'Assesses outcomes and consolidates winning trials into memory.',
      cadence: 'Active Lifecycle',
    },
  ];

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#12100D] text-[#F3F1EA] pb-16 sm:pb-32 md:pb-48 lg:pb-60"
      style={{
        backgroundImage: 'radial-gradient(130% 70% at 50% 0%, rgba(255, 184, 0, 0.22) 0%, rgba(30, 24, 16, 0.95) 45%, #12100D 100%)',
      }}
    >
      {/* Custom Separation Line Transition with Exact Footer Corner Radius (R=42px) */}
      <div className="w-full relative z-20 -mt-[1px] pointer-events-none">
        <svg
          viewBox="0 0 1440 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[40px] sm:h-[72px] md:h-[84px] block"
        >
          <defs>
            <linearGradient id="sepLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE082" stopOpacity="0.4" />
              <stop offset="20%" stopColor="#FFB800" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FFC837" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#FFB800" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FFB800" stopOpacity="0.4" />
            </linearGradient>
            <filter id="sepLineGlowEffect" x="-10%" y="-30%" width="120%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Top Fill: Seamlessly matching the cream #F3F1EA background of ProblemSection above */}
          <path
            d="M 0,0 L 1440,0 L 1440,84 A 42 42 0 0 0 1398 42 L 42 42 A 42 42 0 0 1 0 0 Z"
            fill="#F3F1EA"
          />

          {/* Glowing Separation Line: Exact Footer Corner Radius (R=42px) */}
          <path
            d="M 0,0 A 42 42 0 0 0 42 42 L 1398 42 A 42 42 0 0 1 1440 84"
            fill="none"
            stroke="url(#sepLineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#sepLineGlowEffect)"
          />
        </svg>
      </div>

      <div className="site-container relative z-10 px-1.5 sm:px-8 max-w-6xl mx-auto">
        
        {/* Section Header: Expansive Negative Space & Monumental Typography */}
        <ScrollReveal scaleFrom={0.92} blurFrom={14} className="text-center max-w-3xl mx-auto pt-12 sm:pt-24 md:pt-32 pb-12 sm:pb-24 md:pb-36">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] sm:leading-[1.02] text-white">
            Observe. Remember.
            <br />
            <span className="text-[#FFB800] font-light">Reason. Act. Learn.</span>
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#D8D2C2]/80 font-light leading-relaxed max-w-2xl mx-auto">
            A persistent cognitive loop above the robot controller—turning operational experience into better decisions.
          </p>
        </ScrollReveal>

        {/* 4 Loop Stages: Upgraded with Big Translucent Numbering at Corner, Zero Symbols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-24 md:mb-40">
          {loopStages.map((stage, idx) => (
            <ScrollReveal key={stage.num} delay={idx * 100} scaleFrom={0.92} blurFrom={14}>
              <div className="relative h-full rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-8 md:p-10 border border-white/10 bg-white/[0.025] backdrop-blur-xs flex flex-col justify-between transition-all duration-500 hover:border-[#FFB800]/40 hover:bg-white/[0.045] group overflow-hidden">
                
                {/* Big Translucent Number in the Corner */}
                <span className="absolute top-4 right-5 sm:top-6 sm:right-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold font-mono text-white/[0.08] group-hover:text-[#FFB800]/25 transition-colors duration-500 select-none pointer-events-none leading-none tracking-tighter">
                  {stage.num}
                </span>

                <div className="relative z-10">
                  {/* Top Phase Tag */}
                  <div className="flex items-center gap-2 mb-6 sm:mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#FFB800] font-bold">
                      {stage.phase}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D8D2C2]/70 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                {/* Bottom Minimalist Cadence Label (Zero Symbols) */}
                <div className="relative z-10 pt-4 sm:pt-6 mt-6 sm:mt-10 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-white/40 group-hover:text-white/70 transition-colors">
                  <span>Cadence</span>
                  <span className="text-[#FFB800]/90 font-medium">{stage.cadence}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* The Two Architectural Pillars: Vast Breathing Room, Low Text, High Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">
          
          {/* Pillar 1: Selective Memory Consolidation */}
          <ScrollReveal delay={100} scaleFrom={0.91} blurFrom={16}>
            <div
              className="h-full rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-10 lg:p-14 border border-white/10 shadow-xl flex flex-col justify-between"
              style={{
                backgroundColor: '#15120E',
                backgroundImage: 'radial-gradient(120% 80% at 50% 120%, rgba(255, 184, 0, 0.15) 0%, rgba(25, 20, 16, 0.95) 60%, #15120E 100%)',
              }}
            >
              <div>
                <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-white/10">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FFB800] flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB800]" />
                    Active Memory
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-white/40">
                    Sub-ms Retrieval
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3 sm:mb-4">
                  Logging data is not learning.
                </h4>

                <p className="text-sm sm:text-base text-[#D8D2C2]/80 font-light leading-relaxed mb-6 sm:mb-8">
                  Sensor streams flood storage without building intelligence. QRAEZEV structures memory as an active process: encoding context, action, causality, and outcomes into compact, retrievable records.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono">
                <span className="text-white/40">Memory Structure:</span>
                <span className="text-[#FFB800] font-bold">Selective &amp; Bounded</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2: Deterministic Safety Bridge */}
          <ScrollReveal delay={220} scaleFrom={0.91} blurFrom={16}>
            <div
              className="h-full rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-10 lg:p-14 border border-white/10 shadow-xl flex flex-col justify-between"
              style={{
                backgroundColor: '#15120E',
                backgroundImage: 'radial-gradient(120% 80% at 50% 120%, rgba(255, 184, 0, 0.15) 0%, rgba(25, 20, 16, 0.95) 60%, #15120E 100%)',
              }}
            >
              <div>
                <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-white/10">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FFB800] flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFB800]" />
                    Safety Boundary
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-white/40">
                    Independent Authority
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3 sm:mb-4">
                  Above the controller.
                  <br />
                  Never replacing it.
                </h4>

                <p className="text-sm sm:text-base text-[#D8D2C2]/80 font-light leading-relaxed mb-6 sm:mb-8">
                  QRAEZEV never replaces servo controllers or safety systems. Hard limits, E-stops, and collision bounds stay in the robot stack. If uncertainty spikes, deterministic control continues uninterrupted.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono">
                <span className="text-white/40">Safety Authority:</span>
                <span className="text-[#FFB800] font-bold">Existing Controller Authoritative</span>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
