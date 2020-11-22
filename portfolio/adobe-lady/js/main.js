(function($) {
    "use strict";

    /*-------------PRELOADER JS------------*/
		$(window).on('load', function() {
			$('#loading').delay(350).fadeOut('slow');
			$("body").css("overflow", "auto");
		});

    jQuery(document).on('ready', function() {

		/*-------------Scroll to Section------------*/
    	$('a.scrollto').on('click', function(e) {
	        e.preventDefault();
	        var target = this.hash;
	        var $target = $(target);
	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top - 78
	        }, 900, 'swing')
	    });

    	//Check to see if the window is top if not then display button
            $(window).scroll(function(){
                if ($(this).scrollTop() > 400) {
                    $('.scrollToTop').slideDown();
                } else {
                    $('.scrollToTop').slideUp();
                }
            });
            
            //Click event to scroll to top
            $('.scrollToTop').click(function(){
                $('html, body').animate({scrollTop : 0},2000);
                return false;
            });
            
    	/*-----WoW JS initiate-----*/
		if($('.wow').length){
			var wow = new WOW(
			  {
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       true,       // trigger animations on mobile devices (default is true)
				live:         true       // act on asynchronously loaded content (default is true)
			  }
			);
			wow.init();
		}

		/*Portfolio Grids*/
		if($('.portfolio-grids').length){
			$('.portfolio-grids').mixitup();
		}

		/*Image Lightbox*/
		if($('.lightbox').length){
			$('.lightbox').littleLightBox({
				loop: true,
				openMethod: 'changeIn',
				openDirect: 'down',
				distance: 'hide',
				openSpeed: 300,
				closeMethod: 'changeOut',
				closeDirect: 'up',
				closeSpeed: 300,
			});
		}

		/*==========Portfolio Inner page Portfolio items tabs===========*/

		$(function() {
		  $('.tabs nav a').on('click', function() {
		    show_content($(this).index());
		  });
		  
		  show_content(0);

		  function show_content(index) {
		    // Make the content visible
		    $('.tabs .content.visible').fadeOut('fast');
		    $('.tabs .content:nth-of-type(' + (index + 1) + ')').fadeIn('fast');

		    // Set the tab to selected
		    $('.tabs nav a.selected').removeClass('selected');
		    $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
		  }
		});


		/*------Background Slider------*/
		if($("body").hasClass('no-slider') == 0) {
			$.supersized({
				
				// Functionality
				slideshow               :   1,			// Slideshow on/off
				autoplay				:	1,			// Slideshow starts playing automatically
				start_slide             :   1,			// Start slide (0 is random)
				stop_loop				:	0,			// Pauses slideshow on last slide
				random					: 	0,			// Randomize slide order (Ignores start slide)
				slide_interval          :   3350,		// Length between transitions
				transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
				transition_speed		:	1000,		// Speed of transition
				new_window				:	1,			// Image links open in new window/tab
				pause_hover             :   0,			// Pause slideshow on hover
				keyboard_nav            :   1,			// Keyboard navigation on/off
				performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
				image_protect			:	1,			// Disables image dragging and right click with Javascript
														   
				// Size & Position						   
				min_width		        :   0,			// Min width allowed (in pixels)
				min_height		        :   0,			// Min height allowed (in pixels)
				vertical_center         :   1,			// Vertically center background
				horizontal_center       :   1,			// Horizontally center background
				fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
				fit_portrait         	:   1,			// Portrait images will not exceed browser height
				fit_landscape			:   0,			// Landscape images will not exceed browser width
														   
				// Components							
				slide_links				:	'false',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
				thumb_links				:	0,			// Individual thumb links for each slide
				thumbnail_navigation    :   0,			// Thumbnail navigation
				slides 					:  	[			// Slideshow Images
													{image : 'images/banner-1.jpg', title : '', thumb : '', url : ''},
													{image : 'images/banner-2.jpg', title : '', thumb : '', url : ''},
													{image : 'images/banner-3.jpg', title : '', thumb : '', url : ''},
													{image : 'images/banner-4.jpg', title : '', thumb : '', url : ''},
											],
											
				// Theme Options			   
				progress_bar			:	0,			// Timer for each slide							
				mouse_scrub				:	0
				
			});
		}
		

		/*-------Sticy Header-------*/
		var s = $("#mainNav");
		if (s.length) { 
			var pos = s.position();					   
			$(window).scroll(function() {
				var windowpos = $(window).scrollTop();
				if (windowpos >= pos.top) {
					s.addClass("stick");
					$('.logo img').fadeTo('0').attr('src', 'images/logo-sm.png').fadeTo('1');
				} else {
					s.removeClass("stick");
					$('.logo img').fadeTo('0').attr('src', 'images/logo.png').fadeTo('1');
				}
			});
		}

		//Progress Bar / Levels
		function progress_bar_fill() {
			$('.progress-levels').appear(function () {
				if($('.progress-levels .progress-box .bar-fill').length){
					$(".progress-box .bar-fill").each(function() {
						var progressWidth = $(this).attr('data-percent');
						$(this).css('width',progressWidth+'%');
						$(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
						var left = (progressWidth-8)+'%';
						$(this).parents('.progress-box').children('.percent').css('left',left);
						
					});
				}
			});
		}
		if($('.progress-levels .progress-box .bar-fill').length){
			progress_bar_fill();
		}


		/*Collapsible Panel*/
		function accoirdion() {
            var panelHeading   =    $('.panel-heading');
            $('.collapse.in').prev(panelHeading).addClass('active');
            $('#accordion1')
                .on('show.bs.collapse', function(a) {
                    $(a.target).prev(panelHeading).addClass('active');
                })
                .on('hide.bs.collapse', function(a) {
                    $(a.target).prev(panelHeading).removeClass('active');
                });
        }
        accoirdion();


		/*===============Achievements Counter===================*/
		function achievements_counter () { $('.achievements').appear(function () {
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
			

		/*=============Testimonial Slider=================*/
		if ($('.testimonial-slider').length) {
			$('.testimonial-slider').slick({
			  dots: true,
			  arrows: false,
			  infinite: true,
			  speed: 1000,
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
			});
		}
		

		/*====================Clients Slider==================*/

		if ($('.clients-slider').length) {
			$('.clients-slider').slick({
			  dots: false,
			  infinite: true,
			  speed: 1000,
			  autoplay: true,
			  autoplaySpeed : 500,
			  arrows: false,
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  responsive: [
			    {
			      breakpoint: 786,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
			});
		}


            /*------------Typing effect on the Welcome text------------------*/
            if ($(".typed").length) {
            	$(".typed").typed({
					strings: ["Brand.", "Start.", "Develop.", "Expand.", "Rebrand."],
					typeSpeed: 40,
					backSpeed: 40,
					backDelay: 3000,
					loop: true,


				});
            }

			/*===========Mobile Menu init===========*/
			$('#mobile-menu').slicknav({
				label: '',
				duration: 1000,
				appendTo:'.slicknav_menu'
			});

			/*=========Search Box in the Menu=============*/
			$('.search a').click(function(e) {
				e.preventDefault();
				$('.search-box').slideToggle('fast');
			});


    });


})(jQuery);    