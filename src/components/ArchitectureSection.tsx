import { useState } from 'react';
import { Shield, ShieldAlert, Cpu, ArrowDown, Check, Layers, Sliders, Lock } from 'lucide-react';

export function ArchitectureSection() {
  const [selectedPlane, setSelectedPlane] = useState<'cognitive' | 'control' | 'safety'>('cognitive');

  const planes = {
    cognitive: {
      name: 'Cognitive Plane',
      owner: 'QRAEZEV Runtime',
      responsibilities: 'Context fusion, episodic experience retrieval, reasoning over candidate strategies, task-level planning, outcome evaluation, and memory consolidation.',
      timing: 'Task-dependent / Asynchronous (50ms–500ms explicit budget)',
      safetyAuthority: 'Non-authoritative. Proposes bounded actions; cannot force physical execution.',
      color: '#FFB800',
    },
    control: {
      name: 'Control Plane',
      owner: 'Existing Robot Controller',
      responsibilities: 'High-rate closed-loop joint servoing, inverse kinematics, trajectory interpolation, motor current drives, and deterministic physical execution.',
      timing: 'High-rate deterministic (100Hz–1000Hz hard real-time)',
      safetyAuthority: 'Executes approved actions while monitoring physical position, velocity, and torque limits.',
      color: '#15120E',
    },
    safety: {
      name: 'Safety Plane',
      owner: 'Independent Safety Gateway / PLC',
      responsibilities: 'Emergency stop circuit, workspace boundary enforcement, collaborative speed & separation monitoring (ISO 10218 / TS 15066), collision overrides.',
      timing: 'Immediate hard real-time (<5ms hardware latching)',
      safetyAuthority: 'Supreme physical authority. Overrides all cognitive plans instantaneously upon violation.',
      color: '#C53030',
    },
  };

  const actionGuardPipeline = [
    { step: '1. A_requested', desc: 'QRAEZEV outputs candidate skill command (e.g. INSERT)' },
    { step: '2. Schema Validation', desc: 'Validates typing, mandatory parameters, and coordinate frame sanity' },
    { step: '3. Capability Check', desc: 'Verifies robot adapter registers support for the requested action' },
    { step: '4. Constraint Check', desc: 'Checks velocity, acceleration, workspace bounding box, and force limits' },
    { step: '5. Safety Authorization', desc: 'Safety gateway grants physical execution token' },
    { step: '6. A_executed', desc: 'Existing controller issues servo drive currents' },
  ];

  return (
    <section id="architecture" className="py-24 md:py-32 border-t border-[#D8D2C2]/70 relative">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>04 · System Architecture</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>Safety Outside The Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Guarded physical intelligence.
            <br />
            Deterministic safety boundary.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            QRAEZEV is fundamentally designed not to be a servo controller or emergency-stop replacement. It operates above the physical control stack, proposing bounded skills through a strict safety gateway that can reject or override any cognitive plan.
          </p>
        </div>

        {/* Canonical Architecture Block Diagram */}
        <div className="bg-[#FAF8F3] border border-[#D8D2C2] rounded-md p-8 sm:p-10 mb-20 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-[#E8DFC8] gap-3 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8275]">
                Canonical End-to-End Block Diagram
              </span>
              <h3 className="text-xl font-bold text-[#15120E]">
                Integration Above the Physical Control Stack
              </h3>
            </div>
            <span className="text-xs text-[#6B6358] font-mono">
              Sensors → Context → QRAEZEV → Safety Gateway → Controller → Actuators
            </span>
          </div>

          {/* Graphical Flow Representation */}
          <div className="space-y-8">
            
            {/* Top: Inputs & Sensors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white border border-[#E8DFC8] rounded flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8275]">External Perception</span>
                  <p className="text-xs font-bold text-[#15120E]">RGB-D Vision, LiDAR, Tactile, Audio</p>
                </div>
                <span className="text-xs font-mono text-[#8A8275]">~30Hz</span>
              </div>
              <div className="p-4 bg-white border border-[#E8DFC8] rounded flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8275]">Internal Robot State</span>
                  <p className="text-xs font-bold text-[#15120E]">Joint angles, torque, TCP pose, fault registers</p>
                </div>
                <span className="text-xs font-mono text-[#8A8275]">~100Hz–500Hz</span>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center text-[#8A8275]">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Core Box: QRAEZEV Cognitive Layer with Offset Sketch Border & Slight Tilt */}
            <div className="p-6 bg-white border-2 border-[#15120E] rounded-[16px_6px_15px_7px] shadow-[4px_4px_0px_0px_#FFB800] relative -rotate-[0.3deg] hover:rotate-0 transition-transform">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-[#E8DFC8]">
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFB800] ring-2 ring-[#15120E]" />
                  <h4 className="text-base font-extrabold text-[#15120E]">
                    QRAEZEV Cognitive Layer (Runtime Core)
                  </h4>
                </div>
                <span className="text-xs font-mono font-medium text-[#15120E] bg-[#FFF8E7] px-2.5 py-0.5 rounded-[4px_2px_5px_2px] border border-[#FFD875] -rotate-1">
                  Cognitive Plane · Embodiment Agnostic
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-4 bg-[#FAF8F3] border border-[#E8DFC8] rounded-[10px_4px_9px_3px] shadow-2xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8A8275]">Module 1</span>
                  <p className="text-xs font-bold text-[#15120E]">Context Construction</p>
                  <p className="text-[11px] text-[#554E44] mt-1">Normalizes frames, tracks data freshness & uncertainty</p>
                </div>
                <div className="p-4 bg-[#FAF8F3] border border-[#E8DFC8] rounded-[4px_10px_3px_9px] shadow-2xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8A8275]">Module 2</span>
                  <p className="text-xs font-bold text-[#15120E]">Experience Memory</p>
                  <p className="text-[11px] text-[#554E44] mt-1">Outcome-linked retrieval, scoring, & consolidation</p>
                </div>
                <div className="p-4 bg-[#FAF8F3] border border-[#E8DFC8] rounded-[9px_3px_10px_4px] shadow-2xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8A8275]">Module 3</span>
                  <p className="text-xs font-bold text-[#15120E]">Reasoning & Planning</p>
                  <p className="text-[11px] text-[#554E44] mt-1">Evaluates candidates against retrieved failure causes</p>
                </div>
                <div className="p-4 bg-[#FAF8F3] border border-[#E8DFC8] rounded-[3px_9px_4px_10px] shadow-2xs">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#8A8275]">Module 4</span>
                  <p className="text-xs font-bold text-[#15120E]">Skill / Action Manager</p>
                  <p className="text-[11px] text-[#554E44] mt-1">Generates bounded task-level actions with constraints</p>
                </div>
              </div>
            </div>

            {/* Downward Arrow */}
            <div className="flex justify-center text-[#8A8275]">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Safety Gateway & Robot Controller Section with Authored Angle */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
              
              {/* Safety Gateway with distinct protective angle */}
              <div className="lg:col-span-5 p-5 bg-[#FAF8F3] border-1.5 border-[#C53030] rounded-[14px_4px_16px_5px] shadow-[3px_3px_0px_0px_rgba(197,48,48,0.25)] rotate-[0.6deg] hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4 text-[#C53030]" />
                  <span className="text-xs font-bold uppercase text-[#C53030]">Safety Gateway (Hard Interlock)</span>
                </div>
                <p className="text-xs text-[#554E44] leading-relaxed">
                  Hardware-isolated constraint verification. Automatically denies commands violating velocity, acceleration, torque, or envelope bounds.
                </p>
              </div>

              {/* Adapter & Controller with counter tilt */}
              <div className="lg:col-span-7 p-5 bg-white border-1.5 border-[#15120E]/40 rounded-[5px_15px_6px_14px] shadow-[3px_3px_0px_0px_rgba(21,18,14,0.08)] -rotate-[0.5deg] hover:rotate-0 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#15120E]">Robot Adapter SDK → Existing Controller</span>
                  <span className="text-[10px] font-mono text-[#8A8275] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#E8DFC8]">1kHz Closed-Loop</span>
                </div>
                <p className="text-xs text-[#554E44] leading-relaxed">
                  Translates authorized QRAEZEV actions into manufacturer-specific commands (URScript, KUKA KRL, RAPID, ROS 2) directly driving physical actuators.
                </p>
              </div>

            </div>

            {/* Outcome Feedback Return Loop */}
            <div className="p-4 bg-[#FAF8F3] border border-[#E8DFC8] rounded text-center text-xs text-[#6B6358] flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-semibold text-[#15120E] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFB800]" />
                Outcome Feedback Return Loop:
              </span>
              <span>Physical outcome (success, slip, jam, recovery) flows back to QRAEZEV for consolidation into persistent memory.</span>
            </div>

          </div>
        </div>

        {/* Action Guard Pipeline & The Three Logical Data Planes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: The Action Guard Pipeline */}
          <div className="lg:col-span-6 bg-white border border-[#D8D2C2] rounded-md p-7 sm:p-9">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F3F1EA]">
              <h3 className="text-base font-bold text-[#15120E]">
                The Action Guard Pipeline
              </h3>
              <span className="text-xs font-mono text-[#8A8275]">Zero-Bypass Policy</span>
            </div>
            <p className="text-xs text-[#554E44] mb-5 leading-relaxed">
              Every action proposed by QRAEZEV must pass through an explicit validation sequence before actuation signals are generated:
            </p>

            <div className="space-y-4">
              {actionGuardPipeline.map((guard) => (
                <div key={guard.step} className="p-3 bg-[#FAF8F3] border border-[#E8DFC8] rounded flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#15120E]">{guard.step}</span>
                    <p className="text-[11px] text-[#554E44] mt-0.5">{guard.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3 bg-[#FDF2F2] border border-[#F5C2C2] rounded text-xs text-[#991B1B]">
              <strong>Engineering Guarantee:</strong> If QRAEZEV experiences a timeout, internal exception, or memory stall, the existing robot controller halts gracefully or defaults to deterministic behavior.
            </div>
          </div>

          {/* Right: The Three Logical Data Planes Interactive Inspector */}
          <div className="lg:col-span-6 bg-white border border-[#D8D2C2] rounded-md p-7 sm:p-9">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F3F1EA]">
              <h3 className="text-base font-bold text-[#15120E]">
                The Three Logical Data Planes
              </h3>
              <span className="text-xs font-mono text-[#8A8275]">Decoupled Authority</span>
            </div>

            {/* Plane Switcher */}
            <div className="grid grid-cols-3 gap-2 mb-6 p-1 bg-[#FAF8F3] border border-[#E8DFC8] rounded text-xs">
              {(['cognitive', 'control', 'safety'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPlane(key)}
                  className={`py-2 px-2 text-center font-bold rounded transition-colors capitalize ${
                    selectedPlane === key
                      ? 'bg-[#15120E] text-white shadow-2xs'
                      : 'text-[#6B6358] hover:text-[#15120E]'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            {/* Active Plane Detail */}
            <div className="p-5 bg-[#FAF8F3] border border-[#E8DFC8] rounded-md space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-3">
                <span className="text-sm font-extrabold text-[#15120E]">
                  {planes[selectedPlane].name}
                </span>
                <span className="text-xs font-mono font-medium text-[#15120E] bg-white px-2 py-0.5 rounded border border-[#E8DFC8]">
                  Owner: {planes[selectedPlane].owner}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8A8275] block mb-1">Responsibilities</span>
                <p className="text-xs text-[#443E37] leading-relaxed">
                  {planes[selectedPlane].responsibilities}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8A8275] block mb-1">Timing & Latency Class</span>
                <p className="text-xs font-mono text-[#15120E] font-medium">
                  {planes[selectedPlane].timing}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8A8275] block mb-1">Physical Safety Authority</span>
                <p className="text-xs text-[#554E44] leading-relaxed">
                  {planes[selectedPlane].safetyAuthority}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E8DFC8] text-[11px] text-[#8A8275]">
              Clean separation ensures certification compliance and eliminates single points of failure.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
