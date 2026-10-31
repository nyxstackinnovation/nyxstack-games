# nyxStack Games — games.nyxstack.com

The games hub: a page of game cards. Each card opens its game at `games.nyxstack.com/<game>`.
Same stack, fonts, colours, navbar and footer as the main site (`../website`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in build/
```

## Add a game
1. Add an entry to `src/data/games.js` (`slug` is the URL path).
2. Put its cover image in `public/games/` (16:9 or wider, ~1280px wide).
3. In `vercel.json` add a redirect (so the address always ends in `/`) and two rewrites,
   above the last catch-all rule:
   ```json
   "redirects": [{ "source": "/<slug>", "destination": "/<slug>/", "permanent": true }],
   { "source": "/<slug>/", "destination": "https://<game-host>/" },
   { "source": "/<slug>/:path*", "destination": "https://<game-host>/:path*" },
   ```
   The game must load its files with relative paths (`js/main.js`, not `/js/main.js`).

## Deploy (Vercel)
New Vercel project from this folder → Framework: Vite, Output directory: `build` → add the domain
`games.nyxstack.com`. In the DNS for nyxstack.com, add a CNAME `games` → `cname.vercel-dns.com`.
Navbar/footer links point to https://nyxstack.com (change it in `src/config/site.js`).
