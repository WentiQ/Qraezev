import { useState } from 'react';
import { Scale, CheckCircle2, FlaskConical, Target, BarChart2, ShieldCheck } from 'lucide-react';

export function ValidationSection() {
  const [selectedTask, setSelectedTask] = useState<'peg' | 'cable' | 'sorter'>('peg');

  const benchmarkTasks = {
    peg: {
      name: 'Precision Peg-in-Hole Insertion',
      variation: '±4mm horizontal positional shift, 0.5° angular tilt, variable friction',
      baselineFailure: '80% repeated jam rate (fails 8 out of 10 times without human reset)',
      qraezevTarget: '50% reduction in failed trials (adapts lateral offset by Trial 2)',
      dieFormula: 'DIE = P(success | experience) - P(success | baseline) = +0.50 target',
      primarySensor: 'Wrist-mounted F/T + eye-in-hand RGB-D',
    },
    cable: {
      name: 'Flexible Harness Routing',
      variation: 'Non-rigid deformation, spring-back tension, variable clasp grip',
      baselineFailure: 'High slip rate; unable to predict elastic counter-torque',
      qraezevTarget: 'Recalls tension compensation angle from past deformation episodes',
      dieFormula: 'DIE = +0.42 recovery improvement across unmodeled flex variations',
      primarySensor: 'Joint effort telemetry + tactile array',
    },
    sorter: {
      name: 'Irregular Surface Bin Sorting',
      variation: 'Reflective packaging, random orientations, overlap occlusion',
      baselineFailure: 'Repeated suction failure on wrinkled foil surfaces',
      qraezevTarget: 'Recalls alternative grasp angles proven on identical SKU reflections',
      dieFormula: 'DIE = +0.55 first-pass pickup yield after initial slip episode',
      primarySensor: 'Overhead 3D point-cloud + vacuum differential gauge',
    },
  };

  const principles = [
    {
      num: '01',
      title: 'Interface Before Intelligence',
      desc: 'Canonical state, action schemas, and safety contracts are defined and frozen before integrating complex cognitive models.',
    },
    {
      num: '02',
      title: 'Simulation Before Physical Deployment',
      desc: 'Every memory hypothesis must demonstrate repeatable decision gains in high-throughput deterministic simulation before touching real hardware.',
    },
    {
      num: '03',
      title: 'Measurement Before Claims',
      desc: 'We never claim a system is "learning" merely because it archives data. Learning requires statistically proven decision improvement over a matched baseline.',
    },
    {
      num: '04',
      title: 'Memory Before Scale',
      desc: 'Our initial research wedge focuses on experience structuring, retrieval precision, and consolidation—not training ever-larger brute-force models.',
    },
    {
      num: '05',
      title: 'Safety Outside the Model',
      desc: 'The safety envelope is deterministic and independent. A hallucinating or delayed cognitive model can never violate physical machine limits.',
    },
    {
      num: '06',
      title: 'Embodiment Agnosticism',
      desc: 'The cognitive core remains completely isolated from robot-specific kinematics. Integrating a new arm requires an adapter, not a rewrite.',
    },
  ];

  return (
    <section id="validation" className="py-24 md:py-32 border-t border-[#D8D2C2]/70 relative">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>05 · Empirical Rigor</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>Scientific Principles & Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Hypothesis first.
            <br />
            Measured against a no-memory baseline.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            QRAEZEV does not rely on marketing claims or cherry-picked robotics demonstrations. We measure every innovation against an identical no-memory control system under strictly matched physical and computational conditions.
          </p>
        </div>

        {/* 6 Research Principles Grid with Alternating Tilts and Organic Radii */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {principles.map((item, idx) => {
            const tilts = ['-rotate-[0.5deg]', 'rotate-[0.6deg]', '-rotate-[0.4deg]', 'rotate-[0.4deg]', '-rotate-[0.6deg]', 'rotate-[0.5deg]'];
            const radii = [
              'rounded-[14px_4px_16px_5px]',
              'rounded-[5px_15px_6px_14px]',
              'rounded-[12px_5px_15px_4px]',
              'rounded-[6px_14px_5px_16px]',
              'rounded-[15px_6px_14px_5px]',
              'rounded-[4px_16px_5px_14px]',
            ];
            return (
              <div 
                key={item.num} 
                className={`bg-white border-1.5 border-[#15120E]/35 ${radii[idx]} ${tilts[idx]} hover:rotate-0 p-7 flex flex-col justify-between shadow-[2px_3px_0px_0px_rgba(21,18,14,0.08)] transition-all`}
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#8A8275] block mb-2">
                    Principle {item.num}
                  </span>
                  <h3 className="text-base font-bold text-[#15120E] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#554E44] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Core PMF Experiment: Controlled Comparison Box */}
        <div className="bg-[#FAF8F3] border border-[#D8D2C2] rounded-md p-8 sm:p-10 mb-20 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E8DFC8] gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8275]">
                Core Scientific Evaluation Framework
              </span>
              <h3 className="text-xl font-bold text-[#15120E]">
                The Controlled Comparison Experiment
              </h3>
            </div>
            <div className="px-3 py-1.5 bg-white border-1.5 border-[#15120E] rounded-[4px_8px_3px_7px] font-mono text-xs font-bold text-[#15120E] shadow-[2px_2px_0px_0px_#FFB800] -rotate-1">
              DIE = P(success | experience) − P(success | no experience)
            </div>
          </div>

          {/* Side by Side Experimental Setup with Asymmetric Inclinations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            
            {/* Left: Control Baseline */}
            <div className="bg-white border-1.5 border-[#15120E]/30 rounded-[14px_5px_16px_6px] p-7 relative shadow-[3px_3px_0px_0px_rgba(21,18,14,0.06)] -rotate-[0.4deg] hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F3F1EA]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6358]">
                  Control: Identical Robot Without QRAEZEV
                </span>
                <span className="text-[11px] font-mono text-[#8A8275] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E8DFC8]">Baseline</span>
              </div>
              <ul className="space-y-2 text-xs text-[#554E44]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  Same mechanical arm, sensors, and lighting environment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  Same compute budget and underlying perception pipeline
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  No persistent operational memory between trials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  Repeated encounters with identical variance cause repeated jams
                </li>
              </ul>
            </div>

            {/* Right: Treatment Group */}
            <div className="bg-white border-2 border-[#15120E] rounded-[6px_16px_5px_15px] p-7 relative shadow-[4px_4px_0px_0px_#FFB800] rotate-[0.5deg] hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F3F1EA]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#15120E]">
                  Treatment: Identical Robot With QRAEZEV
                </span>
                <span className="text-[11px] font-mono text-[#15120E] bg-[#FFB800] px-2 py-0.5 rounded-[3px_5px_2px_4px]">
                  Memory-Enabled
                </span>
              </div>
              <ul className="space-y-2 text-xs text-[#554E44]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                  Same mechanical arm, sensors, and lighting environment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                  Active episodic memory retrieval and causal attribution
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                  Adapts task parameters (offset, speed, angle) after first failure
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                  Proven reduction in human operator intervention frequency
                </li>
              </ul>
            </div>

          </div>

          {/* Interactive Benchmark Tasks Inspector */}
          <div className="border border-[#E8DFC8] bg-white rounded-md p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
              <span className="text-xs font-bold text-[#15120E] uppercase tracking-wider">
                Select Benchmark Task Scenario:
              </span>
              <div className="flex flex-wrap gap-2">
                {(['peg', 'cable', 'sorter'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTask(key)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                      selectedTask === key
                        ? 'bg-[#15120E] text-white shadow-2xs'
                        : 'bg-[#FAF8F3] text-[#6B6358] border border-[#E8DFC8] hover:text-[#15120E]'
                    }`}
                  >
                    {benchmarkTasks[key].name.split(' ')[0]} {benchmarkTasks[key].name.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-5 border-t border-[#F3F1EA] text-xs">
              <div>
                <span className="text-[11px] font-mono text-[#8A8275] block uppercase">Task Description</span>
                <p className="font-bold text-[#15120E] mt-0.5">{benchmarkTasks[selectedTask].name}</p>
                <p className="text-[#554E44] mt-1">{benchmarkTasks[selectedTask].variation}</p>
                <p className="text-[11px] text-[#8A8275] mt-2">Sensors: {benchmarkTasks[selectedTask].primarySensor}</p>
              </div>

              <div className="bg-[#FAF8F3] p-4 rounded border border-[#E8DFC8] space-y-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#A63232] font-bold">No-Memory Baseline:</span>
                  <p className="text-[#554E44] text-[11px]">{benchmarkTasks[selectedTask].baselineFailure}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#15120E] font-bold">QRAEZEV Target Metric:</span>
                  <p className="text-[#15120E] font-semibold text-[11px]">{benchmarkTasks[selectedTask].qraezevTarget}</p>
                </div>
                <div className="pt-2 border-t border-[#E8DFC8] font-mono text-[11px] text-[#15120E]">
                  {benchmarkTasks[selectedTask].dieFormula}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E8DFC8] text-[11px] text-[#8A8275] italic">
              Note: Initial targets represent research hypotheses to be experimentally proven in simulation and physical test cells. QRAEZEV does not publish invented or unverified laboratory outcomes.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
