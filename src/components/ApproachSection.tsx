export function ApproachSection() {
  const cognitiveLoopSteps = [
    {
      num: '01',
      title: 'Observe',
      desc: 'Samples robot joint state, torque, vision (RGB-D), and environmental context via the adapter layer.',
      tag: 'State Ingestion',
    },
    {
      num: '02',
      title: 'Build Context',
      desc: 'Normalizes sensor coordinates, verifies timestamp freshness, and tracks task-level uncertainty.',
      tag: 'Canonical Frame',
    },
    {
      num: '03',
      title: 'Recall Memory',
      desc: 'Queries persistent experience indices for similar past tasks, physical geometries, and prior failure modes.',
      tag: 'Experience Retrieval',
    },
    {
      num: '04',
      title: 'Reason & Plan',
      desc: 'Generates candidate strategies, ranks alternatives against retrieved outcomes, and verifies safety envelopes.',
      tag: 'Cognitive Planning',
    },
    {
      num: '05',
      title: 'Act via Adapter',
      desc: 'Transmits bounded task/skill-level commands to the existing robot controller without bypassing safety PLCs.',
      tag: 'Guarded Execution',
    },
    {
      num: '06',
      title: 'Evaluate Outcome',
      desc: 'Quantifies success, failure characteristics, contact resistance, and execution latency against expectations.',
      tag: 'Outcome Attribution',
    },
    {
      num: '07',
      title: 'Consolidate & Evolve',
      desc: 'Encodes the new trial into persistent episodic storage, strengthens winning patterns, and decays stale traces.',
      tag: 'Continual Learning',
    },
  ];

  const memoryLifecycleStages = [
    {
      title: 'Encode',
      desc: 'Extracts salient state, action parameters, physical outcome, and causal attribution rather than storing raw video feeds.',
    },
    {
      title: 'Retrieve',
      desc: 'Scores multi-dimensional similarity across task geometry, grasp dynamics, and failure signatures within milliseconds.',
    },
    {
      title: 'Rank',
      desc: 'Evaluates candidate memories based on outcome reliability, recency, recurrence frequency, and transferability.',
    },
    {
      title: 'Consolidate',
      desc: 'Merges repeated episodic encounters into compact generalized operational policies and adaptive parameters.',
    },
    {
      title: 'Forget',
      desc: 'Selectively prunes or compresses outdated, contradictory, or low-utility memory traces to maintain bounded computation.',
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-32 border-t border-[#D8D2C2]/70 relative">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>02 · The Cognitive Layer</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>How QRAEZEV Operates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Observe. Remember. Reason. Act. Learn.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            QRAEZEV does not replace the robot&apos;s physical controller. It introduces a persistent cognitive loop above it—evaluating every trial, forming structured memories, and converting operational experience into measurably better future decisions.
          </p>
        </div>

        {/* The 7-Step Cognitive Cycle Diagram */}
        <div className="bg-[#FAF8F3] border border-[#D8D2C2] rounded-md p-8 sm:p-10 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E8DFC8] gap-2 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8275]">
                Continuous Runtime Loop
              </span>
              <h3 className="text-xl font-bold text-[#15120E]">
                The Forward Cognitive Path
              </h3>
            </div>
            <span className="text-xs text-[#6B6358] font-mono">
              Observe → Context → Remember → Reason → Act → Evaluate → Learn
            </span>
          </div>

          {/* Stepped Loop Cards with Organic Asymmetric Radii & Subtle Alternating Tilts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cognitiveLoopSteps.slice(0, 4).map((step, idx) => {
              const tilts = ['-rotate-0.5', 'rotate-0.5', '-rotate-[0.3deg]', 'rotate-[0.6deg]'];
              const radii = [
                'rounded-[14px_4px_16px_5px]',
                'rounded-[5px_15px_6px_14px]',
                'rounded-[12px_6px_15px_4px]',
                'rounded-[6px_14px_4px_16px]',
              ];
              return (
                <div 
                  key={step.num} 
                  className={`bg-white border-1.5 border-[#15120E]/30 ${radii[idx % 4]} ${tilts[idx % 4]} hover:rotate-0 p-6 relative flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(21,18,14,0.08)] transition-all`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#FFB800] bg-[#15120E] px-2 py-0.5 rounded-[3px_5px_2px_4px]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#8A8275] bg-[#FAF8F3] px-1.5 py-0.5 rounded border border-[#E8DFC8]">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#15120E]">{step.title}</h4>
                    <p className="text-xs text-[#554E44] mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {cognitiveLoopSteps.slice(4).map((step, idx) => {
              const tilts = ['rotate-[0.4deg]', '-rotate-[0.5deg]', 'rotate-[0.3deg]'];
              const radii = [
                'rounded-[7px_16px_5px_14px]',
                'rounded-[15px_5px_14px_6px]',
                'rounded-[6px_14px_5px_16px]',
              ];
              return (
                <div 
                  key={step.num} 
                  className={`bg-white border-1.5 border-[#15120E]/30 ${radii[idx % 3]} ${tilts[idx % 3]} hover:rotate-0 p-6 relative flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(21,18,14,0.08)] transition-all`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#15120E] bg-[#FFB800] px-2 py-0.5 rounded-[3px_5px_2px_4px]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#8A8275] bg-[#FAF8F3] px-1.5 py-0.5 rounded border border-[#E8DFC8]">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#15120E]">{step.title}</h4>
                    <p className="text-xs text-[#554E44] mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8DFC8] text-xs text-[#6B6358] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="font-medium text-[#15120E]">
              Crucial Principle: Storing more data alone is not learning.
            </span>
            <span>
              Memory is an active computational process: scored, consolidated, and bound to physical consequences.
            </span>
          </div>
        </div>

        {/* Memory Lifecycle */}
        <div className="mb-20">
          
          <div className="relative">
            <div 
              className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[16px_5px_18px_6px] -rotate-1 translate-x-1.5 translate-y-1.5 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative bg-white border-1.5 border-[#15120E]/40 rounded-[14px_6px_16px_5px] p-7 sm:p-9 rotate-0.5 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F3F1EA]">
                <h3 className="text-lg font-bold text-[#15120E]">
                  The Memory Lifecycle
                </h3>
                <span className="text-xs font-mono text-[#8A8275] bg-[#FAF8F3] px-2 py-0.5 rounded-[4px_2px_5px_2px] border border-[#E8DFC8]">Active Management</span>
              </div>
              <p className="text-xs text-[#554E44] mb-6 leading-relaxed">
                Robots generate vast streams of high-bandwidth sensor feeds. Indiscriminate logging floods storage and slows retrieval. QRAEZEV manages memory as a selective lifecycle:
              </p>

              <div className="space-y-4">
                {memoryLifecycleStages.map((stage, idx) => {
                  const itemCorners = [
                    'rounded-[8px_3px_9px_4px]',
                    'rounded-[4px_8px_3px_7px]',
                    'rounded-[7px_4px_8px_3px]',
                    'rounded-[3px_7px_4px_8px]',
                    'rounded-[6px_3px_7px_4px]',
                  ];
                  return (
                    <div key={stage.title} className={`p-4 bg-[#FAF8F3] border border-[#E8DFC8] ${itemCorners[idx % 5]} shadow-2xs`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#15120E] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                          Stage {idx + 1}: {stage.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#554E44] leading-relaxed">{stage.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 p-3 bg-[#FFF8E7] border border-[#FFD875] rounded-[6px_3px_7px_4px] text-xs text-[#6B6358]">
                <strong className="text-[#15120E]">Selective Forgetting:</strong> Just as biological nervous systems prune insignificant synapses, QRAEZEV bounds memory footprint by consolidating repeated experiences into compact rules.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
