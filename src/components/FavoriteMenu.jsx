import { IMG } from "../data/images.js";
import Reveal from "./Reveal.jsx";

export default function FavoriteMenu() {
  return (
    <section id="menu" className="favorit">
      <Reveal className="fav-text">
        <span className="pill pill-soft">Best Seller</span>
        <h2>Pilihan Rasa<br />Terbaik Kami</h2>
        <p>Dari donut klasik hingga kreasi special, serta kopi pilihan yang selalu segar setiap hari.</p>
        <a href="#/menu" className="btn-soft">Lihat Semua Menu</a>
      </Reveal>
      <div className="cards">
        {IMG.menu.map((m, i) => (
          <Reveal as="figure" className="card" key={m.nama} delay={i * 110}>
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}