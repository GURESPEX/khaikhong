appendProductSlider(
  "สินค้าแนะนำ",
  "สินค้าแนะนำจากร้านดังและอีกมากมาย",
  document.querySelector("#productSlider"),
  allProduct.filter((e) => {
    return true;
  })
);

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
