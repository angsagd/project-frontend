// Data menu cafe
const menu = [
  {
      title: "Nasi Goreng",
      description: "Nasi goreng spesial dengan topping telur dan ayam.",
      img: "nasigoreng.webp",
      price: "Rp 25.000"
  },
  {
      title: "Kopi Latte",
      description: "Kopi espresso dengan campuran susu yang lembut.",
      img: "kopi.webp",
      price: "Rp 20.000"
  },
  {
      title: "Brownies Coklat",
      description: "Brownies lembut dengan coklat leleh di dalamnya.",
      img: "brownies.webp",
      price: "Rp 18.000"
  },
  {
      title: "Teh Manis",
      description: "Teh manis hangat yang menyegarkan.",
      img: "teh.webp",
      price: "Rp 10.000"
  }
];

// Fungsi untuk menampilkan modal dengan informasi menu
function openModal(index) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImg = document.getElementById("modal-img");
  const modalPrice = document.getElementById("modal-price");

  modalTitle.innerText = menu[index].title;
  modalDescription.innerText = menu[index].description;
  modalImg.src = 'img/'+menu[index].img;
  modalPrice.innerText = menu[index].price;

  modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Fungsi untuk memfilter menu berdasarkan kategori
function filterMenu(category) {
  const items = document.querySelectorAll(".menu-card");

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
