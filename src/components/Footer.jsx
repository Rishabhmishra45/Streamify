import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Help Centre", path: "/help" },
    { name: "Account", path: "/account" },
    { name: "Media Centre", path: "/media" },
    { name: "Investor Relations", path: "/investors" },
    { name: "Jobs", path: "/jobs" },
    { name: "Ways to Watch", path: "/ways-to-watch" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Privacy", path: "/privacy" },
    { name: "Cookie Preferences", path: "/cookies" },
    { name: "Corporate Information", path: "/corporate" },
    { name: "Contact Us", path: "/contact" },
    { name: "Speed Test", path: "/speed-test" },
    { name: "Legal Notices", path: "/legal" },
    { name: "Only on Streamify", path: "/only-on-streamify" },
  ];

  return (
    <footer className="px-6 md:px-12 py-16 border-t-8 border-[#232323] text-gray-400">
      <div className="max-w-6xl mx-auto">
        <p className="mb-8">
          Questions? Call{" "}
          <span className="underline cursor-pointer">
            000-800-919-1694
          </span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm hover:underline hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mb-8">
          <select className="bg-black border border-gray-600 px-4 py-2 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-white">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs tracking-wide">
          © {new Date().getFullYear()} Streamify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
