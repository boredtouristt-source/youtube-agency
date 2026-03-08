import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
           <div className="mb-8 md:mb-0">
              <a href="#" className="text-2xl font-bold font-display text-black">
                Native.
              </a>
              <p className="text-zinc-500 text-sm mt-2 font-medium">
                YouTube Strategic Partner for <br />Industry Leaders.
              </p>
           </div>
           
           <div className="flex gap-8">
              <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Instagram</a>
              <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">LinkedIn</a>
           </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 border-t border-zinc-100 pt-8 font-medium">
           <p>&copy; {new Date().getFullYear()} Native Creative Agency. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;