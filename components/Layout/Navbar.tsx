import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-zinc-100 shadow-sm'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`w-8 h-8 flex items-center justify-center font-bold font-display text-xl rounded-full transition-colors duration-300 ${
              scrolled
                ? 'bg-black text-white group-hover:bg-[#f3fc46] group-hover:text-black'
                : 'bg-white text-black group-hover:bg-[#f3fc46]'
            }`}>
            N
          </div>
          <span className={`text-xl font-bold tracking-tight font-display transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
            NATIVE<span className="text-[#f3fc46] drop-shadow-sm">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className={`flex gap-8 px-8 py-3 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-zinc-100' : 'bg-white/10 backdrop-blur-md'
            }`}>
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                    scrolled ? 'text-zinc-500 hover:text-black' : 'text-white/70 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="https://calendar.app.google/AETzZfN5aFjXbGj38"
            target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full transition-all duration-300 shadow-lg ${
              scrolled
                ? 'bg-black text-white hover:bg-[#f3fc46] hover:text-black shadow-black/10'
                : 'bg-white text-black hover:bg-[#f3fc46] shadow-black/20'
            }`}
          >
            Marcar uma Chamada
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden z-50 p-2 transition-colors ${scrolled || isOpen ? 'text-black' : 'text-white'}`}
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
              href="https://calendar.app.google/AETzZfN5aFjXbGj38"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-8 py-4 bg-black text-white rounded-full font-bold text-lg"
            >
              Marcar uma Chamada
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;