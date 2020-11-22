 // jQuery $('document').ready(); function
    $(document).ready(function(){
    	// hide all alerts 
    	$('#contact_success').hide();
    	$('#contact_error_form').hide();
		$('#contact_error_email').hide();
		$('#contact_error_send').hide();
    	
 		//alert('ok');
        // Calling LayerSlider on your selected element after the document loaded
        $('#layerslider').layerSlider({
        	autoStart: true,
            firstLayer: 1,
            skin: 'noskin',
            skinsPath: '/static/layerslider/skins/',
            responsive: true,
            responsiveUnder: 1600,
            layersContainer : 1600
        });
        
    $("#nav_Features").click(function() {

	    $('html, body').animate({
	        scrollTop: $("#underColumns").offset().top - 60
	    }, 800); 
	});
	
	
	//Navigation Menu
	
	$("#nav_Pricing, #b_one, #btn_browse").click(function() {
    $('html, body').animate({
        scrollTop: $("#pricingBoxes").offset().top - 60
    }, 1000);
	});
	
	$("#nav_Affiliates").click(function() {
    $('html, body').animate({
        scrollTop: $(".affiliates").offset().top - 60
    }, 1000);
	});
	
	
	$("#nav_Contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 60
    }, 1000);
	});
	
	$("#nav_Register").click(function() {
    $('html, body').animate({
        scrollTop: $("#register").offset().top - 60
    }, 1000);
	});
	

    // contact form
	$("#contact_btn").click(function() {
		
		$('#contact_success').hide();
		$('#contact_error_form').hide();
		$('#contact_error_email').hide();
		$('#contact_error_send').hide();
		
		var name = $("input#contact_name").val();
		var email = $("input#contact_email").val();
		var message = $("#contact_msg").val();
		
		if (!name || !email || !message ) {
			$('#contact_error_form').show();
			return false;
		}
		
		var dataString = 'contact_name='+ name + '&contact_email=' + email + '&contact_msg=' + message;
		
		$.ajax({
				type: "POST",
				url: "sendmail.php",
				data: dataString,
				success: function(data) {
					switch(data) {
						case "OK":
							$("input#contact_name").val("");
							$("input#contact_email").val("");
							$("#contact_msg").val("");
							$('#contact_success').show();
							break;
						case "ERROR_FORM":
							$('#contact_error_form').show();
							break;
						case "ERROR_EMAIL":
							$('#contact_error_email').show();
							break;
						case "ERROR_SEND":
							$('#contact_error_send').show();
							break;
					} 
				}
		});
		
		dataLayer.push({'kategoriaZdarzenia': 'lp', 'akcjaZdarzenia': 'click', 'etykietaZdarzenia': 'button_send_message', 'event': 'UAevent'});
		return false;
    });
        
        
        
        
        
        
        
        
        
        
    });
    

	