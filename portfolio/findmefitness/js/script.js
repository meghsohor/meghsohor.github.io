new WOW().init();
		$(document).ready(function(){
			  $('.people-carousel').slick({
			    infinite: true,
			    slidesToShow: 3,
			    slidesToScroll: 3,
			    dots:true,
			    arrows: false,
			    autoplay: true,
  				autoplaySpeed: 4000,
  				responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 2
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        arrows: false,
				        slidesToShow: 1
				      }
				    }
				  ]	
			  });
			});