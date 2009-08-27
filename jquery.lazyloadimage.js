/**
 * lazyload plugin
 * @author joel
 * @param {Object} o
 */
$.fn.lazyLoadImage = function(o, callback) {
	var self = this;
	$.ll = typeof $.ll == 'undefined' ? {i:0} : $.ll;
	$.ll.add = function(el) {
		$(el).attr('src', $(el).attr('original'));
		$(el).removeAttr('original');
	};
	$.ll.remove = function(el) {
			$(el).attr('original', $(el).attr('src'));
			if (o.replaceImg == null)
				$(el).removeAttr('src');
			else 
				$(el).attr('src', o.replaceImg);
	};
	$.ll.callback = function(el, callback) {
		//for ie if img is cached
		if(el.complete) {
			callback(el);
		} else {
			el.onload = function() {
				callback(this);
			};
		}
	};
	$.ll.queue = function(el) {
		$.ll.add(el[$.ll.i]);
		$.ll.callback(el[$.ll.i], function() {
			$.ll.i++;
			//console.log('i: '+$.i+' self.length: '+self.length);
			if ($.ll.i >= self.length) {
				return false;
			}
			$.ll.queue(self);
		});
	};
	
	if (o == 'load') {
		callback = typeof callback == 'undefined' ? function(){} : callback;
		if ($.ll.o.queue == true) {
			$.ll.queue($(this));
			return;
		} else {
			return this.each(function() {
				$.ll.add(this);
				$.ll.callback(this, callback);
			});
		}
	}
	o = $.ll.o = $.extend({nocache: false, queue: false, replaceImg: 'blank.gif'}, o);

	return this.each(function() {
		$.ll.remove(this);
	});
};