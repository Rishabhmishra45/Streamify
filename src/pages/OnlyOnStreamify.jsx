import React from 'react';
import { Play, Info, Plus, ChevronRight, Star } from 'lucide-react';

const OnlyOnStreamify = () => {
  const originals = [
    { 
      title: "Stranger Nights", 
      tag: "Supernatural Thriller", 
      img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
      rating: "9.8",
      episodes: "Season 4 Now Streaming"
    },
    { 
      title: "The Last Code", 
      tag: "Sci-Fi Drama", 
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
      rating: "9.2",
      episodes: "New Episodes Weekly"
    },
    { 
      title: "Mumbai Dreams", 
      tag: "Crime Drama", 
      img: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=2070&auto=format&fit=crop",
      rating: "9.5",
      episodes: "Full Season Available"
    },
    { 
      title: "Cyber Justice", 
      tag: "Action", 
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      rating: "8.9",
      episodes: "Limited Series"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none" />

      <div className="relative z-10 px-6 md:px-20 py-32 max-w-7xl mx-auto">
        
        {/* --- Hero Header --- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.3em] text-sm uppercase">Originals</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.8] uppercase">
              ONLY ON <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">STREAMIFY</span>
            </h1>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-sm leading-relaxed border-l border-zinc-800 pl-8">
            Unforgettable stories. Exclusive premieres. Award-winning entertainment you won't find anywhere else.
          </p>
        </header>

        {/* --- Featured Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {originals.map((show) => (
            <div 
              key={show.title} 
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(229,9,20,0.2)]"
            >
              {/* Poster Image */}
              <div className="aspect-[2/3] relative">
                <img 
                  src={show.img} 
                  alt={show.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold">{show.rating}</span>
                </div>
              </div>

              {/* Content Details */}
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-red-500 text-[10px] font-black tracking-[0.2em] uppercase mb-2">
                  {show.tag}
                </p>
                <h3 className="text-3xl font-black mb-2 tracking-tight">
                  {show.title}
                </h3>
                <p className="text-zinc-400 text-xs mb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  {show.episodes}
                </p>

                {/* Interactive Controls */}
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <button className="flex-1 bg-white text-black py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-colors">
                    <Play size={18} fill="currentColor" /> Watch
                  </button>
                  <button className="p-3 bg-zinc-800/80 backdrop-blur-md rounded-lg border border-white/10 hover:bg-zinc-700">
                    <Plus size={20} />
                  </button>
                  <button className="p-3 bg-zinc-800/80 backdrop-blur-md rounded-lg border border-white/10 hover:bg-zinc-700">
                    <Info size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Exploration --- */}
        <div className="mt-32 text-center py-20 border-t border-zinc-900">
          <h2 className="text-4xl font-bold mb-8">Ready to start your journey?</h2>
          <button className="group flex items-center gap-3 mx-auto bg-red-600 px-10 py-5 rounded-full font-black text-sm tracking-widest hover:bg-red-700 transition-all uppercase">
            Join Now to Watch <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default OnlyOnStreamify;