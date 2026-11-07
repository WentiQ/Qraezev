import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  phase: number;
  size: number;
}

interface Point {
  x: number;
  y: number;
}

interface TextRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const neuronPositions = [
  { x: 0.06, y: 0.12 },
  { x: 0.27, y: 0.1 },
  { x: 0.5, y: 0.13 },
  { x: 0.73, y: 0.1 },
  { x: 0.94, y: 0.12 },
  { x: 0.16, y: 0.34 },
  { x: 0.39, y: 0.37 },
  { x: 0.62, y: 0.34 },
  { x: 0.85, y: 0.37 },
  { x: 0.06, y: 0.59 },
  { x: 0.28, y: 0.62 },
  { x: 0.51, y: 0.59 },
  { x: 0.74, y: 0.62 },
  { x: 0.95, y: 0.59 },
  { x: 0.16, y: 0.84 },
  { x: 0.39, y: 0.87 },
  { x: 0.62, y: 0.84 },
  { x: 0.85, y: 0.87 },
];

const mobileNeuronPositions = [
  { x: 0.08, y: 0.12 },
  { x: 0.5, y: 0.1 },
  { x: 0.92, y: 0.13 },
  { x: 0.18, y: 0.33 },
  { x: 0.82, y: 0.35 },
  { x: 0.08, y: 0.56 },
  { x: 0.5, y: 0.58 },
  { x: 0.92, y: 0.56 },
  { x: 0.18, y: 0.78 },
  { x: 0.82, y: 0.8 },
  { x: 0.08, y: 0.96 },
  { x: 0.5, y: 0.94 },
  { x: 0.92, y: 0.96 },
];

