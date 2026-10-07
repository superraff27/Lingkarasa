import Logo from "./Logo.jsx";
import { PinIcon, InstagramIcon, TikTokIcon } from "../icons/index.jsx";
import { ALAMAT } from "../data/store.js";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="foot-loc">
        <strong><PinIcon /> Lokasi Kami</strong>
        <p>{ALAMAT[0]}<br />{ALAMAT[1]}</p>
      </div>
      <div className="foot-social">
        <strong>+ Follow Us</strong>
        <div className="soc-row">
          <a className="soc" href="https://instagram.com/lingkarasadonat" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
          <a className="soc" href="https://tiktok.com/@lingkarasa.official" target="_blank" rel="noreferrer" aria-label="TikTok"><TikTokIcon /></a>
        </div>
      </div>
    </footer>
  );
}