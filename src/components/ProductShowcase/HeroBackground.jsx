"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let width = 0;
    let height = 0;
    const mouse = { x: null, y: null, radius: 120 };

    const ACCENT = "139, 92, 246"; // --accent as rgb

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT}, 0.5)`;
        ctx.fill();
      }
      update() {
        if (this.x > width || this.x < 0) this.dx *= -1;
        if (this.y > height || this.y < 0) this.dy *= -1;

        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 2;
            this.y -= (dy / dist) * force * 2;
          }
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    function init() {
      particles = [];
      // conservative density for low-end devices
      const count = Math.min(60, Math.floor((width * height) / 18000));
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 1.5 + 1;
        particles.push(
          new Particle(
            Math.random() * width,
            Math.random() * height,
            (Math.random() - 0.5) * 0.3,
            (Math.random() - 0.5) * 0.3,
            size,
          ),
        );
      }
    }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
      init();
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = dx * dx + dy * dy;
          const maxDist = (width / 8) * (height / 8);
          if (dist < maxDist) {
            const opacity = 1 - dist / maxDist;
            ctx.strokeStyle = `rgba(${ACCENT}, ${opacity * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => p.update());
      connect();
    }

    function drawStatic() {
      // reduced-motion fallback: draw once, no animation loop
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => p.draw());
      connect();
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
