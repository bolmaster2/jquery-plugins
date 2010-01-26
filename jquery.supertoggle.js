/**
 * SuperToggle - toggle element with a link - more info at http://wiki.github.com/blmstr/jquery-plugins/
 * @author Joel Larsson
 * 
 */
jQuery.superToggle = function() {
	$(".superToggle").bind("click", function() {
		
		// look for the href to be used for the toggler element id
		var hash = this.href.split('#');
		var prefix = hash[hash.length-1];
		
		var toggleEl = $("#"+prefix);
		if (toggleEl.css("display") != "none") {
			toggleEl.addClass("inactive").removeClass("active").hide();
			$(this).addClass("inactive").removeClass("active");
		} else { 
			toggleEl.addClass("active").removeClass("inactive").show();
			$(this).addClass("active").removeClass("inactive");
		}
		return false;
	});
};