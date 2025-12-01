import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const directorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1
        },
        y: 50,
        opacity: 0
      });

      // Text animation
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 70%',
          end: 'top 40%',
          scrub: 1
        },
        y: 50,
        opacity: 0
      });

      // Director animation
      gsap.from(directorRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 60%',
          end: 'top 30%',
          scrub: 1
        },
        y: 50,
        opacity: 0
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={aboutRef}
      className="relative min-h-screen bg-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-black mb-16 text-center"
        >
          About Us
        </h2>

        <div className="space-y-12">
          <p 
            ref={textRef}
            className="text-2xl md:text-4xl text-gray-800 text-center font-light leading-relaxed"
          >
            Converting Innovative and Creative Business Ideas to Life.
          </p>

          <div 
            ref={directorRef}
            className="bg-black p-12 rounded-2xl text-center transform transition-all duration-500 hover:scale-105"
          >
            <p className="text-gray-400 text-lg mb-4">Director</p>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <span className="inline-block relative group">
                NINSHID PH
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </h3>
            <p className="text-yellow-400 text-lg mt-6">Visionary Leader & Technology Innovator</p>
          </div>

          {/* Journey placeholder - will be added later */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 italic">Company journey timeline coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;