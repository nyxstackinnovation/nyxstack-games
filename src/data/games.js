// Every game on games.nyxstack.com. To add a game:
//   1. add an entry here (slug = the URL: games.nyxstack.com/<slug>)
//   2. put its cover image in public/games/
//   3. add its two rewrite rules to vercel.json
export const games = [
  {
    slug: "breakpoint-zero",
    title: "Breakpoint Zero",
    tagline: "Bring the building down. Bring everyone down with it.",
    description:
      "A fast multiplayer FPS where every wall is destructible. Blast holes with rockets, cut through supports and drop whole floors on your enemies.",
    cover: "/games/breakpoint-zero.webp",
    genre: "FPS",
    categories: ["Shooter", "Multiplayer"],
    tags: ["Destructible maps", "Bots", "Private rooms", "Rocket jumps"],
    players: "Up to 8",
    platforms: ["Desktop", "Mobile"],
    isNew: true,
    featured: true,
  },
];

export const featuredGame = games.find((g) => g.featured) || games[0];

export const categories = ["All", ...new Set(games.flatMap((g) => g.categories))];

export const gameUrl = (game) => `/${game.slug}`;
