import React from 'react';
import { CLIENT_LOGOS } from '../../constants';

const Brands: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-white border-y border-zinc-100 overflow-hidden">
       <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black uppercase tracking-widest mb-4">
            Já trabalharam connosco
          </h2>
         
       </div>

       {/* Marquee Container */}
       <div className="flex overflow-hidden">
          {/* Track 1 */}
          <div className="flex gap-8 md:gap-16 items-center animate-marquee px-6">
            {[...CLIENT_LOGOS].map((logo, index) => (
              <a
                key={`l1-${index}`}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0 bg-zinc-50 rounded-full border border-zinc-200 shadow-sm overflow-hidden hover:scale-105 hover:border-black transition-all duration-300 block"
              >
                <img 
                    src={logo.url} 
                    alt={logo.name}
                    className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>

          {/* Track 2 (Duplicate for seamless loop) */}
          <div className="flex gap-8 md:gap-16 items-center animate-marquee px-6" aria-hidden="true">
            {[...CLIENT_LOGOS].map((logo, index) => (
              <a
                key={`l2-${index}`}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0 bg-zinc-50 rounded-full border border-zinc-200 shadow-sm overflow-hidden hover:scale-105 hover:border-black transition-all duration-300 block"
              >
                <img 
                    src={logo.url} 
                    alt={logo.name}
                    className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Brands;