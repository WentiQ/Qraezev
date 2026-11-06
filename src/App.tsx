import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ApproachSection } from './components/ApproachSection';
import { ProductDirection } from './components/ProductDirection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ValidationSection } from './components/ValidationSection';
import { RoadmapVision } from './components/RoadmapVision';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [contactMode, setContactMode] = useState<string>('pilot');

  const handleOpenContact = (mode?: string) => {
    if (mode) setContactMode(mode);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F1EA] text-[#15120E] flex flex-col selection:bg-[#FFB800]/30 selection:text-[#15120E]">
      {/* Top Bar Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Single-Page Content Flow */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Section 2: The Problem */}
        <ProblemSection />

        {/* Section 3: The QRAEZEV Approach (Cognitive Loop & Memory Lifecycle) */}
        <ApproachSection />

        {/* Section 4: Product Direction (Software vs Embedded) */}
        <ProductDirection onOpenContact={handleOpenContact} />

        {/* Section 5: Architecture & The Deterministic Safety Boundary */}
        <ArchitectureSection />

        {/* Section 6: Research Principles & Controlled Comparison Baseline */}
        <ValidationSection />

        {/* Section 7: R&D Gates & The Lifelong Cognitive Architecture */}
        <RoadmapVision />

        {/* Section 8: The Builders */}
        <TeamSection />

        {/* Section 9: Pilot Inquiry & Collaboration */}
        <ContactSection initialMode={contactMode} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
