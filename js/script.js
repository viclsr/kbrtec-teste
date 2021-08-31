const swiper_about_us = new Swiper('.swiper-about-us', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper_testimonial_1 = new Swiper('.swiper-testimonial-1', {
  direction: 'vertical',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper_testimonial_2 = new Swiper('.swiper-testimonial-2', {
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 3, 
      centeredSlides: true, 
      spaceBetween: 50, 
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
    dragabble: true,
  },
});
