// Data kelas musik
const classes = [
  {
      title: "Kelas Gitar",
      description: "Pelajari teknik dasar hingga mahir bermain gitar akustik dan elektrik."
  },
  {
      title: "Kelas Saxophone",
      description: "Pelajari teknik pernapasan dan melodi dalam permainan saxophone."
  },
  {
      title: "Kelas Drum",
      description: "Belajar ritme dasar hingga tingkat lanjut dalam permainan drum."
  },
  {
      title: "Kelas Piano",
      description: "Kursus piano mulai dari dasar hingga tingkat mahir."
  }
];

// Fungsi untuk menampilkan modal dengan informasi kelas
function openDetails(index) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  modalTitle.innerText = classes[index].title;
  modalDescription.innerText = classes[index].description;

  modal.style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Fungsi untuk memfilter kelas berdasarkan kategori
function filterClasses(category) {
  const classes = document.querySelectorAll(".class-card");

  classes.forEach(cls => {
      if (category === "all" || cls.classList.contains(category)) {
          cls.style.display = "block";
      } else {
          cls.style.display = "none";
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
