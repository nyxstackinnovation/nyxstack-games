import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Gamepad2,
  Zap,
  BadgeCheck,
  Users,
  Search,
  Sparkles,
  Smartphone,
  Rocket,
  PhoneCall,
  Play,
} from "lucide-react";
import GameCard from "../Components/GameCard";
import { games, featuredGame, categories, gameUrl } from "../data/games";
import { main } from "../config/site";

/* ------------------------------------------------------------------ shared bits */

// Same small gradient label the main site uses above its headings.
const Eyebrow = ({ children, className = "" }) => (
  <span className={`text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-cyan-700 to-red-700 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

const StatsBlock = ({ className }) => (
  <div className={`flex flex-row items-start justify-around sm:justify-start sm:gap-14 w-full gap-4 relative z-20 ${className}`}>
    {[
      { icon: Gamepad2, value: games.length, label: games.length === 1 ? "Live Game" : "Live Games", tint: "green" },
      { icon: Zap, value: "0 MB", label: "To Download", tint: "cyan" },
      { icon: BadgeCheck, value: "Free", label: "To Play", tint: "yellow" },
    ].map(({ icon: Icon, value, label, tint }) => (
      <div key={label} className="flex flex-col items-center text-center gap-1.5">
        <div
          className={`p-3 rounded-full mb-1 ${
            tint === "green" ? "bg-green-500/10 dark:bg-green-500/20" : tint === "cyan" ? "bg-cyan-500/10 dark:bg-cyan-500/20" : "bg-yellow-500/10 dark:bg-yellow-500/20"
          }`}
        >
          <Icon
            className={`h-6 w-6 ${
              tint === "green" ? "text-green-600 dark:text-green-500" : tint === "cyan" ? "text-cyan-600 dark:text-cyan-500" : "text-yellow-600 dark:text-yellow-500"
            }`}
            strokeWidth={2}
          />
        </div>
        <span className="text-slate-900 dark:text-white font-bold text-lg md:text-xl leading-none">{value}</span>
        <span className="text-slate-600 dark:text-zinc-400 text-xs md:text-sm">{label}</span>
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ hero */

const Hero = () => (
  <section className="relative bg-white dark:bg-[#050505] transition-colors duration-200 overflow-hidden pt-28 md:pt-32 pb-16">
    {/* Background glow (same as the main site hero) */}
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#02C7D9]/10 blur-[170px]" />
      <div className="absolute right-0 top-44 h-[450px] w-[450px] rounded-full bg-[#D00484]/8 blur-[170px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#0A7C95]/10 blur-[170px]" />
    </div>
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-10 dark:opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(rgba(150,150,150,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(150,150,150,.15) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:min-h-[70vh]">
        {/* LEFT */}
        <div className="z-20 flex flex-col justify-center animate-hero">
          <div className="inline-flex items-center gap-2 py-2">
            <Eyebrow>nyxStack Games</Eyebrow>
          </div>

          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white md:text-6xl xl:text-[68px] transition-colors duration-200">
            Play Free
            <br />
            <span className="text-red-500">Browser </span>
            Games <br />
            <span className="text-cyan-500 dark:text-cyan-400">Zero</span> Downloads
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-zinc-400 transition-colors duration-200">
            Multiplayer games made by the nyxStack team. No downloads, no installs, no sign-up. Open a game and you are in a
            match in seconds, on desktop or mobile.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 relative z-30">
            <a
              href={gameUrl(featuredGame)}
              className="group sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 w-full no-underline
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(2,199,217,.35)]
                         bg-gradient-to-r from-red-500 to-red-900 hover:opacity-90 active:scale-95
                         font-bold rounded-xl shadow-lg text-sm text-white"
            >
              Play {featuredGame.title}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#games"
              className="inline-flex w-full sm:w-auto items-center justify-center no-underline
                         rounded-2xl border border-slate-300 dark:border-white/20
                         bg-white/50 dark:bg-transparent px-8 py-4 font-semibold
                         text-slate-900 dark:text-white transition-all duration-300
                         hover:border-[#02C7D9] hover:bg-slate-100 dark:hover:bg-white/5"
            >
              Browse Games
            </a>
          </div>

          <StatsBlock className="mt-12" />
        </div>

        {/* RIGHT: featured game */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#02C7D9]/15 blur-[140px]" />

          <a
            href={gameUrl(featuredGame)}
            aria-label={`Play ${featuredGame.title}`}
            className="group relative block w-full max-w-[640px] no-underline rounded-[1.75rem] p-[1px]
                       bg-gradient-to-br from-cyan-500/60 via-white/10 to-red-500/60
                       shadow-[0_30px_80px_rgba(0,0,0,.35)] transition-transform duration-700 hover:scale-[1.02]"
          >
            <div className="relative overflow-hidden rounded-[1.7rem] bg-black">
              <img
                src={featuredGame.cover}
                alt={`${featuredGame.title} gameplay`}
                fetchPriority="high"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse" />
                Featured
              </span>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 pb-7 sm:p-7 sm:pb-10">
                <div className="min-w-0">
                  <h2 className="font-heading text-2xl sm:text-4xl font-black tracking-tight text-white">{featuredGame.title}</h2>
                  <p className="mt-1 text-sm sm:text-base text-gray-300 line-clamp-2">{featuredGame.tagline}</p>
                </div>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
                </span>
              </div>
            </div>
          </a>

          {/* Floating chips */}
          <div className="hidden sm:flex absolute right-6 -top-5 animate-float items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#111318]/90 px-4 py-3 shadow-xl backdrop-blur-md">
            <Users className="h-5 w-5 text-cyan-500" />
            <span className="text-sm font-semibold text-slate-900 dark:text-white">{featuredGame.players} players</span>
          </div>
          <div className="hidden sm:flex absolute left-6 -bottom-5 animate-float-delay items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#111318]/90 px-4 py-3 shadow-xl backdrop-blur-md">
            <Smartphone className="h-5 w-5 text-red-500" />
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Desktop &amp; Mobile</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ games grid */

const GamesSection = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return games.filter(
      (g) =>
        (category === "All" || g.categories.includes(category)) &&
        (!q || [g.title, g.genre, g.description, ...g.tags].join(" ").toLowerCase().includes(q))
    );
  }, [category, query]);

  return (
    <section id="games" className="scroll-mt-24 py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow>Game Library</Eyebrow>
            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              All <span className="text-red-500">Games</span>
            </h2>
            <p className="mt-3 max-w-xl text-slate-600 dark:text-zinc-400">
              Pick a game and press play. Every game runs right here in your browser.
            </p>
          </div>

          <label className="relative w-full lg:w-80">
            <span className="sr-only">Search games</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search games"
              className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-colors focus:border-[#02C7D9]"
            />
          </label>
        </div>

        {/* Category pills (same pill style as the main site's technology list) */}
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Game categories">
          {categories.map((c) => {
            const on = c === category;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={on}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
                  on
                    ? "border-transparent bg-gradient-to-r from-red-500 to-red-900 text-white shadow-lg"
                    : "border-slate-300 dark:border-white/10 bg-transparent text-slate-600 dark:text-zinc-400 hover:border-[#02C7D9]/40 hover:text-slate-900 dark:hover:text-white hover:shadow-[0_10px_40px_rgba(2,199,217,.15)]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}

          {/* Coming soon / pitch card */}
          <div className="relative flex min-h-[340px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/10 p-8 text-center">
            <div className="rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 p-4">
              <Sparkles className="h-7 w-7 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">More games on the way</h3>
            <p className="max-w-xs text-sm text-slate-600 dark:text-zinc-400">
              New games land here first. Got an idea for one? We would love to hear it.
            </p>
            <a
              href={main("/contact")}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-300 no-underline hover:gap-3 transition-all"
            >
              Share your idea <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {visible.length === 0 && (
          <p className="mt-6 text-center text-slate-500 dark:text-zinc-500">
            No games match “{query}”. Try another search or category.
          </p>
        )}
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ why play here */

const Features = () => (
  <section className="py-20 bg-white dark:bg-[#050505] transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative border border-slate-300 dark:border-gray-800 rounded-[2rem] py-12 px-4 md:px-10 transition-colors duration-200">
        <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 bg-white dark:bg-[#050505] px-4 transition-colors duration-200">
          <h2 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500 whitespace-nowrap">
            Why Play Here
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Instant Play",
              text: "Open a link and you are in. Nothing to download, install or update.",
              tint: "bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
            },
            {
              icon: Users,
              title: "Play With Friends",
              text: "Jump into a quick match, or make a private room and share the code.",
              tint: "bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400",
            },
            {
              icon: Smartphone,
              title: "Desktop & Mobile",
              text: "Keyboard and mouse on a computer, touch controls on your phone.",
              tint: "bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400",
            },
          ].map(({ icon: Icon, title, text, tint }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3 px-2">
              <div className={`rounded-full p-4 ${tint}`}>
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="max-w-xs text-[15px] leading-relaxed text-slate-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ CTA (same as main site) */

const CTASection = () => (
  <section className="py-10 pb-20 bg-gray-50 dark:bg-black transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-200 dark:bg-gradient-to-r dark:from-[#005c6e] dark:via-[#051a24] dark:to-black p-[1px] rounded-2xl transition-colors duration-300">
        <div className="bg-white dark:bg-[#0c0c0e] rounded-2xl p-8 md:p-10 lg:p-12 flex flex-col xl:flex-row items-center justify-between gap-8 shadow-sm dark:shadow-none">
          <div className="flex flex-col sm:flex-row items-center sm:items-start xl:items-center text-center sm:text-left gap-5 md:gap-6">
            <div className="bg-[#00B8D4]/10 dark:bg-[#00E5FF]/10 p-4 rounded-full flex-shrink-0">
              <Rocket className="w-8 h-8 text-[#00B8D4] dark:text-[#00E5FF]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                Want a Game Built for Your Brand?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-[15px] md:text-base">
                We design and build browser games, interactive experiences and gamified campaigns.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full xl:w-auto">
            <a
              href={main("/contact")}
              className="flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity w-full sm:w-auto no-underline"
            >
              Book a Free Call
              <PhoneCall className="w-[18px] h-[18px]" strokeWidth={2} />
            </a>
            <a
              href={main("/")}
              className="flex items-center justify-center gap-2 whitespace-nowrap bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3.5 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-white/5 transition-colors w-full sm:w-auto no-underline"
            >
              Visit nyxStack
              <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <GamesSection />
      <Features />
      <CTASection />
    </>
  );
}
