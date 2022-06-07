// $(document).ready(function () {
// 	function windowWidth() {
// 		var window_width = $(window).width();
// 		var width_style = 'text-align:right; position:fixed; width:100%;'
// 		var width_color = 'background-color:#F6EB87;'

// 		if (window_width < 375) {
// 			width_color = 'background-color:#0C8FF2;'
// 		} else if (window_width < 650) {
// 			width_color = 'background-color:#0DD4FC;'
// 		} else if (window_width < 768) {
// 			width_color = 'background-color:#00E6CF;'
// 		} else if (window_width < 1024) {
// 			width_color = 'background-color:#0DFCA1;'
// 		} else if (window_width < 1200) {
// 			width_color = 'background-color:#0CF259;'
// 		}
// 		$('body').append('<div class="window_inner_width" style="' + width_style + width_color + '">' + window_width + 'px</div>')
// 	};
// 	windowWidth()

// 	$(window).on('resize', function () {
// 		windowWidth()
// 	})
// });


// $(document).ready(function () {
// 	$(document).on('mouseenter','.menu_list li', function(){
// 		if($(this).find('ul').length > 0) {
// 			$(this).children('ul').addClass('active');
// 		}
// 	})
// 	$(document).on('mouseleave','.menu_list li', function(){
// 		$(this).find('ul').removeClass('active');
// 	})
// });