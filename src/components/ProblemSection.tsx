import { ScrollReveal } from './ScrollReveal';

export function ProblemSection() {
  const realityBeats = [
    {
      num: '01',
      tag: 'Memory Deficit',
      metric: '0 Cycles',
      title: 'Day 1,000 is still Day 1',
      desc: 'Conventional robots retain zero operational memory. A 4 mm part variance causes the exact same mechanical fault on Day 1,000 as on Day 1.',
      sub: 'Status Quo: Stateless Controllers',
      subColor: 'text-[#E06D2D]',
      stats: [
        { label: 'Control Loop', value: 'Stateless Repeat' },
        { label: 'Unrecovered Variance', value: 'Line Halts' },
        { label: 'Retained Experience', value: '0 Cycles' },
      ],
    },
    {
      num: '02',
      tag: 'Economic Drain',
      metric: '50%+',
      title: 'Integration & Downtime Burden',
      desc: 'Integration and programming cost 4–5× the robot itself. When parts drift, machines freeze and require manual fixes.',
      sub: 'Industry Burden: 4–5× Robot Cost',
      subColor: 'text-[#E06D2D]',
      stats: [
        { label: 'Integration Share', value: '>50% Lifetime Cost' },
        { label: 'Cell Cost Multiplier', value: '4–5× Hardware' },
        { label: 'Reconfiguration', value: '1–4 Weeks' },
      ],
    },
    {
      num: '03',
      tag: 'Scale Bottleneck',
      metric: '600K+',
      title: 'Zero Learning After Deployment',
      desc: 'Over 600,000 robots are installed yearly. Seeing is solved with cameras, but every machine starts blank and learns nothing from failure.',
      sub: 'Root Cause: No Experience Layer',
      subColor: 'text-[#FFA066]',
      stats: [
        { label: 'Global Deployments', value: '600K+ / Year' },
        { label: 'Cross-Cell Sharing', value: 'Isolated Silos' },
        { label: 'Autonomy Ceiling', value: 'Rigid Routines' },
      ],
    },
  ];

  return (
    <section id="problem" className="relative bg-[#F3F1EA] text-[#15120E] py-16 sm:py-32 md:py-48 lg:py-60 overflow-hidden">
      
      {/* 1. Section Header: Centered */}
      <div className="site-container relative z-10 px-4 sm:px-8 max-w-5xl mx-auto">
        <ScrollReveal scaleFrom={0.92} blurFrom={14} className="text-center max-w-3xl mx-auto mb-12 sm:mb-24 md:mb-36">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] sm:leading-[1.02] text-[#15120E]">
            Robots start
            <br />
            from zero.
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#554E44] font-light leading-relaxed max-w-2xl mx-auto">
            Industrial robots repeat fixed routines. Without persistent memory, every minor variance halts the line.
          </p>
        </ScrollReveal>
      </div>

      {/* 2. 3 Blocks: First stretched to leftmost screen edge, 3rd stretched to rightmost screen edge */}
      <div className="w-full relative z-10 space-y-6 sm:space-y-16 md:space-y-24 mb-16 sm:mb-32 md:mb-52">
        {realityBeats.map((beat, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === realityBeats.length - 1;

          // Full-length horizontal stretching across viewport
          // On mobile, stretch cards maximally to both left and right edges
          // Block 1 starts at x = 0 (left screen edge)
          // Block 3 ends at x = 100vw (right screen edge)
          // Block 2 is centered with matching grand width
          const wrapperClass = isFirst
            ? 'w-full flex justify-start'
            : isLast
            ? 'w-full flex justify-end'
            : 'w-full flex justify-center px-1 sm:px-6';

          const cardClass = isFirst
            ? 'w-[calc(100vw-6px)] sm:w-[92vw] lg:w-[88vw] xl:w-[85vw] 2xl:w-[82vw] max-w-[1700px] rounded-r-2xl sm:rounded-r-[36px] md:rounded-r-[48px] rounded-l-none border-l-0 pl-4 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-32 pr-4 sm:pr-12 md:pr-16 py-8 sm:py-14 md:py-18 lg:py-20'
            : isLast
            ? 'w-[calc(100vw-6px)] sm:w-[92vw] lg:w-[88vw] xl:w-[85vw] 2xl:w-[82vw] max-w-[1700px] rounded-l-2xl sm:rounded-l-[36px] md:rounded-l-[48px] rounded-r-none border-r-0 pr-4 sm:pr-12 md:pr-20 lg:pr-28 xl:pr-32 pl-4 sm:pl-12 md:pl-16 py-8 sm:py-14 md:py-18 lg:py-20'
            : 'w-[calc(100vw-8px)] sm:w-[92vw] lg:w-[88vw] xl:w-[85vw] 2xl:w-[82vw] max-w-[1700px] rounded-2xl sm:rounded-[36px] md:rounded-[48px] px-4 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-14 md:py-18 lg:py-20';

          return (
            <ScrollReveal key={beat.num} delay={idx * 120} scaleFrom={0.91} blurFrom={16} className="w-full">
              <div className={wrapperClass}>
                <div
                  className={`relative overflow-hidden border border-[#2E2822] shadow-2xl transition-all group ${cardClass}`}
                  style={{
                    background: 'radial-gradient(130% 90% at 50% 110%, rgba(255, 184, 0, 0.22) 0%, rgba(35, 26, 16, 0.92) 55%, #12100D 100%)',
                    backgroundColor: '#12100D',
                  }}
                >
                  {/* Ambient Soft Glow on Hover */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-[240px] bg-[#FFB800]/15 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#FFB800]/25 transition-all duration-700" />

                  {/* Header Row: Title & Metric */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-10 pb-6 sm:pb-10 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-[#FFA066] uppercase tracking-wider">
                          Reality {beat.num}
                        </span>
                        <span className="text-white/20">/</span>
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/50">
                          {beat.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        {beat.title}
                      </h3>
                    </div>

                    {/* Giant High-Impact Number */}
                    <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-[#FFA066] font-mono shrink-0 leading-none">
                      {beat.metric}
                    </div>
                  </div>

                  {/* Description & Subtitle */}
                  <div className="relative z-10 pt-6 sm:pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
                    <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-[#D8D2C2]/85 font-light leading-relaxed">
                      {beat.desc}
                    </p>
                    <span className={`text-xs sm:text-sm font-mono font-bold uppercase tracking-wider shrink-0 ${beat.subColor}`}>
                      {beat.sub}
                    </span>
                  </div>

                  {/* Operational Stats Strip */}
                  <div className="relative z-10 mt-6 sm:mt-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {beat.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3">
                        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/40">
                          {stat.label}
                        </div>
                        <div className="text-xs sm:text-sm font-mono font-semibold text-white/90 mt-1">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* 3. Ultra-Spacious, Low-Text Failure Loop vs Memory Loop Comparison */}
      <div className="site-container relative z-10 px-1.5 sm:px-8 max-w-5xl mx-auto">
        <div>
          <ScrollReveal scaleFrom={0.92} blurFrom={14} className="text-center max-w-3xl mx-auto mb-10 sm:mb-20 md:mb-28">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#D46215] block mb-2 sm:mb-4">
              The Divergence
            </span>
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#15120E] tracking-tight leading-tight">
              Failure Loop vs. Memory Flywheel
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-14">
            
            {/* Card A: Stateless Failure Loop (Clean, Spacious, Minimal) */}
            <ScrollReveal delay={100} scaleFrom={0.91} blurFrom={16}>
              <div
                className="h-full rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-10 lg:p-14 border border-[#2E241E] shadow-xl flex flex-col justify-between"
                style={{
                  backgroundColor: '#110F0E',
                  backgroundImage: 'radial-gradient(120% 80% at 50% 120%, rgba(220, 80, 80, 0.12) 0%, rgba(20, 16, 15, 0.95) 60%, #110F0E 100%)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-white/10">
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#E06D6D]">
                      Without Memory
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-white/40">
                      Stateless Controller
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug mb-6 sm:mb-12">
                    Every failure stops the line.
                  </h4>

                  {/* 3 Ultra-Clean Steps */}
                  <div className="space-y-4 sm:space-y-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-xs font-mono font-bold text-[#E06D6D] mt-0.5 shrink-0">01</span>
                      <div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-white">Part sits 4 mm off-center</div>
                        <div className="text-[11px] sm:text-xs text-white/40 mt-0.5 font-light">Controller pushes straight and jams.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-xs font-mono font-bold text-[#E06D6D] mt-0.5 shrink-0">02</span>
                      <div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-white">Line halts</div>
                        <div className="text-[11px] sm:text-xs text-white/40 mt-0.5 font-light">Technician manually clears the cell.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-xs font-mono font-bold text-[#E06D6D] mt-0.5 shrink-0">03</span>
                      <div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-white">Repeats next shift</div>
                        <div className="text-[11px] sm:text-xs text-white/40 mt-0.5 font-light">Zero memory kept; exact failure repeats.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-14 pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-white/40">Status Quo:</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#E06D6D]">Recurring Line Downtime</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card B: QRAEZEV Memory Flywheel (Glowing Amber, Ultra-Spacious) */}
            <ScrollReveal delay={220} scaleFrom={0.91} blurFrom={16}>
              <div
                className="h-full relative rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-10 lg:p-14 border border-[#FFB800]/40 shadow-2xl flex flex-col justify-between overflow-hidden group"
                style={{
                  backgroundColor: '#141210',
                  backgroundImage: 'radial-gradient(130% 85% at 50% 115%, rgba(255, 184, 0, 0.32) 0%, rgba(210, 105, 30, 0.22) 40%, rgba(25, 20, 16, 0.95) 75%, #141210 100%)',
                }}
              >
                {/* Warm Ambient Internal Light Glow */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-[240px] bg-[#FFB800]/20 blur-[90px] rounded-full pointer-events-none group-hover:bg-[#FFB800]/30 transition-all duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-[#FFB800]/20">
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FFA066]">
                      With QRAEZEV
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-[#FFB800] bg-[#FFB800]/10 px-2.5 py-0.5 rounded-full border border-[#FFB800]/30">
                      Adaptive Loop
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug mb-6 sm:mb-12">
                    Every failure builds memory.
                  </h4>

                  {/* 3 Ultra-Clean Steps */}
                  <div className="space-y-4 sm:space-y-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-xs font-mono font-bold text-[#FFA066] mt-0.5 shrink-0">01</span>
                      <div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-white">Detects variance</div>
                        <div className="text-[11px] sm:text-xs text-[#D8D2C2]/60 mt-0.5 font-light">Perceives 4 mm offset and resistance.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-xs font-mono font-bold text-[#FFA066] mt-0.5 shrink-0">02</span>
                      <div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-white">Recalls prior fix</div>
                        <div className="text-[11px] sm:text-xs text-[#D8D2C2]/60 mt-0.5 font-light">Past push jammed; offsets 4 mm first.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-xs font-mono font-bold text-[#FFA066] mt-0.5 shrink-0">03</span>
                      <div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-white">Adapts and finishes</div>
                        <div className="text-[11px] sm:text-xs text-[#D8D2C2]/60 mt-0.5 font-light">Completes task; records successful move.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-8 sm:mt-14 pt-4 sm:pt-6 border-t border-[#FFB800]/20 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-[#D8D2C2]/60">Target:</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#FFB800]">50% Fewer Failed Trials</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
}
