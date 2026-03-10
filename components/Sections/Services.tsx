import React from 'react';
import Reveal from '../UI/Reveal';

const APPROACH = [
  {
    title: "Estratégia",
    items: ["Posicionamento do canal", "Formatos de conteúdo", "Análise de audiência"],
  },
  {
    title: "Produção",
    items: ["Vídeos longos", "Séries de YouTube", "Short form","Podcasts"],
  },
  {
    title: "Distribuição",
    items: ["Thumbnails", "Packaging", "Estratégia de algoritmo"],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-black text-white relative overflow-hidden">
      
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-6">
              A NOSSA <br />
              <span className="text-[#f3fc46]">ABORDAGEM.</span>
            </h2>
            <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl leading-relaxed">
              Somos simultaneamente equipa de edição e camada de direção criativa. Não perguntamos apenas "O que quer editar?" Perguntamos "Como é que isto apoia o crescimento?"
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {APPROACH.map((col, i) => (
            <Reveal key={col.title} delay={i * 150 as 0 | 100 | 200 | 300 | 400} width="100%">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-400 text-lg font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f3fc46] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;