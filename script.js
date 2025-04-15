// Dapatkan elemen-elemen yang dibutuhkan
const openButton = document.getElementById('openButton');
const openerDiv = document.getElementById('opener');
const finalMessageDiv = document.getElementById('finalMessage');
const audioElement = document.getElementById('song'); // Tetap ambil elemen audio

console.log(`Halaman siap pada ${new Date().toLocaleTimeString('id-ID',{ timeZone: 'Asia/Jakarta' })} WIB di Surabaya, Jawa Timur.`);

// Event listener untuk tombol buka pesan
openButton.addEventListener('click', () => {
    console.log("Tombol 'Buka Sekarang' di-klik!");

    // 1. Sembunyikan bagian pembuka dengan efek fade out (opsional)
    openerDiv.style.transition = 'opacity 0.5s ease-out';
    openerDiv.style.opacity = '0';
    setTimeout(() => {
        openerDiv.style.display = 'none';
    }, 500); // Tunggu transisi selesai sebelum display none

    // 2. Tampilkan pesan final (Gambar + LOVE YOU) dengan animasi
    // Beri sedikit jeda agar transisi opener selesai
    setTimeout(() => {
        finalMessageDiv.classList.remove('hidden'); // Hapus class .hidden
        finalMessageDiv.classList.add('revealed');  // Tambah class untuk memicu animasi

        // 3. Coba putar musik jika elemen audio ada
        if (audioElement) {
            audioElement.play().then(() => {
                console.log("Musik pengiring dimulai.");
            }).catch(error => {
                console.error("Gagal memutar musik:", error);
                // Mungkin browser memblokir autoplay, tidak masalah jika kontrol audio terlihat
            });
        }
    }, 600); // Jeda sedikit lebih lama dari transisi opener

}); // Akhir dari event listener