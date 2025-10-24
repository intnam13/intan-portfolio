import React from "react";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/intnam13",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/intan-namira/",
      label: "LinkedIn",
    },
    {
      icon: <Code className="w-5 h-5" />,
      href: "https://intnam13.github.io/intan-portfolio/",
      label: "Portfolio",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:intannamira13@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full border-t border-gray-800 bg-[#0d0f14] py-8 flex flex-col items-center justify-center text-gray-500">
      {/* Social icons */}
      <div className="flex items-center space-x-6 mb-3">
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-600 tracking-wide">
        © {new Date().getFullYear()} Intan Namira. All Rights Reserved.
      </p>
    </footer>
  );
}
