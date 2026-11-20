document.querySelectorAll(".hero-projects").forEach((carousel) => {
  new Splide(carousel, {
    type: "loop",
    autoplay: true,
    interval: 5000,
    speed: 800,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: true,
    perPage: 1,
  }).mount();
});

document.querySelectorAll(".lightgallery").forEach((gallery) => {
  const options = {
    selector: "a",
    download: false,
  };

  if (!gallery.classList.contains("askme-gallery")) {
    options.plugins = [lgJustified];
    options.justifiedRowHeight = 220;
    options.justifiedGap = 12;
    options.justifiedLastRow = "justify";
  }

  lightGallery(gallery, options);
});
