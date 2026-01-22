import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-[url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg')] bg-cover bg-center text-white">
      
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-lg md:text-2xl mt-4 font-medium">
          Watch anywhere. Cancel anytime.
        </p>
        
        <div className="mt-8 flex flex-col md:flex-row gap-2 justify-center items-center">
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full md:w-96 p-4 rounded bg-black/40 border border-gray-500 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
          />
          <Link 
            to="/signin" 
            className="w-full md:w-auto bg-red-600 px-8 py-4 rounded text-xl font-bold hover:bg-red-700 transition flex items-center justify-center group"
          >
            Get Started 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;