import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Facebook, name: 'Facebook', url: '#' }
  ];

  return (
    <footer className="bg-black border-t-2 border-yellow-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo and tagline */}
        <div className="text-center mb-8">
          <img 
            src="https://customer-assets.emergentagent.com/job_backdev-react/artifacts/hpjgi141_logo.png" 
            alt="Backend Infotech" 
            className="w-24 h-24 mx-auto object-contain mb-4"
          />
          <p className="text-yellow-400 text-lg font-semibold">Powering Innovation. Driving Excellence.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                aria-label={social.name}
                className="group w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <Icon className="w-6 h-6 text-black transition-colors duration-300" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2025 Backend Infotech — Powering Innovation. Driving Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;