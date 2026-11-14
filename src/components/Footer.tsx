import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

// 8x8 Bayer dithering matrix normalized to [0, 1]
const BAYER_8X8 = [
  [0 / 64, 32 / 64, 8 / 64, 40 / 64, 2 / 64, 34 / 64, 10 / 64, 42 / 64],
  [48 / 64, 16 / 64, 56 / 64, 24 / 64, 50 / 64, 18 / 64, 58 / 64, 26 / 64],
  [12 / 64, 44 / 64, 4 / 64, 36 / 64, 14 / 64, 46 / 64, 6 / 64, 38 / 64],
  [60 / 64, 28 / 64, 52 / 64, 20 / 64, 62 / 64, 30 / 64, 54 / 64, 22 / 64],
  [3 / 64, 35 / 64, 11 / 64, 43 / 64, 1 / 64, 33 / 64, 9 / 64, 41 / 64],
  [51 / 64, 19 / 64, 59 / 64, 27 / 64, 49 / 64, 17 / 64, 57 / 64, 25 / 64],
  [15 / 64, 47 / 64, 7 / 64, 39 / 64, 13 / 64, 45 / 64, 5 / 64, 37 / 64],
  [63 / 64, 31 / 64, 55 / 64, 23 / 64, 61 / 64, 29 / 64, 53 / 64, 21 / 64],
];

interface FloatingFragment {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  phase: number;
  direction: number; // -1 for drifting up into cream, +1 for drifting down into footer
}

/**
 * Integrated Fragmented Particle Wave:
 * Bidirectional density gradient: maximum yellow dot density right at the wave border,
 * decreasing smoothly away from the border in BOTH upward and downward directions.
 * Fluid continuous animation, seamless gradient background blending (#F3F1EA to #141312)
 * with zero clear border lines.
 */
