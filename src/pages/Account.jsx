import React from 'react';
import { User, CreditCard, Shield, Settings, LogOut, ChevronRight, Crown, Zap, Mail, Smartphone } from "lucide-react";

const Account = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 overflow-hidden selection:bg-red-600">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">
            MY <span className="text-red-600 text-outline">ACCOUNT</span>
          </h1>
          <p className="text-zinc-500 text-lg font-medium">Manage your subscription, profiles, and digital security.</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-zinc-900/20 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-red-600/30 transition-all duration-500">
              <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-tr from-red-600 to-zinc-800 rounded-[2rem] flex items-center justify-center shadow-2xl">
                    <User size={40} className="text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-[#0a0a0a]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-3xl font-black tracking-tight uppercase italic">User Name</h2>
                    <Crown size={20} className="text-red-600" />
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 font-bold text-sm">
                    <Mail size={14} /> user@streamify.com
                  </div>
                </div>
              </div>
              <button className="px-8 py-4 bg-zinc-800 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Edit Profile
              </button>
            </div>

            <div className="bg-zinc-900/20 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-red-600/10 rounded-2xl text-red-600">
                    <CreditCard size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter italic">Membership Details</h3>
                </div>
                <span className="px-4 py-2 bg-red-600 rounded-full text-[10px] font-black uppercase tracking-widest">Premium Plan</span>
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Monthly Cost</p>
                      <h4 className="text-3xl font-black tracking-tighter italic">₹499.00</h4>
                    </div>
                    <p className="text-sm text-zinc-400 font-bold italic">Next billing: Feb 21, 2026</p>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-red-600 rounded-full" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <button className="flex items-center justify-between p-6 bg-zinc-800/50 rounded-2xl border border-white/5 hover:bg-white hover:text-black transition-all group">
                    <span className="font-black uppercase text-xs tracking-widest">Change Plan</span>
                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="flex items-center justify-between p-6 bg-zinc-800/50 rounded-2xl border border-white/5 hover:bg-white hover:text-black transition-all group">
                    <span className="font-black uppercase text-xs tracking-widest">Update Payment</span>
                    <CreditCard size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-zinc-900/20 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 h-full">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-red-600/10 rounded-2xl text-red-600">
                  <Shield size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">Security</h3>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-zinc-800/30 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex items-center gap-3">
                    <Smartphone size={18} className="text-zinc-500" />
                    <p className="text-sm font-bold text-zinc-300 italic">2-Step Verification: <span className="text-red-600 uppercase ml-2">Active</span></p>
                  </div>
                  <button className="w-full py-4 bg-zinc-900 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] border border-white/5 hover:bg-zinc-800 transition-all">
                    Change Password
                  </button>
                </div>

                <div className="p-6 bg-zinc-800/30 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={18} className="text-zinc-500" />
                    <p className="text-sm font-bold text-zinc-300 italic">Connected Devices</p>
                  </div>
                  <div className="flex -space-x-3 mb-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-zinc-700 border-2 border-[#050505] flex items-center justify-center text-[10px] font-black">
                        TV
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-[#050505] flex items-center justify-center text-[10px] font-black">
                      +2
                    </div>
                  </div>
                  <button className="w-full py-4 text-red-600 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-600/10 rounded-xl transition-all">
                    Sign Out All Devices
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between p-12 bg-zinc-900/10 border border-zinc-900 rounded-[3rem] gap-8">
          <div className="flex items-center gap-6">
            <div className="p-5 bg-zinc-800/50 rounded-2xl text-zinc-400">
              <Settings size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase italic">Advanced Settings</h4>
              <p className="text-zinc-500 font-medium">Download your data, manage communication, or delete account.</p>
            </div>
          </div>
          <button className="whitespace-nowrap flex items-center gap-3 px-10 py-5 bg-transparent border border-zinc-800 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
            <LogOut size={16} /> Delete Account
          </button>
        </div>

      </div>
    </div>
  );
};

export default Account;