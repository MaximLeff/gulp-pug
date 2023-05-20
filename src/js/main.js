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

	// burger
	const menuBtn = $('.btn--burger');
	const menu = $('.header__nav');

	menuBtn.on('click', function () {
		if ($(this).hasClass('js-active')) {
			$(this).removeClass('js-active');
			menu.removeClass('js-open');
		} else {
			$(this).addClass('js-active');
			menu.addClass('js-open');
		}
	});

	$(document).click(function (e) {
		if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
			menu.removeClass('js-open');
			menuBtn.removeClass('js-active');
		}
	});
	// end burger
});
