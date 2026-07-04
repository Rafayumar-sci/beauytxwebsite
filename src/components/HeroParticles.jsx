import { useRef, useEffect } from "react";

const COLORS = [
  "183, 110, 121",   // --primary #B76E79
  "212, 149, 158",   // --primary-light #D4959E
  "201, 169, 110",   // --accent #C9A96E
  "224, 200, 160",   // --accent-light #E0C8A0
  "242, 213, 218",   // --primary-soft #F2D5DA
];

const PARTICLE_COUNT_DESKTOP = 100;
const PARTICLE_COUNT_MOBILE = 40;
const CONNECTION_DISTANCE = 150;
const MOUSE_RADIUS = 200;
const MOUSE_FORCE = 1.2;

export default function HeroParticles() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let isMobile = window.innerWidth < 768;
    function resizeCanvas() {
      const hero = canvas.parentElement;
      if (!hero) return;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
      isMobile = window.innerWidth < 768;
      initParticles();
    }

    function initParticles() {
      const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
      const particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(i, count));
      }
      particlesRef.current = particles;
    }

    function createParticle(index, total) {
      const angle = (index / total) * Math.PI * 2;
      const radius = 30 + Math.random() * 80;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        originX: Math.random() * canvas.width,
        originY: Math.random() * canvas.height,
        size: 1.5 + Math.random() * 3.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0.25 + Math.random() * 0.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.025,
        // Orbital motion
        orbitAngle: angle,
        orbitRadius: radius,
        orbitSpeed: (0.15 + Math.random() * 0.3) * (Math.random() > 0.5 ? 1 : -1),
        // Drift
        driftX: (Math.random() - 0.5) * 0.4,
        driftY: (Math.random() - 0.5) * 0.4,
        // Wobble
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.005 + Math.random() * 0.015,
        wobbleAmp: 5 + Math.random() * 15,
      };
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // First pass — update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulse alpha
        p.pulse += p.pulseSpeed;
        const pulseAlpha = p.alpha * (0.5 + 0.5 * Math.sin(p.pulse));

        // Orbital motion around origin
        p.orbitAngle += p.orbitSpeed * 0.02;
        const orbitX = Math.cos(p.orbitAngle) * p.orbitRadius;
        const orbitY = Math.sin(p.orbitAngle) * (p.orbitRadius * 0.6);

        // Wobble
        p.wobble += p.wobbleSpeed;
        const wobbleX = Math.sin(p.wobble) * p.wobbleAmp;
        const wobbleY = Math.cos(p.wobble * 0.7) * p.wobbleAmp * 0.5;

        // Slow drift motion
        p.originX += p.driftX;
        p.originY += p.driftY;

        // Wrap origin around canvas
        if (p.originX < -100) p.originX = canvas.width + 100;
        if (p.originX > canvas.width + 100) p.originX = -100;
        if (p.originY < -100) p.originY = canvas.height + 100;
        if (p.originY > canvas.height + 100) p.originY = -100;

        // Target position
        let targetX = p.originX + orbitX + wobbleX;
        let targetY = p.originY + orbitY + wobbleY;

        // Mouse interaction — fluid attraction/repulsion
        if (mouse.active) {
          const dx = targetX - mouse.x;
          const dy = targetY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_RADIUS && dist > 1) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
            // Particles are gently attracted toward cursor and pushed away slightly
            const pushAngle = Math.atan2(dy, dx);
            targetX += Math.cos(pushAngle + Math.PI) * force * 30;
            targetY += Math.sin(pushAngle + Math.PI) * force * 30;
            // Add a subtle swirl
            targetX += Math.cos(pushAngle + Math.PI / 2) * force * 15;
            targetY += Math.sin(pushAngle + Math.PI / 2) * force * 15;
          }
        }

        // Smooth interpolation toward target
        p.x += (targetX - p.x) * 0.04;
        p.y += (targetY - p.y) * 0.04;

        // Draw particle glow
        const glowSize = p.size * 3;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
        gradient.addColorStop(0, `rgba(${p.color}, ${pulseAlpha * 0.6})`);
        gradient.addColorStop(0.4, `rgba(${p.color}, ${pulseAlpha * 0.25})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${pulseAlpha})`;
        ctx.fill();
      }

      // Second pass — draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            // Connection lines use primary color with mouse influence
            if (mouse.active) {
              const midX = (a.x + b.x) / 2;
              const midY = (a.y + b.y) / 2;
              const md = Math.sqrt(
                (midX - mouse.x) ** 2 + (midY - mouse.y) ** 2
              );
              const glow = Math.max(0, 1 - md / MOUSE_RADIUS) * 0.3;
              ctx.strokeStyle = `rgba(201, 169, 110, ${alpha + glow})`;
            } else {
              ctx.strokeStyle = `rgba(183, 110, 121, ${alpha})`;
            }

            ctx.lineWidth = mouse.active ? 0.5 + (1 - dist / CONNECTION_DISTANCE) * 0.8 : 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(drawParticles);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999, active: false };
    }

    resizeCanvas();
    drawParticles();

    window.addEventListener("resize", resizeCanvas);
    // Track mouse across the entire window for seamless interaction
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-particles"
      aria-hidden="true"
    />
  );
}
