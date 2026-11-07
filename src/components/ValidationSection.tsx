import { ScrollReveal } from './ScrollReveal';

export function ValidationSection() {
  const principles = [
    {
      num: '01',
      title: 'Interface First',
      tag: 'Stage 0',
      desc: 'Freeze robot state and action schemas before introducing complex learning models.',
      metric: 'Stable Robot-Agnostic Core',
    },
    {
      num: '02',
      title: 'Simulation First',
      tag: 'Stage 1',
      desc: 'Prove repeatable performance gains in simulation before testing on physical robots.',
      metric: 'Deterministic Benchmarks',
    },
    {
      num: '03',
      title: 'Memory Over Scale',
      tag: 'Stage 2',
      desc: 'Improve decisions through structured experience and retrieval, not giant model size.',
      metric: 'Ablation Against Baseline',
    },
  ];

  return (
    <section id="validation" className="relative bg-[#F3F1EA] text-[#15120E] pb-16 sm:pb-32 md:pb-48 lg:pb-60 overflow-hidden">
      
      {/* 1. Deep Seamless Transition from previous solid dark #15120E into #F3F1EA */}
      <div
        className="w-full h-28 sm:h-56 md:h-72 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #15120E 0%, rgba(21, 18, 14, 0.88) 25%, rgba(243, 241, 234, 0.45) 80%, #F3F1EA 100%)',
        }}
      />

      <div className="site-container relative z-10 px-1.5 sm:px-8 max-w-6xl mx-auto pt-10 sm:pt-20 md:pt-28">
        
        {/* Section Header: Expansive Negative Space & Monumental Typography */}
        <ScrollReveal scaleFrom={0.92} blurFrom={14} className="text-center max-w-3xl mx-auto mb-12 sm:mb-24 md:mb-36">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.04] sm:leading-[1.02] text-[#15120E]">
            Measurement first.
            <br />
            <span className="text-[#8A8275] font-light">Proof second.</span>
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#554E44] font-light leading-relaxed max-w-2xl mx-auto">
            Storing data is not learning. Real learning requires measured improvement over an identical robot without memory.
          </p>
        </ScrollReveal>

        {/* The Controlled Memory Proof Benchmark Box (NO FORMULAS) */}
        <ScrollReveal delay={120} scaleFrom={0.91} blurFrom={16} className="max-w-4xl mx-auto mb-12 sm:mb-24 md:mb-44">
          <div
            className="rounded-2xl sm:rounded-[36px] md:rounded-[42px] p-4 sm:p-10 md:p-16 border border-[#2E241E] shadow-2xl relative overflow-hidden text-center"
            style={{
              backgroundColor: '#141210',
              backgroundImage: 'radial-gradient(130% 90% at 50% 115%, rgba(255, 184, 0, 0.28) 0%, rgba(210, 105, 30, 0.18) 45%, rgba(20, 16, 14, 0.95) 75%, #141210 100%)',
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FFA066] mb-5 sm:mb-8">
              <span>Controlled Empirical Benchmark</span>
            </div>

            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#FFA066] tracking-tight mb-4 sm:mb-6">
              50% Fewer Failed Trials
            </div>

            <div className="text-xs sm:text-base font-mono text-white/70 max-w-xl mx-auto mb-6 sm:mb-10 font-light">
              Testing identical robots on the same task: one with memory, one without. Target to be proven in simulation first.
            </div>

            <div className="pt-5 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono text-white/50 max-w-2xl mx-auto">
              <span>Baseline: Matched Robot &amp; Task</span>
              <span className="text-[#FFA066] font-bold">Goal: Faster Recovery</span>
              <span>Sequence: Simulation → Physical MVP</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Scientific Principles: Spacious, Open Triptych (No Hidden Tabs, Zero Congestion) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {principles.map((p, idx) => (
            <ScrollReveal key={p.num} delay={idx * 120} scaleFrom={0.92} blurFrom={14}>
              <div
                className="h-full p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[36px] md:rounded-[42px] bg-white border border-[#D8D2C2] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-[#E8DFC8]">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#D46215]">
                      Principle {p.num}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-[#8A8275]">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-[#15120E] tracking-tight mb-3 sm:mb-4">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-[#554E44] font-light leading-relaxed mb-6 sm:mb-8">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-[#E8DFC8] text-[11px] sm:text-xs font-mono text-[#8A8275]">
                  <span className="block mb-1 text-[#15120E] font-semibold">Standard:</span>
                  <span>{p.metric}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
