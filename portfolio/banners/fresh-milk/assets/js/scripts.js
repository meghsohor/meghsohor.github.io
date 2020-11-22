$(function () {
  'use strict'

  $(document).ready(function(){

    setTimeout(() => {
      $('.banner-container').removeClass('blur');

      initAll();
    }, 500);

    function initAll() {
      $('#heading1').delay(200).fadeIn().addClass('fadeInDown');
      $('.drag-btn').delay(1000).fadeIn().addClass('slideInDown');
      $('.dragbox').delay(2000).fadeIn().addClass('zoomIn');
      $('.cow-1').delay(3000).fadeIn().addClass('bounceIn');
      setTimeout(() => {
        $('.dragbox .box-icon').addClass('float-animate');
        $('.dragbox .arrow').fadeIn();
      }, 3500);

      $(".box-icon").draggable({
        revert: "invalid",
        containment: ".banner-container",
        start: function () {
          $(this).removeClass("float-animate");
          $(this).siblings(".arrow").fadeOut();
          $(this).parent().removeClass("animated");
        },
        stop: function () {
          $(this).addClass("float-animate");
        },

       });

      
      var counter = [];

       $(".cow").droppable({
        drop: function (event, ui) {
          const elem = ui.draggable[0];
          const elemId = elem.getAttribute('id');
          $('.cow').removeClass('shake');

          if(elemId !== 'medicine-icon') {
            $(elem).parent().addClass('invisible');

            if(elemId === 'grass-icon') {
              $('.cow-1').fadeOut();
              $('.cow-2, .grass-layer').fadeIn();
            }

            else if(elemId === 'farm-icon') {
              $('.farm').fadeIn().addClass('slideInRight');
            }
          }

          /* else {
            $(elem).parent().addClass('invisible');
            $('.cow-1').fadeOut();
            $('.cow-2').delay(100).fadeIn();
            $('.shield').delay(200).fadeIn().addClass('heartBeat');

          } */

          if(counter.filter(id => id === elemId).length === 0) {
            counter.push(elemId);
          }

          if(counter.length === 3) {
            startAnimation ()
          }

        },
        /* over: function (event, ui) {
          $('.cow').removeClass('bounceIn').addClass('shake');
        },
        out: function (event, ui) {
          $('.cow').removeClass('shake');
        } */
      });

      $(".cow-container").droppable({

        over: function (event, ui) {
          const elem = ui.draggable[0];
          const elemId = elem.getAttribute('id');
          $('.cow').removeClass('bounceIn');
          if(elemId === 'medicine-icon') {
            //$('.cow').removeClass('shake');
            $('.cow-1').fadeOut();
            $('.cow-2').delay(100).fadeIn();
            $('.shield').delay(100).fadeIn();
            setTimeout(() => {
              $(elem).parent().addClass('invisible');
            }, 200);

            if(counter.filter(id => id === elemId).length === 0) {
              counter.push(elemId);
            }
  
            if(counter.length === 3) {
              startAnimation ()
            }
          }
        },

      });

      /* $(".shield").droppable({

        over: function (event, ui) {
          console.log(event);
          const elem = ui.draggable[0];
          const elemId = elem.getAttribute('id');

          if(elemId === 'medicine-icon') {
            $('.cow').removeClass('shake');
            $(elem).parent().addClass('invisible');
            var x = (event.pageX + $(elem).width()) - ($('.shield').offset().left + $('.shield').width());
            var y = (event.pageY + $(elem).height()) - ($('.shield').offset().top + $('.shield').height());
            console.log(x, y)
          }
        },

      }); */
    }

    function startAnimation () {
        $('#heading1, .drag-btn, .dragboxes, .farm, .cow, .shield').delay(1000).fadeOut();
        $('#heading2').delay(2000).fadeIn().addClass('fadeInDown');
        $('.pack').delay(3000).fadeIn().addClass('slideInLeft');
        $('.glass').delay(3000).fadeIn().addClass('slideInRight');
    }

  });
})