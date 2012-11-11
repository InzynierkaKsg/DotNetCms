(function ($) {

    $.fn.highlightEdit = function () {

        return this.each(function () {

            $(this)
            	.data('original-color', $(this).css('background-color'))
                .hover(function () { $(this).css('background-color', '#fff47f');
                  },
                    function () { $(this).css('background-color', $(this).data('original-color')); });

        });
    }
})(jQuery);