export function NeuralField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!container || !canvas || !context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let activePointer: Point | null = null;
    let particles: Particle[] = [];
    let textRects: TextRect[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const textElement = container.parentElement?.querySelector<HTMLElement>('[data-neural-text]');

    const smoothStep = (start: number, end: number, value: number) => {
      const progress = Math.max(0, Math.min(1, (value - start) / (end - start)));
      return progress * progress * (3 - 2 * progress);
    };

    const measureTextRects = () => {
      if (!textElement) {
        textRects = [];
        return;
      }

      const canvasBounds = container.getBoundingClientRect();
      const walker = document.createTreeWalker(textElement, NodeFilter.SHOW_TEXT);
      const rects: TextRect[] = [];
      let node = walker.nextNode();

      while (node) {
        if (node.textContent?.trim()) {
          const range = document.createRange();
          range.selectNodeContents(node);
          for (const rect of range.getClientRects()) {
            if (rect.width === 0 || rect.height === 0) continue;
            rects.push({
              left: rect.left - canvasBounds.left,
              right: rect.right - canvasBounds.left,
              top: rect.top - canvasBounds.top,
              bottom: rect.bottom - canvasBounds.top,
            });
          }
        }
        node = walker.nextNode();
      }
      textRects = rects;
    };

    const distanceFromText = (x: number, y: number) => {
      let nearestDistance = Infinity;
      for (const rect of textRects) {
        const dx = Math.max(rect.left - x, 0, x - rect.right);
        const dy = Math.max(rect.top - y, 0, y - rect.bottom);
        nearestDistance = Math.min(nearestDistance, Math.hypot(dx, dy));
      }
      return nearestDistance;
    };

    const neurons = (): Point[] => {
      const positions = width < 768 ? mobileNeuronPositions : neuronPositions;
      return positions.map(({ x, y }) => ({ x: x * width, y: y * height }));
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      measureTextRects();
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const spacing = width < 380 ? 18 : 15;
      particles = [];
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          particles.push({
            x: x + (Math.random() - 0.5) * 3,
            y: y + (Math.random() - 0.5) * 3,
            phase: Math.random() * Math.PI * 2,
            // Decreased particle size for refined, delicate appearance
            size: 0.72 + Math.random() * 0.48,
          });
        }
      }
      draw(0);
    };

    const draw = (time: number) => {
      if (width === 0 || height === 0) return;
      context.clearRect(0, 0, width, height);
      const nodes = neurons();
      const sources = nodes.map((point) => ({ ...point, radius: 110, strength: 0.95 }));
      if (activePointer) {
        sources.push({ ...activePointer, radius: 140, strength: 1.9 });
      }

      for (const particle of particles) {
        let offsetX = Math.sin(time * 0.00045 + particle.phase) * 0.9;
        let offsetY = Math.cos(time * 0.0004 + particle.phase) * 0.9;
        let influence = 0;

        for (const source of sources) {
          const dx = source.x - particle.x;
          const dy = source.y - particle.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const pull = source.strength * Math.exp(-(distance * distance) / (2 * source.radius * source.radius));
          offsetX += (dx / distance) * pull * 28;
          offsetY += (dy / distance) * pull * 28;
          influence = Math.max(influence, pull);
        }

        const offsetLength = Math.hypot(offsetX, offsetY);
        if (offsetLength > 34) {
          offsetX = (offsetX / offsetLength) * 34;
          offsetY = (offsetY / offsetLength) * 34;
        }

        const dislocation = Math.hypot(offsetX, offsetY);
        const x = particle.x + offsetX;
        const y = particle.y + offsetY;
        // Refined radius formula with smaller scaling
        const radius = particle.size * (1 + Math.min(influence, 1) * 0.35);
        const colorMix = Math.min(1, influence * 0.9 + Math.max(0, dislocation - 4) / 50);
        const red = Math.round(90 + (255 - 90) * colorMix);
        const green = Math.round(82 + (184 - 82) * colorMix);
        const blue = Math.round(72 + (0 - 72) * colorMix);
        const edgeFade = Math.min(
          1,
          x / (width * 0.08),
          (width - x) / (width * 0.08),
          y / (height * 0.1),
          (height - y) / (height * 0.1),
        );
        
        const textDistance = distanceFromText(x, y);
        // Softly attenuate directly behind text letters for pristine legibility
        const textSoftness = 0.25 + 0.75 * smoothStep(10, 70, textDistance);
        const alpha = 0.7 * Math.max(0, edgeFade) * textSoftness;
        
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }

      for (const node of nodes) {
        if (distanceFromText(node.x, node.y) < 40) {
          continue;
        }

        const cursorDistance = activePointer
          ? Math.hypot(activePointer.x - node.x, activePointer.y - node.y)
          : Infinity;
        const active = Math.max(0, 1 - cursorDistance / 190);
        const pulse = reducedMotion ? 0 : Math.sin(time * 0.0015 + node.x) * 0.8;

        context.beginPath();
        context.arc(node.x, node.y, 6.5 + active * 2.5 + pulse, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 184, 0, ${0.1 + active * 0.16})`;
        context.fill();

        context.beginPath();
        context.arc(node.x, node.y, 2.5 + active * 0.9, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 184, 0, ${0.7 + active * 0.3})`;
        context.fill();
        context.beginPath();
        context.arc(node.x, node.y, 0.9, 0, Math.PI * 2);
        context.fillStyle = '#FFF8E5';
        context.fill();
      }

      if (activePointer) {
        context.beginPath();
        context.arc(activePointer.x, activePointer.y, 10, 0, Math.PI * 2);
        context.fillStyle = 'rgba(255, 184, 0, 0.14)';
        context.fill();
        context.beginPath();
        context.arc(activePointer.x, activePointer.y, 2.8, 0, Math.PI * 2);
        context.fillStyle = '#FFB800';
        context.fill();
      }
    };

    const animate = (time: number) => {
      draw(time);
      frame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      activePointer = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
    };

    const handlePointerLeave = () => {
      activePointer = null;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    if (textElement) observer.observe(textElement);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    frame = window.requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Soft optical blur filter on the canvas */}
      <canvas 
        ref={canvasRef} 
        aria-hidden="true" 
        className="absolute inset-0 h-full w-full blur-[0.7px]" 
      />
    </div>
  );
}
