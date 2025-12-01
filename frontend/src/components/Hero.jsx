import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(logoRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });

      // Typewriter effect for tagline
      const text = "Powering Innovation. Driving Excellence.";
      const chars = text.split('');
      taglineRef.current.textContent = '';
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        taglineRef.current.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          duration: 0.05,
          delay: 1.5 + (index * 0.05),
          ease: 'none'
        });
      });

      // CTA button animation
      gsap.from(ctaRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 3.5,
        ease: 'back.out(1.7)'
      });

      // Particle animation
      const particles = particlesRef.current.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: 'random(-100, 100)',
          x: 'random(-100, 100)',
          duration: 'random(3, 6)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.1
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Generate particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      particles.push(
        <div
          key={i}
          className="particle absolute rounded-full bg-yellow-400 opacity-30"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`
          }}
        />
      );
    }
    return particles;
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-0">
        {generateParticles()}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <div ref={logoRef} className="mb-12">
          <img 
            src="https://customer-assets.emergentagent.com/job_backdev-react/artifacts/hpjgi141_logo.png" 
            alt="Backend Infotech" 
            className="w-48 h-48 mx-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <h1 
          ref={taglineRef}
          className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-wide"
        >
        </h1>

        {/* CTA Button */}
        <button
          ref={ctaRef}
          onClick={scrollToServices}
          className="group relative px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:text-black"
        >
          <span className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative flex items-center gap-2">
            Explore Our Services
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;