$(function () {
    var pageId = new Array();


    $("#addPage").click(function () {
        $("#addPageForm").dialog('open');
    });

    dialog = $("#addPageForm").dialog({
        autoOpen: false,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function () {

        },
        buttons: {
            Add: function () {
                var pageName = $("#newPage");
                WebService.CreatePage(pageName.val());
                $(this).dialog("close");
                setTimeout("location.reload(true);", 1000);
              


            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {

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
            return true;
        }
    }
});