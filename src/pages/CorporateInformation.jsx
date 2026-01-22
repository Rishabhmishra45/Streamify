import React from 'react';
import { Building2, Mail, Hash, MapPin, ExternalLink, ShieldCheck, Landmark } from "lucide-react";

const CorporateInformation = () => {
  const info = [
    { 
      label: "Entity Name", 
      value: "Streamify Entertainment India Pvt. Ltd.",
      icon: <Building2 size={20} />
    },
    { 
      label: "CIN Number", 
      value: "U74999MH2026PTC123456",
      icon: <Hash size={20} />
    },
    { 
      label: "Registered Office", 
      value: "123, Tech Park, Mumbai, Maharashtra - 400001, India",
      icon: <MapPin size={20} />
    },
    { 
      label: "Corporate Contact", 
      value: "corporate-in@streamify.com",
      icon: <Mail size={20} />
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-zinc-500 text-[10px] font-black tracking-[0.2em] uppercase">
            <ShieldCheck size={12} className="text-red-600" />
            Statutory Transparency
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
            CORPORATE <br /> <span className="text-red-600 text-outline">INTEL.</span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl font-medium italic">
            Official registration and compliance details for Streamify operations in the Republic of India.
          </p>
        </header>

        <div className="bg-zinc-900/10 border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
          <div className="grid grid-cols-1">
            {info.map((item, index) => (
              <div 
                key={item.label} 
                className={`flex flex-col md:flex-row md:items-center p-10 gap-6 md:gap-16 group transition-all duration-500 ${
                  index !== info.length - 1 ? "border-b border-white/5" : ""
                } hover:bg-white/5`}
              >
                <div className="flex items-center gap-4 md:w-1/3">
                  <div className="p-3 bg-zinc-800 rounded-xl text-zinc-500 group-hover:text-red-600 group-hover:bg-red-600/10 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-zinc-600 uppercase tracking-[0.2em] text-[10px] font-black">
                    {item.label}
                  </span>
                </div>
                <div className="md:flex-1">
                  <p className="text-2xl text-zinc-200 font-black tracking-tight uppercase italic group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] flex items-center justify-between group cursor-pointer hover:border-red-600/30 transition-all">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-zinc-800 rounded-2xl text-zinc-500 group-hover:text-red-600 transition-colors">
                <Landmark size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Compliance</p>
                <p className="text-lg font-black uppercase italic">Grievance Redressal</p>
              </div>
            </div>
            <ExternalLink size={20} className="text-zinc-700 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          
          <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] flex items-center justify-between group cursor-pointer hover:border-red-600/30 transition-all">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-zinc-800 rounded-2xl text-zinc-500 group-hover:text-red-600 transition-colors">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Regulatory</p>
                <p className="text-lg font-black uppercase italic">Self-Regulatory Body</p>
              </div>
            </div>
            <ExternalLink size={20} className="text-zinc-700 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>

        <div className="mt-24 p-10 bg-zinc-900/5 border border-zinc-900 rounded-[3rem] flex items-start gap-6">
          <div className="w-1 h-12 bg-red-600 rounded-full shrink-0" />
          <p className="text-zinc-600 text-xs leading-relaxed font-medium italic">
            <span className="text-zinc-400 font-black not-italic uppercase tracking-widest block mb-2">Legal Disclaimer</span> 
            In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the above information serves as a formal declaration of our corporate presence. For user-level support, technical issues, or billing inquiries, please refer to the primary 
            <span className="text-red-900 font-black hover:text-red-600 cursor-pointer ml-1 transition-colors underline decoration-red-900/20 underline-offset-4">Help Centre Portal</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateInformation;