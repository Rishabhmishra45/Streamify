import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, HelpCircle, ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Our team will get back to you soon.");
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-xs font-black tracking-widest uppercase">
            Support Hub
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase mb-6 leading-[0.8]">
            GET IN <span className="text-red-600 text-outline">TOUCH</span>
          </h1>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium italic">
            Whether it's a technical glitch or a content request, our team is standing by to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <h2 className="text-4xl font-black uppercase italic tracking-tight">Direct Channels</h2>
            
            <div className="space-y-6">
              {[
                { icon: <Mail />, title: "Digital Correspondence", detail: "support@streamify.com", sub: "24/7 Global Response" },
                { icon: <Phone />, title: "Voice Support", detail: "+1 (800) STREAM-IFY", sub: "Mon-Fri, 9am - 6pm EST" },
                { icon: <MapPin />, title: "Global Headquarters", detail: "123 Tech Park, Mumbai", sub: "Maharashtra, India" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 p-8 bg-zinc-900/20 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] hover:bg-zinc-900/40 hover:border-red-600/30 transition-all group">
                  <div className="p-5 bg-zinc-800 rounded-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                    <p className="text-2xl font-black tracking-tight uppercase italic">{item.detail}</p>
                    <p className="text-zinc-500 text-sm font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/20 rounded-[3rem] relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4 text-red-600">
                  <HelpCircle size={40} className="group-hover:rotate-12 transition-transform" />
                  <h3 className="text-3xl font-black uppercase italic">Need Instant Help?</h3>
                </div>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">Skip the queue! Our intelligent Help Centre has answers for over 90% of user queries.</p>
                <a href="/help" className="inline-flex items-center gap-2 bg-white text-black font-black px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest text-xs">
                  Browse FAQ <ArrowUpRight size={16} />
                </a>
              </div>
              <HelpCircle className="absolute -bottom-10 -right-10 size-48 text-white/5 rotate-12" />
            </div>
          </div>

          <div className="bg-zinc-900/30 backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl relative">
            <h2 className="text-4xl font-black mb-10 tracking-tight uppercase italic">Secure Messenger</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">Full Identity</label>
                <input 
                  type="text" 
                  placeholder="EX. LEO MAXIMUS"
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 focus:outline-none focus:border-red-600 transition-all font-bold placeholder:text-zinc-800"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">Return Address</label>
                <input 
                  type="email" 
                  placeholder="EMAIL@DOMAIN.COM"
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 focus:outline-none focus:border-red-600 transition-all font-bold placeholder:text-zinc-800"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">The Briefing</label>
                <textarea 
                  rows="5"
                  placeholder="DESCRIBE YOUR SITUATION..."
                  className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 focus:outline-none focus:border-red-600 transition-all resize-none font-bold placeholder:text-zinc-800"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-black hover:bg-red-600 hover:text-white font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-4 group uppercase tracking-[0.2em] text-sm shadow-2xl shadow-white/5"
              >
                Transmit Message 
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;