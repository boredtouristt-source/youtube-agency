import React from 'react';
import { Play } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../constants';
import Reveal from '../UI/Reveal';

const Work: React.FC = () => {
  return (
    <section id="work" className="pt-24 pb-24 bg-white relative z-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
            <Reveal width="100%">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-black tracking-tighter mb-6">
                    O NOSSO TRABALHO 
                </h2>
                <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                    
                </p>
            </Reveal>
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
          {PORTFOLIO_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-center flex-shrink-0 w-[75vw] block group relative"
            >
              <div className="relative aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-zinc-100">
                {item.video ? (
                  <video src={item.video} autoPlay muted loop playsInline preload="auto" poster={item.image}
                    className="w-full h-full object-cover opacity-90" />
                ) : (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="inline-flex items-center gap-2 bg-[#f3fc46] text-black px-3 py-1.5 rounded-full shadow-lg mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide">{item.client}</span>
                  </div>
                  {item.results && (
                    <div className="flex flex-col gap-2">
                      {item.results.map((r: { value: string; label: string }) => (
                        <div key={r.label} className="flex items-baseline gap-2">
                          <span className="text-white font-display font-bold text-xl leading-none">{r.value}</span>
                          <span className="text-white/60 text-[11px] font-medium uppercase tracking-wide">{r.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => {
            // Calculate a valid delay (100, 200, 300, 400)
            const delay = ((index % 4) + 1) * 100 as 100 | 200 | 300 | 400;
            
            return (
                <Reveal 
                    key={item.id} 
                    delay={delay} 
                    width="100%"
                    className={`w-full ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
                >
                    <a 
                        href={item.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative cursor-pointer w-full block"
                    >
                    {/* Phone Frame */}
                    <div className="relative aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(243,252,70,0.2)] hover:-translate-y-2 ring-1 ring-zinc-100">
                        {item.embed ? (
                          <iframe
                            src={item.embed}
                            className="w-full h-full border-0 scale-[1.02]"
                            allowFullScreen
                            scrolling="no"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          />
                        ) : item.video ? (
                          <video
                            src={item.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            poster={item.image}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          />
                        ) : (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          />
                        )}
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                        {/* Bottom: cliente + resultados */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                            <div className="inline-flex items-center gap-2 bg-[#f3fc46] text-black px-3 py-1.5 rounded-full shadow-lg mb-4">
                                <span className="text-xs font-bold uppercase tracking-wide">{item.client}</span>
                            </div>
                            {item.results && (
                              <div className="flex flex-col gap-2">
                                {item.results.map((r: { value: string; label: string }) => (
                                  <div key={r.label} className="flex items-baseline gap-2">
                                    <span className="text-white font-display font-bold text-xl leading-none">{r.value}</span>
                                    <span className="text-white/60 text-[11px] font-medium uppercase tracking-wide">{r.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                            <div className="w-16 h-16 bg-[#f3fc46] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(243,252,70,0.4)] transform scale-50 group-hover:scale-100 transition-all duration-300">
                                <Play className="w-6 h-6 text-black fill-black ml-1" />
                            </div>
                        </div>
                    </div>
                    </a>
                </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;