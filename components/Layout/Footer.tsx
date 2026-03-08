import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
           <div className="mb-8 md:mb-0">
              <a href="#" className="text-2xl font-bold font-display text-white">
                Native<span className="text-[#f3fc46]">.</span>
              </a>
              <p className="text-white/40 text-sm mt-2 font-medium">
                Parceiro Estratégico do YouTube para <br />Líderes da Indústria.
              </p>
           </div>
           
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/20 border-t border-white/10 pt-8 font-medium">
           <p>&copy; {new Date().getFullYear()} Native Creative Agency. Todos os direitos reservados.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;