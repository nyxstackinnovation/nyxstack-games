import React from "react";
import { Link } from "react-router-dom";
import { games, gameUrl } from "../data/games";
import { main } from "../config/site";

// Same 404 look as nyxstack.com, with the games as the way back in.
const NotFound = () => (
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-32 text-center bg-transparent text-gray-900 dark:text-white">
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#02ACB8] opacity-10 dark:opacity-15 blur-[120px] animate-pulse" />
      <div className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full bg-red-600 opacity-10 dark:opacity-15 blur-[120px] animate-pulse" />
    </div>

    <div className="relative z-10 select-none">
      <h1 className="font-black leading-none tracking-tighter text-8xl sm:text-[10rem] md:text-[12rem] bg-gradient-to-br from-[#02ACB8] via-teal-300 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(2,172,184,0.35)]">
        404
      </h1>
      <p className="mt-2 font-bold tracking-widest uppercase text-xl sm:text-2xl md:text-3xl text-gray-500 dark:text-neutral-400">
        Game Not Found
      </p>
    </div>

    <p className="relative z-10 mt-6 max-w-md text-base sm:text-lg text-gray-500 dark:text-neutral-400 leading-relaxed">
      This page or game doesn&apos;t exist, or it has moved. Pick a game below to keep playing.
    </p>

    <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#02ACB8]/40 hover:border-[#02ACB8] text-sm font-semibold text-[#02ACB8] hover:text-white hover:bg-[#02ACB8] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(2,172,184,0.4)]"
      >
        All Games
      </Link>
      {games.map((g) => (
        <a
          key={g.slug}
          href={gameUrl(g)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#02ACB8]/40 hover:border-[#02ACB8] text-sm font-semibold text-[#02ACB8] hover:text-white hover:bg-[#02ACB8] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(2,172,184,0.4)]"
        >
          {g.title}
        </a>
      ))}
      <a
        href={main("/")}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#02ACB8]/40 hover:border-[#02ACB8] text-sm font-semibold text-[#02ACB8] hover:text-white hover:bg-[#02ACB8] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(2,172,184,0.4)]"
      >
        nyxstack.com
      </a>
    </div>
  </section>
);

export default NotFound;
