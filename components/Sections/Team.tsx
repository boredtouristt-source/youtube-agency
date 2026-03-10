import React from 'react';
import Reveal from '../UI/Reveal';

const TEAM = [
  {
    name: "Francisco Albuquerque",
    role: "Co-Fundador",
    description: "Visão estratégica e direção criativa. Co-criador do projecto Andamente, com mais de 300 mil seguidores nas redes sociais.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEFlMtC7gtzpw/profile-displayphoto-scale_200_200/B4DZolynQRGQAY-/0/1761570620869?e=1774483200&v=beta&t=bHFaiGa69H9UKJaPMBCmfHS2_ADOCphL6pWuBZjbAyg",
    initial: "F",
  },
  {
    name: "João Garcia",
    role: "Co-Fundador",
    description: "Responsável por toda a operação. Da logística às finanças, garante que a máquina nunca para.",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQGBn-mC52TP8Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662031022384?e=1774483200&v=beta&t=tYGqaej-WFF4mg46Vp_KNgto-4F3L3GRJ12krW2XQzU",
    initial: "JG",
  },
  {
    name: "Fábio Domingues",
    role: "Videografia",
    description: "Por detrás da câmara em cada produção. O olho que tudo vê.",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFUta52lRKq4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1604523290185?e=1774483200&v=beta&t=et7wG-Jq2dIQar-PiQkGhRzuQzsx-4KtSleUfA1AjnY",
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
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHzD0fWAhU1zw/profile-displayphoto-shrink_200_200/B4DZWrbapBH4AY-/0/1742337846826?e=1774483200&v=beta&t=pTeOt2isxTCWzD_kjcwqZ_gQfSgSQiyZstCLBL4gA84",
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
