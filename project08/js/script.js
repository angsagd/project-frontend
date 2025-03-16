// Data daftar villa
const villas = [
  {
      title: "Villa Kolam Renang",
      description: "Villa mewah dengan kolam renang pribadi dan suasana tropis.",
      img: "villa1.webp",
      price: "Rp 2.000.000/malam"
  },
  {
      title: "Villa Pemandangan Laut",
      description: "Nikmati pemandangan laut langsung dari balkon kamar tidur.",
      img: "villa2.webp",
      price: "Rp 3.500.000/malam"
  },
  {
      title: "Villa Kapasitas Besar",
      description: "Villa luas dengan kapasitas hingga 10 orang, cocok untuk keluarga besar.",
      img: "villa3.webp",
      price: "Rp 4.500.000/malam"
  }
];

// Fungsi untuk menampilkan modal dengan informasi villa
function openModal(index) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImg = document.getElementById("modal-img");
  const modalPrice = document.getElementById("modal-price");

  modalTitle.innerText = villas[index].title;
  modalDescription.innerText = villas[index].description;
  modalImg.src = 'img/'+villas[index].img;
  modalPrice.innerText = villas[index].price;

  modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Fungsi untuk memfilter villa berdasarkan kategori
function filterVillas(category) {
  const items = document.querySelectorAll(".villa-card");

  items.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
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
