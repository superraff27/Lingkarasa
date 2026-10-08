import { useState } from "react";
import { IMG } from "./data/images.js";
import { MENU_KATEGORI } from "./data/store.js";
import Reveal from "./components/Reveal.jsx";

function MenuItem({ m, delay }) {
  return (
    <Reveal as="article" className="menu-item" delay={delay}>
      <div className="card-photo">
        {m.src && (
          <img
            className="card-drink"
            src={m.src}
            alt={m.nama}
            style={{ "--zoom": m.zoom ?? 1, "--y": m.y ?? "0%" }}
          />
        )}
      </div>
      <div className="menu-body">
        <h3>{m.nama}</h3>
        {m.deskripsi && <p>{m.deskripsi}</p>}
        {m.harga && <span className="menu-price">{m.harga}</span>}
      </div>
    </Reveal>
  );
}

export default function MenuPage() {
  const [aktif, setAktif] = useState("semua");
  const tampil = MENU_KATEGORI.filter((k) => aktif === "semua" || k.id === aktif);

  return (
    <main className="menu-page">
      <Reveal className="menu-head">
        <span className="pill">Menu</span>
        <h2>Menu Kami</h2>
        <p className="hand">Pilih favoritmu, lalu mampir ke tempat kami!</p>
      </Reveal>

      <div className="menu-tabs" role="tablist" aria-label="Kategori menu">
        {[{ id: "semua", judul: "Semua" }, ...MENU_KATEGORI].map((k) => (
          <button
            key={k.id}
            role="tab"
            aria-selected={aktif === k.id}
            className={`menu-tab ${aktif === k.id ? "active" : ""}`}
            onClick={() => setAktif(k.id)}
          >
            {k.judul}
          </button>
        ))}
      </div>

      {/* key = animasi muncul ulang setiap ganti kategori */}
      <div key={aktif} className="menu-sections">
        {tampil.map((k) => {
          const items = IMG.menu.filter((m) => m.kategori === k.id);
          return (
            <section key={k.id} className="menu-section" id={`kat-${k.id}`}>
              <div className="menu-cat-head">
                <span className="menu-cat-grup">{k.grup}</span>
                <h3>{k.judul}</h3>
                <p className="hand">{k.sub}</p>
              </div>
              {items.length > 0 ? (
                <div className="menu-grid">
                  {items.map((m, i) => (
                    <MenuItem key={m.nama} m={m} delay={(i % 4) * 100} />
                  ))}
                </div>
              ) : (
                <p className="menu-empty">Menu segera hadir ✨</p>
              )}
            </section>
          );
        })}
      </div>

      <Reveal className="menu-back">
        <a href="#beranda" className="btn-soft">← Kembali ke Beranda</a>
      </Reveal>
    </main>
  );
}