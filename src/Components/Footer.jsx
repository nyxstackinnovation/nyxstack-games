import React from "react";
import { Link } from "react-router-dom";
import { main } from "../config/site";
import { games, gameUrl } from "../data/games";
import { Mail, PhoneCall, MapPin } from "lucide-react";

export default function Footer() {
  // Helper function to ensure page scrolls to top when a footer link is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/919258736691?text=Hi%20nyxStack!%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none",
      path: (
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/nyxstack",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      path: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nyxstack.innovation/",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      path: (
        <>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61591831747947",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      path: (
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      ),
    },
    {
      name: "Pinterest",
      url: "https://pin.it/4IqsbidhE",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none",
      path: (
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.635 7.855 6.355 9.312-.088-.791-.167-2.004.035-2.868.183-.78 1.177-4.968 1.177-4.968s-.3-.6-.3-1.487c0-1.393.808-2.434 1.815-2.434.855 0 1.267.642 1.267 1.412 0 .86-.548 2.146-.831 3.34-.237.999.501 1.813 1.485 1.813 1.782 0 3.152-1.88 3.152-4.593 0-2.402-1.726-4.083-4.19-4.083-2.855 0-4.532 2.142-4.532 4.355 0 .863.332 1.789.747 2.292a.301.301 0 0 1 .07.289c-.076.318-.247.999-.281 1.138-.044.183-.146.222-.337.134-1.257-.585-2.043-2.42-2.043-3.896 0-3.173 2.306-6.084 6.651-6.084 3.492 0 6.208 2.49 6.208 5.817 0 3.47-2.188 6.263-5.225 6.263-1.02 0-1.979-.53-2.306-1.156l-.627 2.389c-.227.875-.841 1.971-1.253 2.639.943.291 1.948.448 2.99.448 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      ),
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/user/nyxstack/",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      stroke: "none",
      path: (
        <path d="M14.47 3.03a1 1 0 0 0-.97.76l-.6 2.67a6.93 6.93 0 0 0-2.9.08l-.57-2.54 2.06-.46a1 1 0 1 0-.43-1.95l-3.04.68a1 1 0 0 0-.76 1.2l.74 3.28A6.98 6.98 0 0 0 5 9.5a2 2 0 1 0 1.96 2.43A5.97 5.97 0 0 0 12 18a5.97 5.97 0 0 0 5.04-6.07A2 2 0 1 0 19 8a1.99 1.99 0 0 0-1.56.76A6.98 6.98 0 0 0 13.97 6l.47-2.09 1.78.4A2 2 0 1 0 17 3a2 2 0 0 0-2.53.03ZM9.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM9.6 14.5a3.4 3.4 0 0 0 4.8 0 .5.5 0 1 1 .7.7 4.4 4.4 0 0 1-6.2 0 .5.5 0 0 1 .7-.7Z" />
      ),
    },
    {
      name: "Medium",
      url: "https://medium.com/@nyxstack.innovation",
      viewBox: "0 0 1043.63 592.71",
      fill: "currentColor",
      stroke: "none",
      path: (
        <path d="M588.67 296.35c0 163.67-131.94 296.36-294.34 296.36S0 460.02 0 296.35 131.94 0 294.33 0s294.34 132.69 294.34 296.35zm322.96 0c0 154.08-65.97 279.02-147.33 279.02s-147.33-124.94-147.33-279.02S682.94 17.33 764.3 17.33s147.33 124.94 147.33 279.02zm132 0c0 138.05-23.21 249.93-51.84 249.93s-51.84-111.88-51.84-249.93 23.21-249.93 51.84-249.93 51.84 111.88 51.84 249.93z" />
      ),
    },
  ];

  return (
    <>
      <style>
        {`
          /* For Chrome, Edge, and Safari */
          .footer-services-scrollbar::-webkit-scrollbar {
            width: 6px !important;
          }
          .footer-services-scrollbar::-webkit-scrollbar-track {
            background: rgba(150, 150, 150, 0.05) !important;
            border-radius: 10px !important;
          }
          /* Updated Gradient: cyan-700 (#0e7490) to red-700 (#b91c1c) */
          .footer-services-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #0e7490, #b91c1c) !important;
            border-radius: 10px !important;
          }
          
          /* For Firefox */
          .footer-services-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #0e7490 transparent;
          }
        `}
      </style>

      <footer
        aria-label="Site footer"
        className="w-full bg-slate-50 dark:bg-[#050505] border-t border-slate-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid Layout with Vertical Dividers on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:divide-x divide-slate-300 dark:divide-gray-800">
            {/* Column 1: Branding & Description */}
            <div className="flex flex-col items-start lg:col-span-4 lg:pr-10">
              <Link
                to="/"
                onClick={scrollToTop}
                aria-label="nyxStack Games — go to games home"
                className="flex items-center gap-2 group hover:no-underline"
              >
                <img
                  src="/logo1.png"
                  alt="nyxStack Logo"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-col items-start justify-center text-left">
                  <span className="text-[#02ACB8] text-[13px] font-semibold leading-none mb-1 transition-colors duration-300">
                    nyxStack
                  </span>
                  {/* 👇 FIXED: text-red-500 applied globally instead of just in dark mode */}
                  <span className="text-red-500 group-hover:text-red-600 dark:group-hover:text-red-400 text-xl font-extrabold leading-none tracking-tight transition-colors duration-300">
                    Games
                  </span>
                </div>
              </Link>

              <p className="mt-6 text-[14px] text-slate-600 dark:text-gray-400 leading-relaxed max-w-sm">
                Free browser games built by nyxStack Innovation. No downloads,
                no installs. Just open a link and play.
              </p>

              {/* Social Icons in Circles */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full border border-slate-300 dark:border-gray-700 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-red-600 hover:border-red-600 dark:hover:text-red-500 dark:hover:border-red-500 transition-all duration-300 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox={social.viewBox}
                      fill={social.fill}
                      stroke={social.stroke}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[15px] h-[15px] group-hover:scale-110 transition-transform"
                    >
                      {social.path}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start lg:col-span-2 lg:pl-10">
              <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">
                Quick Links
              </h3>
              <nav
                aria-label="Quick Links"
                className="flex flex-col space-y-3.5"
              >
                {[
                  { name: "About Us", path: main("/about") },
                  { name: "Services", path: main("/services") },
                  { name: "Portfolio", path: main("/portfolio") },
                  { name: "Blog", path: main("/blog") },
                  { name: "Contact Us", path: main("/contact") },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.path}
                    className="text-[14px] text-slate-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:translate-x-1 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mt-8 mb-4">
                Games
              </h3>
              <nav aria-label="Games" className="flex flex-col space-y-3.5">
                {games.map((game) => (
                  <a
                    key={game.slug}
                    href={gameUrl(game)}
                    className="text-[14px] text-slate-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:translate-x-1 transition-all duration-300"
                  >
                    {game.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Our Services */}
            <div className="flex flex-col items-start lg:col-span-3 lg:pl-10">
              <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">
                Our Services
              </h3>
              <nav
                aria-label="Services Links"
                className="flex flex-col space-y-3.5 lg:max-h-[210px] lg:pr-3 "
              >
                {[
                  {
                    name: "Web Development",
                    path: "/web-development",
                  },
                  {
                    name: "Digital Marketing",
                    path: "/digital-marketing",
                  },
                  {
                    name: "Shopify & WordPress",
                    path: "/shopify-wordpress",
                  },
                  {
                    name: "Agentic AI Solution",
                    path: "/ai-solutions",
                  },
                  {
                    name: "Branding & Design",
                    path: "/branding-design",
                  },
                  {
                    name: "Custom Software Development",
                    path: "/custom-software",
                  },
                ].map((service, idx) => (
                  <a
                    key={idx}
                    href={main(service.path)}
                    className="text-[14px] text-slate-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:translate-x-1 transition-all duration-300"
                  >
                    {service.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 4: Contact Info */}
            <div className="flex flex-col items-start lg:col-span-3 lg:pl-10">
              <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">
                Contact Info
              </h3>
              <div className="flex flex-col space-y-4 text-[14px] text-slate-600 dark:text-gray-400">
                <a
                  href="mailto:nyxstack.innovation@gmail.com"
                  className="flex items-center gap-3 group hover:text-red-600 dark:hover:text-red-500 transition-colors"
                >
                  <Mail
                    className="w-[18px] h-[18px] text-slate-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors"
                    strokeWidth={1.5}
                  />
                  <span>nyxstack.innovation@gmail.com</span>
                </a>
                <a
                  href="tel:+919258736691"
                  className="flex items-center gap-3 group hover:text-red-600 dark:hover:text-red-500 transition-colors"
                >
                  <PhoneCall
                    className="w-[18px] h-[18px] text-slate-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors"
                    strokeWidth={1.5}
                  />
                  <span>+91 92587 36691</span>
                </a>
                <div className="flex items-start gap-3 group hover:text-red-600 dark:hover:text-red-500 transition-colors cursor-default mt-1">
                  <MapPin
                    className="w-[18px] h-[18px] text-slate-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>Noida, UP 201301, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="mt-16 pt-6 border-t border-slate-300 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-slate-500 dark:text-gray-500">
              © {new Date().getFullYear()} nyxStack Innovation. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 text-[13px] text-slate-500 dark:text-gray-500">
              <a
                href={main("/privacy-policy")}
                className="hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-slate-300 dark:text-gray-700">|</span>
              <a
                href={main("/terms-of-use")}
                className="hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
