import React from 'react';
import Reveal from '../UI/Reveal';

const Philosophy: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-zinc-50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-black tracking-tighter leading-[0.9]">
                O VERDADEIRO <br/>
                <span className="text-black bg-[#f3fc46] px-4 inline-block transform -skew-x-6 border-b-8 border-black">DESAFIO.</span>
            </h2>
            <div className="mt-8 text-lg md:text-2xl text-zinc-600 font-medium leading-relaxed space-y-6">
                <p>
                  As pessoas não subscrevem marcas. Subscrevem pessoas, histórias e conteúdo que lhes diz algo. Quando uma empresa aparece no YouTube a parecer uma empresa, a audiência sente isso imediatamente e passa à frente.



                </p>
                <p>
                    <strong className="text-black">O verdadeiro desafio não é produzir mais conteúdo. É criar conteúdo que as pessoas queiram ver de livre vontade, sem parecer que estão a ser vendidas.</strong>
                </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Philosophy;