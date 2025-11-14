class VideoPopup {
  constructor() {
    this.popup = document.getElementById('videoPopup');
    this.iframe = this.popup.querySelector('.video-popup__iframe');
    this.closeBtn = this.popup.querySelector('.video-popup__close');
    this.overlay = this.popup.querySelector('.video-popup__overlay');

    this.init();
  }

  init() {
    // Обработчики для кнопок открытия
    document.addEventListener('click', (e) => {
      const playBtn = e.target.closest('[data-video-popup]');
      if (playBtn) {
        const videoUrl = playBtn.getAttribute('data-video-popup');
        this.open(videoUrl);
      }
    });

    // Закрытие popup
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());

    // Закрытие по ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.popup.classList.contains('active')) {
        this.close();
      }
    });

    // Предотвращаем закрытие при клике на контент
    this.popup.querySelector('.video-popup__container').addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  open(videoUrl) {
    // Устанавливаем src для iframe
    this.iframe.src = videoUrl;

    // Показываем popup
    this.popup.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Фокусируемся на кнопке закрытия для доступности
    setTimeout(() => {
      this.closeBtn.focus();
    }, 100);
  }

  close() {
    // Скрываем popup
    this.popup.classList.remove('active');
    document.body.style.overflow = '';

    // Останавливаем видео
    this.iframe.src = '';

    // Возвращаем фокус на кнопку, которая открывала popup
    const activeElement = document.activeElement;
    if (activeElement && activeElement.hasAttribute('data-video-popup')) {
      activeElement.focus();
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {

  new VideoPopup();

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

  $('.reviews-slider').each(function () {
    const slider = $(this);
    slider.slick({
      autoplay: true,
      autoplaySpeed: 700000,
      dots: false,
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
  })

  // ***
  // faq
  $(".panel-heading").click(function (e) {
    $(this)
      .toggleClass("in")
      .next()
      .slideToggle();
    $(".panel-heading")
      .not(this)
      .removeClass("in")
      .next()
      .slideUp();
    e.preventDefault();
  });

});