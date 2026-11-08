import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function TeamSection() {
  const founders = [
    {
      name: 'Dinesh Polavarapu',
      role: 'Co-founder & CEO',
      domain: 'Physical Robotics & Product',
      focus: 'IIT Tirupati. Nation Builder winner (Guardian AI). Leads embedded control, robot integration, and product strategy.',
      education: 'IIT Tirupati · B.Tech Mechanical Engineering',
      image: '/assets/images/dinesh.png',
      email: 'dineshpolavarapu66@gmail.com',
      linkedin: 'https://www.linkedin.com/in/dinesh-polavarapu-134029306/',
    },
    {
      name: 'Mokshagna Anurag Kankati',
      role: 'Co-founder & CTO',
      domain: 'Cognitive Architecture & Systems',
      focus: 'MVGR College. 3+ years in robotics and UAVs (NITK, CubeSat, Zebu, Daloft). Leads cognitive architecture and memory runtime.',
      education: 'MVGR College · B.Tech Electronics & Communication',
      image: '/assets/images/mokshagna.jpg',
      email: 'kankati.mokshagnaanurag@gmail.com',
      linkedin: 'https://www.linkedin.com/in/mokshagnaanurag/',
    },
  ];

  return (
    <section id="team" className="relative bg-[#F3F1EA] text-[#15120E] py-16 sm:py-32 md:py-40 lg:py-48 overflow-hidden">
      
      <div className="site-container relative z-10 px-1.5 sm:px-8 max-w-6xl mx-auto">

        {/* Section Header: Expansive Negative Space & High-Impact Typography */}
        <ScrollReveal scaleFrom={0.92} blurFrom={14} className="max-w-3xl mb-12 sm:mb-20 md:mb-32">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] sm:leading-[1.05] text-[#15120E]">
            Two builders.
            <br />
            <span className="text-[#8A8275] font-light">The mind and the machine.</span>
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-base md:text-lg text-[#554E44] max-w-xl font-light leading-relaxed">
            Connecting physical robot engineering with persistent cognitive memory.
          </p>
        </ScrollReveal>

        {/* Founders Editorial Diptych (Side-by-Side with Immense Breathing Room) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          {founders.map((f, idx) => (
            <ScrollReveal key={f.name} delay={idx * 150} scaleFrom={0.91} blurFrom={16}>
              <div className="group flex flex-col justify-between h-full">
                
                {/* Portrait Image Frame */}
                <div>
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] max-w-sm sm:max-w-none mx-auto w-full rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#E8E2D5] border border-[#D8D2C2] shadow-sm">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover object-center grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Subtle Corner Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#15120E]/80 backdrop-blur-md text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium">
                      {f.role}
                    </div>
                  </div>

                  {/* Founder Credentials & Focus */}
                  <div className="mt-6 sm:mt-8">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#15120E] tracking-tight">
                        {f.name}
                      </h3>
                    </div>

                    <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#D46215] mt-1 sm:mt-1.5 mb-2 sm:mb-3">
                      {f.domain}
                    </div>

                    <p className="text-xs sm:text-sm text-[#554E44] leading-relaxed font-light mb-3 sm:mb-4 max-w-md">
                      {f.focus}
                    </p>

                    <div className="text-[11px] sm:text-xs font-mono text-[#8A8275] pb-4 sm:pb-6 border-b border-[#D8D2C2]">
                      {f.education}
                    </div>
                  </div>
                </div>

                {/* Minimal Social & Contact Links */}
                <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-5 text-xs font-mono">
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#15120E] hover:text-[#D46215] font-semibold transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={`mailto:${f.email}`}
                    className="inline-flex items-center gap-1.5 text-[#554E44] hover:text-[#15120E] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Email</span>
                  </a>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
