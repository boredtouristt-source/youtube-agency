import React from 'react';
import { Heart, Play } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../constants';
import Reveal from '../UI/Reveal';

const Work: React.FC = () => {
  return (
    <section id="work" className="pt-24 pb-24 bg-white relative z-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
            <Reveal width="100%">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-black tracking-tighter mb-6">
                    OUR WORK & <span className="text-zinc-400">PARTNERS.</span>
                </h2>
                <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                    We don't just edit videos. We build content assets for creators and brands who demand excellence and consistency.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => {
            // Calculate a valid delay (100, 200, 300, 400)
            const delay = ((index % 4) + 1) * 100 as 100 | 200 | 300 | 400;
            
            return (
                <Reveal 
                    key={item.id} 
                    delay={delay} 
                    width="100%"
                    className={`w-full ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
                >
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative cursor-pointer w-full block"
                    >
                    {/* Phone Frame */}
                    <div className="relative aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(243,252,70,0.2)] hover:-translate-y-2 ring-1 ring-zinc-100">
                        <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
                        
                        {/* Top Elements */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                            <div className="w-12 h-2 bg-zinc-800 rounded-full"></div>
                        </div> 
                        
                        <div className="absolute top-8 left-0 w-full px-6 flex justify-between items-center z-20">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                    <span className="text-[10px] text-white font-bold">N</span>
                                </div>
                                <span className="text-white text-xs font-bold drop-shadow-md">{item.client}</span>
                            </div>
                        </div>

                        {/* Center Big Text Overlay (Reference Style) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center px-4 z-10">
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-[0.9] drop-shadow-xl uppercase opacity-90 group-hover:opacity-100 transition-opacity">
                                {item.title.replace(/ /g, '\n')}
                            </h3>
                        </div>

                        {/* Bottom Stats Badge */}
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <div className="bg-[#f3fc46] text-black p-3 rounded-xl flex items-center justify-between shadow-lg transform group-hover:scale-105 transition-transform">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase opacity-80 tracking-wide">Performance</span>
                                    <span className="text-sm font-bold">{item.stat}</span>
                                </div>
                                <Heart className="w-5 h-5 fill-black text-black" />
                            </div>
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