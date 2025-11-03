import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Connect with the lab</h2>
            <p className="mt-3 text-gray-300 max-w-xl">
              Whether you’re a student, researcher, or industry partner, we’d love to collaborate on secure systems and impactful research.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-emerald-300 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:netsec-lab@campus.edu" className="text-emerald-300 hover:underline">netsec-lab@campus.edu</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-300 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Engineering Building, Room 420, Campus Ave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-emerald-300 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <p className="text-gray-300">Mon–Fri, 9:00–18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-white/5 p-6">
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input className="w-full rounded-md bg-black/60 text-white placeholder-gray-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input type="email" className="w-full rounded-md bg-black/60 text-white placeholder-gray-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="you@campus.edu" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea rows="4" className="w-full rounded-md bg-black/60 text-white placeholder-gray-500 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="How can we help?" />
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-medium text-black shadow-emerald-500/20 shadow hover:brightness-110 transition">
                Send message
              </button>
              <p className="text-xs text-gray-400">Note: This demo form does not send emails.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Network & Cyber Security Laboratory — Secure. Learn. Build.
        </div>
      </div>
    </section>
  );
}