function FooterFragmentedWave() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse interaction state
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let currentMouseX = -1000;
    let currentMouseY = -1000;
    let mouseActive = false;

    // Persistent floating fragment embers
    const fragments: FloatingFragment[] = [];
    const NUM_FRAGMENTS = 64;

    const initFragment = (f?: FloatingFragment): FloatingFragment => {
      const x = Math.random() * (width || 1000);
      const nx = width > 0 ? x / width : 0.5;
      const borderY = (height || 220) * (0.54 - 0.15 * Math.sin((nx - 0.76) * Math.PI * 1.8) - 0.07 * Math.sin((nx - 0.16) * Math.PI * 2.2));
      const spawnY = borderY + (Math.random() - 0.5) * 24;
      const direction = Math.random() > 0.45 ? -1 : 1; // 55% drift up, 45% drift down

      const maxLife = 90 + Math.random() * 120;
      return {
        x,
        y: Math.min((height || 220) - 10, Math.max(10, spawnY)),
        vx: (Math.random() - 0.5) * 0.35,
        vy: direction * (0.25 + Math.random() * 0.55),
        size: 0.85 + Math.random() * 1.25,
        life: 0,
        maxLife,
        color: Math.random() > 0.35 ? '#FFB800' : '#FFC837',
        phase: Math.random() * Math.PI * 2,
        direction,
      };
    };

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (fragments.length === 0 && width > 0) {
        for (let i = 0; i < NUM_FRAGMENTS; i++) {
          const frag = initFragment();
          frag.y += (Math.random() - 0.5) * (height * 0.4);
          frag.life = Math.random() * frag.maxLife;
          fragments.push(frag);
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);
    resize();

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    intersectionObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startTime = performance.now();

    const render = (now: number) => {
      animId = requestAnimationFrame(render);
      if (!isVisible || width === 0 || height === 0) return;

      const elapsed = (now - startTime) * 0.001;
      const t = prefersReducedMotion ? 0 : elapsed;

      // Smooth mouse lerping
      if (mouseActive) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.08;
        currentMouseY += (targetMouseY - currentMouseY) * 0.08;
      } else {
        currentMouseX += (-1000 - currentMouseX) * 0.05;
        currentMouseY += (-1000 - currentMouseY) * 0.05;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // 1. Smooth Background Gradient from #F3F1EA (top) to #141312 (bottom)
      // Completely eliminates any clear or hard cut-off line between page and footer
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0.0, '#F3F1EA');
      bgGrad.addColorStop(0.25, '#F3F1EA');
      bgGrad.addColorStop(0.48, '#DDD4C3');
      bgGrad.addColorStop(0.68, '#282119');
      bgGrad.addColorStop(0.86, '#141312');
      bgGrad.addColorStop(1.0, '#141312');

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const step = 4;
      const cols = Math.ceil(width / step);

      // 2. Precompute 1D continuous wave border horizon profile
      const borderHeights = new Float32Array(cols);
      const bgBorderHeights = new Float32Array(cols);

      for (let col = 0; col < cols; col++) {
        const gx = col * step;
        const nx = gx / width;

        // Traveling harmonic waves
        const peak1 = Math.sin((nx - 0.76) * Math.PI * 1.8 - t * 0.45) * 0.5 + 0.5;
        const peak2 = Math.sin((nx - 0.16) * Math.PI * 2.2 + t * 0.32) * 0.5 + 0.5;
        const ripple = Math.sin(nx * Math.PI * 5.6 - t * 0.7) * 0.5;
        const shimmer = Math.sin(nx * Math.PI * 9.5 + t * 1.2) * 0.3;

        // Wave center border elevation (centered around 52% of canvas height)
        const waveAmp = height * 0.32;
        const waveOffset =
          waveAmp *
          (0.6 * Math.pow(peak1, 2.0) -
            0.32 * Math.pow(peak2, 1.8) +
            0.1 * ripple +
            0.05 * shimmer);

        borderHeights[col] = height * 0.53 - waveOffset;

        // Secondary background ridge for depth
        const bgPeak1 = Math.sin((nx - 0.82) * Math.PI * 1.6 - t * 0.3) * 0.5 + 0.5;
        const bgPeak2 = Math.sin((nx - 0.24) * Math.PI * 2.4 + t * 0.24) * 0.5 + 0.5;
        bgBorderHeights[col] = height * 0.58 - (height * 0.28) * (0.6 * Math.pow(bgPeak1, 1.8) - 0.3 * Math.pow(bgPeak2, 1.6));
      }

      // Arrays for batched dot rendering
      ctx.fillStyle = '#FFB800';
      ctx.beginPath();

      const secondaryDots: Array<{ cx: number; cy: number; r: number }> = [];

      // Falloff sigmas: Gaussian bell curve around the undulating border
      const sigmaUp = height * 0.19; // falloff going up into the cream page
      const sigmaDown = height * 0.22; // falloff going down into the dark footer

      for (let gy = 0; gy < height; gy += step) {
        const rowIdx = Math.floor(gy / step) % 8;
        const cy = gy + step * 0.5;

        for (let col = 0; col < cols; col++) {
          const colIdx = col % 8;
          const bayerThreshold = BAYER_8X8[rowIdx][colIdx];
          const gx = col * step;
          const cx = gx + step * 0.5;

          // Interactive mouse swell
          let mousePerturb = 0;
          if (currentMouseX > -500) {
            const mDistX = (gx - currentMouseX) / 85;
            const mDistY = (gy - currentMouseY) / 60;
            const mDistSq = mDistX * mDistX + mDistY * mDistY;
            if (mDistSq < 16) {
              mousePerturb = -Math.exp(-mDistSq * 0.5) * (height * 0.18);
            }
          }

          const borderY = borderHeights[col] + mousePerturb;
          const dist = gy - borderY; // negative = up (in cream), positive = down (in footer)

          // Bidirectional density gradient:
          // Maximum density (0.92) right at the border (dist = 0),
          // decreasing smoothly away from the border in BOTH directions
          let density = 0;
          if (dist < 0) {
            // Decreasing upward away from border into cream
            const normDist = dist / sigmaUp;
            density = 0.92 * Math.exp(-normDist * normDist);
          } else {
            // Decreasing downward away from border into black footer
            const normDist = dist / sigmaDown;
            density = 0.92 * Math.exp(-normDist * normDist);
          }

          if (density > bayerThreshold) {
            // Dot radius scales with density:
            // Largest near the border (density close to 1), smallest at edges
            const r = 0.95 + density * 1.05;

            if (density > 0.6) {
              // Primary golden dot (#FFB800)
              ctx.moveTo(cx + r, cy);
              ctx.arc(cx, cy, r, 0, Math.PI * 2);
            } else {
              // Lighter warm gold/amber secondary dot (#FFC837)
              secondaryDots.push({ cx, cy, r });
            }
          } else {
            // Subtle secondary parallax layer
            const bgBorderY = bgBorderHeights[col] + mousePerturb * 0.6;
            const bgDist = gy - bgBorderY;
            const bgDensity = 0.55 * Math.exp(-(bgDist / (sigmaUp * 1.1)) * (bgDist / (sigmaUp * 1.1)));
            if (bgDensity > bayerThreshold) {
              secondaryDots.push({ cx, cy, r: 1.0 });
            }
          }
        }
      }

      // Draw primary golden dots
      ctx.fill();

      // Draw secondary warm amber dots
      if (secondaryDots.length > 0) {
        ctx.fillStyle = '#FFC837';
        ctx.beginPath();
        for (let i = 0; i < secondaryDots.length; i++) {
          const dot = secondaryDots[i];
          ctx.moveTo(dot.cx + dot.r, dot.cy);
          ctx.arc(dot.cx, dot.cy, dot.r, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      // 3. Floating Fragment Embers drifting in both directions away from the border
      if (!prefersReducedMotion && fragments.length > 0) {
        ctx.fillStyle = '#FFB800';
        ctx.beginPath();

        for (let i = 0; i < fragments.length; i++) {
          const f = fragments[i];
          f.life += 1;
          f.y += f.vy; // drifts up or down depending on direction
          f.x += f.vx + Math.sin(t * 1.7 + f.phase) * 0.35;

          const progress = f.life / f.maxLife;
          const currentAlpha = Math.max(0, (1 - progress) * 0.85);

          // Respawn near the border when expired or out of bounds
          if (f.life >= f.maxLife || f.y < 8 || f.y > height - 8 || f.x < 0 || f.x > width) {
            fragments[i] = initFragment(f);
            continue;
          }

          if (currentAlpha > 0.08) {
            ctx.moveTo(f.x + f.size, f.y);
            ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
          }
        }

        ctx.fill();
      }

      ctx.restore();
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden select-none h-44 sm:h-56 md:h-64 lg:h-72 pointer-events-none"
      style={{
        marginBottom: '-2px',
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}

export function Footer() {
  const [wordmarkInView, setWordmarkInView] = useState(false);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;

    // Check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setWordmarkInView(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWordmarkInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Problem', href: '#problem' },
    { label: 'Approach', href: '#approach' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact us', href: '#contact' },
  ];

  return (
    <footer
      className="w-full relative overflow-hidden bg-[#141312] transition-all"
    >
      {/* 
        FRAGMENTED PARTICLE CROWN:
        Bidirectional density gradient: maximum yellow dot density at the border,
        decreasing smoothly in both upward (into cream) and downward (into dark footer) directions.
        Zero clear border lines, pure continuous organic blend.
      */}
      <FooterFragmentedWave />

      {/* Main Dark Footer Body */}
      <div
        className="w-full relative overflow-hidden -mt-[1px]"
        style={{
          backgroundColor: '#141312',
          backgroundImage: `
            radial-gradient(ellipse 95% 75% at 50% 108%, rgba(255, 184, 0, 0.45) 0%, rgba(212, 140, 0, 0.28) 26%, rgba(120, 75, 0, 0.18) 50%, #21190E 72%, #141312 92%)
          `,
        }}
      >
        {/* Dynamic warm ambient bloom that activates when wordmark appears */}
        <div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[85%] h-[360px] pointer-events-none rounded-full blur-[100px] transition-all duration-[1400ms] ease-out"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 184, 0, 0.45) 0%, rgba(220, 155, 0, 0.22) 50%, transparent 80%)',
            opacity: wordmarkInView ? 1 : 0.2,
            transform: wordmarkInView ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.7)',
          }}
        />



        {/* Main Content Container - Fluid & Flexible across all display widths */}
        <div className="relative z-10 site-container w-full pt-6 sm:pt-10 md:pt-16 pb-0">
          
          {/* Top Row: Navigation Links & Contact / Social Block with ScrollReveal */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-6 w-full">
            
            {/* Left Column: Vertical Navigation */}
            <ScrollReveal delay={80} scaleFrom={0.93} blurFrom={12}>
              <nav aria-label="Footer Navigation" className="flex flex-col space-y-2.5 sm:space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm sm:text-lg md:text-[21px] font-normal text-white/95 hover:text-[#FFB800] transition-colors tracking-tight"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </ScrollReveal>

            {/* Right Column: Founder Contact Info */}
            <ScrollReveal delay={180} scaleFrom={0.93} blurFrom={12} className="flex flex-col items-start sm:items-end text-left sm:text-right space-y-2 sm:space-y-3">
              {/* Direct Details with Original Founder Emails */}
              <div className="space-y-1.5 text-xs sm:text-[13.5px] leading-relaxed tracking-normal font-normal">
                <div>
                  <span className="text-white/45">Dinesh: </span>
                  <a
                    href="mailto:dineshpolavarapu66@gmail.com"
                    className="hover:text-[#FFB800] transition-colors text-white/95"
                  >
                    dineshpolavarapu66@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-white/45">Mokshagna: </span>
                  <a
                    href="mailto:kankati.mokshagnaanurag@gmail.com"
                    className="hover:text-[#FFB800] transition-colors text-white/95"
                  >
                    kankati.mokshagnaanurag@gmail.com
                  </a>
                </div>
                <div className="text-white/60 pt-0.5">
                  Visakhapatnam, Andhra Pradesh, India
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Mid-Row: Subtle Research Notice & Copyright inside the attached dark footer */}
          <ScrollReveal delay={250} scaleFrom={0.95} blurFrom={8} className="w-full">
            <div className="mt-8 sm:mt-14 md:mt-18 pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] text-white/45 font-mono w-full">
              <p className="text-center sm:text-left">
                Research Notice: QRAEZEV is building a persistent experience layer for physical AI.
              </p>
              <div className="flex items-center gap-4 shrink-0">
                <span>© 2026 QRAEZEV. All rights reserved.</span>
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Top</span>
                  <ArrowUp className="w-3 h-3" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Area: Monumental illuminated Qraezev Wordmark with seamless organic aura (no box / clipping artifacts) */}
          <div 
            ref={wordmarkRef}
            className="relative mt-8 sm:mt-12 md:mt-20 -mb-2 sm:-mb-3 md:-mb-5 flex justify-center items-end select-none pointer-events-none w-full"
          >
            {/* Ambient warm radial bloom anchored directly behind the wordmark */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-[340px] pointer-events-none rounded-full blur-[80px] sm:blur-[110px] transition-all duration-[1400ms] ease-out -z-0"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 184, 0, 0.42) 0%, rgba(220, 150, 0, 0.2) 45%, rgba(255, 184, 0, 0.05) 70%, transparent 85%)',
                opacity: wordmarkInView ? 1 : 0.15,
                transform: wordmarkInView ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.8)',
              }}
            />

            {/* Soft, fully-feathered golden text glow silhouette (Pure colored text with gaussian blur, zero background-clip bounding-box artifacts) */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 flex justify-center items-end text-center font-bold leading-[0.78] tracking-tight will-change-transform text-[#FFB800] select-none pointer-events-none z-0"
              style={{
                fontSize: 'clamp(2.75rem, 15vw, 24rem)',
                filter: wordmarkInView ? 'blur(32px)' : 'blur(8px)',
                opacity: wordmarkInView ? 0.7 : 0,
                transform: wordmarkInView
                  ? 'translateY(0px) scale(1)'
                  : 'translateY(42px) scale(0.86)',
                letterSpacing: wordmarkInView ? '-0.035em' : '0.04em',
                transitionProperty: 'opacity, transform, filter, letter-spacing',
                transitionDuration: '1350ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Qraezev
            </span>

            {/* Crisp Foreground Luminous Text Fill with Gold Horizon Gradient */}
            <h2
              className="relative z-10 font-bold leading-[0.78] text-center w-full will-change-transform tracking-tight select-none pointer-events-none"
              style={{
                fontSize: 'clamp(2.75rem, 15vw, 24rem)',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 238, 215, 0.78) 45%, rgba(255, 198, 125, 0.92) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: wordmarkInView ? 1 : 0,
                transform: wordmarkInView
                  ? 'translateY(0px) scale(1)'
                  : 'translateY(42px) scale(0.86)',
                letterSpacing: wordmarkInView ? '-0.035em' : '0.04em',
                transitionProperty: 'opacity, transform, letter-spacing',
                transitionDuration: '1350ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Qraezev
            </h2>
          </div>

        </div>
      </div>
    </footer>
  );
}
