import React from 'react';
import { ScrollText, ShieldAlert, Scale, Clock, ChevronRight, Download, ArrowRight } from "lucide-react";

const TermsOfUse = () => {
  const sections = [
    { 
      id: "01",
      title: "Acceptance of Terms", 
      summary: "By using the app, you agree to these rules.",
      content: "By accessing or using Streamify, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree, you are prohibited from using the service." 
    },
    { 
      id: "02",
      title: "Membership & Billing", 
      summary: "Cancel anytime before your next billing date.",
      content: "Your membership continues until terminated. We charge the membership fee to your chosen Payment Method. You must cancel before your monthly renewal to avoid being billed for the next month." 
    },
    { 
      id: "03",
      title: "Streaming Quality", 
      summary: "Quality depends on your internet speed.",
      content: "Streaming quality may vary by device and is subject to internet bandwidth. We use adaptive bitrate streaming to provide the best experience based on your connection speed." 
    },
    { 
      id: "04",
      title: "Account Security", 
      summary: "Keep your password safe; you are responsible for it.",
      content: "The member who created the account has access and control over the account. To maintain control, the Account Owner should not reveal the password or Payment Method details to anyone." 
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      
      <div className="absolute top-0 left-0 w-full h-[700px] bg-gradient-to-b from-red-900/10 via-black to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-xs font-black tracking-widest uppercase">
              Legal Documentation
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              TERMS OF <span className="text-red-600">SERVICE</span>
            </h1>
            <p className="text-zinc-500 font-medium flex items-center gap-2">
              <Clock size={16} /> Last Revised: January 21, 2026
            </p>
          </div>
          
          <button className="flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-white/5 rounded-2xl font-bold hover:bg-white hover:text-black transition-all group">
            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            Download PDF
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Quick Navigation</h4>
              <nav className="flex flex-col gap-3">
                {sections.map(s => (
                  <a key={s.id} href={`#section-${s.id}`} className="text-zinc-400 hover:text-red-600 font-bold transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="p-6 bg-red-600/5 border border-red-600/20 rounded-3xl">
              <h4 className="font-bold mb-2">Need Help?</h4>
              <p className="text-xs text-zinc-500 mb-4">Our legal team is available for clarifications regarding your rights.</p>
              <a href="/contact" className="text-xs font-black text-red-600 uppercase hover:underline">Contact Legal</a>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] group hover:border-red-600/30 transition-all">
                <ShieldAlert className="text-red-600 mb-4" size={32} />
                <h4 className="font-black text-xl mb-2 uppercase tracking-tight">Privacy Policy</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">Your data is encrypted and never sold to third parties. We prioritize user anonymity where possible.</p>
              </div>
              <div className="p-8 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] group hover:border-red-600/30 transition-all">
                <Scale className="text-red-600 mb-4" size={32} />
                <h4 className="font-black text-xl mb-2 uppercase tracking-tight">License Agreement</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">Streamify provides a non-exclusive license for personal, non-commercial entertainment only.</p>
              </div>
            </div>

            <div className="space-y-8">
              {sections.map((item) => (
                <section 
                  key={item.id} 
                  id={`section-${item.id}`}
                  className="group relative p-10 bg-zinc-900/20 border border-white/5 rounded-[3rem] hover:bg-zinc-900/40 transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="shrink-0">
                      <span className="text-5xl font-black text-zinc-800 group-hover:text-red-600/20 transition-colors">
                        {item.id}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black tracking-tighter uppercase group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                      <div className="p-4 bg-white/5 rounded-2xl border-l-4 border-red-600">
                        <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-1">In short</p>
                        <p className="text-sm text-zinc-300 italic font-medium">{item.summary}</p>
                      </div>
                      <p className="text-zinc-400 leading-relaxed text-lg font-medium">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <div className="p-12 text-center border-t border-zinc-900">
              <p className="text-zinc-500 mb-8 max-w-md mx-auto">By continuing to use our platform, you acknowledge that you have read and understood these terms.</p>
              <button className="px-12 py-5 bg-red-600 text-white font-black rounded-2xl hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                I UNDERSTAND & AGREE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;