import { ScrollReveal } from './ScrollReveal';

export function RoadmapVision() {
  const gates = [
    {
      num: '01',
      title: 'Gate 1 · Architecture',
      status: 'Current Focus',
      statusColor: 'text-[#FFB800]',
      dotColor: 'bg-[#FFB800]',
      isCurrent: true,
      desc: 'Freezing canonical robot state, action contracts, adapter SDK, and memory schemas (Month 0–1).',
    },
    {
      num: '02',
      title: 'Gate 2 · Simulation',
      status: 'Next Milestone',
      statusColor: 'text-white/60',
      dotColor: 'bg-white/40',
      isCurrent: false,
      desc: 'Validating the cognitive loop and repeatable benchmarks against a no-memory baseline (Month 1–3).',
    },
    {
      num: '03',
      title: 'Gate 3 · Physical MVP',
      status: 'Planned',
      statusColor: 'text-white/40',
      dotColor: 'bg-white/20',
      isCurrent: false,
      desc: 'Testing adapter with a 6-DOF arm and RGB-D vision with full decision tracing (Month 3–6).',
    },
    {
      num: '04',
      title: 'Gate 4 · Experience Proof',
      status: 'Planned',
      statusColor: 'text-white/40',
      dotColor: 'bg-white/20',
      isCurrent: false,
      desc: 'Proving measured gains: higher task success, faster recovery, and greater sample efficiency (Month 6–9).',
    },
    {
      num: '05',
      title: 'Gate 5 · Technical Pilot',
      status: 'Planned',
      statusColor: 'text-white/40',
      dotColor: 'bg-white/20',
      isCurrent: false,
      desc: 'Deploying with 1–3 research and industrial partners on live production workcells (Month 9–15).',
    },
    {
      num: '06',
      title: 'Gate 6 · Productization',
      status: 'Future Gate',
      statusColor: 'text-white/40',
      dotColor: 'bg-white/20',
      isCurrent: false,
      desc: 'Releasing commercial runtime, developer SDK, and transitioning to onboard embedded modules.',
    },
  ];

  const horizon = [
    {
      phase: '01',
      era: 'Current Status Quo',
      headline: 'Stateless Automation',
      detail: 'When parts drift, robots freeze. When hardware retires, years of learned edge cases are discarded.',
    },
    {
      phase: '02',
      era: 'The QRAEZEV Layer',
      headline: 'Decoupled Experience',
      detail: 'Decouples operational memory from hardware so machines retain and compound their skills.',
    },
    {
      phase: '03',
      era: 'Long-Term Vision',
      headline: 'One Architecture, Many Embodiments',
      detail: 'A persistent cognitive runtime whose accumulated experience transfers across robot types.',
    },
  ];

  return (
    <section 
      id="roadmap" 
      className="w-full relative bg-[#0B0A09] text-[#F3F1EA] overflow-hidden rounded-2xl sm:rounded-[44px] md:rounded-[56px] border-y border-[#2E241D] shadow-2xl transition-all"
    >
      {/* Atmospheric Horizon Ambient Glow: Luminous Yellow/Gold */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1100px] h-[350px] rounded-full pointer-events-none blur-[160px] opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, #FFB800 0%, #D49B00 50%, transparent 80%)',
        }}
      />

      <div className="site-container relative z-10 px-1.5 sm:px-8 max-w-6xl mx-auto pt-16 sm:pt-28 md:pt-36 lg:pt-44">

        {/* Section Header: Expansive Negative Space & Monumental Typography */}
        <ScrollReveal scaleFrom={0.92} blurFrom={14} className="pb-12 sm:pb-24 md:pb-36 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] sm:leading-[1.02] text-white">
            Disciplined gates.
            <br />
            <span className="text-white/40 font-light">Eternal memory.</span>
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-white/50 max-w-2xl font-light leading-relaxed">
            Near-term empirical proof first. An immortal cognitive architecture second.
          </p>
        </ScrollReveal>

        {/* MOVEMENT 1: THE SIX ENGINEERING GATES (ZERO-CLICK, SPACIOUS, BREATHABLE) */}
        <div className="pb-16 sm:pb-32 md:pb-48 lg:pb-60">
          
          <ScrollReveal scaleFrom={0.94} blurFrom={10} className="flex items-center justify-between pb-4 sm:pb-8 mb-8 sm:mb-16 md:mb-24 border-b border-white/10">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/40">
              The Six Engineering Gates
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-[#FFB800] tracking-wider">
              Sequential Progression
            </span>
          </ScrollReveal>

          {/* 3-Column Effortless Grid with Immense Breathing Room & Exact Footer Corner Radius */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {gates.map((g, idx) => (
              <ScrollReveal key={g.num} delay={idx * 100} scaleFrom={0.92} blurFrom={14}>
                <div 
                  className={`h-full group relative rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-8 md:p-10 border transition-all duration-300 flex flex-col justify-between ${
                    g.isCurrent 
                      ? 'bg-white/[0.04] border-[#FFB800]/40 shadow-lg shadow-[#FFB800]/10' 
                      : 'bg-white/[0.015] border-white/10 hover:bg-white/[0.03] hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Top Bar with Gate Indicator and Status */}
                    <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-white/10">
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${g.dotColor} ${g.isCurrent ? 'animate-pulse' : ''}`} />
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-white/50">
                          Gate {g.num}
                        </span>
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-wider ${g.statusColor}`}>
                        {g.status}
                      </span>
                    </div>

                    {/* Title: Big, Crisp, Easy to Read */}
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
                      {g.title}
                    </h3>

                    {/* One-Liner Description: Instantly Scannable */}
                    <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed font-light mb-6 sm:mb-8">
                      {g.desc}
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-white/30">
                    <span>Milestone {g.num}</span>
                    <span className={g.isCurrent ? 'text-[#FFB800]' : ''}>
                      {g.isCurrent ? 'Active Workstream' : 'Sequential'}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* MOVEMENT 2: THE NORTH STAR MONOLITH (OPEN & EXPANSIVE) */}
        <div className="pb-16 sm:pb-32 md:pb-48 lg:pb-60 border-t border-white/10 pt-16 sm:pt-28 md:pt-44">
          
          <ScrollReveal scaleFrom={0.92} blurFrom={14} className="max-w-3xl mb-12 sm:mb-24 md:mb-36">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#FFB800] block mb-4 sm:mb-8">
              The North Star
            </span>
            <h3 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] sm:leading-[1.05]">
              Bodies are disposable.
              <br />
              <span className="font-extrabold text-[#FFB800]">Experience is forever.</span>
            </h3>
          </ScrollReveal>

          {/* 3 Pillars: Wide Open Space, Zero Clutter, Radius matching footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {horizon.map((h, idx) => (
              <ScrollReveal key={h.phase} delay={idx * 130} scaleFrom={0.91} blurFrom={16}>
                <div 
                  className="h-full rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-8 lg:p-12 bg-white/[0.02] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFB800]/80 mb-4 sm:mb-6">
                      Phase {h.phase} · {h.era}
                    </div>
                    <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
                      {h.headline}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-white/50 leading-relaxed font-light">
                      {h.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* Closing Single-Line Manifesto (Strict Bottom Boundary with Generous Spacing) */}
        <ScrollReveal delay={150} scaleFrom={0.94} blurFrom={10}>
          <div className="pb-12 sm:pb-24 md:pb-36 border-t border-white/10 pt-8 sm:pt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 text-xs text-white/40 font-mono">
            <span>&ldquo;A robot should become measurably better at future decisions because it remembers and learns from previous situations.&rdquo;</span>
            <span className="text-[#FFB800]">QRAEZEV Core Thesis</span>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}
