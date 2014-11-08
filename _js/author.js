var next;
var prev;
	function light_on() {
		// update next and prev
		next = $(this).parent().next().find('img');
		prev = $(this).parent().prev().find('img');
		// update the image in the lightbox
		var newSrc = $(this).attr('src');
		$ ('#dark .light img')
		.attr('src',newSrc)
		.stop(true)
		.css({'opacity':'0'});
		// manage the height off the new dims
		$('#dark .light img').load(function(){
			var newHeight = $('#dark .light img').height();
			console.log(newHeight);
			// $('#dark .light').height(newHeight);
			$('#dark .light')
				.stop(true)
				.animate({'height':newHeight},1000, function() {
					$('#dark .light img').animate({'opacity':'1'},500);
				});
		});
		// show the lightbox
		$('#dark').show();
	}
	$('#gallery img').click(light_on);
	function light_off() {
		$('#dark').hide();
	}
	$('#dark .light .close').click(light_off);
	function arrow_next() {
		next.trigger('click');
	}
	function arrow_prev() {
		prev.trigger('click');
	}
	$('.light .icon-arrow-left').click(arrow_prev);
	$('.light .icon-arrow-right').click(arrow_next);