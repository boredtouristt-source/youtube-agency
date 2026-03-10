import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col">

      {/* ── Background: drifting YouTube thumbnail mosaic ── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">

        {/* Thumbnail grid — rotated slightly for cinematic feel */}
        {(() => {
          const imgs = [
            'https://cdn.prod.website-files.com/691e1ad634013b0c7bbacdf9/698e2db0d6106c9017b93176_CGC%20Facebook%20Banner.jpg',
            'https://i.ytimg.com/vi/cd9or9hVpAw/maxresdefault.jpg',
            'https://aliabdaal.com/wp-content/uploads/2025/01/ali-abdaal-author-feel-good-productivity-book.jpg',
            '/1.png',
            '/chuff2.jpg',
            '/fut2.jpg',
            '/2.png',
            '/3.png',
          ];
          const rows = [
            { cls: 'thumb-row thumb-row-l1', order: [0,1,2,3,4,5,6,7] },
            { cls: 'thumb-row thumb-row-r1', order: [3,6,1,2,7,4,0,5] },
            { cls: 'thumb-row thumb-row-l2', order: [4,2,7,5,3,1,6,0] },
            { cls: 'thumb-row thumb-row-r2', order: [1,4,3,6,5,7,0,2] },
          ];
          return (
            <div className="absolute inset-0 flex flex-col justify-center gap-3" style={{ transform: 'rotate(-2deg) scale(1.15)', transformOrigin: 'center' }}>
              {rows.map((row, ri) => (
                <div key={ri} className={row.cls}>
                  {[...row.order, ...row.order].map((idx, i) => (
                    <img key={i} src={imgs[idx]}
                      className="h-44 w-[290px] object-cover rounded-xl flex-shrink-0" alt="" />
                  ))}
                </div>
              ))}
            </div>
          );
        })()}

        {/* Dark veil — makes thumbnails atmospheric, not distracting */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Horizontal vignette — fades edges to black */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, black 0%, transparent 25%, transparent 75%, black 100%)' }} />
        {/* Vertical vignette */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.7) 100%)' }} />

        {/* Brand colour blobs on top of thumbnails */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[#f3fc46] rounded-full blur-[180px] opacity-[0.10]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-600 rounded-full blur-[160px] opacity-[0.14]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-red-900 rounded-full blur-[140px] opacity-[0.20]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      {/* ── Navbar spacer ── */}
      <div className="h-20 shrink-0" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col px-8 md:px-14 pb-10">

        {/* Top row: logo large + services */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10 md:pt-20">

          {/* Brand + tagline */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <h1 className="text-[18vw] md:text-[9vw] lg:text-[8vw] font-display font-bold text-white leading-[0.85] tracking-tighter">
              NATIVE<span className="text-[#f3fc46]">.</span>
            </h1>
            <p className="text-white/50 text-sm md:text-lg font-medium max-w-sm leading-relaxed">
              Transformamos o YouTube num canal estratégico para marcas.
            </p>
          </div>

          {/* Services list — hidden on mobile */}
          <div className="hidden md:flex flex-col gap-3 md:text-right">
            {[
              'Direção Criativa',
              'Edição',
              'Estratégia de Conteúdo',
              'Gestão de Marcas',
            ].map((s) => (
              <span
                key={s}
                className="text-white/70 text-lg md:text-xl font-display font-semibold tracking-tight hover:text-[#f3fc46] transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row: tagline left + founder card right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-auto pt-8">

          {/* Bottom left copy — hidden on mobile */}
          <p className="hidden md:block text-white/40 text-sm font-mono uppercase tracking-widest max-w-xs leading-relaxed">
            © {new Date().getFullYear()} Native Creative Agency
          </p>

          {/* Founder card — full width on mobile */}
          <div className="flex items-center gap-4 bg-white rounded-2xl p-3 pr-5 shadow-2xl w-full md:w-fit">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEFlMtC7gtzpw/profile-displayphoto-scale_200_200/B4DZolynQRGQAY-/0/1761570620869?e=1774483200&v=beta&t=bHFaiGa69H9UKJaPMBCmfHS2_ADOCphL6pWuBZjbAyg"
              alt="Francisco"
              className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-zinc-400 text-xs font-medium">Co-Fundador da Native</p>
                <p className="text-black font-display font-bold text-lg leading-tight">Francisco.</p>
              </div>
              <a
                href="https://calendar.app.google/AETzZfN5aFjXbGj38"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#f3fc46] hover:text-black transition-colors"
              >
                Marcar uma Chamada <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
