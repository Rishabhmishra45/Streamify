import React, { useState } from 'react';
import { Cookie, ShieldCheck, BarChart3, Megaphone, Save } from "lucide-react";

const CookiePreferences = () => {
  const [settings, setSettings] = useState({
    Necessary: true,
    Analytics: false,
    Marketing: false,
  });

  const cookies = [
    { 
      type: "Necessary", 
      icon: <ShieldCheck className="text-green-500" />,
      description: "These cookies are essential for you to browse the website and use its features, such as accessing secure areas.",
      alwaysOn: true 
    },
    { 
      type: "Analytics", 
      icon: <BarChart3 className="text-blue-500" />,
      description: "These cookies collect information about how you use our website, like which pages you visited and which links you clicked on." 
    },
    { 
      type: "Marketing", 
      icon: <Megaphone className="text-purple-500" />,
      description: "These cookies are used to make advertising messages more relevant to you and your interests." 
    },
  ];

  const handleToggle = (type) => {
    if (type === "Necessary") return;
    setSettings(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white px-6 md:px-20 py-24">
      <div className="max-w-3xl mx-auto">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-red-600/10 rounded-full">
            <Cookie className="text-red-600" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Cookie Preferences</h1>
            <p className="text-gray-400 mt-1">Manage how Streamify uses data to improve your experience.</p>
          </div>
        </div>

        <div className="bg-blue-900/10 border border-blue-800/40 p-4 rounded-lg mb-10 text-sm text-blue-200">
          We use cookies to personalize content, analyze traffic, and provide social media features. You can change your preferences at any time.
        </div>

        <div className="space-y-4">
          {cookies.map((cookie) => (
            <div
              key={cookie.type}
              onClick={() => handleToggle(cookie.type)}
              className={`group border rounded-xl p-6 transition-all cursor-pointer flex items-center justify-between ${
                settings[cookie.type] ? 'border-gray-600 bg-gray-900/50' : 'border-gray-800 bg-transparent'
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="mt-1">{cookie.icon}</div>
                <div>
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    {cookie.type}
                    {cookie.alwaysOn && (
                      <span className="text-[10px] uppercase bg-gray-800 px-2 py-0.5 rounded text-gray-400">Required</span>
                    )}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed max-w-md">
                    {cookie.description}
                  </p>
                </div>
              </div>

              <div 
                className={`w-12 h-6 rounded-full relative transition-colors ${
                  settings[cookie.type] ? 'bg-red-600' : 'bg-gray-700'
                }`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                  settings[cookie.type] ? 'left-7' : 'left-1'
                }`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800">
          <button 
            className="flex-1 bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition flex items-center justify-center gap-2"
            onClick={() => alert("Preferences Saved!")}
          >
            <Save size={18} /> Save Preferences
          </button>
          <button 
            className="flex-1 bg-gray-800 text-white font-bold py-3 rounded-md hover:bg-gray-700 transition"
            onClick={() => setSettings({ Necessary: true, Analytics: true, Marketing: true })}
          >
            Accept All
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookiePreferences;