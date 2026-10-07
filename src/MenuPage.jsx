import { IMG } from "./data/images.js";

export default function MenuPage() {
  return (
    <main style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: 40, marginBottom: 24 }}>Menu Kami</h2>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
        {IMG.menu.map((m) => (
          <li key={m.nama}>{m.nama}</li>
        ))}
      </ul>
      <p style={{ marginTop: 24 }}>
        <a href="#beranda">← Kembali ke beranda</a>
      </p>
    </main>
  );
}