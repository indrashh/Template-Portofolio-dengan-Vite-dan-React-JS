import React, { useEffect, useState } from "react";
import { Home, Info, Settings, ImageIcon, Send, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = scrolled
    ? "backdrop-blur-md bg-white/70 shadow-md"
    : "bg-white/70 shadow-md md:bg-transparent";

  const links = [
    { href: "#homepage", label: "Home", icon: <Home className="w-5 h-5" /> },
    { href: "#about", label: "About", icon: <Info className="w-5 h-5" /> },
    {
      href: "#services",
      label: "Services",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      href: "#proyek",
      label: "Projects",
      icon: <ImageIcon className="w-5 h-5" />,
    },
    { href: "#contact", label: "Contact", icon: <Send className="w-5 h-5" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all ${bgClass}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-extrabold">
          Indra Agustyawan.
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 font-medium text-gray-700 hover:text-violet-600 transition"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-violet-600 transition"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Simple Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-violet-600"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
