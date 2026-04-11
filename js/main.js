function loadComponent(id, file) {
  fetch(`components/${file}`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      // 🔥 INIT SWIPER KHUSUS GALERI
      if (id === "galeri") {
        new Swiper(".swiper", {
          loop: true,
          autoplay: {
            delay: 3000,
          },
        });
      }
    });
}

loadComponent("navbar", "navbar.html");
loadComponent("hero", "hero.html");
loadComponent("layanan", "layanan.html");
loadComponent("fasilitas", "fasilitas.html");
loadComponent("galeri", "galeri.html");
loadComponent("cta", "cta.html");
loadComponent("testimoni", "testimoni.html");
loadComponent("footer", "footer.html");

// new Swiper(".swiper", {
//   loop: true,
//   autoplay: {
//     delay: 3000,
//   },
// });

function showTab(tab, el) {
  const contents = document.querySelectorAll(".tab-content");

  // step 1: hide semua dengan animasi
  contents.forEach((c) => {
    c.classList.remove("active");
  });

  // step 2: tampilkan dengan delay biar smooth
  setTimeout(() => {
    contents.forEach((c) => {
      c.classList.add("hidden");
    });

    const target = document.getElementById(tab);
    target.classList.remove("hidden");

    setTimeout(() => {
      target.classList.add("active");
    }, 50);
  }, 150);

  // step 3: reset button
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("bg-green-600", "bg-green-700", "text-white");
    btn.classList.add("bg-gray-100");
  });

  // step 4: aktifkan button
  if (el) {
    el.classList.add("bg-green-600", "text-white");
  }
}
