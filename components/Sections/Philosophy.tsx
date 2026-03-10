import React from 'react';
import Reveal from '../UI/Reveal';

const Philosophy: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-zinc-50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-8xl font-display font-bold text-black tracking-tighter leading-[0.9]">
                O VERDADEIRO <br/>
                <span className="text-black bg-[#f3fc46] px-4 inline-block transform -skew-x-6 border-b-8 border-black">DESAFIO.</span>
            </h2>
            <div className="mt-8 text-lg md:text-2xl text-zinc-600 font-medium leading-relaxed space-y-6">
                <p>
                No YouTube, a atenção não se conquista com comunicação institucional mas com conteúdo relevante.
Quando uma marca aparece na plataforma apenas como "marca", a audiência percebe-o imediatamente e segue em frente.
Por isso, muitos canais de empresas acabam por funcionar apenas como arquivos de campanhas, anúncios ou eventos.






                </p>
                <p>
                    <strong className="text-black">O verdadeiro desafio não é produzir mais conteúdo. É criar conteúdo que as pessoas escolhem ver e que transforma o canal num ativo estratégico para a marca.</strong>
                </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Philosophy;