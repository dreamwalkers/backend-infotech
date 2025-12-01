import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Smartphone, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Seamless cloud migration, infrastructure optimization, and scalable cloud architecture. We help businesses leverage the power of cloud computing with AWS, Azure, and Google Cloud expertise.'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'End-to-end mobile and web application development. From concept to deployment, we build robust, scalable, and user-friendly applications using cutting-edge technologies and modern frameworks.',
      featured: true
    },
    {
      icon: Lightbulb,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services. We guide businesses through technology adoption, process optimization, and digital innovation to achieve sustainable growth.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1
          },
          y: 100,
          opacity: 0,
          rotateY: -15,
          delay: index * 0.2
        });
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services"
      ref={servicesRef}
      className="relative min-h-screen bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative bg-white rounded-2xl p-8 cursor-pointer overflow-hidden transform transition-all duration-500 hover:scale-105"
                style={{
                  perspective: '1000px'
                }}
              >
                {/* Featured badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Front side */}
                <div className="relative z-10">
                  <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;