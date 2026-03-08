import React, { useState } from 'react';
import { SERVICES_DATA } from '../../constants';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../UI/Reveal';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0]);

  return (
    <section id="services" className="py-32 bg-black text-white relative overflow-hidden">
      
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <Reveal width="100%">
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
              OUR <br />
              <span className="text-[#f3fc46]">APPROACH.</span>
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl leading-relaxed">
              We partner up as both an editing team and creative direction layer. We don't just ask "What do you want edited?" We ask "How does this support growth?"
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Interactive List */}
            <div className="lg:w-1/2 flex flex-col gap-4">
                {SERVICES_DATA.map((service, index) => (
                    <Reveal key={service.id} width="100%" delay={index * 100}>
                        <div 
                            onMouseEnter={() => setActiveService(service)}
                            className={`group cursor-pointer border-b border-zinc-800 pb-8 transition-all duration-300 ${activeService.id === service.id ? 'opacity-100 translate-x-4' : 'opacity-40 hover:opacity-100 hover:translate-x-2'}`}
                        >
                            <div className="flex items-baseline justify-between mb-2">
                                <span className="font-mono text-[#f3fc46] text-sm">0{index + 1}</span>
                                <ArrowUpRight className={`w-6 h-6 text-[#f3fc46] transition-transform duration-300 ${activeService.id === service.id ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-2 translate-y-2'}`} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-display font-bold mb-2 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className={`text-zinc-400 font-medium max-w-md transition-all duration-500 overflow-hidden ${activeService.id === service.id ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                {service.description}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Right Column: Sticky Visual */}
            <div className="lg:w-1/2 hidden lg:block relative">
                <Reveal delay={300} className="sticky top-32 w-full">
                    <div className="w-full aspect-square rounded-[3rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl transition-all duration-500">
                        {/* Image Display */}
                        <img 
                            key={activeService.id}
                            src={`https://picsum.photos/seed/${activeService.id}native/800/800`} 
                            alt={activeService.title} 
                            className="w-full h-full object-cover opacity-60 animate-in fade-in zoom-in duration-500"
                        />
                        
                        {/* Overlay Information */}
                        <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black via-black/50 to-transparent">
                            <div className="bg-[#f3fc46] text-black self-start px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wide mb-4 shadow-lg">
                                Active Approach
                            </div>
                            <h4 className="text-4xl font-display font-bold text-white mb-4">
                                {activeService.title}
                            </h4>
                            <div className="flex gap-3">
                                {activeService.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Services;