// Data katalog buku
document.addEventListener("DOMContentLoaded", () => {
  fetch("js/books.json")
      .then(response => response.json())
      .then(books => {
          books.sort(() => Math.random() - 0.5); // Acak urutan buku
          displayBooks(books);
      })
      .catch(error => console.error("Error fetching books:", error));
});

function displayBooks(books) {
  const bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = "";

  books.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card", book.category);
      bookCard.addEventListener("click", function(){
        const modal = document.getElementById("modal");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
        const modalImg = document.getElementById("modal-img");
      
        modalTitle.innerText = books[index].title;
        modalDescription.innerText = books[index].description;
        modalImg.src = 'img/'+books[index].img;
      
        modal.style.display = "flex";      
      });

      bookCard.innerHTML = `<img src="img/${book.img}" alt="Buku ${capitalize(book.category)}">
          <h2>${book.title}</h2>`;

      bookContainer.appendChild(bookCard);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Fungsi untuk memfilter buku berdasarkan kategori
function filterBooks(category) {
  const books = document.querySelectorAll(".book-card");

  books.forEach(book => {
      if (category === "all" || book.classList.contains(category)) {
          book.style.display = "block";
      } else {
          book.style.display = "none";
      }
  });
}

// Fungsi untuk mencari buku berdasarkan judul
function searchBook() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  const books = document.querySelectorAll(".book-card");

  books.forEach(book => {
      let title = book.querySelector("h2").innerText.toLowerCase();
      book.style.display = title.includes(input) ? "block" : "none";
  });
}
