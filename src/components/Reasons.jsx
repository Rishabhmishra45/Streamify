import React from 'react';

const Reason = () => {
  const features = [
    {
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: "📺" 
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      icon: "📥"
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: "🔭"
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: "👦"
    }
  ];

  return (
    <section className="bg-black text-white py-12 px-6 md:px-32 lg:px-40">
      <h2 className="text-xl md:text-2xl font-semibold mb-5 tracking-tight">
        More reasons to join
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="relative p-6 rounded-2xl min-h-[260px] flex flex-col justify-between
                       bg-gradient-to-br from-[#192241] via-[#210e17] to-[#131313]
                       border border-white/10 hover:ring-1 hover:ring-white/20 transition-all duration-300"
          >
            <div>
              <h3 className="text-[1.35rem] font-bold leading-7 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-[0.95rem] leading-snug font-light">
                {feature.description}
              </p>
            </div>
            
            <div className="flex justify-end pr-1 pb-1">
              <span className="text-5xl opacity-80 brightness-75 grayscale-[0.2]">
                {feature.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reason;