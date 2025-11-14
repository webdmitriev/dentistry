document.addEventListener('DOMContentLoaded', function () {

  $('.comparison-slider').each(function () {
    const slider = $(this);
    slider.slick({
      autoplay: true,
      autoplaySpeed: 700000,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      appendArrows: false,
      rows: 0,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            centerMode: true,
          }
        }
      ]
    });

    const sLightbox = $(this);
    sLightbox.slickLightbox({
      src: 'src',
      itemSelector: 'img',
      navigateByKeyboard: true
    });
  })

});