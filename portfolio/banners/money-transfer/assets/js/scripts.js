$(function () {
    'use strict'

    $(document).ready(function(){

      $("#dropItem").draggable({
         revert: "invalid",
        containment: ".phone-container",
        helper: "clone",
        start: function () {
          $(this).removeClass("animated");
          $(".phone").removeClass("animated");
        },
        });

      $("#dropZone").droppable({
        /* classes: {
          "ui-droppable-active": "ui-state-active",
          "ui-droppable-hover": "ui-state-hover"
        }, */
        drop: function (event, ui) {
          //console.log(event, ui)
          console.log($(this).children('.money'))
          //$("#dropItem").fadeOut();
          $(this).children('.money').fadeIn();
          setTimeout(() => {
            $(".banner-front").addClass("fadeOutDown").delay(500).fadeOut(200);
            $(".banner-back").delay(500).fadeIn(100).addClass("fadeInUpBig");
          }, 500);
        }
      });

      $("#dropItem").delay(1000).fadeIn(400).addClass("tada");
      $("#dropItem").mouseenter(function () {
        $(this).removeClass("tada");
      }).mouseleave(function () {
        $(this).addClass("tada");
      })

    });
  })