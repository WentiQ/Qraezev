import { Cpu, Terminal, ShieldCheck, HardDrive, WifiOff, RefreshCw, Box, Check, ArrowRight } from 'lucide-react';

interface ProductDirectionProps {
  onOpenContact: (mode?: string) => void;
}

export function ProductDirection({ onOpenContact }: ProductDirectionProps) {
  const comparisonItems = [
    { dimension: 'Core Cognition', software: 'Identical cognitive architecture', embedded: 'Identical cognitive architecture' },
    { dimension: 'Deployment Host', software: 'Existing robot industrial PC, workstation, or edge box', embedded: 'Dedicated onboard compute module inside robot chassis' },
    { dimension: 'External Connection', software: 'Permitted local network or direct IPC bus', embedded: 'Self-contained; zero external network required' },
    { dimension: 'Cloud Dependency', software: 'None for real-time cognitive loop (optional analytics)', embedded: 'Zero; 100% offline-first execution' },
    { dimension: 'Robot Adapter', software: 'Standardized Adapter SDK', embedded: 'Standardized Adapter SDK over CAN/Ethernet/USB' },
    { dimension: 'Persistent Memory', software: 'Local NVMe / database storage', embedded: 'Protected transactional non-volatile storage' },
    { dimension: 'Current Status', software: 'Primary R&D wedge & simulation validation', embedded: 'Workload profiling & prototype architecture' },
  ];

  return (
    <section id="products" className="py-24 md:py-32 border-t border-[#D8D2C2]/70 relative">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mb-20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A8275] mb-3">
            <span>03 · Product Direction</span>
            <span aria-hidden="true" className="text-[#BAAF96]">·</span>
            <span>One Brain · Two Embodiments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#15120E] tracking-tight leading-tight text-balance">
            Software runtime today.
            <br />
            Dedicated onboard hardware tomorrow.
          </h2>
          <p className="mt-4 text-lg text-[#443E37] leading-relaxed">
            The same cognitive architecture evolves through two distinct deployment forms. We first prove the brain in software using existing industrial PCs and simulation, then engineer dedicated onboard embedded hardware around measured real-world workloads.
          </p>
        </div>

        {/* The Two Product Cards with Asymmetric Tilts & Offset Sketch Layers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          
          {/* Product A: QRAEZEV Software */}
          <div className="relative">
            <div 
              className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[18px_6px_16px_8px] -rotate-1 translate-x-1 translate-y-2 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative bg-[#FAF8F3] border-1.5 border-[#15120E] rounded-[16px_5px_15px_6px] p-8 sm:p-10 flex flex-col justify-between shadow-[3px_3px_0px_0px_#15120E] -rotate-[0.6deg] hover:rotate-0 transition-transform h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A8275] bg-white px-2 py-0.5 rounded-[4px_2px_5px_2px] border border-[#E8DFC8]">
                    Product A · Near-Term Wedge
                  </span>
                  <span className="text-xs font-semibold text-[#15120E] bg-[#FFB800] px-2 py-0.5 rounded-[3px_5px_2px_4px]">
                    Software-Only Runtime
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#15120E] mb-2">
                  QRAEZEV Software
                </h3>
                <p className="text-sm text-[#443E37] leading-relaxed mb-6">
                  A deployable cognitive runtime operating above a robot&apos;s existing control stack. Integrates with existing industrial PCs, research workstations, or edge boxes via a clean adapter layer.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#E8DFC8]">
                  <div className="flex items-start gap-3 text-xs text-[#554E44]">
                    <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span><strong>Zero hardware replacement:</strong> Runs alongside existing robot controllers without altering warranty or physical actuation loops.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#554E44]">
                    <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span><strong>Standardized Adapter SDK:</strong> Decouples robot-specific kinematics (ABB, FANUC, UR, ROS 2) from core cognitive reasoning.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#554E44]">
                    <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span><strong>Deterministic Simulation First:</strong> Validates decision improvements across thousands of synthetic trials before touching expensive physical hardware.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#554E44]">
                    <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span><strong>Bounded Task Interface:</strong> Issues discrete, capability-based commands (e.g., <code className="bg-white px-1 py-0.5 rounded font-mono text-[11px]">MOVE_TO</code>, <code className="bg-white px-1 py-0.5 rounded font-mono text-[11px]">GRASP</code>, <code className="bg-white px-1 py-0.5 rounded font-mono text-[11px]">RECOVER</code>).</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8DFC8] flex items-center justify-between">
                <span className="text-xs text-[#8A8275]">Deployment: Robot PC / Edge Box / Sim</span>
                <button
                  onClick={() => onOpenContact('software')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#15120E] hover:text-[#B27F00] transition-colors"
                >
                  <span>Pilot Software</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product B: QRAEZEV Embedded */}
          <div className="relative">
            <div 
              className="absolute inset-0 bg-[#E8DFC8] border border-[#D8D2C2] rounded-[6px_18px_8px_16px] rotate-1 translate-x-1 translate-y-2 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative bg-[#FAF8F3] border-1.5 border-[#15120E] rounded-[5px_16px_6px_15px] p-8 sm:p-10 flex flex-col justify-between shadow-[3px_3px_0px_0px_#15120E] rotate-[0.7deg] hover:rotate-0 transition-transform h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A8275] bg-white px-2 py-0.5 rounded-[4px_2px_5px_2px] border border-[#E8DFC8]">
                    Product B · Long-Term Physical Form
                  </span>
                  <span className="text-xs font-semibold text-[#15120E] bg-stone-200 px-2 py-0.5 rounded-[3px_5px_2px_4px]">
                    Onboard Module
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#15120E] mb-2">
                  QRAEZEV Embedded
                </h3>
                <p className="text-sm text-[#443E37] leading-relaxed mb-6">
                  The onboard physical embodiment of the cognitive runtime. A self-contained module with dedicated compute, transactional persistent storage, hardware security, and industrial I/O.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#E8DFC8]">
                  <div className="flex items-start gap-3 text-xs text-[#554E44]">
                    <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span><strong>100% Offline-First Operation:</strong> Zero cloud dependency for the real-time cognitive loop; operates reliably in air-gapped industrial cleanrooms.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#554E44]">
                    <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span><strong>Transactional Persistent Storage:</strong> Memory traces survive power cutoffs, sudden brownouts, and unexpected machine reboots.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#554E44]">
                    <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span><strong>Workload-Profiled Co-Design:</strong> Hardware engineered around actual measured CPU, NPU, memory bandwidth, and thermal margins.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#554E44]">
                    <Check className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span><strong>Industrial Trust & Security:</strong> Secure boot, signed firmware updates, role-based authorization, and tamper-evident logs.</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8DFC8] flex items-center justify-between">
                <span className="text-xs text-[#8A8275]">Deployment: Internal Robot Chassis Module</span>
                <button
                  onClick={() => onOpenContact('embedded')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#15120E] hover:text-[#B27F00] transition-colors"
                >
                  <span>Hardware Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Architecture Comparison Table */}
        <div className="bg-white border border-[#D8D2C2] rounded-md p-7 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[#E8DFC8] gap-2 mb-4">
            <div>
              <h3 className="text-base font-bold text-[#15120E]">
                Architectural Alignment Matrix
              </h3>
              <p className="text-xs text-[#6B6358]">Comparing QRAEZEV Software and QRAEZEV Embedded implementation details</p>
            </div>
            <span className="text-xs font-mono text-[#8A8275]">Specification Version 1.0</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#E8DFC8] text-[#8A8275]">
                  <th className="py-2.5 font-medium">Dimension</th>
                  <th className="py-2.5 font-medium text-[#15120E]">QRAEZEV Software</th>
                  <th className="py-2.5 font-medium text-[#15120E]">QRAEZEV Embedded</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F1EA]">
                {comparisonItems.map((item) => (
                  <tr key={item.dimension} className="hover:bg-[#FAF8F3]/60 transition-colors">
                    <td className="py-4 font-semibold text-[#15120E] pr-4">{item.dimension}</td>
                    <td className="py-4 text-[#554E44] pr-4">{item.software}</td>
                    <td className="py-4 text-[#554E44]">{item.embedded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 p-3.5 bg-[#FAF8F3] border border-[#E8DFC8] rounded text-xs text-[#6B6358] flex items-center justify-between flex-wrap gap-2">
            <span><strong>Development Rule:</strong> Do not design custom hardware before profiling the software workload.</span>
            <span className="font-mono text-[#15120E]">Software → Profiling → Reference Board → Prototype → Production</span>
          </div>
        </div>

      </div>
    </section>
  );
}
