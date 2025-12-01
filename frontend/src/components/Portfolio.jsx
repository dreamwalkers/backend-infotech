import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const tilesRef = useRef([]);

  const projects = [
    {
      title: 'Enterprise Cloud Migration',
      description: 'Migrated 50+ legacy systems to AWS cloud infrastructure',
      tech: 'AWS, Docker, Kubernetes',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'FinTech Mobile App',
      description: 'Secure payment processing app with 100K+ users',
      tech: 'React Native, Node.js, MongoDB',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'E-Commerce Analytics',
      description: 'Real-time analytics dashboard for retail chains',
      tech: 'React, Python, PostgreSQL',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Healthcare Management',
      description: 'Patient management system for multi-specialty hospitals',
      tech: 'Angular, Java Spring, MySQL',
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Logistics Tracker',
      description: 'Real-time fleet tracking with AI-powered routing',
      tech: 'Vue.js, Python, Redis',
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management platform',
      tech: 'React, FastAPI, TensorFlow',
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      tilesRef.current.forEach((tile, index) => {
        gsap.from(tile, {
          scrollTrigger: {
            trigger: tile,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1
          },
          scale: 0.8,
          opacity: 0,
          y: 50,
          delay: index * 0.1
        });
      });
    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={portfolioRef}
      className="relative min-h-screen bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-black mb-20 text-center">
          Our Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (tilesRef.current[index] = el)}
              className="group relative bg-black rounded-2xl p-8 cursor-pointer overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>

                <p className="text-gray-400 group-hover:text-white mb-6 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.split(', ').map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full group-hover:bg-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 opacity-10 rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;