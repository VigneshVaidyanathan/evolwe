const CONTAINER = "max-w-[1200px] mx-auto w-full";

const services = [
  { icon: "sq",   title: "Generative AI",          desc: "Custom LLM products, copilots and agents — grounded in your data, tuned to your domain." },
  { icon: "circ", title: "AI Pipelines",            desc: "End-to-end data and inference pipelines that are observable, versioned and built to scale." },
  { icon: "dia",  title: "Machine Learning",        desc: "From problem framing to trained, evaluated and deployed models your team can own." },
  { icon: "ring", title: "Recommendation Systems",  desc: "Personalization and ranking engines that measurably lift engagement and revenue." },
];

const steps = [
  { n: "1", title: "Map",    desc: "A short discovery sprint to find where AI creates real leverage in your business — and where it doesn't." },
  { n: "2", title: "Build",  desc: "We prototype fast, validate against real data, then harden the winner into production infrastructure." },
  { n: "3", title: "Evolve", desc: "Monitoring, evaluation and iteration loops so the system keeps improving after launch." },
];

function LogoMark({ light = false }: { light?: boolean }) {
  const border = light ? "border-white/25" : "border-[#1A1A1A]";
  const text   = light ? "text-white/50"   : "text-[#1A1A1A]";
  return (
    <div className={`w-[34px] h-[44px] border ${border} flex flex-col justify-between p-[3px_4px] shrink-0`}>
      <span className={`text-[10px] font-bold leading-none ${text}`}>E</span>
      <span className={`text-[5.5px] font-bold tracking-wider leading-none ${text}`}>TECH</span>
      <span className={`text-[5.5px] font-bold tracking-wider leading-none ${text}`}>VOL</span>
      <span className={`text-[5.5px] font-bold tracking-wider leading-none ${text}`}>weL</span>
    </div>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "sq")   return <div className="w-[14px] h-[14px] bg-[#4A9E8E]" />;
  if (type === "circ") return <div className="w-[14px] h-[14px] bg-[#4A9E8E] rounded-full" />;
  if (type === "dia")  return <div className="w-[11px] h-[11px] bg-[#4A9E8E] rotate-45 mt-[2px]" />;
  return <div className="w-[14px] h-[14px] rounded-full border-[2.5px] border-[#4A9E8E]" />;
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="border-b border-[#E2E5E2] bg-white sticky top-0 z-50 px-6">
        <div className={`${CONTAINER} flex items-center gap-8 py-[18px]`}>
          <a href="#" className="flex items-center gap-2.5 mr-auto no-underline">
            <LogoMark />
            <span className="text-[1.3rem] font-extrabold tracking-[-0.03em] text-[#1A1A1A]">
              evolwe<span className="text-[#4A9E8E]">.</span>
            </span>
          </a>
          <ul className="flex gap-9 list-none m-0 p-0">
            {["Services", "Process", "Studio"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-[0.9375rem] text-[#1A1A1A] no-underline hover:text-[#4A9E8E] transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="bg-[#1A1A1A] text-white text-sm font-medium px-5 py-2.5 rounded-full no-underline hover:bg-[#333] transition-colors">
            Contact us
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden bg-[#F7F8F6] px-6">
        <div className="dot-grid absolute inset-0 opacity-55 pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{ right: "-8%", top: "5%", width: "55%", height: "90%", background: "radial-gradient(ellipse at 40% 40%, rgba(74,158,142,0.18) 0%, transparent 65%)", borderRadius: "50%" }}
        />
        <div className={`${CONTAINER} relative z-10 py-24`}>
          <p className="text-[0.6875rem] font-semibold tracking-[0.13em] uppercase text-[#4A9E8E] mb-7">
            AI Studio — Generative Systems &amp; ML Pipelines
          </p>
          <h1 className="text-[clamp(3rem,5.5vw,5.25rem)] font-black leading-[1.04] tracking-[-0.035em] mb-6 max-w-2xl">
            Intelligence,<br />engineered into<br />your product.
          </h1>
          <p className="text-base text-[#555] leading-[1.7] max-w-[460px] mb-10">
            Evolwe designs and ships generative AI, machine-learning pipelines and recommendation systems for companies that want AI working in production — not in slide decks.
          </p>
          <div className="flex gap-3">
            <a href="#contact" className="bg-[#4A9E8E] text-white text-[0.9375rem] font-medium px-6 py-3 rounded-full no-underline hover:bg-[#3d8a7b] transition-colors">
              Start a project
            </a>
            <a href="#services" className="border border-[#1A1A1A] text-[#1A1A1A] text-[0.9375rem] font-medium px-6 py-3 rounded-full no-underline hover:bg-[#1A1A1A] hover:text-white transition-colors">
              What we do
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-[#E2E5E2] px-6 py-20">
        <div className={CONTAINER}>
          <p className="text-[0.6875rem] font-semibold tracking-[0.13em] uppercase text-[#4A9E8E] mb-8">
            01 — Services
          </p>
          <div className="grid grid-cols-4 border border-[#E2E5E2]">
            {services.map((s, i) => (
              <div key={s.title} className={`p-8 ${i < services.length - 1 ? "border-r border-[#E2E5E2]" : ""}`}>
                <div className="w-5 h-5 mb-5 flex items-start">
                  <ServiceIcon type={s.icon} />
                </div>
                <h3 className="text-base font-bold mb-3">{s.title}</h3>
                <p className="text-[0.875rem] text-[#555] leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-[#E2E5E2] px-6 py-20">
        <div className={CONTAINER}>
          <p className="text-[0.6875rem] font-semibold tracking-[0.13em] uppercase text-[#4A9E8E] mb-10">
            02 — How We Work
          </p>
          <div className="grid grid-cols-3 gap-12">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="text-[5.5rem] font-black text-[#E2E5E2] leading-none mb-1">{s.n}</div>
                <h3 className="text-[1.0625rem] font-bold mb-2.5">{s.title}</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="border-t border-[#E2E5E2] px-6 py-20">
        <div className={`${CONTAINER} grid gap-16`} style={{ gridTemplateColumns: "200px 1fr" }}>
          <p className="text-[0.6875rem] font-semibold tracking-[0.13em] uppercase text-[#4A9E8E]">
            03 — Studio
          </p>
          <p className="text-[clamp(1.4rem,2.2vw,1.875rem)] font-bold leading-[1.4] tracking-[-0.02em]">
            We&apos;re a small senior team of ML engineers and product designers. No hand-offs, no bloat — the people you meet are the people who build.
          </p>
        </div>
      </section>

      {/* CTA DARK */}
      <section id="contact" className="bg-[#0D1B19] px-6 pt-20 pb-14">
        <div className={CONTAINER}>
          <h2 className="text-white text-[clamp(2rem,3.5vw,3.25rem)] font-extrabold tracking-[-0.03em] leading-[1.1] max-w-[560px] mb-8">
            Have a problem AI should be solving?
          </h2>
          <a href="mailto:hello@evolwe.tech" className="inline-block bg-[#4A9E8E] text-white text-[0.9375rem] font-medium px-6 py-3 rounded-full no-underline hover:bg-[#3d8a7b] transition-colors">
            Contact us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D1B19] border-t border-white/[0.08] px-6 py-7">
        <div className={`${CONTAINER} flex items-center justify-between`}>
          <div className="flex items-center gap-2.5 text-white/50 text-sm">
            <LogoMark light />
            evolwe — AI studio
          </div>
          <div className="text-[0.8125rem] text-white/40">
            <a href="https://evolwe.tech" className="text-white/40 no-underline hover:text-white/80 transition-colors">evolwe.tech</a>
            {" · "}
            <a href="mailto:hello@evolwe.tech" className="text-white/40 no-underline hover:text-white/80 transition-colors">hello@evolwe.tech</a>
            {" · Singapore"}
          </div>
        </div>
      </footer>
    </>
  );
}
