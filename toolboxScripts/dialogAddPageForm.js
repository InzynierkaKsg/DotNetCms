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

                bValid = checkLength(pageName, "Name", 1);

                if (bValid) {
                    WebService.CreatePage(pageName.val());
                    $(this).dialog("close");
                   var lastPageId =  WebService.GetLastPage();                 
                   setTimeout("location.reload(true);", 1000);
                }
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var pageName = $("#newPage");

            pageName.val('').removeClass("ui-state-error");
        }
    });
});