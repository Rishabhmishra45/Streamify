import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Landing Page Sections
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Reasons from "./components/Reasons";
import FAQ from "./components/FAQ";

// Auth & Main App
import SignIn from "./components/SignIn"; 
import SignUp from "./components/SignUp"; 
import Explore from "./source/Explore";

// Pages
import HelpCentre from "./pages/HelpCentre";
import Account from "./pages/Account";
import MediaCentre from "./pages/MediaCentre";
import Job from "./pages/Jobs";
import LegalNotices from "./pages/LegalNotices";
import CookiePreference from "./pages/CookiePreferences";
import CorporateInformation from "./pages/CorporateInformation";
import WaysToWatch from "./pages/WaysToWatch";
import OnlyOnStreamify from "./pages/OnlyOnStreamify";
import SpeedTest from "./pages/SpeedTest";
import Privacy from "./pages/Privacy";
import TermsOfUse from "./pages/TermsOfUse";
import InvestorRelations from "./pages/InvestorRelations";
import ContactUs from "./pages/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideLayout = ['/explore', '/signin', '/signup'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white antialiased min-h-screen selection:bg-red-600 selection:text-white">
        <LayoutWrapper>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={
              <>
                <Hero />
                <Trending />
                <Reasons />
                <FAQ />
              </>
            } />

            {/* Auth Routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/help" element={<HelpCentre />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/media" element={<MediaCentre />} />
            <Route path="/jobs" element={<Job />} />
            <Route path="/watch" element={<WaysToWatch />} />
            <Route path="/speedtest" element={<SpeedTest />} />
            <Route path="/originals" element={<OnlyOnStreamify />} />
            <Route path="/legal" element={<LegalNotices />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/corporate" element={<CorporateInformation />} />
            <Route path="/investors" element={<InvestorRelations />} />
            <Route path="/cookiespreference" element={<CookiePreference />} />
            <Route path="*" element={
              <div className="h-screen flex flex-col justify-center items-center bg-black px-6 text-center">
                <h1 className="text-9xl font-black text-red-600 animate-pulse">404</h1>
                <h2 className="text-3xl font-bold mt-4 tracking-tight">Lost in the Cinematic Void?</h2>
                <p className="text-zinc-500 mt-2 max-w-md font-medium">The page you're looking for has been cut from the final edit.</p>
                <a href="/" className="mt-10 bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-xl transition-all shadow-lg shadow-red-600/20 uppercase tracking-widest text-sm">
                  Back to Home
                </a>
              </div>
            } />
          </Routes>
        </LayoutWrapper>
      </div>
    </Router>
  );
}

export default App;