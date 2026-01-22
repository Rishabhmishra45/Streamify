import React from 'react';
import { Monitor, Smartphone, Tv, Cast, CheckCircle, Zap, ShieldCheck, Globe } from "lucide-react";

const WaysToWatch = () => {
  const devices = [
    { 
      name: "TV & Streaming", 
      desc: "Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, and Blu-ray players.", 
      icon: <Tv size={48} />,
      features: ["4K Ultra HD", "Dolby Atmos", "Live Sports"],
      status: "Optimized"
    },
    { 
      name: "Mobile & Tablet", 
      desc: "Stream on the go or download for offline viewing on iOS and Android.", 
      icon: <Smartphone size={48} />,
      features: ["Offline Downloads", "Data Saver", "Smart Sync"],
      status: "Available"
    },
    { 
      name: "Computer", 
      desc: "Watch directly on any web browser at Streamify.com. No app required.", 
      icon: <Monitor size={48} />,
      features: ["Multi-window", "Browser Player", "HD Quality"],
      status: "Available"
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-red-600">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-fixed scale-110 grayscale"
        style={{ backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/7ca5bca7-a734-4f86-96d9-f3933c74f28e/6045617a-ecd5-494b-972f-532876118d53/IN-en-20240325-popsignuptwoweeks-perspective_alpha_website_large.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="relative z-10 px-6 md:px-20 py-32 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <header className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 text-red-600">
              <Zap size={20} fill="currentColor" />
              <span className="uppercase tracking-[0.3em] font-black text-xs">Cross-Platform Sync</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85] uppercase">
              WATCH <br />
              <span className="text-red-600">EVERYWHERE.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed font-medium">
              Your favorite stories follow you. Seamlessly transition between devices without missing a single frame.
            </p>
          </header>

          <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 p-6 rounded-3xl hidden lg:block">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
              <span className="font-bold text-sm tracking-widest uppercase">Sync Active</span>
            </div>
            <p className="text-xs text-zinc-500">Connected to: <span className="text-white">iPhone 15 Pro</span></p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {devices.map((device, idx) => (
            <div 
              key={device.name} 
              className="relative group bg-zinc-900/30 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 hover:bg-zinc-800/40 hover:border-red-600/50 transition-all duration-500"
            >
              <div className="inline-block p-6 bg-zinc-800 rounded-[2rem] mb-10 text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-2xl">
                {device.icon}
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold tracking-tight">{device.name}</h3>
                <span className="text-[10px] font-black bg-white/5 px-2 py-1 rounded text-zinc-500 uppercase">{device.status}</span>
              </div>
              
              <p className="text-zinc-400 leading-relaxed mb-10 text-lg">{device.desc}</p>

              <ul className="grid grid-cols-1 gap-4 pt-8 border-t border-white/5">
                {device.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-zinc-300 font-semibold group/item">
                    <CheckCircle size={18} className="text-red-600 group-hover/item:scale-125 transition-transform" />
                    {f}
                  </li>
                ))}
              </ul>

              <span className="absolute bottom-6 right-10 text-8xl font-black text-white/5 pointer-events-none group-hover:text-red-600/10 transition-colors">
                {idx + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-red-600/50 to-zinc-800/50 shadow-2xl overflow-hidden">
          <div className="bg-[#0a0a0a] p-10 md:p-14 rounded-[2.9rem] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative">
                <div className="p-8 bg-zinc-900 rounded-full text-red-600 border border-white/5">
                  <Cast size={48} className="animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 bg-red-600 p-2 rounded-full border-4 border-[#0a0a0a]">
                  <Globe size={16} className="text-white" />
                </div>
              </div>
              <div className="text-center md:text-left space-y-2">
                <h2 className="text-4xl font-black tracking-tight uppercase italic">Universal Casting</h2>
                <p className="text-zinc-500 text-lg max-w-md">Cast directly from your mobile to any Smart TV or projector with a single tap.</p>
              </div>
            </div>
            <button className="whitespace-nowrap px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-2 active:scale-95 shadow-2xl flex items-center gap-3 uppercase tracking-widest text-sm">
              Connect Device
              <ShieldCheck size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToWatch;