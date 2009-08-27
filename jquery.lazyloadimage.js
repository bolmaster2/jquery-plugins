/**
 * lazyload plugin
 * @author joel
 * @param {Object} o
 */
$.fn.lazyLoadImage = function(o) {
	if (o == 'load') {
		callback = typeof callback == 'undefined' ? $.callback : callback;
		return this.each(function() {
			$(this).attr('src', $(this).attr('original'));
			//for ie if img is cached
			if(this.complete) {
				callback(this);
			} else {
				this.onload = function() {
					callback(this);
				};
			}
		});
	}
	o = $.extend({nocache: false, queue: false, replaceImg: 'blank.gif'}, o);
	
	$.remove = function(el) {
			$(el).attr('original', $(el).attr('src'));
			if (o.replaceImg == null)
				$(el).removeAttr('src');
			else 
				$(el).attr('src', o.replaceImg);
	};
	$.callback = function(el) {
		// callback
	};
	return this.each(function() {
		$.remove(this);
	});
};