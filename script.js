const btnTema = document.querySelector('#btnToggleTema')
const bodyHalaman = document.querySelector('body')

btnTema.addEventListener('click', function () {
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent ='🌙 Mode Gelap';
} else {
    btnTema.textContent = '☀️ Mode Terang';
  }
});
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function(event) {
  event.preventDefault(); // biar tidak langsung buka aplikasi email
  elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function() {
  elemenModal.classList.remove('show');
});
const elemenSapaan = document.querySelector('#sapaan');
const jamSekarang = new Date().getHours();
let teksSapaan = '';

if (jamSekarang <10) {
  teksSapaan = '☀️ Selamat Pagi, terima kasih sudah mampir!';
} else if (jamSekarang < 15 ) {
  teksSapaan = '🌤️ Selamat Siang, terima kasih sudah mampir!';
} else if (jamSekarang < 18 ) {
  teksSapaan = '🌆 Selamat Sore, terima kasih sudah mampir!';
} else {
  teksSapaan = '🌙 Selamat Malam, terima kasih sudah mampir!';
}
elemenSapaan.textContent = teksSapaan;

const bioText = document.querySelector('#bioText');
const btnBacaLagi = document.querySelector('#btnBacaLagi');

btnBacaLagi.addEventListener('click', function() {
  bioText.classList.toggle('expanded');

  if (bioText.classList.contains('expanded')) {
    btnBacaLagi.textContent = 'Tampilkan lebih sedikit';
  }else {
    btnBacaLagi.textContent = 'Baca selengkapnya';
}
});
