import React, { useState } from 'react';
import { Gauge, Wifi, Play, CheckCircle2, AlertCircle, RefreshCw, Activity } from 'lucide-react';

const SpeedTest = () => {
  const [speed, setSpeed] = useState(0);
  const [isTesting, setIsTesting] = useState(false);
  const [testComplete, setTestComplete] = useState(false);

  const startTest = () => {
    setIsTesting(true);
    setTestComplete(false);
    setSpeed(0);

    let currentSpeed = 0;
    const interval = setInterval(() => {
      currentSpeed += Math.random() * 18;
      if (currentSpeed >= 82) { 
        setSpeed(82.5);
        setIsTesting(false);
        setTestComplete(true);
        clearInterval(interval);
      } else {
        setSpeed(parseFloat(currentSpeed.toFixed(1)));
      }
    }, 120);
  };

  const getQualityRecommendation = (mbps) => {
    if (mbps >= 25) return { label: "4K ULTRA HD", color: "text-green-500", desc: "Perfect for cinematic quality." };
    if (mbps >= 5) return { label: "FULL HD (1080P)", color: "text-yellow-500", desc: "Great for high definition streaming." };
    return { label: "STANDARD QUALITY", color: "text-red-500", desc: "May experience buffering at high resolutions." };
  };

  const recommendation = getQualityRecommendation(speed);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <header className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-xs font-black tracking-widest uppercase">
            Performance Diagnostics
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
            NETWORK <span className="text-red-600 text-outline">PULSE</span>
          </h1>
          <p className="text-zinc-500 text-lg font-medium max-w-xl mx-auto italic">
            Optimizing your connection for the world's most demanding content.
          </p>
        </header>

        <div className="relative flex flex-col items-center justify-center mb-20">
          <div className={`relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center rounded-full border-[10px] transition-all duration-700 ${isTesting ? 'border-red-600 border-t-transparent animate-spin' : 'border-zinc-900 shadow-2xl shadow-red-600/5'}`}>
            <div className={`absolute inset-6 rounded-full border-2 border-dashed border-zinc-800 ${isTesting ? 'opacity-30' : 'opacity-100'}`}></div>
            <div className="text-center rotate-0 animate-none relative z-20"> 
              <span className="block text-8xl md:text-9xl font-black tabular-nums tracking-tighter leading-none">
                {speed}
              </span>
              <span className="text-zinc-500 font-black tracking-[0.4em] uppercase text-sm">Mbps</span>
            </div>
          </div>

          {!isTesting && !testComplete && (
            <button 
              onClick={startTest}
              className="mt-14 px-14 py-6 bg-white text-black font-black rounded-2xl transition-all hover:bg-red-600 hover:text-white hover:-translate-y-1 active:scale-95 shadow-2xl flex items-center gap-3 uppercase tracking-widest text-sm"
            >
              Initialize Test <Activity size={18} />
            </button>
          )}

          {testComplete && (
            <button 
              onClick={startTest}
              className="mt-10 px-6 py-3 bg-zinc-900/50 border border-white/5 rounded-full text-zinc-400 hover:text-white flex items-center gap-2 font-bold transition-all text-xs uppercase tracking-widest"
            >
              <RefreshCw size={14} /> Re-analyze Connection
            </button>
          )}
        </div>

        {testComplete && (
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="bg-zinc-900/20 backdrop-blur-3xl border border-white/5 p-10 rounded-[3rem] text-left group hover:border-red-600/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-600/10 rounded-xl text-red-600">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">Streaming Score</h3>
              </div>
              <p className={`text-3xl font-black mb-2 tracking-tighter ${recommendation.color}`}>{recommendation.label}</p>
              <p className="text-zinc-500 font-medium leading-relaxed">{recommendation.desc}</p>
            </div>

            <div className="bg-zinc-900/20 backdrop-blur-3xl border border-white/5 p-10 rounded-[3rem] text-left group hover:border-red-600/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-600/10 rounded-xl text-red-600">
                  <Wifi size={24} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">Signal Metrics</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-zinc-500 font-bold text-sm uppercase">Latency</span>
                  <span className="font-black text-green-500 tracking-widest">12 MS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 font-bold text-sm uppercase">Stability</span>
                  <span className="font-black text-green-500 tracking-widest">99.8%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 p-8 bg-zinc-900/10 border border-zinc-900 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 text-center md:text-left max-w-3xl mx-auto">
          <div className="p-4 bg-zinc-800/50 rounded-2xl text-zinc-400">
            <AlertCircle size={24} />
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed font-medium">
            Streamify recommends <span className="text-white font-bold">25 Mbps</span> for seamless 4K playback. If your speeds are lower, try moving closer to your router or using a wired connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeedTest;