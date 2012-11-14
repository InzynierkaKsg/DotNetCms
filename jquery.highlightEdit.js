(function ($) {

    function position(parent) {
        $(".editPane").position({
            of: $(parent),
            my: 'right' + " " + 'top',
            at: 'right' + " " + 'top',
            offset: '0',
            collision: 'none' + " " + 'none'
        });
    }

    $.fn.highlightEdit = function () {
        return this.each(function () {
            $(this)
            	.data('original-color', $(this).css('background-color'))
                .hover(function () {

                    $(this).wrap('<div id="editing"></div>');
                    $('#editing').css('background-color', '#fff47f');
                    $('<div></div>').addClass('editPane').attr('id', 'editPane').appendTo('body').html('<img src="Assets/Images/attachment.png" />');
                    position($(this));
                },
                 function () {
                     //                     $(this).css('background-color', $(this).data('original-color'));
                     $(this).unwrap();
                     $('#editPane').remove();

                 });
        });
    }
})(jQuery);