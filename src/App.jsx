import { useEffect, useState } from "react";
import MenuPage from "./MenuPage.jsx";
import "./App.css";
import "./responsive.css";

// Ganti path gambar sesuai file di folder /public/images
const IMG = {
  icon: "/images/logo-icon.jpg",
  wordmark: "/images/wordmark.png",
  box: "/images/hero-donut-box.png",
  caramel: "/images/caramelrm.png",
  matcha: "/images/matcharm.png",
  // zoom: perbesar/kecilkan gelas di kartu (1 = normal). y: geser naik(-)/turun(+), contoh "-4%".
  menu: [
    { nama: "Matcha Latte", src: "/images/matcha.jpeg", zoom: 1, y: "0%" },
    { nama: "Sea Salt Butterscotch", src: "/images/caramel.jpeg", zoom: 1, y: "0%" },
    { nama: "Kopi Susu Lingkarasa", src: "/images/kopsu.jpeg", zoom: 1.35, y: "0%" },
    { nama: "Spanish Latte", src: "/images/spanish.jpeg", zoom: 1, y: "0%" },
  ],
};

const WA_NUMBER = "628xxxxxxxxxx"; // ganti dengan nomor asli
const MAPS_URL = "https://maps.app.goo.gl/5TWjfs87esQbNv1g6";

const svgProps = {
  viewBox: "0 0 64 64", fill: "none", stroke: "currentColor",
  strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
};

const ICONS = {
  donut: (
    <svg {...svgProps}>
      <circle cx="32" cy="32" r="28" /><circle cx="32" cy="32" r="9" />
      <path d="M17 24l5 2M40 12l-3 6M48 25l-5 3M19 42l5-2M45 44l-5-3M31 50v-5M14 33h5M33 17l3 4" />
    </svg>
  ),
  cup: (
    <svg {...svgProps}>
      <rect x="15" y="8" width="34" height="8" rx="3" />
      <path d="M18 16l4 40h20l4-40M20 30h24M21 42h22" />
    </svg>
  ),
  heart: (
    <svg {...svgProps}>
      <path d="M32 55C9 39 5 27 9 19c4-8 16-9 23 2 7-11 19-10 23-2 4 8 0 20-23 36z" />
    </svg>
  ),
  smile: (
    <svg {...svgProps}>
      <circle cx="32" cy="32" r="28" />
      <path d="M19 26q3.5-5 7 0M38 26q3.5-5 7 0M17 36h30c0 9-6 15-15 15s-15-6-15-15z" />
    </svg>
  ),
};

const KEUNGGULAN = [
  { ikon: "donut", judul: "Donut Fresh", teks: "Selalu dibuat dari bahan pilihan berkualitas." },
  { ikon: "cup", judul: "Best Coffee", teks: "Rasa yang pas untuk setiap suasana." },
  { ikon: "heart", judul: "Harga Bersahabat", teks: "Nikmatnya kualitas, tanpa bikin kantong jebol." },
  { ikon: "smile", judul: "Tempat Nyaman", teks: "Cocok untuk nongkrong, WFC, atau sekadar rehat." },
];

