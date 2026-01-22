import React from 'react';
import { ShieldCheck, Eye, Lock, Database, UserCheck, Bell, Smartphone, Globe, ChevronRight, Fingerprint, ShieldAlert } from "lucide-react";

const Privacy = () => {
  const principles = [
    { icon: <Lock className="text-red-600" size={28} />, title: "Absolute Security", desc: "Military-grade AES-256 encryption protects your digital footprint at every touchpoint." },
    { icon: <Eye className="text-red-600" size={28} />, title: "Total Transparency", desc: "No hidden trackers. We disclose every byte of data used to fuel your streaming experience." },
    { icon: <UserCheck className="text-red-600" size={28} />, title: "Sovereign Control", desc: "Your data, your rules. Export, modify, or terminate your digital identity instantly." }
  ];

  const dataSections = [
    {
      title: "Data Acquisition",
      icon: <Fingerprint size={24} />,
      items: [
        "Identity Credentials (Encrypted Email, Auth Tokens)",
        "Biometric Metadata (Device ID, Latency Logs)",
        "Neural Preferences (Watch Patterns, Interaction Heatmaps)",
        "Financial Signatures (Tokenized Payment Strings)"
      ]
    },
    {
      title: "Utilization Logic",
      icon: <Database size={24} />,
      items: [
        "Hyper-Personalized Content Sequencing",
        "Predictive Fraud Detection & Threat Mitigation",
        "Network Optimization for Ultra-Low Latency",
        "Service Evolution via Anonymous Analytics"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      
      <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(229,9,20,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="text-center mb-32 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-zinc-900/80 backdrop-blur-xl border border-white/5 rounded-full text-red-500 text-[10px] font-black tracking-[0.4em] uppercase shadow-2xl">
            <ShieldAlert size={14} /> Encrypted Session Active
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8] mb-10">
            PROTECTING <br /> <span className="text-red-600 text-outline">IDENTITY.</span>
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium italic leading-relaxed">
            Privacy is not a feature; it is our foundation. Explore how we shield your global entertainment journey.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {principles.map((p, i) => (
            <div key={i} className="group p-12 bg-zinc-900/10 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] hover:bg-zinc-900/30 hover:border-red-600/50 transition-all duration-500">
              <div className="mb-8 p-5 bg-zinc-800/50 w-fit rounded-[2rem] group-hover:bg-red-600/10 group-hover:scale-110 transition-all">
                {p.icon}
              </div>
              <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">{p.title}</h3>
              <p className="text-zinc-600 font-medium italic leading-relaxed group-hover:text-zinc-400 transition-colors">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {dataSections.map((section, i) => (
            <div key={i} className="bg-zinc-900/20 border border-white/5 p-12 rounded-[4rem] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-10">
                  <div className="p-4 bg-red-600/10 text-red-600 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-all">
                    {section.icon}
                  </div>
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter">{section.title}</h2>
                </div>
                <ul className="space-y-6">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-5 text-zinc-500 font-bold group/item">
                      <div className="h-2 w-2 bg-red-900 rounded-full mt-2 group-hover/item:bg-red-600 group-hover/item:scale-150 transition-all" />
                      <span className="group-hover/item:text-zinc-200 transition-colors uppercase italic text-sm tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Database size={120} />
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-1 bg-gradient-to-r from-red-600 to-zinc-800 rounded-[4rem]">
          <div className="bg-[#0a0a0a] rounded-[3.9rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
              <div className="p-8 bg-zinc-900 rounded-[3rem] shadow-inner text-red-600 ring-1 ring-white/10">
                <Globe size={48} />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Command Center</h2>
                <p className="text-zinc-500 text-lg font-medium italic max-w-md leading-relaxed">
                  Instant access to your privacy vault. Manage streaming preferences and biometric data sharing.
                </p>
              </div>
            </div>
            <button className="w-full lg:w-auto bg-white text-black font-black px-16 py-7 rounded-[2rem] hover:bg-red-600 hover:text-white transition-all text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 group shadow-2xl">
              GO TO SETTINGS <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-32 border-t border-white/5 pt-20 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Legal Compliance</h4>
            <p className="text-zinc-600 text-sm font-medium italic max-w-sm">
              Streamify strictly adheres to GDPR, CCPA, and APPI frameworks, ensuring a unified standard of safety across 190+ countries.
            </p>
          </div>
          <div className="text-left md:text-right space-y-4">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Data Protection Office</p>
            <a href="mailto:privacy@streamify.com" className="text-3xl font-black uppercase italic tracking-tighter hover:text-red-600 transition-colors underline decoration-red-900/30 underline-offset-8">
              privacy@streamify.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;