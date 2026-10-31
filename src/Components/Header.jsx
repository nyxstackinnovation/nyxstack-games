import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Briefcase,
  Info,
  BookOpen,
  Home,
  X,
  Sun,
  Moon,
  ChevronDown,
  Layers,
  Gamepad2,
} from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { main } from "../config/site";
import { featuredGame, gameUrl } from "../data/games";

// Same header as nyxstack.com. Links to the main website's pages go to nyxstack.com;
// "Games" is this site and is shown as the active page.
const navLinks = [
  { name: "Home", path: main("/"), icon: Home },
  { name: "About Us", path: main("/about"), icon: Info },
  {
    name: "Services",
    path: main("/services"),
    icon: Layers,
    sublinks: [
      { name: "Web Development", path: main("/web-development") },
      { name: "Digital Marketing", path: main("/digital-marketing") },
      { name: "Shopify & WordPress", path: main("/shopify-wordpress") },
      { name: "Agentic AI Solution", path: main("/ai-solutions") },
      { name: "Branding & Design", path: main("/branding-design") },
      { name: "Custom Software Development", path: main("/custom-software") },
    ],
  },
  { name: "Portfolio", path: main("/portfolio"), icon: Briefcase },
  { name: "Blog", path: main("/blog"), icon: BookOpen },
  { name: "Games", path: "/", icon: Gamepad2, internal: true, active: true },
  { name: "Contact Us", path: main("/contact"), icon: Phone },
];

// Renders a router Link for pages of this site, a plain <a> for nyxstack.com pages.
function NavAnchor({ link, className, onClick, children, ...rest }) {
  if (link.internal) {
    return (
      <Link to={link.path} className={className} onClick={onClick} style={{ textDecoration: "none" }} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={link.path} className={className} onClick={onClick} style={{ textDecoration: "none" }} {...rest}>
      {children}
    </a>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const drawerRef = useRef(null);
  const playHref = gameUrl(featuredGame);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, { passive: true });
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (name, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <>
      {/* HEADER */}
      <header
        aria-label="Site header"
        className={`
          fixed top-0 left-0 w-full h-20 z-50
          transition-colors duration-300 ease-in-out
          backdrop-blur-md
          bg-white/90 dark:bg-black/90
          border-b border-gray-200/50 dark:border-white/10
          ${isScrolled ? "shadow-md" : "shadow-sm"}
        `}
      >
        <div className="w-full h-full mx-auto flex items-center justify-between lg:px-[3rem] px-4">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center font-heading gap-2 group py-1"
            style={{ textDecoration: "none" }}
            aria-label="nyxStack Games home"
          >
            <img
              src="/logo1.png"
              alt="nyxStack Logo"
              width="56"
              height="56"
              decoding="async"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <div className="flex flex-col items-start justify-center text-left">
              <span className="text-[#02ACB8] md:text-sm text-[12px] font-semibold leading-none mb-1">nyxStack</span>
              <span className="text-red-500 dark:text-red-500 md:text-2xl text-[14px] font-extrabold leading-none tracking-tighter transition-colors duration-200">
                Games
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const navClass = `relative font-body text-[15px] font-medium transition-colors duration-200 ease-in-out group no-underline flex items-center gap-1 ${
                link.active
                  ? "text-black dark:text-white"
                  : "text-slate-900 dark:text-gray-200 hover:text-black dark:hover:text-white"
              }`;
              const underline = (
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-200 ease-in-out ${
                    link.active ? "w-full" : "w-0 group-hover:w-full group-hover/dropdown:w-full"
                  }`}
                />
              );

              if (link.sublinks) {
                return (
                  <div key={link.name} className="relative group/dropdown py-4">
                    <div className={`flex items-center gap-1 ${navClass}`}>
                      <a href={link.path} className="bg-transparent border-none cursor-pointer outline-none text-inherit font-inherit no-underline">
                        {link.name}
                      </a>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/dropdown:-rotate-180" />
                      {underline}
                    </div>
                    <div className="absolute top-[100%] left-0 w-64 pt-2 opacity-0 translate-y-2 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:visible transition-all duration-200 ease-out z-50">
                      <div className="bg-white dark:bg-[#0f0f13] border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl py-3 flex flex-col backdrop-blur-lg transition-colors duration-200">
                        {link.sublinks.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.path}
                            className="px-5 py-2.5 text-[14px] font-medium text-slate-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200 text-left no-underline"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavAnchor key={link.name} link={link} className={navClass} aria-current={link.active ? "page" : undefined}>
                  {link.name}
                  {underline}
                </NavAnchor>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <button
              id="theme-toggle-btn"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
              className="
                relative flex items-center justify-center
                w-10 h-10 rounded-xl
                border border-gray-200/80 dark:border-white/10
                bg-gray-100 dark:bg-white/5
                hover:bg-gray-200 dark:hover:bg-white/10
                text-slate-700 dark:text-yellow-300
                hover:scale-105 hover:-translate-y-0.5
                transition-all duration-200 ease-in-out
                shadow-sm
              "
            >
              {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>

            {/* Desktop CTA (Gradient) */}
            <a
              id="desktop-play-btn"
              href={playHref}
              aria-label={`Play ${featuredGame.title}`}
              className="
                hidden lg:flex items-center justify-center gap-2
                text-[15px] font-bold text-white no-underline
                bg-gradient-to-r from-red-500 to-red-900
                hover:opacity-90 hover:scale-105 hover:-translate-y-0.5
                transition-all duration-200 ease-in-out
                px-6 py-2.5 rounded-xl shadow-lg
              "
            >
              Play Now <Gamepad2 className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger */}
            <button
              id="hamburger-btn"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden relative w-6 h-5 focus:outline-none z-[70] bg-transparent border-none"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`absolute left-0 w-full h-0.5 bg-slate-900 dark:bg-white transition-all duration-200 ease-in-out ${isMobileMenuOpen ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-2 w-full h-0.5 bg-slate-900 dark:bg-white transition-all duration-200 ease-in-out ${isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`} />
              <span className={`absolute left-0 w-full h-0.5 bg-slate-900 dark:bg-white transition-all duration-200 ease-in-out ${isMobileMenuOpen ? "top-2 -rotate-45" : "top-4"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-[55] bg-black/50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      />

      {/* MOBILE DRAWER */}
      <aside
        ref={drawerRef}
        aria-label="Mobile menu"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed top-0 right-0 h-full z-[60] w-[80vw] max-w-sm flex flex-col shadow-2xl transition-all duration-300 ease-in-out lg:hidden bg-white dark:bg-[#0a0a0a] border-l border-gray-200 dark:border-[#222] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-[#222]">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-2 group" style={{ textDecoration: "none" }}>
            <img src="/logo1.png" alt="nyxStack Logo" width="40" height="40" className="w-10 h-10 object-contain" />
            <div className="flex flex-col items-start justify-center text-left">
              <span className="text-[#02ACB8] text-xs font-semibold leading-none mb-1">nyxStack</span>
              <span className="text-slate-900 dark:text-white text-sm font-bold leading-none transition-colors duration-200">Games</span>
            </div>
          </Link>
          <button
            onClick={closeMobileMenu}
            aria-label="Close Menu"
            className="p-2 rounded-full bg-transparent border-none text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-2 pl-0 m-0">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const hasSublinks = !!link.sublinks;
              const isDropdownOpen = activeMobileDropdown === link.name;

              const InnerContent = (
                <>
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-xl mr-4 shrink-0 transition-colors duration-200 ${
                      link.active ? "bg-[#02ACB8]/20" : "bg-gray-100 dark:bg-[#222222] group-hover:bg-[#02ACB8]/20"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px] text-[#02ACB8]" />
                  </span>
                  <span className="font-bold text-[16px] text-slate-900 dark:text-white flex-1 text-left transition-colors duration-200">
                    {link.name}
                  </span>
                </>
              );

              return (
                <li
                  key={link.name}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 55}ms` : "0ms" }}
                  className={`list-none transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                >
                  <div className="flex flex-col">
                    {hasSublinks ? (
                      <div className="flex items-center justify-between w-full rounded-xl hover:bg-gray-500/10 dark:hover:bg-white/5 transition-colors duration-200 group">
                        <a href={link.path} className="flex items-center flex-1 py-3 px-2 no-underline">
                          {InnerContent}
                        </a>
                        <button
                          type="button"
                          aria-label={`Show ${link.name} links`}
                          aria-expanded={isDropdownOpen}
                          className="px-4 py-3 cursor-pointer bg-transparent border-none"
                          onClick={(e) => toggleMobileDropdown(link.name, e)}
                        >
                          <ChevronDown className={`w-[20px] h-[20px] text-slate-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    ) : (
                      <NavAnchor
                        link={link}
                        onClick={closeMobileMenu}
                        aria-current={link.active ? "page" : undefined}
                        className={`flex items-center w-full px-2 py-3 rounded-xl transition-colors duration-200 group no-underline ${
                          link.active ? "bg-gray-500/10 dark:bg-white/5" : "hover:bg-gray-500/10 dark:hover:bg-white/5"
                        }`}
                      >
                        {InnerContent}
                      </NavAnchor>
                    )}

                    {hasSublinks && (
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        <div className="flex flex-col gap-2 pl-16 pr-2 border-l-2 border-gray-200 dark:border-white/10 ml-6">
                          {link.sublinks.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.path}
                              className="text-sm py-2 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 no-underline"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-5 pb-8 pt-4 border-t border-gray-200 dark:border-[#222]">
          <a
            id="mobile-play-btn"
            href={playHref}
            className="
              flex items-center justify-center gap-2 w-full no-underline
              bg-gradient-to-r from-red-500 to-red-900
              hover:opacity-90 active:scale-95 transition-all duration-200
              font-bold py-3.5 rounded-xl shadow-lg text-sm text-white
            "
          >
            <Gamepad2 className="w-4 h-4" />
            Play {featuredGame.title}
          </a>
        </div>
      </aside>
    </>
  );
}

export default Header;
