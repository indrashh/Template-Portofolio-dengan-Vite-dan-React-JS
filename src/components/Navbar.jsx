import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    : "bg-transparent";

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
    <motion.nav
      className={`fixed w-full z-50 transition-all ${bgClass}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-extrabold">
          Indra Agustyawan.
        </h1>
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
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-gray-700 hover:text-violet-600 transition"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col mt-16 space-y-6 px-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-violet-600 transition"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
