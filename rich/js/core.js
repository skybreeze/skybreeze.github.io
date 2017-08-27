
function toggleIcon(e) {
	$(e.target)
	.prev('.panel-heading')
	.find(".more-less")
	.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

$(document).ready(function(){
  	$(".owl-carousel").owlCarousel({
    		loop:true,
    		responsive:{
        		0:{
            			items:1
        		},
        		600:{
            			items:2
        		},
        		1200:{
            			items:3
        		}
    		}
	});

});



$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).innerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                //$(this).animate({'opacity':'1'},1500);
                    $(this).addClass('showme');
            }
            
        }); 
    
    });
    
});

$(document).ready(function() {
    
    	/* Every time the window is scrolled ... */
    	$(window).scroll( function(){

		if ($(".skill-item:nth-of-type(1) ").visible(true)) {
	    		$(".skill-item:nth-of-type(1) .bar .filled-bar").addClass("htmlcss");
		} else {
	    		$('.skill-item:nth-of-type(1) .bar .filled-bar').removeClass("htmlcss");
		}

		if ($(".skill-item:nth-of-type(2) ").visible(true)) {
	    		$(".skill-item:nth-of-type(2) .bar .filled-bar").addClass("js");
		} else {
	    		$('.skill-item:nth-of-type(2) .bar .filled-bar').removeClass("js");
		}

		if ($(".skill-item:nth-of-type(3) ").visible(true)) {
	    		$(".skill-item:nth-of-type(3) .bar .filled-bar").addClass("interface");
		} else {
	    		$('.skill-item:nth-of-type(3) .bar .filled-bar').removeClass("interface");
		}

		if ($(".skill-item:nth-of-type(4) ").visible(true)) {
	    		$(".skill-item:nth-of-type(4) .bar .filled-bar").addClass("backend");
		} else {
	    		$('.skill-item:nth-of-type(4) .bar .filled-bar').removeClass("backend");
		}

		if ($(".skill-item:nth-of-type(5) ").visible(true)) {
	    		$(".skill-item:nth-of-type(5) .bar .filled-bar").addClass("database");
		} else {
	    		$('.skill-item:nth-of-type(5) .bar .filled-bar').removeClass("database");
		}

	});
    
});
/*
$('.scrollto').click(function(){
	event.preventDefault();

    	$('html, body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
    	}, 1000);
    	return false;
});*/

$(".scrollto").click(function(e){       
    e.preventDefault();
    $('html,body').animate({scrollTop:$('.about').offset().top}, 1000);
});