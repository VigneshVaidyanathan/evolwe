const CONTAINER = "max-w-[1200px] mx-auto w-full";

const services = [
  { icon: "sq",   title: "Automate Repetitive Work",   desc: "Free your team from manual, time-consuming tasks. AI handles the routine so your people focus on growth." },
  { icon: "circ", title: "AI Customer Assistants",     desc: "Answer enquiries, qualify leads and support customers around the clock — without hiring more staff." },
  { icon: "dia",  title: "Smarter Business Decisions", desc: "Turn the data you already have into clear insights, forecasts and actions that move the needle." },
  { icon: "ring", title: "Personalised Experiences",   desc: "Show every customer the right product, offer or message at the right moment to drive more sales." },
];

const steps = [
  { n: "1", title: "Free Consultation", desc: "We start with a conversation. Tell us about your business and we'll show you exactly where AI can save you time, cut costs, or bring in more revenue — no jargon, no pressure." },
  { n: "2", title: "Map",               desc: "A focused session to identify your biggest opportunities and agree on what to build first for the fastest impact." },
  { n: "3", title: "Build",             desc: "We build and test your AI solution against your real business data, then slot it into your existing workflow." },
  { n: "4", title: "Grow",              desc: "Ongoing support and improvements so your AI keeps getting better — and your business keeps moving forward." },
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
        <div className={`${CONTAINER} flex items-center gap-6 py-4`}>
          <a href="#" className="flex items-center gap-2.5 mr-auto no-underline">
            <LogoMark />
            <span className="text-[1.3rem] font-extrabold tracking-[-0.03em] text-[#1A1A1A]">
              evolwe<span className="text-[#4A9E8E]">.</span>
            </span>
          </a>
          {/* nav links — hidden on mobile */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {["What We Do", "How It Works", "Studio"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[0.9375rem] text-[#1A1A1A] no-underline hover:text-[#4A9E8E] transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="bg-[#1A1A1A] text-white text-sm font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full no-underline hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            Contact us
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-65px)] flex items-center overflow-hidden bg-[#F7F8F6] px-6">
        <div className="dot-grid absolute inset-0 opacity-55 pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{ right: "-8%", top: "5%", width: "55%", height: "90%", background: "radial-gradient(ellipse at 40% 40%, rgba(74,158,142,0.18) 0%, transparent 65%)", borderRadius: "50%" }}
        />
        <div className={`${CONTAINER} relative z-10 py-16 md:py-24`}>
          <p className="text-[0.6875rem] font-semibold tracking-[0.13em] uppercase text-[#4A9E8E] mb-6">
            AI for Growing Businesses
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5.25rem)] font-black leading-[1.04] tracking-[-0.035em] mb-6 max-w-2xl">
            Grow more.<br />Work less.<br />With AI.
          </h1>
          <p className="text-base text-[#555] leading-[1.7] max-w-[460px] mb-10">
            Evolwe helps everyday businesses automate the repetitive, serve customers better and make smarter decisions — without needing a tech team in-house.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="bg-[#4A9E8E] text-white text-[0.9375rem] font-medium px-6 py-3 rounded-full no-underline hover:bg-[#3d8a7b] transition-colors text-center"
            >
              Start a project
            </a>
            <a
              href="#what-we-do"
              className="border border-[#1A1A1A] text-[#1A1A1A] text-[0.9375rem] font-medium px-6 py-3 rounded-full no-underline hover:bg-[#1A1A1A] hover:text-white transition-colors text-center"
            >
              What we do
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="what-we-do" className="border-t border-[#E2E5E2] px-6 py-14 md:py-20">
        <div className={CONTAINER}>
          <p className="text-[0.6875rem] font-semibold tracking-[0.13em] uppercase text-[#4A9E8E] mb-8">
            01 — What We Do
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E2E5E2]">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`p-6 md:p-8 border-b sm:border-b-0 border-[#E2E5E2]
                  ${i % 2 === 0 ? "sm:border-r" : ""}
                  lg:border-r lg:border-b-0
                  ${i === services.length - 1 ? "lg:border-r-0" : ""}
                  ${i < 2 ? "sm:border-b lg:border-b-0" : ""}
                `}
              >
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
      <section id="how-it-works" className="border-t border-[#E2E5E2] px-6 py-14 md:py-20">
        <div className={CONTAINER}>
          <p className="text-[0.6875rem] font-semibold tracking-[0.13em] uppercase text-[#4A9E8E] mb-10">
            02 — How It Works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="text-[4.5rem] md:text-[5.5rem] font-black text-[#E2E5E2] leading-none mb-1">{s.n}</div>
                <h3 className="text-[1.0625rem] font-bold mb-2.5">{s.title}</h3>
                <p className="text-[0.9rem] text-[#555] leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="border-t border-[#E2E5E2] px-6 py-14 md:py-20">
        <div className={`${CONTAINER} flex flex-col md:grid md:gap-16`} style={{ gridTemplateColumns: "200px 1fr" }}>
          <p className="text-[0.6875rem] font-semibold tracking-[0.13em] uppercase text-[#4A9E8E] mb-6 md:mb-0">
            03 — Studio
          </p>
          <p className="text-[clamp(1.25rem,2.2vw,1.875rem)] font-bold leading-[1.4] tracking-[-0.02em]">
            We work with business owners, not just developers. Our team speaks your language — we find where AI fits your business, build it properly, and stay with you as it grows.
          </p>
        </div>
      </section>

      {/* CTA DARK */}
      <section id="contact" className="bg-[#0D1B19] px-6 pt-16 pb-12 md:pt-20 md:pb-14">
        <div className={CONTAINER}>
          <h2 className="text-white text-[clamp(1.75rem,3.5vw,3.25rem)] font-extrabold tracking-[-0.03em] leading-[1.1] max-w-[560px] mb-8">
            Ready to see how AI can grow your business?
          </h2>
          <a
            href="mailto:hello@evolwe.tech"
            className="inline-block bg-[#4A9E8E] text-white text-[0.9375rem] font-medium px-6 py-3 rounded-full no-underline hover:bg-[#3d8a7b] transition-colors"
          >
            Contact us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D1B19] border-t border-white/[0.08] px-6 py-7">
        <div className={`${CONTAINER} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
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
