import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ onGetStarted }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Save only as demo/pre-fill value (NOT authentication)
    localStorage.setItem("streamify_demo_email", email.trim());

    if (typeof onGetStarted === "function") onGetStarted(email.trim());
    navigate("/signup");
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.20),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.18),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Demo Project • Frontend Only
          </div>

          <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Discover content faster with{" "}
            <span className="text-red-500">Streamify</span>
          </h1>

          <p className="mt-5 text-pretty text-base text-white/75 sm:text-lg">
            This is a clean UI demo to explore layouts, search flow, and
            navigation. No copyrighted branding and no deceptive login behavior.
          </p>

          {/* CTA */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <div className="flex-1">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email to get started"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none ring-0 focus:border-white/25"
                autoComplete="email"
              />
              <p className="mt-2 text-left text-xs text-white/45">
                We only store this email locally for demo navigation (not
                authentication).
              </p>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500 active:scale-[0.98]"
            >
              Get Started
            </button>
          </form>

          {/* Badges */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
              <p className="text-sm font-semibold text-white">Fast UI</p>
              <p className="mt-1 text-xs text-white/60">
                Mobile-first responsive layout.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
              <p className="text-sm font-semibold text-white">Safe Branding</p>
              <p className="mt-1 text-xs text-white/60">
                No Netflix/copyright assets used.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
              <p className="text-sm font-semibold text-white">Demo Auth</p>
              <p className="mt-1 text-xs text-white/60">
                Local demo session (no phishing).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
