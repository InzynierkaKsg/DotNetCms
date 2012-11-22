$(function () {
    $("#textEditorForm").dialog({
        width: 420,
        autoOpen: false,
        modal: true,
        open: function () {
            var tips = $(".validateTips");

            tips.text('');
        },
        buttons: {
            "Save": function () {
                $($(this).data('item')).html($("#dialogTextEditor").htmlarea('html'));
                $(this).dialog("close");
            },
            "Delete": function () {
                if ($(this).data('class').match(/\bnotdelitable\b/))
                    updateTips("Delete is impossible.");
                else {
                    $($(this).data('item')).remove();
                    $(this).dialog("close");
                }
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
        }
    });
});


