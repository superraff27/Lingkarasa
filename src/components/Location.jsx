import { ICONS, INFO_ICONS } from "../icons/index.jsx";
import { KEUNGGULAN, ALAMAT, JAM, KONTAK, WA_NUMBER, MAPS_URL, MAPS_EMBED } from "../data/store.js";
import Reveal from "./Reveal.jsx";

export default function Location() {
  return (
    <section id="lokasi" className="lokasi">
      <ul className="perks">
        {KEUNGGULAN.map((k, i) => (
          <Reveal as="li" key={k.judul} delay={i * 100}>
            <span className="perk-icon">{ICONS[k.ikon]}</span>
            <div><strong>{k.judul}</strong><p>{k.teks}</p></div>
          </Reveal>
        ))}
      </ul>

      <div className="lokasi-grid">
        <Reveal>
          <p className="hand small">Yuk, mampir ke</p>
          <h2 className="lokasi-title">Lokasi Kami</h2>
          <p className="hand small">Temukan kami disini!</p>

          <div className="info">
            <div className="info-row"><span className="ico">{INFO_ICONS.pin}</span>
              <div><h3>Alamat</h3><p>{ALAMAT[0]}<br />{ALAMAT[1]}</p></div></div>
            <div className="info-row"><span className="ico">{INFO_ICONS.clock}</span>
              <div><h3>Jam Operasional</h3><p>{JAM[0]}<br />{JAM[1]}</p></div></div>
            <div className="info-row"><span className="ico">{INFO_ICONS.phone}</span>
              <div><h3>Kontak</h3><p>{KONTAK}</p>
                <a className="wa" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">{INFO_ICONS.wa} Chat Via WhatsApp</a></div></div>
          </div>
        </Reveal>

        <Reveal className="map" delay={150}>
          <a className="map-btn" href={MAPS_URL} target="_blank" rel="noreferrer">➤ Lihat di Google Maps</a>
          <iframe
            title="Peta Lingkarasa"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}