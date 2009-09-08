$.fn.showHideList = function(o) {
	o = $.extend({}, o);
	return this.each(function() {
		$('>li', this).bind('click', function() {
			$(this).parent().find('>li').removeClass('active');
			$(this).addClass('active');
		});
	});
};