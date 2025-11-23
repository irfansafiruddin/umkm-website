// EVENT tombol hero scroll ke produk
document.getElementById("btnHero").addEventListener("click", () => {
    window.location.hash = "#produk";
});

// Nomor WhatsApp penjual dalam format internasional tanpa tanda plus, contoh untuk Indonesia:
const WA_PHONE = "081245634373"; // ganti dengan nomor WhatsApp bisnis/penjualmu

// Ambil semua tombol beli
const tombolBeli = document.querySelectorAll(".btnBeli");

tombolBeli.forEach(btn => {
  btn.addEventListener("click", () => {
    // Ambil data dari atribut tombol
    const nama = btn.dataset.nama || "Produk";
    const harga = btn.dataset.harga ? `Rp ${btn.dataset.harga}` : "";

    // Pesan yang mau dikirim (ubah sesuai kebutuhan)
    const message = `Halo, saya mau pesan *${nama}* ${harga ? `dengan harga ${harga}` : ""}. Mohon info ketersediaan dan cara pembayaran. Terima kasih.`;

    // Buat URL WhatsApp (wa.me)
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WA_PHONE}?text=${encoded}`;

    // Buka WhatsApp di tab baru (atau WhatsApp Web di desktop)
    window.open(waUrl, "_blank");
  });
});


// EVENT kirim form kontak
const namaInput = document.getElementById("namaInput");
const pesanInput = document.getElementById("pesanInput");
const hasilPesan = document.getElementById("hasilPesan");

document.getElementById("btnKirim").addEventListener("click", () => {
    const nama = namaInput.value.trim();
    const pesan = pesanInput.value.trim();

    if (nama === "" || pesan === "") {
        hasilPesan.textContent = "Nama dan pesan harus diisi!";
        hasilPesan.style.color = "red";
    } else {
        hasilPesan.textContent = "Terima kasih " + nama + "! Pesanmu telah terkirim.";
        hasilPesan.style.color = "green";
    }
});
// Nomor WhatsApp penjual dalam format internasional tanpa tanda plus, contoh untuk Indonesia:
WA_PHONE= "081245634373"; // ganti dengan nomor WhatsApp bisnis/penjualmu
// Ambil semua tombol beli// Nomor WhatsApp penjual dalam format internasional tanpa tanda plus, contoh untuk Indonesia:
WA_PHONE = "081245634373"; // ganti dengan nomor WhatsApp bisnis/penjualmu
