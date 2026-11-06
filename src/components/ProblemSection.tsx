import { AlertOctagon, RotateCw, Wrench, Clock, DollarSign, CheckCircle2 } from 'lucide-react';

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 relative">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>01 · The Operational Reality</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>The Memory Deficit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Robots start from zero. Every single time.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            Industrial and collaborative robots are master repeaters under rigid constraints. But when real-world variation occurs—a part arrives 3mm off-center, friction shifts, or a grasp slips—today&apos;s robots lack persistent operational memory. Every recurring failure requires human intervention and manual engineering diagnosis.
          </p>
        </div>

        {/* Visual Diagram: Day 1 vs Day 100 vs Day 1,000 */}
        <div className="bg-[#FAF8F3] border border-[#D8D2C2] rounded-md p-7 md:p-9 mb-12 shadow-2xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#E8DFC8] gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#8A8275]">
                Current Reality in Deployed Workcells
              </span>
              <h3 className="text-xl font-bold text-[#15120E] mt-0.5">
                The Recurring Miss Trap
              </h3>
            </div>
            <p className="text-xs text-[#6B6358] max-w-md">
              Without an experience layer, a robot executing 100,000 cycles on Day 1,000 possesses no more insight into past failure modes than it did on Day 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* Day 1 */}
            <div className="bg-white border-1.5 border-[#15120E]/40 rounded-[14px_4px_16px_5px] p-6 relative shadow-[2px_3px_0px_0px_rgba(21,18,14,0.1)] -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-[#15120E]">Day 1</span>
                <span className="text-[11px] font-mono text-[#8A8275] bg-[#FAF8F3] px-2 py-0.5 rounded-[4px_2px_5px_2px] border border-[#E8DFC8]">First Encounter</span>
              </div>
              <div className="h-16 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#FFB800] ring-4 ring-[#FFB800]/30 shadow-xs" />
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F1EA] text-center">
                <p className="text-xs font-semibold text-[#15120E]">1 failed attempt</p>
                <p className="text-[11px] text-[#6B6358] mt-0.5">Part shifted 4mm; gripper jams</p>
              </div>
            </div>

            {/* Day 100 */}
            <div className="bg-white border-1.5 border-[#15120E]/40 rounded-[5px_15px_6px_14px] p-6 relative shadow-[3px_3px_0px_0px_rgba(21,18,14,0.1)] rotate-0.5 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-[#15120E]">Day 100</span>
                <span className="text-[11px] font-mono text-[#8A8275] bg-[#FAF8F3] px-2 py-0.5 rounded-[3px_5px_2px_4px] border border-[#E8DFC8]">100 Days Later</span>
              </div>
              <div className="h-16 flex items-center justify-center">
                {/* Organically scattered gold dots suggesting repeated recorded physical strikes */}
                <div className="flex flex-wrap gap-1.5 max-w-[140px] justify-center items-center">
                  {[2.5, 3, 2.5, 3.2, 2.8, 3, 2.5, 3, 2.8].map((size, i) => (
                    <div
                      key={i}
                      style={{ width: `${size * 3.2}px`, height: `${size * 3.2}px` }}
                      className="rounded-full bg-[#FFB800] opacity-90"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F1EA] text-center">
                <p className="text-xs font-semibold text-[#15120E]">The same miss, again</p>
                <p className="text-[11px] text-[#6B6358] mt-0.5">Same orientation; line stopped</p>
              </div>
            </div>

            {/* Day 1,000 */}
            <div className="bg-white border-1.5 border-[#15120E]/40 rounded-[12px_6px_15px_4px] p-6 relative shadow-[2.5px_3.5px_0px_0px_rgba(21,18,14,0.1)] -rotate-0.5 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-[#15120E]">Day 1,000</span>
                <span className="text-[11px] font-mono text-[#8A8275] bg-[#FAF8F3] px-2 py-0.5 rounded-[4px_2px_5px_3px] border border-[#E8DFC8]">Years of Operation</span>
              </div>
              <div className="h-16 flex items-center justify-center">
                <div className="flex flex-wrap gap-1 max-w-[170px] justify-center items-center">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: `${7 + (i % 3)}px`,
                        height: `${7 + (i % 3)}px`,
                        transform: `translate(${(i % 4) - 2}px, ${(i % 3) - 1}px)`,
                      }}
                      className="rounded-full bg-[#FFB800]"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F3F1EA] text-center">
                <p className="text-xs font-semibold text-[#15120E]">Still the same miss</p>
                <p className="text-[11px] text-[#6B6358] mt-0.5">Zero operational memory retained</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8DFC8] flex items-center justify-between text-xs text-[#8A8275]">
            <span className="italic">Visual reference from QRAEZEV engineering brief. Each gold mark represents an unrecovered physical failure.</span>
            <span className="font-mono text-[#15120E] font-medium">Memory is absent; reprogramming is recurring.</span>
          </div>
        </div>

        {/* The Two Workflows: Legacy Reprogramming vs Experience-Informed with Asymmetric Angles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          
          {/* Workflow A: Current Status Quo */}
          <div className="bg-white border-1.5 border-[#15120E]/30 rounded-[14px_5px_16px_6px] p-7 sm:p-8 relative shadow-[3px_3px_0px_0px_rgba(21,18,14,0.06)] -rotate-[0.4deg] hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F3F1EA]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A63232] flex items-center gap-1.5">
                <AlertOctagon className="w-3.5 h-3.5" />
                Current Workflow · Status Quo
              </span>
              <span className="text-[11px] font-mono text-[#8A8275] bg-[#FAF8F3] px-2 py-0.5 rounded-[3px_5px_2px_4px] border border-[#E8DFC8]">High Overhead</span>
            </div>
            <p className="text-sm text-[#443E37] mb-6">
              When an unexpected failure occurs in production today, the burden falls on engineering intervention:
            </p>

            <div className="space-y-4 relative">
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[6px_3px_7px_3px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-stone-200 text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">1</div>
                <div><span className="font-semibold text-[#15120E]">Robot attempt fails</span> on environmental variance</div>
              </div>
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[4px_7px_3px_6px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-stone-200 text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">2</div>
                <div><span className="font-semibold text-[#15120E]">Line halts</span>; human operator intervenes to clear jam</div>
              </div>
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[7px_3px_6px_4px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-stone-200 text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">3</div>
                <div><span className="font-semibold text-[#15120E]">Automation engineer</span> diagnoses error logs manually</div>
              </div>
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[5px_6px_3px_7px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-stone-200 text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">4</div>
                <div><span className="font-semibold text-[#15120E]">Robot program rewritten</span> or policy fine-tuned offline</div>
              </div>
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[7px_3px_6px_4px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-stone-200 text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">5</div>
                <div><span className="font-semibold text-[#15120E]">Commissioning & retesting</span> before line reopens</div>
              </div>
            </div>

            <div className="mt-5 text-[11px] text-[#A63232] bg-[#FDF2F2] p-2 rounded-[4px_6px_3px_5px] border border-[#F5C2C2]">
              Result: Days to weeks of engineering overhead per new variation.
            </div>
          </div>

          {/* Workflow B: QRAEZEV Experience Loop */}
          <div className="bg-white border-2 border-[#15120E] rounded-[6px_16px_5px_15px] p-7 sm:p-8 relative shadow-[4px_4px_0px_0px_#FFB800] rotate-[0.5deg] hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F3F1EA]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#15120E] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB800]" />
                QRAEZEV Hypothesis · Experience Loop
              </span>
              <span className="text-[11px] font-semibold text-[#15120E] bg-[#FFB800] px-2 py-0.5 rounded-[3px_5px_2px_4px]">Autonomous</span>
            </div>
            <p className="text-sm text-[#443E37] mb-6">
              Persistent, outcome-linked memory allows the robot to adapt locally without rewriting control policies:
            </p>

            <div className="space-y-4 relative">
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[5px_4px_6px_3px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-[#FFB800] text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">1</div>
                <div><span className="font-semibold text-[#15120E]">Robot attempt encounters unexpected outcome</span></div>
              </div>
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[4px_6px_3px_5px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-[#FFB800] text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">2</div>
                <div><span className="font-semibold text-[#15120E]">QRAEZEV recalls relevant past episodes</span> & failure modes</div>
              </div>
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[6px_3px_5px_4px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-[#FFB800] text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">3</div>
                <div><span className="font-semibold text-[#15120E]">Reasons over bounded alternatives</span> (offset, approach velocity)</div>
              </div>
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[3px_6px_4px_5px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-[#FFB800] text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">4</div>
                <div><span className="font-semibold text-[#15120E]">Executes adapted action</span> via existing controller & safety guard</div>
              </div>
              <div className="flex items-center gap-3 text-xs p-2.5 rounded-[5px_3px_6px_4px] bg-[#FAF8F3] border border-[#E8DFC8]">
                <div className="w-6 h-6 rounded-full bg-[#FFB800] text-[#15120E] font-mono font-bold flex items-center justify-center shrink-0">5</div>
                <div><span className="font-semibold text-[#15120E]">Evaluates outcome & consolidates</span> memory for all future trials</div>
              </div>
            </div>

            <div className="mt-5 text-[11px] text-[#15120E] bg-[#FFF8E7] p-2 rounded-[4px_6px_3px_5px] border border-[#FFD875] font-medium">
              Target: Reduce repeated manipulation trial failures by up to 50% in simulation & controlled testbeds.
            </div>
          </div>

        </div>

        {/* Quantified Economics Strip (Verified from Source Deck Slide 3 & 5) */}
        <div className="border border-[#D8D2C2] bg-white rounded-md p-7 sm:p-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-5">
            Verified Industry Cost Factors · Source: Robotics Integration & Manufacturing Surveys
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-b md:border-b-0 md:border-r border-[#E8DFC8] pb-6 md:pb-0 md:pr-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#15120E] font-mono tabular-nums">
                50%+
              </div>
              <p className="mt-2 text-sm font-semibold text-[#15120E]">
                Integration & Reprogramming Share
              </p>
              <p className="mt-1 text-xs text-[#6B6358] leading-relaxed">
                More than half of a robot system&apos;s lifetime expenditure is software integration, reconfiguration, and debugging—not the physical arm.
              </p>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-[#E8DFC8] pb-6 md:pb-0 md:pr-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#15120E] font-mono tabular-nums">
                4–5×
              </div>
              <p className="mt-2 text-sm font-semibold text-[#15120E]">
                Total System Multiplier
              </p>
              <p className="mt-1 text-xs text-[#6B6358] leading-relaxed">
                A fully deployed robotic workcell typically costs 4 to 5 times the purchase price of the bare robotic arm itself due to setup overhead.
              </p>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#15120E] font-mono tabular-nums">
                73%
              </div>
              <p className="mt-2 text-sm font-semibold text-[#15120E]">
                Lengthy Commissioning Cycles
              </p>
              <p className="mt-1 text-xs text-[#6B6358] leading-relaxed">
                73% of surveyed manufacturers state that reprogramming a robot for minor product or fixture variants takes anywhere from a full week to a month.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
