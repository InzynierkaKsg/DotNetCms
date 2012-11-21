$(function () {
    $('#savePage').click(function () {
        WebService.SaveContent($('#contentUL').html(), $('#currentPage').text());

        $("#confirm").dialog('open');
    });

    $("#confirm").dialog({
        autoOpen: false,
        modal: true,
        show: 'puff',
        hide: 'scale',        
        open: function () {
            setTimeout("$('#confirm').dialog('close');", 1000);
        }
    });
});