(function ($) {
 "use strict";
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 /*----------------------------
 Sticky Header
------------------------------ */
	$(window).scroll(function() {
	if ($(this).scrollTop() > 200){  
	    $('.header-bootom-5').addClass("sticky");
	  }
	  else if ($(this).scrollTop() < 200)
	  {
	    $('.header-bootom-5').removeClass("sticky");
	  }
	});
	/*---------------------
     tooltip
--------------------- */
	$('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });
	
/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	
/*------------------------------------
 search option
---------------------------- */	
    
	$('.search-option-5').hide();
	$(".main-search").on('click', function(){
	   $('.search-option-5').animate({
		height:'toggle',
	    });
	});
	
/*--------------------------
	Category Accordion
---------------------------- */	
	 $('.rx-parent').on('click', function(){
		$('.rx-child').slideToggle(300);
		$(this).toggleClass('rx-change');
	});
	
/*--------------------------
 collapse
---------------------------- */	
	$('.panel-heading a').on('click', function(){
		$('.panel-heading a').removeClass('active');
		$(this).addClass('active');
	});
	
 
/*----------------------------
  Product Carousel
------------------------------ */  
  $(".feature-item").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [768,2],
	  itemsMobile : [500,1],
  });
/*----------------------------
  New Product Carousel
------------------------------ */  
  $(".new-product-item").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [768,2],
	  itemsMobile : [500,1],
  });
    
/*----------------------------
  Best Product Carousel
------------------------------ */  
  $(".best-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [768,1],
	  itemsMobile : [500,1],
  });
/*----------------------------
  Up Comming Carousel
------------------------------ */  
  $(".up-come-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 1,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [500,1],
  });
/*----------------------------
  up product Carousel
------------------------------ */  
  $(".comming-soon-product").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
	  items : 3,
	  margin:30,
	  itemsDesktop : [1199,3],
	  itemsDesktopSmall : [991,2],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
	
/*----------------------------
  banner Carousel
------------------------------ */  
  $(".banner-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
      margin:30,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });

  $(".banner-sys-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
      margin:30,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
  Single Product Carousel
------------------------------ */  
  $("#single-product").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [500,1],
  });
    
/*----------------------------
  Testimonial Carousel
------------------------------ */  
  $(".testimonial-container").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [500,1],
  });
	
/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 88,
	   max: 721,
	   values: [ 95, 831 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 )); 
	
/*--------------------------
     scrollUp
---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*---------------------
	 countdown
	--------------------- */
		$('[data-countdown]').each(function() {
		  var $this = $(this), finalDate = $(this).data('countdown');
		  $this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
		  });
		});
		
/*----------------------------
  Simple Lence Active
------------------------------ */  
	$('#p-view .simpleLens-lens-image').simpleLens({
	});
	
 
})(jQuery); 