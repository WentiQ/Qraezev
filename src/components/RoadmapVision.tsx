import { Check, ArrowRight, Compass, Sparkles } from 'lucide-react';

export function RoadmapVision() {
  const gates = [
    {
      gate: 'Gate 1',
      title: 'Canonical Architecture & Schemas',
      focus: 'Freeze state schema, skill interface, adapter SDK contract, and persistent experience representation.',
      deliverable: 'Stable API and safety contracts',
      status: 'Current Focus',
    },
    {
      gate: 'Gate 2',
      title: 'Deterministic Simulation Loop',
      focus: 'Build simulated robot adapter and run controlled benchmark tasks (insertion, sorting, recovery).',
      deliverable: 'Ablation against no-memory baseline',
      status: 'Development',
    },
    {
      gate: 'Gate 3',
      title: 'Physical Testbed MVP',
      focus: 'Deploy runtime onto a physical 6-DOF manipulator with RGB-D and torque sensing under strict safety guards.',
      deliverable: 'Real-world decision traces',
      status: 'Planned',
    },
    {
      gate: 'Gate 4',
      title: 'Experience Proof',
      focus: 'Statistically demonstrate that memory produces measurable gains in success rate, recovery, and sample efficiency.',
      deliverable: 'Peer-verifiable empirical proof',
      status: 'Planned',
    },
    {
      gate: 'Gate 5',
      title: 'External Design Partners & Pilots',
      focus: 'Integrate with 1–3 research labs and robotics startups, validating commercial value on recurring failure modes.',
      deliverable: 'External deployment evidence',
      status: 'Planned',
    },
    {
      gate: 'Gate 6',
      title: 'Productization & Embedded Form',
      focus: 'Standardize Adapter SDK, deliver deployment tools, and transition software runtime into the onboard Embedded module.',
      deliverable: 'Production runtime & hardware prototypes',
      status: 'Future Gate',
    },
  ];

  const expansionProgression = [
    { stage: '1. Manipulation', desc: 'Variable pick, insertion, and sorting workcells' },
    { stage: '2. Mobile Robotics', desc: 'Autonomous indoor navigation with semantic spatial memory' },
    { stage: '3. Mobile Manipulation', desc: 'Coordinated mobile arms in dynamic warehouse environments' },
    { stage: '4. Humanoids', desc: 'General-purpose bi-manual manipulation across complex tools' },
    { stage: '5. Multi-Robot Fleets', desc: 'Federated synchronization of validated experience across fleets' },
  ];

  return (
    <section id="roadmap" className="py-24 md:py-32 border-t border-[#D8D2C2]/70 relative">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>06 · Research Direction</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>R&D Progression & North Star</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Disciplined milestones.
            <br />
            A lifelong cognitive architecture.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            We separate near-term engineering gates from long-term research ambition. Our near-term priority is proving that experience improves manipulation decisions. Our long-term mission is creating one evolving artificial brain that persists across many machine embodiments.
          </p>
        </div>

        {/* Staged Engineering Gates */}
        <div className="bg-[#FAF8F3] border border-[#D8D2C2] rounded-md p-8 sm:p-10 mb-20 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E8DFC8] gap-2 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8275]">
                Engineering Gates · Empirical Milestones
              </span>
              <h3 className="text-xl font-bold text-[#15120E]">
                The Validation Sequence
              </h3>
            </div>
            <span className="text-xs text-[#6B6358] italic">
              Gates are evidence thresholds, not guaranteed calendar deadlines.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gates.map((g, idx) => {
              const tilts = ['-rotate-[0.6deg]', 'rotate-[0.5deg]', '-rotate-[0.4deg]', 'rotate-[0.6deg]', '-rotate-[0.5deg]', 'rotate-[0.4deg]'];
              const radii = [
                'rounded-[14px_4px_16px_5px]',
                'rounded-[5px_15px_6px_14px]',
                'rounded-[12px_6px_15px_4px]',
                'rounded-[6px_14px_4px_16px]',
                'rounded-[15px_5px_14px_6px]',
                'rounded-[5px_16px_6px_15px]',
              ];
              return (
                <div 
                  key={g.gate} 
                  className={`bg-white border-1.5 border-[#15120E]/30 ${radii[idx]} ${tilts[idx]} hover:rotate-0 p-6 flex flex-col justify-between shadow-[2px_3px_0px_0px_rgba(21,18,14,0.08)] transition-all relative`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#15120E] bg-[#FFB800] px-2 py-0.5 rounded-[3px_5px_2px_4px]">
                        {g.gate}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#8A8275] bg-[#FAF8F3] px-1.5 py-0.5 rounded border border-[#E8DFC8]">
                        {g.status}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#15120E] mb-2">{g.title}</h4>
                    <p className="text-xs text-[#554E44] leading-relaxed mb-4">{g.focus}</p>
                  </div>
                  <div className="pt-3 border-t border-[#F3F1EA] text-[11px] text-[#6B6358]">
                    <strong className="text-[#15120E]">Deliverable:</strong> {g.deliverable}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8DFC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#6B6358]">
            <span className="font-semibold text-[#15120E]">Engineering Stance:</span>
            <span>Simulation first, followed by hardware-in-the-loop, then physical research cells, before industrial pilot lines.</span>
          </div>
        </div>

        {/* Long-Term Horizon with Authored Offset Sketch Frame */}
        <div className="relative">
          <div 
            className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[18px_6px_20px_8px] -rotate-1 translate-x-2 translate-y-2 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative bg-white border-2 border-[#15120E] rounded-[16px_7px_17px_6px] p-8 sm:p-12 shadow-[4px_4px_0px_0px_#15120E] rotate-[0.3deg] hover:rotate-0 transition-transform">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-[#E8DFC8] gap-4 mb-8">
              <div className="max-w-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFB800] bg-[#15120E] px-2.5 py-0.5 rounded-[4px_2px_5px_2px] -rotate-1 inline-block">
                  The Long-Term North Star
                </span>
                <h3 className="text-2xl font-extrabold text-[#15120E] mt-3">
                  Stable Cognition. Replaceable Embodiment.
                </h3>
                <p className="text-xs text-[#443E37] leading-relaxed mt-2">
                  Today, when robot hardware changes or reaches end-of-life, the software and learned behaviors are discarded and re-engineered. QRAEZEV&apos;s ultimate vision is one persistent cognitive architecture that survives changes in mechanical bodies, sensors, and actuators.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F3] border-1.5 border-[#15120E]/40 rounded-[10px_4px_9px_5px] text-right lg:text-left shrink-0 shadow-[2px_2px_0px_0px_#FFB800] -rotate-1">
                <div className="text-[11px] font-mono text-[#8A8275] uppercase">Long-Term Formula</div>
                <div className="text-sm font-extrabold text-[#15120E] mt-0.5">
                  Cognition + Memory + Compute + Embodiment
                </div>
                <div className="text-[11px] text-[#6B6358] mt-1">One evolving brain for many machines</div>
              </div>
            </div>

          {/* Sequential Expansion Diagram */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#8A8275] block">
              Architectural Expansion Sequence
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-4">
              {expansionProgression.map((item, index) => (
                <div key={item.stage} className="p-3.5 bg-[#FAF8F3] border border-[#E8DFC8] rounded flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#FFB800] block mb-1">
                      Phase {index + 1}
                    </span>
                    <h5 className="text-xs font-bold text-[#15120E]">{item.stage}</h5>
                    <p className="text-[11px] text-[#554E44] mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8DFC8] flex items-center justify-between flex-wrap gap-4 text-xs text-[#8A8275]">
            <p className="italic">
              &ldquo;A robot should not have to experience the same failure twice.&rdquo;
            </p>
            <span className="font-mono text-[#15120E] font-medium">QRAEZEV Architectural Thesis</span>
          </div>
        </div>
      </div>

    </div>
  </section>
);
}
