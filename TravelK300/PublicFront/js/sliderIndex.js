$('.gallery-all').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
    autoplaySpeed: 800,

            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            autoplay: true,
    autoplaySpeed: 800,

            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
                        autoplay: true,
    autoplaySpeed: 800,

            slidesToScroll: 1,
          }
        }
      ]
  });


  $('.slide-all').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
    autoplaySpeed: 800,

            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            autoplay: true,
    autoplaySpeed: 800,

            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
                        autoplay: true,
    autoplaySpeed: 800,

            slidesToScroll: 1,
          }
        }
      ]
  });
