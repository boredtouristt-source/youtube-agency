import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../UI/Reveal';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-black relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <Reveal width="100%">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter mb-12 leading-[0.9]">
            READY TO <br />
            <span className="text-[#f3fc46]">LEVEL UP?</span>
            </h2>
        </Reveal>
        
        <Reveal width="100%" delay={200}>
            <div className="flex flex-col items-center justify-center gap-8">
            <a 
                href="mailto:contact@native.agency"
                className="px-12 py-6 bg-[#f3fc46] text-black text-xl font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_30px_rgba(243,252,70,0.3)]"
            >
                Book Discovery Call
                <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest max-w-md mx-auto leading-relaxed mt-2">
                Work with a team that executes, strategizes, and scales your content across platforms.
            </p>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;