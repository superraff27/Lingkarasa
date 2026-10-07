import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import { NAV_LINKS } from "../data/store.js";

export default function Navbar({ open, setOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Logo />
      <button className="burger" aria-label="Buka menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
      <nav className={open ? "open" : ""}>
        {NAV_LINKS.map(([t, h]) => (
          <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>
        ))}
      </nav>
    </header>
  );
}