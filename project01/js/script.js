// Data fasilitas sekolah
const facilities = {
  "lab": {
      title: "Lab Komputer",
      description: "Lab komputer dengan fasilitas modern untuk mendukung pembelajaran teknologi."
  },
  "perpustakaan": {
      title: "Perpustakaan",
      description: "Perpustakaan dengan koleksi buku lengkap dan area baca yang nyaman."
  },
  "olahraga": {
      title: "Lapangan Olahraga",
      description: "Lapangan luas untuk berbagai aktivitas olahraga dan ekstrakurikuler."
  }
};

// Fungsi untuk membuka modal
function openModal(facilityKey) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  modalTitle.innerText = facilities[facilityKey].title;
  modalDescription.innerText = facilities[facilityKey].description;

  modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Tutup modal jika klik di luar area modal
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
      closeModal();
  }
}
