import { useState } from "react";
import { CABANG } from "../data/store.js";
import Reveal from "./Reveal.jsx";
import ReviewList from "./ReviewList.jsx";

const LABEL = ["", "Kurang", "Cukup", "Bagus", "Enak banget", "Luar biasa!"];

export default function Review() {
  const [nama, setNama] = useState("");
  const [cabang, setCabang] = useState(CABANG[0].nama);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [pesan, setPesan] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, harus tetap kosong
  const [error, setError] = useState("");
  const [kirim, setKirim] = useState(false);
  const [sukses, setSukses] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!rating) return setError("Pilih bintang dulu ya.");
    if (pesan.trim().length < 5) return setError("Tulis ulasanmu sedikit lebih panjang ya.");
    setError("");
    setKirim(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, cabang, rating, pesan, website }),
      });
      if (!res.ok) throw new Error();
      setSukses(true);
      setNama(""); setRating(0); setPesan("");
    } catch {
      setError("Ulasan belum terkirim. Coba lagi sebentar lagi ya.");
    } finally {
      setKirim(false);
    }
  };

  const tampil = hover || rating;

  return (
    <section id="ulasan" className="ulasan">
      <Reveal className="ulasan-head">
        <span className="pill">Ulasan</span>
        <h2>Kata Mereka</h2>
        <p className="hand">Masukanmu bikin kami makin happy!</p>
      </Reveal>

      <ReviewList />

      {sukses ? (
        <Reveal className="review-form review-thanks">
          <h3>Terima kasih! 💙</h3>
          <p>Ulasanmu sudah kami terima dan akan tampil setelah kami cek.</p>
          <button type="button" className="btn-soft review-send" onClick={() => setSukses(false)}>
            Tulis ulasan lagi
          </button>
        </Reveal>
      ) : (
        <Reveal as="form" className="review-form" delay={120} onSubmit={submit} noValidate>
          <h3 className="review-form-title">Tulis Ulasanmu</h3>

          <label>
            Nama
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama kamu (boleh dikosongkan)" maxLength={40} />
          </label>

          {CABANG.length > 1 && (
            <label>
              Cabang yang dikunjungi
              <select value={cabang} onChange={(e) => setCabang(e.target.value)}>
                {CABANG.map((c) => <option key={c.id}>{c.nama}</option>)}
              </select>
            </label>
          )}

          <div className="rating-row">
            <span className="rating-label">Penilaian</span>
            <div className="stars" onMouseLeave={() => setHover(0)}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  className={`star ${n <= tampil ? "on" : ""}`}
                  aria-label={`${n} bintang`}
                  aria-pressed={rating === n}
                  onMouseEnter={() => setHover(n)}
                  onClick={() => setRating(n)}
                >
                  ★
                </button>
              ))}
              <span className="rating-text">{LABEL[tampil]}</span>
            </div>
          </div>

          <label>
            Ulasan
            <textarea rows={4} value={pesan} onChange={(e) => setPesan(e.target.value)} placeholder="Ceritakan menu favorit atau suasana tempatnya..." maxLength={500} />
          </label>

          {/* Honeypot: disembunyikan dari manusia */}
          <input className="hp" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} />

          {error && <p className="form-error" role="alert">{error}</p>}

          <button type="submit" className="btn-soft review-send" disabled={kirim}>
            {kirim ? "Mengirim..." : "Kirim Ulasan"}
          </button>
        </Reveal>
      )}
    </section>
  );
}