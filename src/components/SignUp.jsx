import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DEMO_USERS_KEY = "streamify_demo_users";
const DEMO_SESSION_KEY = "streamify_demo_session";

const SignUp = () => {
  const navigate = useNavigate();

  const initialEmail = useMemo(() => {
    return localStorage.getItem("streamify_demo_email") || "";
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Sign Up • Streamify";
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (password.trim().length < 4) {
      setError("Password must be at least 4 characters (demo).");
      return;
    }

    // Demo create account (localStorage)
    const raw = localStorage.getItem(DEMO_USERS_KEY);
    const users = raw ? JSON.parse(raw) : [];

    const exists = users.some(
      (u) => String(u.email).toLowerCase() === email.trim().toLowerCase()
    );
    if (exists) {
      setError("This email is already registered (demo). Please sign in.");
      return;
    }

    const newUser = {
      id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()),
      name: name.trim(),
      email: email.trim(),
      createdAt: Date.now(),
      mode: "demo",
    };

    const updated = [newUser, ...users];
    localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(updated));
    localStorage.setItem("streamify_demo_email", email.trim());

    // auto sign in (demo)
    localStorage.setItem(
      DEMO_SESSION_KEY,
      JSON.stringify({
        email: newUser.email,
        createdAt: Date.now(),
        mode: "demo",
      })
    );

    navigate("/explore");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-14">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur sm:p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-extrabold text-white">
                Create account
              </h1>
              <p className="mt-2 text-sm text-white/65">
                This creates a demo profile stored locally in your browser.
              </p>
            </div>

            {error ? (
              <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-white/80">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-white/25"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>

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
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-white/70 hover:bg-white/10"
                  >
                    {showPw ? "Hide" : "Show"}
                  </button>
                </div>
                <p className="mt-2 text-xs text-white/45">
                  Demo password. Not used anywhere outside this browser.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500 active:scale-[0.99]"
              >
                Create demo account
              </button>

              <div className="text-center text-sm text-white/65">
                Already have one?{" "}
                <Link
                  to="/signin"
                  className="font-semibold text-white hover:underline"
                >
                  Sign in
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/55">
                <p className="font-semibold text-white/75">Important</p>
                <p className="mt-1">
                  This is a frontend-only demo. Do not enter real passwords or
                  sensitive information.
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

export default SignUp;
