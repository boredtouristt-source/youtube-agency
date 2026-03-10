import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../UI/Reveal';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-48">

      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/yestheory.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient vignette top/bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />

      {/* Subtle brand glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f3fc46] rounded-full blur-[200px] opacity-[0.07]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter mb-8 md:mb-12 leading-[0.9]">
            PRONTO PARA <br />
            <span className="text-[#f3fc46]">DOMINAR O YOUTUBE?</span>
          </h2>
        </Reveal>

        <Reveal width="100%" delay={200}>
          <div className="flex flex-col items-center justify-center gap-8">
            <a
              href="https://calendar.app.google/AETzZfN5aFjXbGj38"
              target="_blank" rel="noopener noreferrer"
              className="w-full md:w-auto px-8 md:px-12 py-5 md:py-6 bg-[#f3fc46] text-black text-lg md:text-xl font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(243,252,70,0.25)]"
            >
              Marcar Chamada de Descoberta
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-xs text-white/30 font-mono uppercase tracking-widest max-w-md mx-auto leading-relaxed mt-2">
              Trabalhe com uma equipa que executa, define estratégias e faz crescer o seu conteúdo em todas as plataformas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
