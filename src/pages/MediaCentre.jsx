import React from 'react';
import { Newspaper, Calendar, ArrowRight, Share2, Award, Zap, Users, Download } from "lucide-react";

const MediaCentre = () => {
  const news = [
    {
      title: "Streamify crosses 10 million active global users",
      date: "JAN 12, 2026",
      type: "Press Release",
      icon: <Users size={16} />,
      desc: "Streamify reaches a major strategic milestone, solidifying its position as a top-tier global entertainment hub."
    },
    {
      title: "New original series 'Project X' launching this month",
      date: "JAN 05, 2026",
      type: "Update",
      icon: <Zap size={16} />,
      desc: "An ultra-high-definition lineup of cinematic original content is arriving exclusively for our premium subscribers."
    },
    {
      title: "Streamify wins 'Best Streaming Platform 2026'",
      date: "DEC 28, 2025",
      type: "Award",
      icon: <Award size={16} />,
      desc: "The Global Media Academy has recognized Streamify for its innovative UI and superior 8K streaming technology."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/5 rounded-full text-red-600 text-[10px] font-black tracking-[0.3em] uppercase shadow-xl">
              <Newspaper size={14} /> Newsroom & PR
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8]">
              MEDIA <br /> <span className="text-red-600 text-outline">CENTRE.</span>
            </h1>
            <p className="text-zinc-500 text-xl max-w-2xl font-medium italic">
              Official briefings, brand assets, and the latest headlines from the heart of Streamify.
            </p>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-2xl">
            <Download size={16} /> Media Kit
          </button>
        </header>

        <div className="mb-20 p-12 bg-zinc-900/10 border border-white/5 rounded-[4rem] group hover:border-red-600/30 transition-all cursor-pointer">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 h-80 bg-zinc-800 rounded-[3rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="px-4 py-1 bg-red-600 rounded-full text-[10px] font-black uppercase tracking-widest">Featured Story</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-tight group-hover:text-red-600 transition-colors">
                Redefining the Future of Mobile Entertainment
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed italic">
                Our latest research into low-latency mobile streaming is set to change how 100 million people watch content on the move.
              </p>
              <div className="flex items-center gap-6 text-zinc-600">
                <span className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest"><Calendar size={14} /> Jan 20, 2026</span>
                <span className="w-px h-4 bg-zinc-800" />
                <span className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest underline decoration-red-600 underline-offset-4">Read Full Brief</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900/20 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 flex flex-col justify-between hover:bg-zinc-900/40 hover:border-red-600/30 transition-all duration-500 group"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded-full text-zinc-400 text-[10px] font-black uppercase tracking-widest group-hover:bg-red-600/10 group-hover:text-red-600 transition-colors">
                    {item.icon} {item.type}
                  </div>
                  <Share2 size={18} className="text-zinc-800 hover:text-white cursor-pointer transition-colors" />
                </div>

                <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-tight group-hover:text-white transition-colors">
                  {item.title}
                </h2>

                <p className="text-zinc-500 text-base font-medium leading-relaxed italic">
                  {item.desc}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                <span className="text-[10px] font-black text-zinc-600 tracking-widest">{item.date}</span>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-white transition-colors">
                  Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-zinc-900/10 border border-zinc-900 rounded-[4rem] flex flex-col items-center text-center">
          <h3 className="text-3xl font-black uppercase italic mb-6 tracking-tighter">Journalist Inquiries</h3>
          <p className="text-zinc-500 text-lg max-w-xl mb-10 font-medium italic">
            Need exclusive assets or an executive interview? Our PR team is standing by to assist with your story.
          </p>
          <a href="mailto:press@streamify.com" className="text-white text-xl font-black uppercase italic tracking-widest underline decoration-red-600 decoration-4 underline-offset-8 hover:text-red-600 transition-colors">
            press@streamify.com
          </a>
        </div>

      </div>
    </div>
  );
};

export default MediaCentre;