const infoSvg = { viewBox: "0 0 48 48", width: 34, height: 34, style: { color: "#5ab4e5" }, "aria-hidden": true };
const INFO_ICONS = {
  pin: (
    <svg {...infoSvg} fill="currentColor">
      <path d="M24 4C15.7 4 9 10.5 9 18.6 9 29.5 24 44 24 44s15-14.500 15-25.400C39 10.500 32.300 4 24 4zm0 21a6.500 6.500 0 1 1 0-13 6.500 6.500 0 0 1 0 13z" />
    </svg>
  ),
  clock: (
    <svg {...infoSvg} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="19" /><circle cx="24" cy="24" r="14.500" strokeWidth="1.500" />
      <path d="M24 12v12l-7 5M24 8v2M24 38v2M8 24h2M38 24h2" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="34" height="34" style={{ color: "#5ab4e5" }} fill="currentColor" aria-hidden="true">
      <path d="M6.620 10.790c1.440 2.830 3.760 5.140 6.590 6.590l2.200-2.200c.270-.270.670-.360 1.020-.240 1.120.370 2.330.570 3.570.570.550 0 1 .450 1 1V20c0 .550-.450 1-1 1-9.390 0-17-7.610-17-17 0-.550.450-1 1-1h3.500c.550 0 1 .450 1 1 0 1.250.200 2.450.570 3.570.110.350.030.740-.250 1.020l-2.200 2.200z" />
    </svg>
  ),
  wa: (
    <svg viewBox="0 0 24 24" width="18" height="18" style={{ color: "#3a9bd0" }} fill="none" stroke="currentColor" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.700-5A9 9 0 1 1 8 19.300L3 21z" />
      <path d="M9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.500-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1-1-2L9 8.500z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

function Logo({ className = "" }) {
  return (
    <div className={`logo ${className}`}>
      <img className="logo-icon" src={IMG.icon} alt="" />
      <img className="logo-word" src={IMG.wordmark} alt="Lingkarasa donut & coffee" />
    </div>
  );
}

function Home() {
  return (
        <main>
          {/* HERO */}
          <section id="beranda" className="hero">
            <img className="hero-bg-donut" src={IMG.icon} alt="" aria-hidden="true" />
            <span className="splash s1" /><span className="splash s2" /><span className="splash s3" />
            <div className="hero-text">
              <p className="tagline">Donut &amp; Coffe<br /><span>Rasa Yang Selalu Bikin Happy</span></p>
              <img className="hero-word" src={IMG.wordmark} alt="Lingkarasa donut & coffee" />
              <p className="lead">
                Perpaduan donut yang lembut dan kopi yang nikmat, untuk menemani setiap momen terbaikmu.
              </p>
              <a href="#menu" className="btn-white">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0a86c8" strokeWidth="1.2" aria-hidden="true"><path d="M5 11h12v4a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-4zM17 12h1.5a2.5 2.5 0 0 1 0 5H17M9 3c-1 1 1 2 0 3M13 3c-1 1 1 2 0 3M4 21h15"/></svg>
                Lihat Menu <span className="arrow">&rarr;</span>
              </a>
            </div>
            <div className="hero-img">
              <img className="drink d1" src={IMG.caramel} alt="Es kopi karamel Lingkarasa" />
              <img className="drink d2" src={IMG.matcha} alt="Matcha latte Lingkarasa" />
              <img className="box" src={IMG.box} alt="Kotak donat semua generasi" />
            </div>
            <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,70 C240,20 420,110 720,70 C1020,30 1200,100 1440,60 L1440,120 L0,120 Z" />
            </svg>
          </section>

          {/* TENTANG */}
          <section id="tentang" className="about">
            <div className="blob-sky" aria-hidden="true"><div className="cloud" /><div className="hill" /></div>
            <div className="about-text">
              <span className="pill">Tentang Kami</span>
              <h2>Lebih dari sekedar<br />Donat dan Kopi</h2>
              <p>
                Lingkarasa hadir dari semangat untuk menghadirkan cita rasa sederhana yang selalu bisa
                membuat hari kamu lebih baik. Kami percaya, hal-hal kecil seperti donut hangat dan kopi
                yang pas, bisa memberikan kebahagiaan besar.
              </p>
              <p className="hand">Terima Kasih sudah menjadi bagian dari Lingkarasa</p>
            </div>
            <div className="blob-quote" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <img className="quote-icon" src={IMG.icon} alt="" style={{ position: "static", transform: "none", width: 64, height: 64, borderRadius: "50%" }} />
              <p className="hand" style={{ padding: 0, margin: 0 }}>Donat<br />&amp; Kopi<br />=<br />Happy<br />!</p>
            </div>
          </section>

          {/* MENU FAVORIT */}
          <section id="menu" className="favorit">
            <div className="fav-text">
              <span className="pill pill-soft">Best Seller</span>
              <h2>Pilihan Rasa<br />Terbaik Kami</h2>
              <p>Dari donut klasik hingga kreasi special, serta kopi pilihan yang selalu segar setiap hari.</p>
              <a href="#/menu" className="btn-soft">Lihat Semua Menu</a>
            </div>
            <div className="cards">
              {IMG.menu.map((m) => (
                <figure className="card" key={m.nama}>
                  <div className="card-photo">
                    {m.src && (
                      <img
                        className="card-drink"
                        src={m.src}
                        alt={m.nama}
                        style={{ "--zoom": m.zoom ?? 1, "--y": m.y ?? "0%" }}
                      />
                    )}
                    <figcaption>{m.nama}</figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </section>

          {/* LOKASI */}
          <section id="lokasi" className="lokasi">
            <ul className="perks">
              {KEUNGGULAN.map((k) => (
                <li key={k.judul}>
                  <span className="perk-icon">{ICONS[k.ikon]}</span>
                  <div><strong>{k.judul}</strong><p>{k.teks}</p></div>
                </li>
              ))}
            </ul>

            <div className="lokasi-grid">
              <div>
                <p className="hand small">Yuk, mampir ke</p>
                <h2 className="lokasi-title">Lokasi Kami</h2>
                <p className="hand small">Temukan kami disini!</p>

                <div className="info">
                  <div className="info-row"><span className="ico">{INFO_ICONS.pin}</span>
                    <div><h3>Alamat</h3><p>Jl. Bumijawa No. 123<br />Bumijawa, Tegal, Jawa Tengah 52466</p></div></div>
                  <div className="info-row"><span className="ico">{INFO_ICONS.clock}</span>
                    <div><h3>Jam Operasional</h3><p>Setiap Hari<br />08.00 - 22.00 WIB</p></div></div>
                  <div className="info-row"><span className="ico">{INFO_ICONS.phone}</span>
                    <div><h3>Kontak</h3><p>+628*******</p>
                      <a className="wa" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">{INFO_ICONS.wa} Chat Via WhatsApp</a></div></div>
                </div>
              </div>

              <div className="map">
                <a className="map-btn" href={MAPS_URL} target="_blank" rel="noreferrer">➤ Lihat di Google Maps</a>
                {/* Peta di bawah memakai koordinat Lingkarasa Donat & Coffee */}
                <iframe
                  title="Peta Lingkarasa"
                  src="https://www.google.com/maps?q=-7.1671174,109.1283477&z=17&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
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
  const links = [
    ["Beranda", "#beranda"],
    ["Menu", "#/menu"],
    ["Tentang Kami", "#tentang"],
    ["Lokasi", "#lokasi"],
  ];

  return (
    <>
      <header className="nav">
        <Logo />
        <button className="burger" aria-label="Buka menu" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? "open" : ""}>
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>
          ))}
        </nav>
      </header>

      {isMenu ? <MenuPage /> : <Home />}

      <footer className="footer">
        <Logo />
        <div className="foot-loc">
          <strong>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true"><path d="M12 2C8.100 2 5 5.100 5 9c0 5.200 7 13 7 13s7-7.800 7-13c0-3.900-3.100-7-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z" /></svg>
            Lokasi Kami
          </strong>
          <p>Jl. Bumijawa No. 123<br />Bumijawa, Tegal, Jawa Tengah 52466</p>
        </div>
        <div className="foot-social">
          <strong>+ Follow Us</strong>
          <div className="soc-row">
            <a className="soc" href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5.500" /><circle cx="12" cy="12" r="4.200" />
                <circle cx="17.300" cy="6.700" r="1.100" fill="#fff" stroke="none" />
              </svg>
            </a>
            <a className="soc" href="https://tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="38" height="38" fill="#fff" aria-hidden="true">
                <path d="M19.590 6.690a4.830 4.830 0 0 1-3.770-4.250V2h-3.450v13.670a2.890 2.890 0 0 1-5.200 1.740 2.890 2.890 0 0 1 2.310-4.640 2.930 2.930 0 0 1 .880.130V9.400a6.840 6.840 0 0 0-1-.050A6.330 6.330 0 0 0 5 20.100a6.340 6.340 0 0 0 10.860-4.430v-7a8.160 8.160 0 0 0 4.770 1.520v-3.400a4.850 4.850 0 0 1-1-.100z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}