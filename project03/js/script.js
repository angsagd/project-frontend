// Data destinasi wisata
const destinations = [
  {
      title: "Gunung Indah",
      description: "Gunung dengan pemandangan indah dan udara yang sejuk.",
      img: "gunung.webp"
  },
  {
      title: "Museum Sejarah",
      description: "Museum yang menyimpan peninggalan sejarah kota.",
      img: "museum.webp"
  },
  {
      title: "Wisata Kuliner",
      description: "Nikmati berbagai makanan khas daerah dengan cita rasa autentik.",
      img: "makanan.webp"
  },
  {
      title: "Taman Bermain",
      description: "Tempat rekreasi yang cocok untuk keluarga dan anak-anak.",
      img: "taman.webp"
  }
];

let currentCategory = "all";

// Fungsi untuk menampilkan modal
function openModal(index) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImg = document.getElementById("modal-img");

  modalTitle.innerText = destinations[index].title;
  modalDescription.innerText = destinations[index].description;
  modalImg.src = 'img/'+destinations[index].img;

  modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Fungsi untuk memfilter destinasi berdasarkan kategori
function filterDestinations(category) {
  currentCategory = category;
  const cards = document.querySelectorAll(".destination-card");

  cards.forEach(card => {
      if (category === "all" || card.classList.contains(category)) {
          card.style.display = "block";
      } else {
          card.style.display = "none";
      }
  });
}

// Tutup modal jika klik di luar area modal
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
      closeModal();
  }
}
