import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DEMO_SESSION_KEY = "streamify_demo_session";

const SignIn = () => {
  const navigate = useNavigate();

  const initialEmail = useMemo(() => {
    return localStorage.getItem("streamify_demo_email") || "";
  }, []);

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Sign In • Streamify";
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    // DEMO login: store a local session object (NOT real authentication)
    const session = {
      email: email.trim(),
      createdAt: Date.now(),
      mode: "demo",
    };

    localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(session));
    localStorage.setItem("streamify_demo_email", email.trim());

    navigate("/explore");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-14">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur sm:p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-extrabold text-white">Sign in</h1>
              <p className="mt-2 text-sm text-white/65">
                Demo authentication (frontend only). No real account is created.
              </p>
            </div>

            {error ? (
              <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/25"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/80">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-12 text-white placeholder:text-white/35 outline-none focus:border-white/25"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-white/70 hover:bg-white/10"
                  >
                    {showPw ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500 active:scale-[0.99]"
              >
                Sign in
              </button>

              <div className="text-center text-sm text-white/65">
                New here?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-white hover:underline"
                >
                  Create a demo account
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/55">
                <p className="font-semibold text-white/75">Why this change?</p>
                <p className="mt-1">
                  Browsers may flag sites that mimic big-brand streaming login
                  pages. This UI is now clearly labeled as a demo project to
                  prevent “deceptive site” warnings.
                </p>
              </div>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-white/45">
            © {new Date().getFullYear()} Streamify • Demo UI
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
