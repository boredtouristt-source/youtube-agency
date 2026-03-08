import React from 'react';
import { Clock, Play, CheckCircle2 } from 'lucide-react';

const WorkflowChat: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000">
      {/* Card 1: The Request */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-4 mb-4 shadow-xl shadow-zinc-200/50 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-start gap-3">
           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-lg">
              JD
           </div>
           <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                 <span className="text-black font-bold text-sm">John (CMO)</span>
                 <span className="text-zinc-400 text-[10px]">10:42 AM</span>
              </div>
              <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-zinc-700 text-sm leading-snug font-medium">
                 A queda de retenção aos 0:15 está a prejudicar-nos. Podemos fazer um remix do gancho para os Shorts?
              </div>
           </div>
        </div>
      </div>

      {/* Connecting Line */}
      <div className="absolute left-8 top-[85px] w-[2px] h-8 bg-zinc-200"></div>

      {/* Card 2: The Response (Agency) */}
      <div className="bg-white border border-purple-100 rounded-2xl p-4 mb-4 shadow-xl shadow-purple-100/50 ml-8 relative">
        <div className="absolute -left-2 top-4 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-purple-100 border-b-[8px] border-b-transparent"></div>
        <div className="flex items-start gap-3">
           <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs border border-zinc-100">
              N
           </div>
           <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                 <span className="text-black font-bold text-sm">Equipa Native</span>
                 <span className="text-zinc-400 text-[10px]">10:55 AM</span>
              </div>
              <div className="bg-purple-50 rounded-2xl rounded-tl-none p-3 text-zinc-800 text-sm leading-snug mb-2 font-medium">
                 Já a analisar. Vamos criar um loop de texto cinético para manter o ritmo elevado.
              </div>
              <div className="flex items-center gap-2 text-[10px] text-purple-700 font-mono uppercase bg-purple-100 px-2 py-1 rounded-full inline-block font-bold">
                 <Clock className="w-3 h-3" />
                 <span>ETA: 20 MINS</span>
              </div>
           </div>
        </div>
      </div>

       {/* Card 3: The Delivery */}
       <div className="bg-white border border-zinc-200 rounded-2xl p-3 shadow-2xl ml-8 scale-95 origin-top-left">
        <div className="flex items-start gap-3">
           <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px] border border-zinc-100">
              N
           </div>
           <div className="flex-1">
              <div className="bg-zinc-900 rounded-lg overflow-hidden relative group cursor-pointer ring-4 ring-zinc-50">
                 <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                    <img src="https://picsum.photos/id/26/300/180" className="w-full h-full object-cover opacity-60" />
                    <Play className="w-8 h-8 text-white fill-white absolute z-10" />
                 </div>
                 <div className="p-2 flex justify-between items-center bg-white border-t border-zinc-100">
                    <span className="text-[10px] text-zinc-600 font-mono font-bold">Remix_V3.mp4</span>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowChat;