import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { ThemeProvider } from "./Context/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Games themselves are not routes here: games.nyxstack.com/<game> is served by each game's
// own deployment (see vercel.json). This app is only the hub page and its 404.
function App() {
  return (
    <ThemeProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded-lg focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div
        className="min-h-screen transition-colors duration-200 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900
                   dark:from-neutral-950 dark:via-black dark:to-neutral-950 dark:text-[#F5F5F5]"
      >
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
