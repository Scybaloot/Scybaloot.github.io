$(document).ready(function($) {
	var $w = window.innerWidth; 
	var $h = window.innerHeight;


	var $thick_w = ($w-125)*0.625;
	var $thin_w = ($w-125)*0.375;

	var $short_h = ($h-160)*0.375;
	var $tall_h = ($h-160)*0.625;

	$("#big").css({"width": $thick_w,"height": ($h-105)})
	$("#small").css({"width": $thin_w, "height": $tall_h})
	$("#superSmall").css({"width": $thin_w, "height": $short_h})
	$(".sideImage").css({"width": $thick_w, "height": ($h/3)})
	$(".sideCaption").css({"width": $thin_w, "height": ($h/3)})


	$(".photo").css({"width": $thin_w, "height": $thin_w*3/4, "margin-bottom": $h/8, "margin-top": $h/20})

	$('article').hover(function() {
		$(this).addClass('shadow');
	}, function(){
		$(this).removeClass('regular');
	});

	/*
	$(".lightboxTrigger").click(function(e){  //on click
		e.preventDefault();  //don't go to a new page
		var image_href = $(this).attr("href");  //set image_href
		if ($('#lightbox').length > 0) { // #lightbox exists
		//insert img tag with clicked link's href as src value
			$('#content').html('<img src="' + image_href + '" />');
		   	
			//show lightbox window - you can use a transition here if you want, i.e. .show('fast')
			$('#lightbox').show();
		}
		else { //#lightbox does not exist 
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';
				
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
		$('#lightbox').live('click', function() {
			$('#lightbox').hide();
		});
	});
*/
	

})