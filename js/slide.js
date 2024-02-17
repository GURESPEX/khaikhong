var swiperAds = new Swiper(".swiperAds", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

var swiperProductTemp = new Swiper(".swiperProductTemp", {
  slidesPerView: 3,
  watchSlidesProgress: true,
  freeMode: true,
  spaceBetween: 1,
});

var swiperProduct = new Swiper(".swiperProduct", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  thumbs: {
    swiper: swiperProductTemp,
  },
});

var swiperProductSlider;

if (window.matchMedia("(max-width: 360px)").matches) {
  swiperProductSlider = new Swiper(".swiperProductSlider", {
    grabCursor: true,
    spaceBetween: 4,
    slidesPerView: 1.25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else if (window.matchMedia("(max-width: 576px)").matches) {
  swiperProductSlider = new Swiper(".swiperProductSlider", {
    grabCursor: true,
    spaceBetween: 4,
    slidesPerView: 2.25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else if (window.matchMedia("(max-width: 768px)").matches) {
  swiperProductSlider = new Swiper(".swiperProductSlider", {
    grabCursor: true,
    spaceBetween: 4,
    slidesPerView: 3.25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else if (window.matchMedia("(max-width: 1024px)").matches) {
  swiperProductSlider = new Swiper(".swiperProductSlider", {
    grabCursor: true,
    spaceBetween: 4,
    slidesPerView: 4.25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else {
  swiperProductSlider = new Swiper(".swiperProductSlider", {
    grabCursor: true,
    spaceBetween: 4,
    slidesPerView: 5.25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 360px)").matches) {
    swiperProductSlider = new Swiper(".swiperProductSlider", {
      grabCursor: true,
      spaceBetween: 4,
      slidesPerView: 1.25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (window.matchMedia("(max-width: 576px)").matches) {
    swiperProductSlider = new Swiper(".swiperProductSlider", {
      grabCursor: true,
      spaceBetween: 4,
      slidesPerView: 2.25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    swiperProductSlider = new Swiper(".swiperProductSlider", {
      grabCursor: true,
      spaceBetween: 4,
      slidesPerView: 3.25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    swiperProductSlider = new Swiper(".swiperProductSlider", {
      grabCursor: true,
      spaceBetween: 4,
      slidesPerView: 4.25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    swiperProductSlider = new Swiper(".swiperProductSlider", {
      grabCursor: true,
      spaceBetween: 4,
      slidesPerView: 5.25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});