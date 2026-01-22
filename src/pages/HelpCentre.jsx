import { useState } from "react";
import { Search, Plus, Minus, HelpCircle, Play, CreditCard, ShieldCheck, ChevronRight, LifeBuoy } from "lucide-react";

const HelpCentre = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { name: "Getting Started", icon: <Play size={20} /> },
    { name: "Billing & Plans", icon: <CreditCard size={20} /> },
    { name: "Security", icon: <ShieldCheck size={20} /> },
    { name: "Streaming Issues", icon: <LifeBuoy size={20} /> }
  ];

  const faqs = [
    {
      q: "How do I reset my password?",
      a: "Navigate to the Sign In portal and select 'Forgot Password'. Follow the automated instructions sent to your registered email to establish a new secure credential."
    },
    {
      q: "How can I change my subscription plan?",
      a: "Access your Account Dashboard, locate the 'Membership' section, and select 'Change Plan'. Your new benefits will be applied immediately upon confirmation."
    },
    {
      q: "Why is my video buffering?",
      a: "Buffering typically occurs due to bandwidth fluctuations. Verify your connection speed, restart your router, or adjust the playback quality in the settings menu."
    },
    {
      q: "How do I contact customer support?",
      a: "Our global support team is available 24/7. You can reach us via the 'Contact Us' page, through our in-app live chat, or via the official support hotline."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        <header className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-white/5 rounded-full text-red-500 text-xs font-black tracking-widest uppercase">
            Knowledge Base
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
            HOW CAN WE <span className="text-red-600 text-outline">HELP?</span>
          </h1>
        </header>

        <div className="relative max-w-2xl mx-auto mb-20 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-red-600 transition-colors" size={24} />
          <input
            type="text"
            placeholder="Search for solutions, error codes, or features..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] pl-16 pr-8 py-6 text-lg font-medium focus:outline-none focus:border-red-600/50 transition-all shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {categories.map((cat) => (
            <div key={cat.name} className="p-6 bg-zinc-900/20 border border-white/5 rounded-[2rem] hover:bg-red-600/10 hover:border-red-600/30 transition-all cursor-pointer text-center group">
              <div className="mb-4 flex justify-center text-zinc-500 group-hover:text-red-600 transition-colors">
                {cat.icon}
              </div>
              <span className="text-xs font-black uppercase tracking-widest">{cat.name}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-black uppercase italic mb-8 tracking-tight flex items-center gap-3">
            <HelpCircle className="text-red-600" /> Frequently Asked Questions
          </h3>
          
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => (
              <div
                key={i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`group border rounded-[2rem] transition-all duration-500 overflow-hidden ${
                  openIndex === i ? "bg-zinc-900/50 border-red-600/30 shadow-2xl" : "bg-zinc-900/20 border-white/5 hover:border-zinc-700"
                }`}
              >
                <div className="p-8 flex justify-between items-center cursor-pointer">
                  <p className={`text-xl font-black tracking-tight uppercase italic transition-colors ${openIndex === i ? "text-red-600" : "text-zinc-200"}`}>
                    {faq.q}
                  </p>
                  <div className={`p-2 rounded-full transition-all ${openIndex === i ? "bg-red-600 text-white rotate-180" : "bg-zinc-800 text-zinc-500"}`}>
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>

                <div className={`px-8 transition-all duration-500 ease-in-out ${openIndex === i ? "max-h-40 pb-8 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-zinc-400 text-lg font-medium leading-relaxed border-t border-white/5 pt-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-zinc-900/10 border border-dashed border-zinc-800 rounded-[3rem]">
              <LifeBuoy size={48} className="mx-auto text-zinc-800 mb-4" />
              <p className="text-zinc-500 font-bold uppercase tracking-widest">
                No matching documentation found.
              </p>
            </div>
          )}
        </div>

        <div className="mt-24 p-12 bg-gradient-to-r from-red-600 to-zinc-900 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black uppercase italic mb-2">Still Stuck?</h2>
            <p className="text-white/80 font-medium italic">Our technical agents are ready to assist you via live chat.</p>
          </div>
          <button className="bg-white text-black font-black px-12 py-5 rounded-2xl flex items-center gap-3 uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all group">
            Start Live Chat <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default HelpCentre;