import { Server, Cpu, Globe, Terminal } from 'lucide-react';

const AREAS = [
  {
    icon: <Server className="h-5 w-5 text-emerald-300" />,
    title: 'Network Defense',
    desc: 'Traffic analysis, intrusion detection, and resilient architectures for campus-scale networks.',
  },
  {
    icon: <Cpu className="h-5 w-5 text-emerald-300" />,
    title: 'Systems Security',
    desc: 'Hardened operating systems, container security, and secure-by-default infrastructure.',
  },
  {
    icon: <Globe className="h-5 w-5 text-emerald-300" />,
    title: 'Web & Identity',
    desc: 'Authentication, authorization, and privacy-preserving digital identity for students and staff.',
  },
  {
    icon: <Terminal className="h-5 w-5 text-emerald-300" />,
    title: 'Offensive Research',
    desc: 'Adversarial testing, red teaming, and exploit development to strengthen defenses.',
  },
];

export default function ResearchAreas() {
  return (
    <section id="research" className="relative py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Research areas</h2>
          <p className="mt-3 max-w-2xl text-gray-300">
            We blend rigorous academic methods with hands-on engineering to secure real systems used across campus and industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS.map((a, i) => (
            <div key={i} className="group relative rounded-xl border border-emerald-500/20 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/20">
                  {a.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="community" className="mt-16 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Open, hands-on learning</h3>
              <p className="mt-2 max-w-2xl text-gray-300">
                Students join faculty and industry mentors on real projects, competitions, and security reviews. Workshops run year-round.
              </p>
            </div>
            <a href="#contact" className="shrink-0 inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow-emerald-500/20 shadow hover:brightness-110 transition">
              Join the lab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
