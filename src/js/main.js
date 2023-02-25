jQuery(document).ready(function ($) {
	// for menu
	$(document).on('mouseenter', '.menu_list li', function () {
		if ($(this).find('ul').length > 0) {
			$(this).children('ul').addClass('active');
		}
	});
	$(document).on('mouseleave', '.menu_list li', function () {
		$(this).find('ul').removeClass('active');
	});
	// ----------
	
	$('input[type="tel"]').inputmask({ mask: '+38 (999) 999-99-99' });

});
