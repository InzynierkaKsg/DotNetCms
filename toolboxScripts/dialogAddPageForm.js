$(function () {

    $("#addPage").click(function () {
        $("#addPageForm").dialog('open');
    });

    dialog = $("#addPageForm").dialog({
        autoOpen: false,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function () {
            var tips = $(".validateTips");

            tips.text('');
        },
        buttons: {
            Add: function () {
                var pageName = $("#newPage"),
                    bValid = true;

                bValid = checkLength(pageName, "Name", 1, 60);

                if (bValid) {
                    WebService.CreatePage(pageName.val());
                    $(this).dialog("close");
                   var lastPageId =  WebService.GetLastPage();                 
                  location.reload(true);
                }
            },
            Cancel: function () {
                var pageName = $("#newPage");

                pageName.val('').removeClass("ui-state-error");
                $(this).dialog("close");
            }
        },
        close: function () {
            var pageName = $("#newPage");

            pageName.val().removeClass("ui-state-error");
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