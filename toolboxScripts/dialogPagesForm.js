$(function () {
    var pageId = new Array();
    

    $("#pages").click(function () {
        $("#pageForm").dialog('open');
    });

    dialog = $("#pageForm").dialog({
        autoOpen: false,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function()
        {
            var list = $('#menuNav').find('li');
            for (var i = 0; i < list.length; i++) {
                pageId[i] = 1;
                $('<li id="pageLi'+(i+1)+'"><input type="text" id="page_title' + (i + 1) + '" value="" class="ui-widget-content ui-corner-all" /><span class="ui-icon ui-icon-close"/></li>').appendTo('#pageList');
                $('#page_title' + (i + 1)).val(list[i].childNodes[0].innerHTML);
            }
        },
        buttons: {
            Save: function () {
                var linki = $('#menuNav').find('li'),
                    list = $('#pageList').find('li');
                if (list.length > linki.length) {
                    for (var i = 0; i < list.length - linki.length; i++);
                    $('<li ><a class="hovGradient" href="#">Page</a></li>').appendTo('#menuNav');
                }
                else if (list.length < linki.length) {
                }
                    $(this).dialog("close"); 
                
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var list = $('#pageList').find('li');
            for (var i = 0; i < list.length; i++)
                $('#pageLi' + (i+1)).remove();
     }
    });

    $("#pageForm span.ui-icon-circle-plus").live("click", function () {
        var newPage;
   
        if ($('#pageList').find('li').length != 4) {
            for (var i = 0; i <= pageId.length; i++) {
                if (pageId[i] != 1) {
                    newPage = i + 1;
                    pageId[i] = 1;
                    break;
                }
            }

            $('<li id="pageLi' + newPage + '"><input type="text" id="page_title' + newPage
                + '" value="" class="ui-widget-content ui-corner-all" /><span class="ui-icon ui-icon-close"/>'
                                + '</li>').appendTo('#pageList');
        }
    });

    $("#pageForm span.ui-icon-close").live('click', function () {
        var id = $(this).closest('li').attr('id');

        if ($('#pageList').find('li').length != 1) {
            id = id.replace('pageLi', '');
            pageId[id - 1] = 0;
            $(this).closest('li').remove();
        }
    });

    $("#pageList").sortable({
        placeholder: "ui-state-highlight"
    });

    $("#pageList").disableSelection();

   

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
            return true;
        }
    }


});