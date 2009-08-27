/**
 * lazyload plugin
 * @author joel
 * @param {Object} o
 */
$.fn.lazyLoadImage = function(o, callback) {
	var self = this;
	$.i = 0;
	if (o == 'load') {
		callback = typeof callback == 'undefined' ? function(){} : callback;
		
		if ($.o.queue == true) {
			$.queue($(this));
			return;
		} else {
			return this.each(function() {
				$.add(this);
				$.callback(this, callback);
			});
		}
	}
	o = $.o = $.extend({nocache: false, queue: false, replaceImg: 'blank.gif'}, o);
	
	$.add = function(el) {
		$(el).attr('src', $(el).attr('original'));
		$(el).removeAttr('original');
	};
	$.remove = function(el) {
			$(el).attr('original', $(el).attr('src'));
			if (o.replaceImg == null)
				$(el).removeAttr('src');
			else 
				$(el).attr('src', o.replaceImg);
	};
	$.callback = function(el, callback) {
		//for ie if img is cached
		if(el.complete) {
			callback(el);
		} else {
			el.onload = function() {
				callback(this);
			};
		}
	};
	
	$.queue = function(el) {
		$.add(el[$.i]);
		$.callback(el[$.i], function() {
			$.i++;
			//console.log('i: '+$.i+' self.length: '+self.length);
			if ($.i >= self.length) {
				return false;
			}
			$.queue(self);
		});
	};
	return this.each(function() {
		$.remove(this);
	});
};