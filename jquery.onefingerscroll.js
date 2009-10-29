/**
 * Fix one finger scroll in overflow scroll/auto elements for mobile safari (iphone)
 */
$.fn.onefingerscroll = function() {
	var self = this.get(0);
	return this.each(function() {
		startScroll = 0;
		currentScroll = 0;
		self.ontouchstart = function(e) {
			currentScroll = 0;
			startScroll = self.scrollTop + e.targetTouches[0].pageY;
		};
		self.ontouchmove = function(e) {
			e.preventDefault();
			currentScroll = startScroll - e.targetTouches[0].pageY;
			self.scrollTop = currentScroll;
		};
	});
};