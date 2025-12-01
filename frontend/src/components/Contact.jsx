import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, QrCode } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1
        },
        x: -100,
        opacity: 0
      });

      gsap.from(infoRef.current, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1
        },
        x: 100,
        opacity: 0
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ninshid@backend-infotech.com',
      link: 'mailto:ninshid@backend-infotech.com'
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '+91 8593 963 515',
      link: 'tel:+918593963515'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '39/2475-B1, Suite XXX, LR Towers, SJRRA 104, South Janatha Road, Palarivattom, Kochi, Kerala',
      link: null
    }
  ];

  return (
    <section 
      ref={contactRef}
      className="relative min-h-screen bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-yellow-400 text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-yellow-400 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-yellow-400 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Icon className="w-6 h-6 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-black font-semibold hover:text-yellow-600 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-black font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* QR Code / Business Card */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <QrCode className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-black">Business Card</h3>
              </div>
              <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center p-4 overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_backdev-react/artifacts/4z63fw0t_My_Business_Card-1024.png"
                  alt="Backend Infotech Business Card"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;