import { IMG } from "../data/images.js";
import { CupIcon } from "../icons/index.jsx";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <img className="hero-bg-donut" src={IMG.icon} alt="" aria-hidden="true" />
      <span className="splash s1" /><span className="splash s2" /><span className="splash s3" />
      <div className="hero-text">
        <p className="tagline">Donut &amp; Coffee<br /><span>Rasa Yang Selalu Bikin Happy</span></p>
        <img className="hero-word" src={IMG.wordmark} alt="Lingkarasa donut & coffee" />
        <p className="lead">
          Perpaduan donut yang lembut dan kopi yang nikmat, untuk menemani setiap momen terbaikmu.
        </p>
        <a href="#menu" className="btn-white">
          <CupIcon />
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
  );
}