import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";

const tanggal = (s) => {
  const d = new Date(String(s).replace(" ", "T") + "Z");
  return isNaN(d) ? "" : d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
};

export default function ReviewList() {
  const [data, setData] = useState(null); // null = memuat

  useEffect(() => {
    let batal = false;
    fetch("/api/reviews")
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => !batal && setData(Array.isArray(d) ? d : []))
      .catch(() => !batal && setData([]));
    return () => { batal = true; };
  }, []);

  if (data === null) return null;

  if (data.length === 0)
    return <p className="review-empty">Belum ada ulasan. Jadilah yang pertama! ✨</p>;

  return (
    <div className="review-list">
      {data.map((r, i) => (
        <Reveal as="article" className="review-card" key={`${r.created_at}-${i}`} delay={(i % 3) * 100}>
          <div className="review-stars" aria-label={`${r.rating} dari 5 bintang`}>
            {"★".repeat(r.rating)}<span>{"★".repeat(5 - r.rating)}</span>
          </div>
          <p className="review-text">“{r.pesan}”</p>
          <div className="review-meta">
            <strong>{r.nama || "Pelanggan Lingkarasa"}</strong>
            <span>{[r.cabang, tanggal(r.created_at)].filter(Boolean).join(" · ")}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}