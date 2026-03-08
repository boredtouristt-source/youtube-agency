import React, { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../../constants';
import Reveal from '../UI/Reveal';
import { Flag } from 'lucide-react';

const Process: React.FC = () => {
  const [startLineAnimation, setStartLineAnimation] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setStartLineAnimation(true);
            }
        },
        { threshold: 0.2 }
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 bg-white border-t border-zinc-100 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
            <Reveal width="100%">
                <div className="inline-block relative">
                    <h2 className="text-6xl md:text-9xl font-display font-bold text-black tracking-tighter leading-[0.9] mb-4 relative z-10">
                    IDEA TO <br /><span className="text-black bg-[#f3fc46] px-6 transform -skew-x-6 inline-block">GROWTH.</span>
                    </h2>
                </div>
                <p className="text-zinc-500 text-lg md:text-2xl font-medium max-w-2xl mx-auto mt-8">
                    Build structured content systems that scale across platforms, formats, and audiences.
                </p>
            </Reveal>
        </div>

        {/* Desktop Roadmap (Curved / Non-Linear) */}
        <div className="hidden lg:block relative mt-20 mb-32 h-[350px]">
            
            {/* SVG Path Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full visible" preserveAspectRatio="none" viewBox="0 0 1200 350">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e4e4e7" />
                        <stop offset="100%" stopColor="#f3fc46" />
                        </linearGradient>
                    </defs>
                    {/* Background Trace */}
                    <path 
                        d="M 150 50 C 300 50, 300 300, 450 300 C 600 300, 600 50, 750 50 C 900 50, 900 300, 1050 300"
                        fill="none"
                        stroke="#e4e4e7" 
                        strokeWidth="4"
                        strokeDasharray="12 12"
                        className="opacity-50"
                    />
                    {/* Animated Drawing Path */}
                    <path 
                        d="M 150 50 C 300 50, 300 300, 450 300 C 600 300, 600 50, 750 50 C 900 50, 900 300, 1050 300"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        strokeDasharray="2000"
                        strokeDashoffset="2000"
                        className={`${startLineAnimation ? 'animate-draw-line' : ''}`}
                    />
                </svg>
            </div>

            <div className="grid grid-cols-4 gap-4 relative z-10 h-full">
                {PROCESS_STEPS.map((step, index) => {
                     // 200ms delay increments for a walking effect
                     const delay = (index * 400); 
                     
                     // Even indices (0, 2) are Top. Odd indices (1, 3) are Bottom.
                     const isBottom = index % 2 !== 0;
                     
                     return (
                    <Reveal key={index} delay={delay} className={`h-full flex ${isBottom ? 'items-end' : 'items-start'} justify-center w-full`}>
                        <div className={`relative flex flex-col items-center text-center w-full max-w-[280px] ${isBottom ? 'flex-col-reverse' : ''}`}>
                             
                             {/* The Node (Anchor Point) */}
                             <div className="w-16 h-16 rounded-full bg-white border-[6px] border-zinc-100 flex items-center justify-center relative z-20 shadow-[0_0_0_8px_rgba(255,255,255,1)] my-6 transition-transform duration-500 hover:scale-110">
                                <span className="font-display font-bold text-xl text-zinc-400">{step.number}</span>
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-[#f3fc46] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                             </div>
                             
                             {/* The Card */}
                             <div className="group bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-xl shadow-zinc-200/50 hover:border-black transition-all duration-300 w-full relative z-30 hover:-translate-y-2">
                                <h3 className="text-2xl font-bold font-display text-black mb-3">
                                    {step.title}
                                </h3 >
                                <p className="text-zinc-500 font-medium text-sm leading-relaxed">
                                    {step.description}
                                </p>
                             </div>
                        </div>
                    </Reveal>
                )})}
                
                 {/* Finish Line Flag - Appears last */}
                 <Reveal delay={1600} className="absolute right-[8%] bottom-[30px] z-10">
                    <div className="animate-bounce">
                        <Flag className="w-8 h-8 text-black fill-[#f3fc46]" />
                    </div>
                 </Reveal>
            </div>
        </div>

        {/* Mobile Roadmap (Vertical) */}
        <div className="lg:hidden relative pl-6 mt-12">
            {/* Vertical Line */}
            <div className="absolute left-[2.25rem] top-0 bottom-0 w-1 bg-zinc-100"></div>
            <div className="absolute left-[2.25rem] top-0 bottom-0 w-1 opacity-20"
                 style={{ backgroundImage: 'linear-gradient(180deg, #000 50%, transparent 50%)', backgroundSize: '100% 20px' }}></div>

            <div className="flex flex-col gap-16 pb-12">
                {PROCESS_STEPS.map((step, index) => (
                    <Reveal key={index} width="100%" delay={index * 200}>
                        <div className="flex items-start gap-8 relative">
                             {/* Marker */}
                             <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white border-4 border-[#f3fc46] flex items-center justify-center relative z-10 shadow-lg">
                                <span className="font-display font-bold text-xl">{step.number}</span>
                             </div>

                             <div className="pt-1 flex-1">
                                <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-lg">
                                    <h3 className="text-2xl font-bold font-display text-black mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-500 font-medium">
                                        {step.description}
                                    </p>
                                </div>
                             </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Process;