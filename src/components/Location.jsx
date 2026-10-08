import { useState } from "react";
import { ICONS, INFO_ICONS } from "../icons/index.jsx";
import { KEUNGGULAN, CABANG, KONTAK, WA_NUMBER } from "../data/store.js";
import Reveal from "./Reveal.jsx";

export default function Location() {
  const [aktif, setAktif] = useState(CABANG[0].id);
  const c = CABANG.find((x) => x.id === aktif) ?? CABANG[0];

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

          {CABANG.length > 1 && (
            <div className="cabang-tabs" role="tablist" aria-label="Pilih cabang">
              {CABANG.map((x) => (
                <button
                  key={x.id}
                  role="tab"
                  aria-selected={aktif === x.id}
                  className={`menu-tab ${aktif === x.id ? "active" : ""}`}
                  onClick={() => setAktif(x.id)}
                >
                  {x.nama}
                </button>
              ))}
            </div>
          )}

          <div className="info" key={c.id}>
            <div className="info-row"><span className="ico">{INFO_ICONS.pin}</span>
              <div><h3>Alamat</h3><p>{c.alamat[0]}<br />{c.alamat[1]}</p></div></div>
            <div className="info-row"><span className="ico">{INFO_ICONS.clock}</span>
              <div><h3>Jam Operasional</h3><p>{c.jam[0]}<br />{c.jam[1]}</p></div></div>
            <div className="info-row"><span className="ico">{INFO_ICONS.phone}</span>
              <div><h3>Kontak</h3><p>{KONTAK}</p>
                <a className="wa" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">{INFO_ICONS.wa} Chat Via WhatsApp</a></div></div>
          </div>
        </Reveal>

        <Reveal className="map" delay={150}>
          {c.mapsUrl && (
            <a className="map-btn" href={c.mapsUrl} target="_blank" rel="noreferrer">➤ Lihat di Google Maps</a>
          )}
          {c.embed ? (
            <iframe
              key={c.id}
              title={`Peta Lingkarasa ${c.nama}`}
              src={c.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <p className="map-empty">Peta {c.nama} segera hadir 📍</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}