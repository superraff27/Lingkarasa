import { useState } from "react";
import "./MenuPage.css";

/* ============ DATA MENU — edit di sini ============
   Tambah menu baru: salin satu baris { ... } di kategori yang sesuai.
   - nama : nama menu
   - src  : foto di /public/images (kosongkan "" kalau belum ada)
   - harga: contoh "Rp 18.000" (kosongkan "" kalau tidak mau ditampilkan)
   - zoom / y : atur ukuran & posisi gelas di dalam kartu (1 = normal)
*/
const KATEGORI = [
  {
    id: "signature",
    nama: "Signature Based",
    deskripsi: "Racikan khas Lingkarasa.",
    menu: [
      { nama: "Sea Salt Butterscotch", src: "/images/caramel.jpeg", harga: "", zoom: 1, y: "0%" },
      { nama: "Kopi Susu Lingkarasa", src: "/images/kopsu.jpeg", harga: "", zoom: 1.35, y: "0%" },
    ],
  },
  {
    id: "coffee",
    nama: "Based Coffee",
    deskripsi: "Pilihan kopi untuk setiap suasana.",
    menu: [
      { nama: "Spanish Latte", src: "/images/spanish.jpeg", harga: "", zoom: 1, y: "0%" },
    ],
  },
  {
    id: "noncoffee",
    nama: "Non Coffee",
    deskripsi: "Segar tanpa kopi.",
    menu: [
      { nama: "Matcha Latte", src: "/images/matcha.jpeg", harga: "", zoom: 1, y: "0%" },
    ],
  },
];

function Kartu({ m }) {
  return (
    <article className="mp-card">
      <div className="mp-photo">
        {m.src && (
          <img
            src={m.src}
            alt={m.nama}
            loading="lazy"
            style={{ "--zoom": m.zoom ?? 1, "--y": m.y ?? "0%" }}
          />
        )}
      </div>
      <h3>{m.nama}</h3>
      {m.harga && <p className="mp-harga">{m.harga}</p>}
    </article>
  );
}

export default function MenuPage() {
  const [aktif, setAktif] = useState("semua");
  const tampil = aktif === "semua" ? KATEGORI : KATEGORI.filter((k) => k.id === aktif);

  return (
    <main className="mp">
      <a className="mp-back" href="#beranda">← Kembali ke Beranda</a>

      <header className="mp-head">
        <span className="pill">Menu Kami</span>
        <h1>Semua Pilihan Rasa</h1>
        <p>Dari racikan signature sampai kopi dan non kopi, semuanya dibuat segar setiap hari.</p>
      </header>

      <div className="mp-tabs" role="group" aria-label="Filter kategori menu">
        {[{ id: "semua", nama: "Semua" }, ...KATEGORI].map((k) => (
          <button
            key={k.id}
            type="button"
            className={aktif === k.id ? "on" : ""}
            aria-pressed={aktif === k.id}
            onClick={() => setAktif(k.id)}
          >
            {k.nama}
          </button>
        ))}
      </div>

      {tampil.map((k) => (
        <section key={k.id} className="mp-sec" aria-labelledby={`k-${k.id}`}>
          <h2 id={`k-${k.id}`}>{k.nama}</h2>
          <p className="mp-desc">{k.deskripsi}</p>
          {k.menu.length ? (
            <div className="mp-grid">
              {k.menu.map((m) => <Kartu key={m.nama} m={m} />)}
            </div>
          ) : (
            <p className="mp-empty">Menu segera hadir.</p>
          )}
        </section>
      ))}
    </main>
  );
}