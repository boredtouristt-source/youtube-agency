import React from 'react';
import Reveal from '../UI/Reveal';

const Philosophy: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-zinc-50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="max-w-4xl">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-black tracking-tighter leading-[0.9]">
                THE REAL <br/>
                <span className="text-black bg-[#f3fc46] px-4 inline-block transform -skew-x-6 border-b-8 border-black">STRUGGLE.</span>
            </h2>
            <div className="mt-8 text-lg md:text-2xl text-zinc-600 font-medium leading-relaxed space-y-6">
                <p>
                    Most creators and brands don't struggle with ideas. They struggle with turning good ideas into consistent, high-performing content at scale.
                </p>
                <p>
                    Concepts are there, but structure is unclear. Uploads become irregular. Execution varies. <strong className="text-black">Growth stalls not because of creativity, but because there's no system.</strong>
                </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Philosophy;