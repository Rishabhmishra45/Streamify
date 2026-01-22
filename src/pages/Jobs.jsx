import React from "react";
import { Briefcase, MapPin, ArrowRight, Globe, Zap, Heart, Star, Sparkles } from "lucide-react";

const JobCard = ({ title, location, type }) => {
  return (
    <div className="group relative p-8 bg-zinc-900/20 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] hover:bg-zinc-900/40 hover:border-red-600/50 transition-all duration-500 overflow-hidden shadow-2xl">
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-zinc-800 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg">
            <Briefcase size={24} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-white/5">
            {type || "Full-Time"}
          </span>
        </div>
        
        <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-2 group-hover:text-red-600 transition-colors">
          {title}
        </h2>
        
        <div className="flex items-center gap-2 text-zinc-500 font-bold text-sm mb-8 italic">
          <MapPin size={16} className="text-red-900" />
          {location}
        </div>
        
        <button className="w-full py-4 bg-white text-black rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:-translate-y-1">
          Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const Jobs = () => {
  const openings = [
    { title: "Frontend Architect", location: "Mumbai, India", type: "Hybrid" },
    { title: "Backend Systems Lead", location: "Bangalore, India", type: "On-site" },
    { title: "Lead UI/UX Designer", location: "Remote", type: "Full-Time" },
    { title: "AI/ML Scientist", location: "Hyderabad, India", type: "Hybrid" },
    { title: "Cloud DevOps Expert", location: "Remote", type: "Contract" },
    { title: "Principal Product Manager", location: "Delhi, India", type: "Full-Time" },
  ];

  const perks = [
    { icon: <Globe />, title: "Remote First", desc: "Work from anywhere in the world." },
    { icon: <Zap />, title: "Hyper Growth", desc: "Fast-track your career trajectory." },
    { icon: <Heart />, title: "Wellness Plus", desc: "Comprehensive health & mental support." },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="text-center mb-32 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-white/5 rounded-full text-red-500 text-xs font-black tracking-widest uppercase shadow-xl">
            <Sparkles size={14} /> Join the Evolution
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.8] mb-10">
            BUILD THE <br /> <span className="text-red-600 text-outline">FUTURE.</span>
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium italic leading-relaxed">
            We don't just stream content; we engineer experiences. Join a global team of rebels and visionaries.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {perks.map((perk, i) => (
            <div key={i} className="p-10 bg-zinc-900/10 border border-white/5 rounded-[3rem] text-center group hover:bg-zinc-900/30 transition-all">
              <div className="mx-auto w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                {perk.icon}
              </div>
              <h3 className="text-xl font-black uppercase italic mb-2 tracking-tight">{perk.title}</h3>
              <p className="text-zinc-600 font-medium text-sm">{perk.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter flex items-center gap-4">
              <Star className="text-red-600" /> Open Positions
            </h2>
            <p className="text-zinc-500 mt-2 font-bold uppercase tracking-widest text-[10px]">Filter by Engineering, Product, or Design</p>
          </div>
          <div className="flex gap-4">
            <span className="px-6 py-2 bg-red-600 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer">All Jobs</span>
            <span className="px-6 py-2 bg-zinc-900 rounded-full text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-zinc-800 transition-colors">Engineering</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {openings.map((job, i) => (
            <JobCard key={i} title={job.title} location={job.location} type={job.type} />
          ))}
        </div>

        <div className="mt-32 p-16 bg-gradient-to-br from-zinc-900/50 to-red-950/20 rounded-[4rem] border border-white/5 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
              DON'T SEE A <span className="text-red-600">ROLE?</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-10 font-medium max-w-xl mx-auto italic">
              We're always looking for exceptional talent. Send us your resume for our future talent pool.
            </p>
            <button className="px-12 py-6 bg-red-600 text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all shadow-2xl uppercase tracking-widest text-xs">
              General Application
            </button>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(229,9,20,0.05)_0%,transparent_70%)] pointer-events-none" />
        </div>

      </div>
    </div>
  );
};

export default Jobs;