import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-black via-black to-gray-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[80vh] flex-col items-start justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-black/40 px-3 py-1 text-xs text-emerald-300 shadow-lg shadow-emerald-500/5">
              <Shield className="h-3.5 w-3.5" />
              Network & Cyber Security Laboratory
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Building a safer digital campus
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-300">
              We research, teach, and build systems that protect data, defend networks, and enable trusted innovation.
              Explore our programs, projects, and community.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#research" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 hover:brightness-110 transition">
                Explore research <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/5 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-white/10 hover:bg-white/10 transition">
                <Lock className="h-4 w-4 text-emerald-300" /> Partner with us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay to improve text contrast, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
    </section>
  );
}
