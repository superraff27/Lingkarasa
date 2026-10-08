// Ganti path gambar sesuai file di folder /public/images
//
// Cara menambah menu: tambahkan satu baris di array `menu`.
// - kategori: salah satu id di MENU_KATEGORI (data/store.js):
//   "signature" | "coffee" | "non-coffee" | "donat-mini" | "donat-jumbo"
// - favorit: true -> ikut tampil di "Pilihan Rasa Terbaik Kami" di beranda
// - zoom: perbesar/kecilkan gambar di kartu (1 = normal). y: geser naik(-)/turun(+), contoh "-4%".
// - deskripsi & harga: kosongkan "" kalau tidak mau ditampilkan, contoh harga: "Rp 22.000"
export const IMG = {
  icon: "/images/logo-icon.jpg",
  wordmark: "/images/wordmark.png",
  box: "/images/hero-donut-box.png",
  caramel: "/images/caramelrm.png",
  matcha: "/images/matcharm.png",
  about: "/images/about.jpg",
  menu: [
    { nama: "Salted Caramel Latte", kategori: "signature", favorit: true, src: "/images/signature/saltedcaramel.jpeg", zoom: 1.35, y: "0%", deskripsi: "", harga: "15K/17k" },
    { nama: "Brown Sugar Latte", kategori: "signature", favorit: true, src: "/images/signature/brownsugar.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "15K/17k" },
    { nama: "Sea Salt Butterscotch", kategori: "signature", favorit: true, src: "/images/signature/butterscoth.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "15K/17k" },
    { nama: "Hazelnut Latte", kategori: "signature", favorit: true, src: "/images/signature/hazelnut.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "12K/14k" },
    { nama: "Ice Black Coffee", kategori: "coffee", favorit: true, src: "/images/coffeebased/blackcoffee.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "5K/6k/7k" },
    { nama: "Spanish Lattee", kategori: "coffee", favorit: true, src: "/images/coffeebased/spanish.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "11K/12/14k" },
    { nama: "Kopsu Lingkarasa", kategori: "coffee", favorit: true, src: "/images/coffeebased/kopsu.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "11k/12k/14k" },
    { nama: "Carmilatte", kategori: "coffee", favorit: true, src: "/images/coffeebased/carmila.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "12K/14k" },
    { nama: "Vanillatte", kategori: "coffee", favorit: true, src: "/images/coffeebased/vanila.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "12K/14k" },
    { nama: "Choco Origin", kategori: "non-coffee", favorit: true, src: "/images/noncoffee/cocorigin.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "11k/12K/14k" },
    { nama: "Choco Avocado", kategori: "non-coffee", favorit: true, src: "/images/noncoffee/cococado.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "12K/14k" },
    { nama: "Choco Berry", kategori: "non-coffee", favorit: true, src: "/images/noncoffee/cocoberry.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "12K/14k" },
    { nama: "Matcha Latte", kategori: "non-coffee", favorit: true, src: "/images/noncoffee/matcha.jpeg", zoom: 1, y: "0%", deskripsi: "", harga: "12K/14k" },
    { nama: "Domisili 1", kategori: "donat-mini", favorit: true, src: "/images/donatmini/domisili1.jpeg", zoom: 1, y: "0%", deskripsi: "1 Donsu Thailand & 2 Donat Kreasi", harga: "10K" },
    { nama: "Domisili 2", kategori: "donat-mini", favorit: true, src: "/images/donatmini/domisili2.jpeg", zoom: 1, y: "0%", deskripsi: "6 Donat Kreasi", harga: "25K" },
    { nama: "Donat Asik 1", kategori: "donat-jumbo", favorit: true, src: "/images/donatjumbo/donatasik1.jpeg", zoom: 1, y: "0%", deskripsi: "3 donat jumbo Kreasi", harga: "15K" },
    { nama: "Donat Asik 2", kategori: "donat-jumbo", favorit: true, src: "/images/donatjumbo/donatasik2.jpeg", zoom: 1, y: "0%", deskripsi: "6 donat jumbo Kreasi", harga: "28K" },
    
  ],
};