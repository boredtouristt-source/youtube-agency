import React from 'react';
import { CLIENT_LOGOS } from '../../constants';

const Brands: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-zinc-100 overflow-hidden">
       <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black uppercase tracking-widest mb-4">
            Trusted by Leaders
          </h2>
          <p className="text-zinc-500 font-medium max-w-3xl mx-auto">
            We’ve collaborated with monetized YouTube creators, content-driven brands, and marketing agencies to deliver consistent, high-performing content.
          </p>
       </div>

       {/* Marquee Container */}
       <div className="flex overflow-hidden">
          {/* Track 1 */}
          <div className="flex gap-8 md:gap-16 items-center animate-marquee px-6">
            {[...CLIENT_LOGOS].map((logo, index) => (
              <div 
                key={`l1-${index}`}
                className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0 bg-zinc-50 rounded-full border border-zinc-200 shadow-sm overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img 
                    src={logo.url} 
                    alt={logo.name}
                    className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for seamless loop) */}
          <div className="flex gap-8 md:gap-16 items-center animate-marquee px-6" aria-hidden="true">
            {[...CLIENT_LOGOS].map((logo, index) => (
              <div 
                key={`l2-${index}`}
                className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0 bg-zinc-50 rounded-full border border-zinc-200 shadow-sm overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img 
                    src={logo.url} 
                    alt={logo.name}
                    className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Brands;