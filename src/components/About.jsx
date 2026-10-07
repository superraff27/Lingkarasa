import { IMG } from "../data/images.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="tentang" className="about">
      <Reveal className="blob-sky">
        <img src="/images/about-photo.jpeg" alt="Suasana Lingkarasa Donut & Coffee" />
      </Reveal>
      <Reveal className="about-text" delay={120}>
        <span className="pill">Tentang Kami</span>
        <h2>Lebih dari sekedar<br />Donat dan Kopi</h2>
        <p>
          Lingkarasa hadir dari semangat untuk menghadirkan cita rasa sederhana yang selalu bisa
          membuat hari kamu lebih baik. Kami percaya, hal-hal kecil seperti donut hangat dan kopi
          yang pas, bisa memberikan kebahagiaan besar.
        </p>
        <p className="hand">Terima Kasih sudah menjadi bagian dari Lingkarasa</p>
      </Reveal>
      <Reveal
        className="blob-quote"
        delay={240}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}
      >
        <img className="quote-icon" src={IMG.icon} alt="" style={{ position: "static", transform: "none", width: 64, height: 64, borderRadius: "50%" }} />
        <p className="hand" style={{ padding: 0, margin: 0 }}>Donat<br />&amp; Kopi<br />=<br />Happy<br />!</p>
      </Reveal>
    </section>
  );
}