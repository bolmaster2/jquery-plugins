/**
 * autofill input with label text and add focus and blur behaviour
 * @version 0.2 - fixed bug when selected multiple elements
 * @author Joel Larsson
 * @param {Object} options
 */
$.fn.autoFill = function(options) {
    var o = jQuery.extend({
        autoHideLabel: true
    }, options);
    return this.each(function() {
        var self = $(this);
        var searchLabel = jQuery('label[for='+self.attr('id')+']');
        if (o.autoHideLabel === true) {
            searchLabel.hide();
        }
        self.val(searchLabel.text());
        // focus and blur events
        self.blur(function() {
            if (self.val() === '') {
                self.val(searchLabel.text());
            }
        }).focus(function() {
            if (self.val() === searchLabel.text()) {
                self.val('');
            }
        });
    });
};
