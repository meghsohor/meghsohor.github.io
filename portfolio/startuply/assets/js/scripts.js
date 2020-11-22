$(function () {
    'use strict'

    $(document).ready(function(){

      setTimeout(function(){
        $('body').removeClass('loading');
      }, 1000);

      /*====================Menu Toggler==================*/
      $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
      })

      /*====================Hero Slider==================*/
      if ($('.hero-slider').length) {
        $('.hero-slider').slick({
          dots: true,
          infinite: true,
          speed: 1000,
          autoplay: true,
          autoplaySpeed : 3000,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }

      /*==================== Sticky Header ==================*/

      $(window).scroll(function(e){
        if ($(this).scrollTop() > $('header').height()) {
            $('header').addClass('inverse');
        } else {
            $('header').removeClass('inverse');
        }
      });


      /*====================Testimonial Slider==================*/
      if ($('.testimonal-slider').length) {
        $('.testimonal-slider').slick({
          dots: true,
          infinite: true,
          speed: 1000,
          autoplay: true,
          autoplaySpeed : 3000,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }

      /*====================Portfolio Grids==================*/
      if($('.projects-grid').length){
        //$('.projects-grid').mixitup();
        mixitup($('.projects-grid'))
      }
    

      /*===============Achievements Counter===================*/
      function achievements_counter () { $('.js-counter').appear(function () {
          setTimeout(function () {
            $('.js-counter').countTo({
              formatter: function (value, options) {
                    return value.toFixed(options.decimals);
                },
            });
          }, 500);
        });
      }

      if($('.js-counter').length){
        achievements_counter();
      }

      /*===============Lightbox Init===================*/
      $('.lightbox-img').magnificPopup({
        type: 'image'
        // other options
      });

      $('.play-tube').magnificPopup({
        type: 'iframe'
        // other options
      });


      /*===============Smooth-Scroll Init===================*/
      var scroll = new SmoothScroll('a[href*="#"]', 
      {
        easing: 'easeInOutCubic',
        updateURL: false
      });

      /*===============Active Link===================*/
      $('.nav-link').click(function (e) {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
      })

    });
  })