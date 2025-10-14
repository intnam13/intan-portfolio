import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const sections = ["about", "projects", "certs", "contact"];

  // detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "about";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative">
      <nav className="flex items-center justify-between flex-wrap">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vanilla Ice Cream</h1>
          <p className="text-sm text-neutral-400">
            Software Development Engineer in Test | QA Engineer | Testing enthusiast
          </p>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neutral-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav links */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } absolute md:static top-16 left-0 w-full md:w-auto bg-neutral-900 md:bg-transparent z-50 md:flex md:items-center md:space-x-6`}
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className={`block md:inline-block px-6 py-3 md:p-0 text-sm transition-colors duration-200 ${activeSection === section
                  ? "text-blue-400 underline underline-offset-4"
                  : "text-neutral-300 hover:text-blue-400"
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero / intro */}
      <div className="mt-10 rounded-2xl p-8 bg-neutral-800/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">
            Hello — I build reliable test automation.
          </h2>
          <p className="mt-3 text-neutral-300">
            This is a starter portfolio where I showcase automation projects, test
            strategies, and results.
          </p>
        </motion.div>
      </div>
    </header>
  );
}
