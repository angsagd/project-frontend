// Data karya seni dalam galeri
const artworks = [
  {
      title: "Lukisan Senja",
      description: "Lukisan digital yang menggambarkan keindahan matahari terbenam.",
      img: "art1.webp"
  },
  {
      title: "Sketsa Kota",
      description: "Sketsa monokrom tentang suasana kota di sore hari.",
      img: "art2.webp"
  },
  {
      title: "Digital Abstract",
      description: "Seni digital abstrak dengan warna-warna mencolok.",
      img: "art3.webp"
  }
];

let currentIndex = 0;

// Fungsi untuk membuka modal dan menampilkan karya seni
function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImg = document.getElementById("modal-img");

  modalTitle.innerText = artworks[index].title;
  modalDescription.innerText = artworks[index].description;
  modalImg.src = 'img/'+artworks[index].img;

  modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Fungsi untuk navigasi ke karya sebelumnya
function prevImage() {
  currentIndex = (currentIndex === 0) ? artworks.length - 1 : currentIndex - 1;
  openModal(currentIndex);
}

// Fungsi untuk navigasi ke karya berikutnya
function nextImage() {
  currentIndex = (currentIndex === artworks.length - 1) ? 0 : currentIndex + 1;
  openModal(currentIndex);
}

// Tutup modal jika klik di luar area modal
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
      closeModal();
  }
}
