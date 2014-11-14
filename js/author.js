$(document).ready(function(){
	// - - - - Start . Tuck Away Menu - - - -
	var breakpoint = 780;
	var menu_state = 'hidden';

	function window_resize() {
		var win_width = $(window).width();
		if (win_width <= breakpoint)
		{
			$('#wrapper').addClass('mobile');
			$('.glyphicon-align-justify').show();
			$('#user-icons2').show();
			$('#nav-links').hide();
			$('#nav-icons').hide();

			menu_state = 'hidden';
		}
		else
		{
			$('#wrapper').removeClass('mobile');
			$('.glyphicon-align-justify').hide();
			$
			$('#user-icons2').hide();
			$('#nav-links').show();
			$('#nav-icons').show();

			menu_state = 'visible';
		}
		console.log(menu_state);
	}

	window_resize(); // once page loads
	$(window).resize(window_resize);

	function mm_toggle() {
		if (menu_state == 'hidden')
		{
			menu_state = 'visible';
			$('#nav-links').show();
		}
		else
		{
			menu_state = 'hidden';
			$('#nav-links').hide();
		}
		console.log(menu_state);
	}
	$('.glyphicon-align-justify').click(mm_toggle);
	// - - - - End . Tuck Away Menu - - - -
}); //doc ready ends