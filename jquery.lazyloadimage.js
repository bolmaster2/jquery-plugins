(function($) {
			$.fn.lazyLoadImage = function(o) {
				if (o == 'load') {
					console.log('should load images now!');
					$(this).trigger('special-load');
					return false;
				}
				o = $.extend({nocache: false, queue: false, replaceImg: 'blank.gif'}, o);
				
				$.loadImg = function(el, callback) {
					
						callback = typeof callback == 'undefined' ? $.callback : callback;
						
						$(el).attr('original', $(el).attr('src'));
						if (o.replaceImg == null)
							$(el).removeAttr('src');
						else 
							$(el).attr('src', o.replaceImg);
							
						$(el).bind('special-load', function() {
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
					
				};
				$.callback = function(el) {
					console.log('standard callback invoked, image loaded:');
					console.log(el);
					//$(document.createElement('p')).text('WOHO, image is loaded!').appendTo(document.body);
				};
				return this.each(function() {
					self = this;
					

					$.loadImg(self);
				});
			};
		})(jQuery);