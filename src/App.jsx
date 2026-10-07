import { useEffect, useState } from "react";
import MenuPage from "./MenuPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import FavoriteMenu from "./components/FavoriteMenu.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./responsive.css";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FavoriteMenu />
      <Location />
    </main>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);
  const isMenu = hash.startsWith("#/menu");

  // Routing sederhana berbasis hash: "#/menu" = halaman menu, selain itu = beranda
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (isMenu) { window.scrollTo(0, 0); return; }
    const id = hash.replace("#", "");
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    else window.scrollTo(0, 0);
  }, [hash, isMenu]);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      {/* key membuat transisi fade berjalan tiap pindah halaman */}
      <div key={isMenu ? "menu" : "home"} className="page">
        {isMenu ? <MenuPage /> : <Home />}
      </div>
      <Footer />
    </>
  );
}