let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      prevEl: ".swiper-button-next",
      nextEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });

  swiper.on('transitionStart', function () {
    document.querySelector('.slide-content').classList.add('swiper-in-transition');
  });

  swiper.on('transitionEnd', function () {
    document.querySelector('.slide-content').classList.remove('swiper-in-transition');
  });

  // Add hover effect to the center card
  swiper.on('transitionEnd', function () {
    document.querySelectorAll('.swiper-slide').forEach((card) => {
      card.classList.remove('hover-effect');
    });

    let centerCard = document.querySelector('.swiper-slide-active');
    centerCard.classList.add('hover-effect');
  });

  // Initial hover effect on the first center card
  document.querySelector('.swiper-slide-active').classList.add('hover-effect');

