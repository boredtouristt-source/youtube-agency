import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold font-display text-xl rounded-full group-hover:bg-[#f3fc46] group-hover:text-black transition-colors duration-300">
            N
          </div>
          <span className="text-xl font-bold tracking-tight font-display text-black">
            NATIVE<span className="text-[#f3fc46] drop-shadow-sm">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 bg-zinc-100 px-8 py-3 rounded-full">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-500 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-bold rounded-full hover:bg-[#f3fc46] hover:text-black transition-colors shadow-lg shadow-black/10"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden z-50 text-black p-2"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-40">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-medium text-black hover:text-[#c4cc14] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-8 py-4 bg-black text-white rounded-full font-bold text-lg"
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;