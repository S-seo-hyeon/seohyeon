gsap.registerPlugin(ScrollTrigger);

function Box1__init() {
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box-1",
      start: "top center",
      end: "bottom 75%",
      markers: false,
      scrub: true
    }
  });

  t1.from('.box-1 > .banner-1 > .txt-box:first-child', {
    x: -100,
    opacity: 0,
    duration: 1
  });

  t1.from('.box-1 > .banner-1 > .txt-box:nth-child(3)', {
    x: 100,
    opacity: 0,
    duration: 1
  });

  $('.box-1 > .banner-1 > .txt-box > img:first-of-type').mouseenter(function () {
    var $this = $(this);
    var $imgBox = $this.parent().next();
    $imgBox.addClass('earthquake');
  });

  $('.box-1 > .banner-1 > .txt-box > img:first-of-type').mouseleave(function () {
    var $this = $(this);
    var $imgBox = $this.parent().next();
    $imgBox.removeClass('earthquake');
  });
}

function MySliderBox1__init() {
  var swiper = new Swiper('.my-slider-box-1 .swiper-container', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.my-slider-box-1 .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.my-slider-box-1 .button-next',
      prevEl: '.my-slider-box-1 .button-prev'
    }
  });

}

$(document).ready(function () {
  Box1__init();
  MySliderBox1__init();
});