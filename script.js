// Smooth Scrolling
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Placeholder for Contact Form Submission (requires backend)
// Anda perlu server-side script (misal: PHP, Node.js) untuk memproses pengiriman email.
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Di sini Anda akan mengirim data ke server Anda
    // Contoh menggunakan fetch API (membutuhkan endpoint server)
    /*
        fetch('your_server_endpoint.php', { // Ganti dengan URL endpoint server Anda
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Pesan berhasil terkirim!');
                contactForm.reset(); // Mengosongkan formulir
            } else {
                alert('Terjadi kesalahan saat mengirim pesan: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan jaringan atau server.');
        });
        */

    // Untuk demonstrasi, kita bisa menampilkan alert sederhana
    alert(
      `Terima kasih, ${name}! Pesan Anda telah diterima (simulasi pengiriman).\nEmail: ${email}\nPesan: ${message}`
    );
    this.reset(); // Mengosongkan formulir setelah simulasi
  });
}
//togel class active

const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector(".hamburger-menu"); // Menggunakan class selector

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburgerr = document.querySelector(".hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerr.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
