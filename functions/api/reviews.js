// Cloudflare Pages Function -> endpoint: /api/reviews
// Butuh binding D1 bernama "DB" (lihat langkah setup).

// Ubah ke true kalau mau ulasan langsung tampil tanpa dicek dulu (rawan spam).
const AUTO_APPROVE = false;

const json = (data, status = 200, extra = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...extra },
  });

// Ambil ulasan yang sudah disetujui
export async function onRequestGet({ env }) {
  try {
    const { results } = await env.DB.prepare(
      "SELECT nama, cabang, rating, pesan, created_at FROM reviews WHERE approved = 1 ORDER BY created_at DESC LIMIT 12"
    ).all();
    return json(results, 200, { "Cache-Control": "public, max-age=60" });
  } catch {
    return json({ error: "Gagal memuat ulasan." }, 500);
  }
}

// Simpan ulasan baru
export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Data tidak valid." }, 400);
  }

  // Honeypot: kolom tersembunyi, bot biasanya mengisinya
  if (body.website) return json({ ok: true });

  const nama = String(body.nama ?? "").trim().slice(0, 40);
  const cabang = String(body.cabang ?? "").trim().slice(0, 40);
  const pesan = String(body.pesan ?? "").trim();
  const rating = Number(body.rating);

  if (!Number.isInteger(rating) || rating < 1 || rating > 5)
    return json({ error: "Rating harus 1-5." }, 400);
  if (pesan.length < 5 || pesan.length > 500)
    return json({ error: "Ulasan harus 5-500 karakter." }, 400);

  try {
    await env.DB.prepare(
      "INSERT INTO reviews (nama, cabang, rating, pesan, approved) VALUES (?, ?, ?, ?, ?)"
    )
      .bind(nama || null, cabang || null, rating, pesan, AUTO_APPROVE ? 1 : 0)
      .run();
    return json({ ok: true, approved: AUTO_APPROVE }, 201);
  } catch {
    return json({ error: "Gagal menyimpan ulasan." }, 500);
  }
}