(function($){
	$(document).ready(function() {
		$(window).scroll(function(){
			if ( $(this).scrollTop() > 0 ) {
				$('#masthead').addClass('show');
				$('#sidebar-bg').addClass('active');
				$('.masthead-logo').addClass('active');
			} else {
				$('#masthead').removeClass('show');
				$('#sidebar-bg').removeClass('active');
				$('.masthead-logo').removeClass('active');
			}
		})
	})
})(jQuery);