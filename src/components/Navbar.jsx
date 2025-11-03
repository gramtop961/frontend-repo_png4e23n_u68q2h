import { Shield, BookOpen, Users, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-emerald-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-500/10 grid place-items-center ring-1 ring-emerald-400/30">
              <Shield className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="leading-tight">
              <p className="text-emerald-400 font-semibold tracking-wide">NetSec Lab</p>
              <p className="text-xs text-emerald-200/70">Campus Cybersecurity</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#research" className="text-gray-300 hover:text-white transition">Research</a>
            <a href="#community" className="text-gray-300 hover:text-white transition">Community</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/20 transition">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
