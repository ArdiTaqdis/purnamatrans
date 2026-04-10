function loadComponent(id, file) {
  fetch(`components/${file}`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

loadComponent("navbar", "navbar.html");
loadComponent("hero", "hero.html");
loadComponent("layanan", "layanan.html");
loadComponent("paket", "paket.html");
loadComponent("fasilitas", "fasilitas.html");
loadComponent("galeri", "galeri.html");
loadComponent("cta", "cta.html");
loadComponent("testimoni", "testimoni.html");
loadComponent("footer", "footer.html");

new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

function showTab(tab) {
  document.querySelectorAll(".tab-content").forEach((el) => {
    el.classList.add("hidden");
  });

  document.getElementById(tab).classList.remove("hidden");

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("bg-green-700", "text-white");
    btn.classList.add("bg-gray-200");
  });

  event.target.classList.add("bg-green-700", "text-white");
}
