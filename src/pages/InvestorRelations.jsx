import React from 'react';
import { TrendingUp, FileText, Globe, BarChart3, ArrowUpRight, Award, Users, Download } from "lucide-react";

const InvestorRelations = () => {
  const stats = [
    { label: "Market Cap", value: "$42.5B", change: "+12%" },
    { label: "Subscribers", value: "250M+", change: "+5.2M" },
    { label: "Revenue", value: "$8.2B", change: "+18%" },
    { label: "Global Reach", value: "190+", change: "Countries" },
  ];

  const reports = [
    { title: "2025 Annual Report", size: "4.2 MB", date: "Jan 2026" },
    { title: "Q4 2025 Financial Results", size: "2.8 MB", date: "Oct 2025" },
    { title: "ESG Sustainability Report", size: "5.1 MB", date: "Aug 2025" },
    { title: "Shareholder Letter", size: "1.5 MB", date: "July 2025" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      
     
      <div className="relative px-6 md:px-20 mb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full  bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <TrendingUp className="text-red-600" size={24} />
            <span className="text-red-600 font-bold tracking-[0.3em] text-xs uppercase">Financial Performance</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-none">
            INVESTOR <br /> <span className="text-zinc-500">RELATIONS</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            We are redefining the future of global entertainment. Explore our financial health, strategic vision, and shareholder resources.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20">
        

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8  group hover:border-red-600/50 transition-all">
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</p>
              <h3 className="text-4xl font-black mb-2 group-hover:text-red-600 transition-colors">{stat.value}</h3>
              <div className="flex items-center gap-1 text-green-500 text-sm font-bold">
                <ArrowUpRight size={14} /> {stat.change}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FileText className="text-red-600" /> Quarterly & Annual Reports
            </h2>
            <div className="space-y-4">
              {reports.map((report, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-zinc-900/20 border border-white/5 rounded-2xl hover:bg-zinc-800/40 transition-colors group">
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-zinc-800 rounded-xl group-hover:text-red-600 transition-colors">
                      <Download size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{report.title}</h4>
                      <p className="text-zinc-500 text-sm">{report.date} • {report.size}</p>
                    </div>
                  </div>
                  <button className="text-zinc-500 hover:text-white font-bold text-sm tracking-widest uppercase px-4 py-2 border border-zinc-800 rounded-lg hover:border-white transition-all">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Globe className="text-red-600" /> Resources
            </h2>
            <div className="bg-gradient-to-br from-red-600 to-red-900 p-8 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-2xl font-black mb-4 italic">STOCK INFO (STRM)</h3>
              <div className="text-5xl font-black mb-2">$142.60</div>
              <p className="text-red-200 text-sm font-bold mb-8">+2.45 (1.75%) • NASDAQ</p>
              <button className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-black hover:text-white transition-all text-sm uppercase tracking-widest">
                View Detailed Chart
              </button>
            </div>

            <div className="grid gap-4">
              {[
                { icon: <BarChart3 size={18} />, title: "Governance" },
                { icon: <Users size={18} />, title: "Leadership" },
                { icon: <Award size={18} />, title: "SEC Filings" }
              ].map((link, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-zinc-500 cursor-pointer transition-all group">
                  <div className="flex items-center gap-4 font-bold">
                    <span className="text-zinc-500 group-hover:text-red-600 transition-colors">{link.icon}</span>
                    {link.title}
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-700 group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvestorRelations;