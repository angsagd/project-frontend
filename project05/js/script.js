// Fungsi untuk highlight bahan saat dihover
function highlight(element) {
  element.style.backgroundColor = "#ffcc80";
}

function unhighlight(element) {
  element.style.backgroundColor = "white";
}

// Fungsi untuk ekspansi langkah-langkah memasak
function toggleStep(element) {
  let content = element.querySelector("p");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

// Fungsi untuk timer memasak
function startTimer() {
  let time = document.getElementById("timerInput").value;
  let display = document.getElementById("timerDisplay");

  if (time > 0) {
      let countdown = setInterval(function () {
          display.innerText = `Waktu tersisa: ${time} detik`;
          time--;

          if (time < 0) {
              clearInterval(countdown);
              display.innerText = "Waktu habis!";
              alert("Timer selesai!");
          }
      }, 1000);
  } else {
      alert("Masukkan waktu yang valid!");
  }
}
