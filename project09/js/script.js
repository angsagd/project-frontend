// Data daftar karakter
const characters = [
  {
      title: "Iron Guardian",
      description: "Tank dengan pertahanan tinggi dan kemampuan melindungi tim.",
      img: "tank.webp"
  },
  {
      title: "Shadow Archer",
      description: "Penembak jitu dengan serangan jarak jauh mematikan.",
      img: "marksman.webp"
  },
  {
      title: "Light Healer",
      description: "Penyembuh yang dapat memberikan buff dan regenerasi kesehatan.",
      img: "support.webp"
  },
  {
      title: "Night Stalker",
      description: "Assassin yang bergerak cepat dengan serangan kritikal tinggi.",
      img: "assassin.webp"
  },
  {
      title: "Red Paladin",
      description: "Petarung tanpa batas dengan keseimbangan serangan dan pertahanan.",
      img: "fighter.webp"
  }
  ,
  {
      title: "Frost Flame",
      description: "Menyatukan api dan es, membakar musuh, membekukan serangan lawan.",
      img: "mage.webp"
  }
];

// Fungsi untuk menampilkan modal dengan informasi karakter
function openModal(index) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImg = document.getElementById("modal-img");

  modalTitle.innerText = characters[index].title;
  modalDescription.innerText = characters[index].description;
  modalImg.src = 'img/'+characters[index].img;

  modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Fungsi untuk memfilter karakter berdasarkan kategori
function filterCharacters(category) {
  const items = document.querySelectorAll(".character-card");

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
