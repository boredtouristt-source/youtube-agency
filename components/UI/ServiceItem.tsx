import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface ServiceItemProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  isLast: boolean;
  image: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ id, title, description, tags, isLast, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group border-t border-zinc-200 transition-colors duration-500 ${isOpen ? 'bg-zinc-50' : 'hover:bg-zinc-50'} ${isLast ? 'border-b' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-12 px-4 md:px-0 flex items-start md:items-center justify-between text-left focus:outline-none"
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 lg:gap-32 w-full">
          <span className="font-mono text-zinc-400 text-sm">({id})</span>
          <h3 className="text-3xl md:text-5xl font-display font-medium text-black group-hover:pl-4 transition-all duration-300">
            {title}
          </h3>
        </div>
        
        <div className="flex-shrink-0 ml-4 md:ml-0 p-2 rounded-full border border-zinc-300 text-zinc-400 group-hover:border-black group-hover:text-black transition-colors">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-12' : 'max-h-0 opacity-0'}`}
      >
        <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3 hidden md:block">
               {/* Spacer to align with title */}
            </div>
            <div className="md:col-span-3">
               <div className="w-32 h-20 rounded-lg overflow-hidden relative border border-zinc-200 shadow-sm">
                  <img 
                    src={image} 
                    alt="Service visual" 
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
               </div>
            </div>
            <div className="md:col-span-6 pr-4 md:pr-12">
               <p className="text-zinc-600 text-lg leading-relaxed mb-8 font-medium">
                 {description}
               </p>
               <div className="flex flex-wrap gap-3">
                 {tags.map((tag) => (
                   <span key={tag} className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-xs font-bold text-zinc-600 uppercase tracking-wide shadow-sm">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;