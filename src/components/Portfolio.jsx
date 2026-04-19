import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Linkedin,
  Mail,
  FileDown,
  MapPin,
  GraduationCap,
  Briefcase,
  LineChart,
  Wrench,
  Sparkles,
  Menu,
  X,
  Plus,
  Minus,
  Award,
} from "lucide-react";
import {
  personalInfo,
  stats,
  aboutText,
  education,
  experience,
  skillGroups,
  certifications,
  projects,
  navLinks,
} from "../mock";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "./ui/toaster";

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-stone-200" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-[#0b2545]">GP</span>
          <span className="hidden sm:block text-xs font-mono uppercase tracking-[0.2em] text-stone-500 group-hover:text-[#0b2545] transition-colors">Garv · Puri</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-stone-700 hover:text-[#0b2545] link-underline transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 bg-[#0b2545] text-white text-xs font-medium uppercase tracking-[0.15em] px-5 py-3 hover:bg-[#13315c] transition-colors">
          <FileDown size={14} /> Resume
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#0b2545]">{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block text-stone-700">{l.label}</a>
          ))}
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#0b2545] text-white text-xs uppercase tracking-[0.15em] px-5 py-3"><FileDown size={14}/> Resume</a>
        </div>
      )}
    </header>
  );
};

const Ticker = () => {
  const items = ["NYSE · Markets Open", "AAPL +1.24%", "MSFT +0.87%", "JPM +0.42%", "GS +1.08%", "S&P 500 +0.61%", "DOW +0.33%", "NASDAQ +0.94%", "10Y 4.28%", "WTI $78.40", "EUR/USD 1.085"];
  return (
    <div className="border-y border-stone-200 bg-[#0b2545] text-white overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-mono text-[11px] tracking-wider px-6 py-2 border-r border-white/10">{t}</span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="top" className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-white grain overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="flex items-center gap-3 mb-10">
        <span className="h-px w-10 bg-[#0b2545]"></span>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-stone-500">Portfolio · 2026</span>
      </div>
      <h1 className="font-serif text-[56px] sm:text-[84px] md:text-[132px] leading-[0.92] tracking-[-0.02em] text-[#0a0a0a]">
        Garv <br/>
        <span className="italic text-[#0b2545]">Puri.</span>
      </h1>
      <div className="mt-10 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500 mb-4">Finance Student · Aspiring IB & FP&A Analyst · Finance Intern</p>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-2xl">{personalInfo.intro}</p>
        </div>
        <div className="md:col-span-5 md:pl-10 md:border-l border-stone-200">
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-stone-300 pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">{s.label}</div>
                <div className="mt-1 font-serif text-xl text-[#0b2545]">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 flex items-center gap-6">
        <a href="#projects" className="group inline-flex items-center gap-3 bg-[#0b2545] text-white px-6 py-4 text-sm uppercase tracking-[0.18em] hover:bg-[#13315c] transition-colors">
          Explore Work <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
        </a>
        <a href="#about" className="inline-flex items-center gap-2 text-sm text-stone-600 link-underline">Scroll <ArrowDown size={14}/></a>
      </div>
    </div>
  </section>
);

const Section = ({ id, code, title, children, dark }) => (
  <section id={id} className={`py-20 md:py-32 ${dark ? "bg-[#0b2545] text-white" : "bg-white"}`}>
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="flex items-baseline gap-4 mb-14 reveal">
        <span className={`font-mono text-[11px] uppercase tracking-[0.25em] ${dark ? "text-white/60" : "text-stone-500"}`}>{code}</span>
        <span className={`h-px flex-1 ${dark ? "bg-white/20" : "bg-stone-200"}`}></span>
        <h2 className={`font-serif text-3xl md:text-5xl tracking-tight ${dark ? "text-white" : "text-[#0a0a0a]"}`}>{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const About = () => (
  <Section id="about" code="§ 01" title="About">
    <div className="grid md:grid-cols-12 gap-10">
      <div className="md:col-span-5 reveal">
        <p className="font-serif italic text-2xl md:text-3xl leading-snug text-[#0b2545]">“Discipline, curiosity, and a bias for numbers that tell the truth.”</p>
        <div className="mt-8 flex items-center gap-3 text-sm text-stone-500">
          <MapPin size={14}/> {personalInfo.location}
        </div>
      </div>
      <div className="md:col-span-7 space-y-5 reveal">
        {aboutText.map((p, i) => (
          <p key={i} className="text-stone-700 text-base md:text-lg leading-relaxed">{p}</p>
        ))}
      </div>
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" code="§ 02" title="Education">
    <div className="border-t border-stone-200 reveal">
      {education.map((e, idx) => (
        <div key={e.school} className="grid md:grid-cols-12 gap-6 py-10 border-b border-stone-200 hover:bg-stone-50/50 transition-colors group">
          <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-500">{e.period}</div>
          <div className="md:col-span-6">
            <div className="flex items-center gap-3"><GraduationCap size={18} className="text-[#0b2545]"/> <span className="font-serif text-2xl md:text-3xl text-[#0a0a0a]">{e.school}</span></div>
            <div className="mt-2 text-stone-600">{e.degree}</div>
            <div className="mt-1 text-xs text-stone-500">{e.location}</div>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end md:items-start">
            {e.honors.map((h) => (
              <span key={h} className="font-mono text-[11px] uppercase tracking-[0.15em] border border-stone-300 px-3 py-1 text-stone-700 group-hover:border-[#0b2545] group-hover:text-[#0b2545] transition-colors">{h}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" code="§ 03" title="Experience">
    <div className="space-y-16">
      {experience.map((job) => (
        <div key={job.company} className="grid md:grid-cols-12 gap-8 reveal">
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">{job.period} · {job.location}</div>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl text-[#0a0a0a]">{job.role}</h3>
            <div className="mt-2 flex items-center gap-2 text-[#0b2545]"><Briefcase size={16}/> <span className="font-medium">{job.company}</span></div>
          </div>
          <div className="md:col-span-8 md:pl-10 md:border-l border-stone-200">
            <ul className="space-y-4">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-4 text-stone-700 leading-relaxed">
                  <span className="font-mono text-[11px] text-stone-400 mt-1.5">0{i+1}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" code="§ 04" title="Core Skills">
    <div className="grid md:grid-cols-3 gap-0 border-t border-stone-200">
      {skillGroups.map((g, idx) => {
        const Icon = idx === 0 ? LineChart : idx === 1 ? Wrench : Sparkles;
        return (
          <div key={g.title} className={`p-8 md:p-10 border-b border-stone-200 reveal ${idx !== 2 ? "md:border-r" : ""} hover:bg-stone-50 transition-colors`}>
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">{g.code}</span>
              <Icon size={18} className="text-[#0b2545]"/>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#0a0a0a] mb-6">{g.title}</h3>
            <ul className="space-y-3">
              {g.items.map((it) => (
                <li key={it} className="flex items-center justify-between text-sm text-stone-700 border-b border-dashed border-stone-200 pb-2">
                  <span>{it}</span>
                  <span className="font-mono text-[10px] text-stone-400">—</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </Section>
);

const Certifications = () => (
  <Section id="certifications" code="§ 05" title="Certifications">
    <div className="border-t border-stone-200">
      {certifications.map((c) => (
        <div key={c.title} className="grid md:grid-cols-12 gap-6 py-10 border-b border-stone-200 group hover:bg-stone-50/60 transition-colors reveal">
          <div className="md:col-span-1 font-mono text-xs text-stone-400">{c.code}</div>
          <div className="md:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">{c.year}</div>
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Award size={18} className="text-[#0b2545]"/>
              <h3 className="font-serif text-2xl md:text-3xl text-[#0a0a0a] group-hover:text-[#0b2545] transition-colors leading-tight">{c.title}</h3>
            </div>
            <div className="mt-2 text-stone-600">{c.issuer}</div>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed max-w-xl">{c.summary}</p>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end md:items-start">
            {c.skills.map((s) => (
              <span key={s} className="font-mono text-[10px] uppercase tracking-[0.15em] border border-stone-300 px-2.5 py-1 text-stone-600 group-hover:border-[#0b2545] group-hover:text-[#0b2545] transition-colors">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const ProjectCard = ({ p }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone-200 py-10 md:py-14 group reveal">
      <div className="grid md:grid-cols-12 gap-6 cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="md:col-span-1 font-mono text-xs text-stone-400">{p.code}</div>
        <div className="md:col-span-6">
          <h3 className="font-serif text-2xl md:text-4xl text-[#0a0a0a] group-hover:text-[#0b2545] transition-colors leading-tight">{p.title}</h3>
          <div className="mt-2 text-sm text-stone-500">{p.subtitle}</div>
        </div>
        <div className="md:col-span-4 flex flex-wrap gap-2 md:pl-4">
          {p.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] uppercase tracking-[0.15em] border border-stone-300 px-2.5 py-1 text-stone-600">{t}</span>
          ))}
        </div>
        <div className="md:col-span-1 flex md:justify-end items-start">
          <button className="h-9 w-9 border border-stone-300 flex items-center justify-center text-stone-600 group-hover:border-[#0b2545] group-hover:text-[#0b2545] transition-colors">
            {open ? <Minus size={14}/> : <Plus size={14}/>}
          </button>
        </div>
      </div>
      <div className={`grid md:grid-cols-12 gap-6 overflow-hidden transition-all duration-500 ${open ? "max-h-[600px] mt-8 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="md:col-start-2 md:col-span-10">
          <p className="text-stone-700 italic mb-4 border-l-2 border-[#0b2545] pl-4">{p.summary}</p>
          <ul className="space-y-3">
            {p.details.map((d, i) => (
              <li key={i} className="flex gap-3 text-stone-700"><span className="font-mono text-xs text-stone-400 mt-1">→</span><span>{d}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <Section id="projects" code="§ 06" title="Selected Projects">
    <p className="text-stone-600 max-w-2xl mb-10 reveal">A curated selection of finance, compliance, and strategy work spanning internship engagements, competitions, and independent case studies.</p>
    <div>
      {projects.map((p) => <ProjectCard key={p.id} p={p}/>) }
      <div className="border-t border-stone-200"></div>
    </div>
  </Section>
);

const Goals = () => (
  <Section id="goals" code="§ 07" title="Career Goals" dark>
    <div className="grid md:grid-cols-12 gap-10 reveal">
      <div className="md:col-span-8">
        <p className="font-serif text-3xl md:text-5xl leading-[1.15] tracking-tight">
          Pursuing opportunities in <span className="italic text-white/70">investment banking</span> and <span className="italic text-white/70">FP&A</span> — where rigorous analysis, valuation discipline, and business partnering meet high-impact decision-making.
        </p>
      </div>
      <div className="md:col-span-4 md:pl-8 md:border-l border-white/20">
        <p className="text-white/75 leading-relaxed">I am focused on building technical expertise in valuation, financial modeling, budgeting, and forecasting while contributing to teams that value discipline, curiosity, and ownership across both deal-side and corporate finance mandates.</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Investment Banking","FP&A","Corporate Finance","Valuation","Financial Modeling","Strategic Finance"].map((t)=>(
            <span key={t} className="font-mono text-[10px] uppercase tracking-[0.18em] border border-white/30 px-3 py-1.5">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please complete all fields before sending." });
      return;
    }
    const prev = JSON.parse(localStorage.getItem("gp_messages") || "[]");
    prev.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("gp_messages", JSON.stringify(prev));
    toast({ title: "Message queued", description: "Thanks — I'll respond within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <Section id="contact" code="§ 08" title="Get in Touch">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 reveal">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-[#0a0a0a]">Open to investment banking, FP&A, corporate finance, and internship opportunities.</p>
          <div className="mt-10 space-y-5">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
              <span className="h-10 w-10 border border-stone-300 flex items-center justify-center group-hover:border-[#0b2545] group-hover:text-[#0b2545] transition-colors"><Mail size={16}/></span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">Email</div>
                <div className="text-stone-800 link-underline">{personalInfo.email}</div>
              </div>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="h-10 w-10 border border-stone-300 flex items-center justify-center group-hover:border-[#0b2545] group-hover:text-[#0b2545] transition-colors"><Linkedin size={16}/></span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">LinkedIn</div>
                <div className="text-stone-800 link-underline">/in/garv-puri-266986272</div>
              </div>
            </a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="h-10 w-10 border border-stone-300 flex items-center justify-center group-hover:border-[#0b2545] group-hover:text-[#0b2545] transition-colors"><FileDown size={16}/></span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">Resume</div>
                <div className="text-stone-800 link-underline">Download PDF</div>
              </div>
            </a>
          </div>
        </div>
        <form onSubmit={submit} className="md:col-span-7 space-y-6 reveal">
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">Name</span>
              <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-2 w-full bg-transparent border-b border-stone-300 focus:border-[#0b2545] outline-none py-2 text-stone-900 transition-colors"/>
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">Email</span>
              <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-2 w-full bg-transparent border-b border-stone-300 focus:border-[#0b2545] outline-none py-2 text-stone-900 transition-colors"/>
            </label>
          </div>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500">Message</span>
            <textarea rows={5} value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="mt-2 w-full bg-transparent border-b border-stone-300 focus:border-[#0b2545] outline-none py-2 text-stone-900 transition-colors resize-none"/>
          </label>
          <button type="submit" className="group inline-flex items-center gap-3 bg-[#0b2545] text-white px-6 py-4 text-sm uppercase tracking-[0.18em] hover:bg-[#13315c] transition-colors">
            Send Message <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
          </button>
        </form>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="bg-[#0a0a0a] text-white">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <div className="font-serif text-5xl md:text-7xl tracking-tight">Garv Puri.</div>
          <p className="mt-4 text-white/60 max-w-md">Finance student · aspiring investment banking analyst. Building a career at the intersection of analytics, strategy, and capital.</p>
        </div>
        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">Navigate</div>
          <ul className="space-y-2">
            {navLinks.map((l)=>(<li key={l.href}><a href={l.href} className="text-white/80 hover:text-white link-underline">{l.label}</a></li>))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">Connect</div>
          <ul className="space-y-2">
            <li><a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white link-underline">LinkedIn</a></li>
            <li><a href={`mailto:${personalInfo.email}`} className="text-white/80 hover:text-white link-underline">Email</a></li>
            <li><a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white link-underline">Resume</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50 font-mono">
        <span>© {new Date().getFullYear()} Garv Puri · All rights reserved.</span>
        <span>Crafted with discipline · Kennesaw, GA</span>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  useReveal();
  return (
    <div className="bg-white text-[#0a0a0a] min-h-screen">
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
