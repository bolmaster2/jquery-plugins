jQuery.superToggle = function() {
	$(".superToggle").bind("click", function() {
		var toggleEl = "#"+this.id+"-toggle";
		if ($(toggleEl).css("display") != "none") {
			 $(toggleEl).hide();
		} else {
			$(toggleEl).show();
		}
		return false;
	});
};