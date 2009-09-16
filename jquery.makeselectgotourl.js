$.fn.makeSelectGotoUrl = function() {
    return this.each(function() {
        $(this).bind('change', function() {
            window.location = this.value;
        });
    });
};