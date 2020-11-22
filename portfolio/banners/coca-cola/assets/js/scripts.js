$(function () {
  'use strict'

  $(document).ready(function(){
    $('.banner').wScratchPad({
      size        : 30,
      bg:  'assets/images/coke.jpg',
      realtime    : true, 
      // The overlay image
      fg: 'assets/images/banner-foreground.jpg',
      // The cursor image
      //'cursor': 'url("https://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
      'cursor': 'grab',
      
      scratchMove: function (e, percent) {
        $('.button').fadeOut(500);
        if (percent > 80) {
          $('.banner').wScratchPad('clear');
          $('.banner').css("cursor", "default");
          $('.counter').delay(500).fadeIn(100).addClass("fadeIn");
          setTimeout(() => {
            startCounter();
          }, 1000);
        }
      }
    });
  
    setTimeout(() => {
      $('canvas, .button').css("filter", "unset");
      setTimeout(() => {
        $('.button').addClass("headShake");
      }, 2000);
    }, 100);
  
    function startCounter() {
      $('.number').easy_number_animate({
        start_value: 8,
        end_value: 4,
        duration: 3000,
        after: revealText
      });
    }
  
    function revealText() {
      particlesJS.load('snow', 'assets/js/particles.json', function() {
        $('#snow').fadeIn(2000);
      });
      $('.banner-text').delay(1500).fadeIn(100).addClass("slideInUp");
    }
  })

})