let galeriSwiper;

function initSwiper() {
  if (galeriSwiper) {
    galeriSwiper.destroy(true, true);
  }

  galeriSwiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2.5,
      },
    },
  });
}

function loadComponent(id, file) {
  fetch(`components/${file}`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      if (id === "galeri" && document.querySelector(".swiper")) {
        setTimeout(() => {
          initSwiper();
        }, 100);
      }
    })
    .catch((err) => {
      console.error("Error load component:", file, err);
    });
}

loadComponent("navbar", "navbar.html");
loadComponent("hero", "hero.html");
loadComponent("layanan", "layanan.html");
loadComponent("fasilitas", "fasilitas.html");
loadComponent("galeri", "galeri.html");
// loadComponent("cta", "cta.html");
loadComponent("testimoni", "testimoni.html");
loadComponent("footer", "footer.html");

function showTab(tab, el) {
  const contents = document.querySelectorAll(".tab-content");

  contents.forEach((c) => c.classList.remove("active"));

  setTimeout(() => {
    contents.forEach((c) => c.classList.add("hidden"));

    const target = document.getElementById(tab);
    target.classList.remove("hidden");

    setTimeout(() => {
      target.classList.add("active");
    }, 50);
  }, 150);

  // init swiper hanya kalau ada
  if (document.querySelector(".swiper")) {
    initSwiper();
  }

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("bg-green-600", "text-white");
    btn.classList.add("bg-gray-100");
  });

  if (el) {
    el.classList.add("bg-green-600", "text-white");
  }

  document.getElementById(tab).scrollIntoView({
    behavior: "smooth",
  });
}
