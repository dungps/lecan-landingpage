(function($){
	$(document).ready(function() {
		function show() {
			if ( $(window).scrollTop() > 0 ) {
				$('#masthead').addClass('show');
				$('#sidebar-bg').addClass('active');
				$('.masthead-logo').addClass('active');
			} else {
				$('#masthead').removeClass('show');
				$('#sidebar-bg').removeClass('active');
				$('.masthead-logo').removeClass('active');
			}

			var sidebars = document.querySelectorAll('section.waypoint');
			if ( sidebars.length > 0 ) {
				for( var i = 0; i < sidebars.length; i++ ) {
					var bounding = sidebars[i].getBoundingClientRect();

					if ( bounding.top < 350 ) {
						$(sidebars[i]).find('.left-image').addClass('active');
					} else {
						$(sidebars[i]).find('.left-image').removeClass('active');
					}
				}
			}
		}

		show();
		$(window).scroll(function(){
			show();
		})
	})
})(jQuery);