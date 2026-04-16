import React from 'react';
import Reveal from '../UI/Reveal';

const TEAM = [
  {
    name: "Francisco Albuquerque",
    role: "Co-Fundador",
    description: "Visão estratégica e direção criativa. Co-criador do projecto Andamente, com mais de 300 mil seguidores nas redes sociais.",
    image: "https://prifvutxutzcspiukzek.supabase.co/storage/v1/object/public/nothing1/1.jpeg",
    initial: "F",
  },
  {
    name: "João Garcia",
    role: "Co-Fundador",
    description: "Responsável por toda a operação. Da logística às finanças, garante que a máquina nunca para.",
    image: "https://prifvutxutzcspiukzek.supabase.co/storage/v1/object/public/nothing1/3.jpeg",
    initial: "JG",
  },
  {
    name: "Fábio Domingues",
    role: "Videografia",
    description: "Por detrás da câmara em cada produção. O olho que tudo vê.",
    image: "https://prifvutxutzcspiukzek.supabase.co/storage/v1/object/public/nothing1/4.jpeg",
    initial: "FD",
  },
  {
    name: "João Reis",
    role: "Criativo & Designer",
    description: "Transforma ideias em identidades visuais que ficam na memória.",
    image: "/reis.jpg",
    initial: "JR",
  },
  {
    name: "Raquel Nogueira",
    role: "Marketing",
    description: "A mente por detrás da distribuição e do crescimento orgânico.",
    image: "https://prifvutxutzcspiukzek.supabase.co/storage/v1/object/public/nothing1/2.jpeg",
    initial: "R",
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        <Reveal width="100%">
          <div className="mb-20">
            <h2 className="text-4xl md:text-8xl font-display font-bold text-black tracking-tighter leading-[0.9] mb-6">
              A NOSSA<br />
              <span className="inline-block bg-[#f3fc46] px-4 transform -skew-x-3 pb-1">EQUIPA.</span>
            </h2>
            <p className="text-zinc-500 text-xl md:text-2xl font-medium max-w-2xl mt-8">
              Obcecados com conteúdo, apaixonados por resultados. Cada pessoa da equipa vive e respira YouTube todos os dias.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TEAM.map((member, index) => (
            <Reveal key={member.name} delay={(index * 100) as 100 | 200 | 300 | 400} width="100%">
              <div className="group flex flex-col items-center text-center">
                {/* Photo */}
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-5 border border-zinc-200 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${
                      member.name === 'João Garcia' ? 'scale-125 object-top' : ''
                    }`}
                  />
                  {/* Overlay with initial fallback */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Info */}
                <div className="inline-block bg-[#f3fc46] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                  {member.role}
                </div>
                <h3 className="text-lg font-display font-bold text-black leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
