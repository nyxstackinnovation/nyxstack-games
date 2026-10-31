import React, { useState } from "react";
import { Play, Users, Monitor, Smartphone } from "lucide-react";
import { gameUrl } from "../data/games";

// Game card in the same style as the service cards on nyxstack.com (HoverGlowCard):
// soft 3D tilt on hover, glass surface, action bar at the bottom.
// Links are plain <a> tags: each game is its own app at games.nyxstack.com/<slug>,
// so opening one is a full page load, not a route change inside this hub.
const GameCard = ({ game }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const href = gameUrl(game);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({
      y: ((e.clientX - rect.left - cx) / cx) * 6,
      x: -((e.clientY - rect.top - cy) / cy) * 6,
    });
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="group relative flex flex-col h-full w-full p-4 z-10 duration-300
                 bg-white dark:bg-white/5 backdrop-blur-md
                 border border-slate-200 dark:border-white/10 rounded-2xl
                 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none
                 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:dark:border-cyan-400/50"
    >
      {/* Cover */}
      <a
        href={href}
        aria-label={`Play ${game.title}`}
        className="relative block aspect-video overflow-hidden rounded-xl bg-slate-200 dark:bg-white/5"
      >
        <img
          src={game.cover}
          alt={`${game.title} gameplay`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {game.isNew && (
            <span className="rounded-full bg-gradient-to-r from-red-500 to-red-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
              New
            </span>
          )}
          <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {game.genre}
          </span>
        </div>

        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
          <Users className="h-3.5 w-3.5" /> {game.players}
        </span>

        {/* Play button revealed on hover */}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-[0_0_40px_rgba(2,199,217,.45)]">
            <Play className="h-7 w-7 translate-x-0.5 fill-white text-white" />
          </span>
        </span>
      </a>

      {/* Content */}
      <div className="flex flex-col gap-3 mt-5 px-1 flex-grow">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl lg:text-2xl font-bold tracking-wide text-slate-900 dark:text-white transition-colors duration-200">
            {game.title}
          </h3>
          <div className="flex items-center gap-1.5 pt-1.5 text-slate-400 dark:text-gray-500" aria-label={`Plays on ${game.platforms.join(" and ")}`}>
            {game.platforms.includes("Desktop") && <Monitor className="h-4 w-4" />}
            {game.platforms.includes("Mobile") && <Smartphone className="h-4 w-4" />}
          </div>
        </div>

        <p className="text-sm lg:text-[15px] leading-relaxed text-slate-600 dark:text-gray-300 line-clamp-3">
          {game.description}
        </p>

        <ul className="flex flex-wrap gap-2 pl-0 m-0">
          {game.tags.map((tag) => (
            <li
              key={tag}
              className="list-none rounded-full border border-slate-300 dark:border-white/10 px-3 py-1 text-xs text-slate-600 dark:text-zinc-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex items-center justify-between w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-transparent p-3 rounded-xl mt-6 backdrop-blur-sm transition-colors duration-200">
        <span className="text-sm font-medium text-slate-500 dark:text-gray-400">Free · Plays in browser</span>
        <a
          href={href}
          id={`play-${game.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 no-underline
                     bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-cyan-300
                     border border-blue-500/20 dark:bg-cyan-400/20 dark:hover:bg-cyan-400/40 dark:border-white/10"
        >
          Play Now <Play className="h-3.5 w-3.5 fill-current" />
        </a>
      </div>
    </article>
  );
};

export default GameCard;
