"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#professionals", label: "Professionals" },
    { href: "#about", label: "About" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 font-bold text-teal-600">
            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-xl">A</div>
            <div>Advotek</div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} className="text-slate-800 hover:text-slate-600" href={l.href}>
                {l.label}
              </a>
            ))}
            <a className="bg-teal-600 text-white px-4 py-2 rounded-lg" href="#">
              Whatsapp Inquiry
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle navigation"
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.label} className="text-slate-800 hover:text-slate-600" href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a className="bg-teal-600 text-white px-4 py-2 rounded-lg inline-block text-center" href="#" onClick={() => setOpen(false)}>
              Whatsapp Inquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
