import React from 'react';
import { ShieldAlert, Scale, Copyright, FileText, ChevronRight, Gavel, Globe, Lock } from "lucide-react";

const LegalNotices = () => {
  const notices = [
    {
      title: "Intellectual Property",
      content: "Copyright © Streamify 2026. All rights reserved. Every pixel, line of code, and original soundtrack is protected. Unauthorized replication is strictly prohibited under global digital laws.",
      icon: <Copyright size={24} />
    },
    {
      title: "Service Protocols",
      content: "Global Terms of Use apply. By accessing our neural-streaming network, you consent to strict adherence to our digital security and account sharing protocols.",
      icon: <Scale size={24} />
    },
    {
      title: "Privacy Enforcement",
      content: "Privacy is our core foundation. We utilize military-grade encryption (AES-256) to ensure your viewing history and personal data remain absolute and impenetrable.",
      icon: <Lock size={24} />
    },
    {
      title: "Content Protection",
      content: "Streamify Originals are guarded by international copyright treaties. Watermarking and anti-piracy AI systems are active on all licensed streams.",
      icon: <ShieldAlert size={24} />
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/5 rounded-full text-zinc-500 text-[10px] font-black tracking-[0.3em] uppercase">
            <Gavel size={14} className="text-red-600" />
            Compliance & Standards
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8]">
            LEGAL <br /> <span className="text-red-600 text-outline">NOTICES.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6">
            <p className="text-zinc-500 text-xl max-w-2xl font-medium italic">
              Formal declarations regarding Streamify’s global operations, trademark protection, and statutory transparency.
            </p>
            <div className="flex flex-col items-start md:items-end shrink-0">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">Last Revision</span>
              <span className="font-mono text-zinc-300 bg-white/5 border border-white/10 px-4 py-1 rounded-full text-xs italic">21.01.2026</span>
            </div>
          </div>
        </header>

        <div className="grid gap-4">
          {notices.map((notice, i) => (
            <div
              key={i}
              className="group bg-zinc-900/20 backdrop-blur-3xl border border-white/5 hover:border-red-600/30 rounded-[2.5rem] p-10 transition-all duration-500 cursor-default"
            >
              <div className="flex flex-col md:flex-row items-start gap-10">
                <div className="p-5 bg-zinc-800 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-2xl shrink-0">
                  {notice.icon}
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter group-hover:text-red-600 transition-colors">
                      {notice.title}
                    </h3>
                    <Globe className="text-zinc-800 group-hover:text-zinc-600 transition-colors" size={20} />
                  </div>
                  <p className="text-zinc-500 text-lg leading-relaxed font-medium italic">
                    {notice.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center text-center space-y-8">
          <div className="w-px h-24 bg-gradient-to-b from-red-600 to-transparent" />
          <div className="space-y-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500 italic">Official Inquiry</h4>
            <p className="text-zinc-400 max-w-lg leading-relaxed font-medium">
              For specific legal dossiers, subpoena requests, or intellectual property disputes, please direct all formal correspondence to our digital legal vault.
            </p>
            <button className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-red-600 hover:text-white transition-all text-xs uppercase tracking-widest shadow-2xl">
              Contact Legal Dept.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotices;