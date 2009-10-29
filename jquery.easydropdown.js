/**
 * dropdown made easy, inspired by jakob nielson article: http://www.useit.com/alertbox/mega-dropdown-menus.html
 * @author joel larsson
 */
$.fn.easydropdown = function(dd,o) {
	o = $.extend({showTimeout: 300, hideTimeout: 500},o)
	var self = this;
	var ddet, ddlt;
	$(self, dd).bind('mouseenter', function() {
		ddet = setTimeout(function () {
			$(dd).show();
		},o.showTimeout);
		clearTimeout(ddlt);
	}).bind('mouseleave', function() {
		ddlt = setTimeout(function() {
			$(dd).hide();
		}, o.hideTimeout);
		
	});
};