$(function () {
    var deletedPages = new Array();

    $("#pages").click(function () {
        $("#pageForm").dialog('open');
    });

    dialog = $("#pageForm").dialog({
        autoOpen: false,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function () {
            var list = $('#menuNav').find('li'),
                tips = $(".validateTips");

            for (var i = 0; i < list.length; i++) {
                $('<li id="li' + list[i].childNodes[0].getAttribute('id') + '"><input type="text" id="page_title' + (i + 1) + '" value="" class="ui-widget-content ui-corner-all" /><span class="ui-icon ui-icon-close"/></li>').appendTo('#pageList');
                $('#page_title' + (i + 1)).attr('value', list[i].childNodes[0].innerHTML);
            }

            tips.text('');
        },
        buttons: {
            Save: function () {
                var lista = $('#pageList').find('li'),
                    bValid = true;

                if (deletedPages.length != 0)
                    for (var i = 0; i < deletedPages.length; i++)
                        WebService.DeletePage(parseInt(deletedPages[i]));

                for (var i = 0; i < lista.length; i++) {
                    var input = lista[i].childNodes[0].getAttribute('id');
                    bValid = checkLength($('#' + input), "Name", 1, 60) && bValid;
                }

                if (bValid) {
                    for (var i = 0; i < lista.length; i++) {
                        var id = lista[i].getAttribute('id'),
                        id2 = lista[i].childNodes[0].getAttribute('id');

                        id = id.replace('lipageId', '');
                        WebService.UpdatePage(parseInt(id), $('#' + id2).val());
                    }
                    $(this).dialog("close");
                    setTimeout("location.reload(true);", 1000);
                }
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var list = $('#pageList').find('li');

            deletedPages = [];

            for (var i = 0; i < list.length; i++) {
                var id = list[i].getAttribute('id');
                $('#' + id).remove();
            }
        }
    });


    $("#pageForm span.ui-icon-close").live('click', function () {
        var id = $(this).closest('li').attr('id');

        if ($('#pageList').find('li').length != 1) {
            id = id.replace('lipageId', '');
            deletedPages.push(id);

            $(this).closest('li').remove();
        }
    });


    function updateTips(t) {
        tips = $(".validateTips");
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function () {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    }

    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            o.removeClass("ui-state-error");
            return true;
        }
    }
});