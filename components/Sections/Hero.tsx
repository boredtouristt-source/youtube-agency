import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Reveal from '../UI/Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 min-h-screen flex flex-col justify-center overflow-hidden bg-white z-10">
      
      {/* Dynamic Background Marquees */}
      <div className="absolute inset-0 flex flex-col justify-center gap-32 pointer-events-none select-none opacity-[0.03] -z-10 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
            <span className="text-[20vh] font-display font-bold leading-none">STRATEGY EXECUTION GROWTH SYSTEM STRATEGY EXECUTION GROWTH SYSTEM</span>
        </div>
        <div className="animate-marquee2 whitespace-nowrap">
            <span className="text-[20vh] font-display font-bold leading-none">CONSISTENCY SCALE RETENTION VIRALITY CONSISTENCY SCALE RETENTION VIRALITY</span>
        </div>
      </div>
      
      {/* Glowing Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f3fc46] rounded-full blur-[150px] opacity-20 -z-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 text-center relative">
         
         <Reveal width="100%">
            <div className="relative inline-block">
                <span className="absolute -top-8 -right-8 -rotate-12 bg-black text-white px-4 py-1 rounded-full font-mono text-xs font-bold uppercase border-2 border-white shadow-xl z-20 hidden md:block">
                    Accepting New Clients
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-display font-bold text-black leading-[0.9] tracking-tighter mb-8 md:mb-12">
                WE TURN BRANDS<br />
                <span className="inline-block bg-[#f3fc46] px-4 md:px-10 transform -skew-x-3 mt-2 pb-2">INTO ICONS.</span>
                </h1>
            </div>
         </Reveal>

         <Reveal delay={200} width="100%">
            <p className="text-xl md:text-3xl text-zinc-600 font-medium max-w-4xl mx-auto mb-16 tracking-tight leading-snug">
            We help creators, brands, and agencies turn ideas into consistent, high-performing content. <br className="hidden md:block"/> We build systems that scale.
            </p>
         </Reveal>

         <Reveal delay={300}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                href="#contact"
                className="group relative px-12 py-6 bg-black text-white text-lg font-bold rounded-full overflow-hidden shadow-2xl transition-transform hover:scale-105"
                >
                    <div className="absolute inset-0 bg-[#f3fc46] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative z-10 group-hover:text-black flex items-center gap-2">
                        Book a Call <ArrowRight className="w-5 h-5" />
                    </span>
                </a>
                <a 
                href="#work"
                className="group flex items-center gap-2 px-10 py-6 bg-white border-2 border-zinc-100 text-black font-bold rounded-full hover:border-black transition-all shadow-sm hover:shadow-xl"
                >
                View Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
            </div>
         </Reveal>
      </div>
    </section>
  );
};

export default Hero;