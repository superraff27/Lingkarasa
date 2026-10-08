export const WA_NUMBER = "6285701818959"; // ganti dengan nomor asli
export const MAPS_URL = "https://maps.app.goo.gl/5TWjfs87esQbNv1g6";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=-7.1671174,109.1283477&z=17&output=embed";

export const ALAMAT = ["Jl.Raya Telkom Bumijawa", "Bumijawa, Tegal, Jawa Tengah 52466"];
export const JAM = ["Setiap Hari", "08.00 - 22.00 WIB"];
export const KONTAK = "+6285701818959 (WhatsApp)";

export const NAV_LINKS = [
  ["Beranda", "#beranda"],
  ["Menu", "#/menu"],
  ["Tentang Kami", "#tentang"],
  ["Lokasi", "#lokasi"],
];

export const KEUNGGULAN = [
  { ikon: "donut", judul: "Donut Fresh", teks: "Selalu dibuat dari bahan pilihan berkualitas." },
  { ikon: "cup", judul: "Best Coffee", teks: "Rasa yang pas untuk setiap suasana." },
  { ikon: "heart", judul: "Harga Bersahabat", teks: "Nikmatnya kualitas, tanpa bikin kantong jebol." },
  { ikon: "smile", judul: "Tempat Nyaman", teks: "Cocok untuk nongkrong, WFC, atau sekadar rehat." },
];

// Kategori halaman menu. "id" dipakai di IMG.menu (field `kategori`).
// Urutan di sini = urutan tampil di halaman.
export const MENU_KATEGORI = [
  { id: "signature", grup: "Minuman", judul: "Signature", sub: "Racikan khas Lingkarasa" },
  { id: "coffee", grup: "Minuman", judul: "Based Coffee", sub: "Untuk pecinta kopi" },
  { id: "non-coffee", grup: "Minuman", judul: "Non Coffee", sub: "Segar tanpa kopi" },
  { id: "donat-mini", grup: "Donat", judul: "Donat Mini Kreasi Lingkarasa", sub: "Kecil, manis, bikin nagih" },
  { id: "donat-jumbo", grup: "Donat", judul: "Donat Semua Kreasi Jumbo", sub: "Ukuran jumbo, puas di setiap gigitan" },
];

// Daftar cabang. Untuk menambah cabang, tambahkan satu objek lagi.
// embed: link "output=embed" dari Google Maps (contoh: https://www.google.com/maps?q=LAT,LNG&z=17&output=embed)
// mapsUrl: link share Google Maps untuk tombol "Lihat di Google Maps"
export const CABANG = [
  {
    id: "cabang-1",
    nama: "Cabang 1",
    alamat: ALAMAT,
    jam: JAM,
    mapsUrl: MAPS_URL,
    embed: MAPS_EMBED,
  },
  {
    id: "cabang-2",
    nama: "Cabang 2",
    alamat: ["Jl. Dukuh Kem, Jejeg, Kecamatan Bumijawa", "Kabupaten Tegal, Jawa Tengah 52466"], // GANTI
    jam: JAM,
    mapsUrl: "https://maps.app.goo.gl/HWMVjT582P36UydV9", // GANTI: link share Google Maps cabang 2
    embed: "https://www.google.com/maps?q=-7.166553,109.090717&z=17&output=embed", // GANTI: contoh https://www.google.com/maps?q=-7.0000000,109.0000000&z=17&output=embed
  },
];