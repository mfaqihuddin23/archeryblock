const swiper = new Swiper('#sw-1', {
    // Optional parameters
    slidesPerView:3,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
    }
  });
  const swiperb = new Swiper('#sw-1b', {
    // Optional parameters
    slidesPerView:5,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
    }
  });
  const swiper2 = new Swiper('#sw-2', {
    // Optional parameters
    slidesPerView:3,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
      reverseDirection: true
    },
  });
  const swiper2b = new Swiper('#sw-2b', {
    // Optional parameters
    slidesPerView:5,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
      reverseDirection: true
    },
  });

  const swiper3 = new Swiper('#sw-3', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiper4 = new Swiper('#sw-4', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });