$(function () {
    $("#textAddForm").dialog({
        width: 420,
        autoOpen: false,
        modal: true, 
        buttons: {
            "Add": function () {


                $($(this).data('item')).html($("#dialogAddTextEditor").htmlarea('html'));
                $(this).dialog("close");
            },
            Cancel: function () {
                $($(this).data('item')).remove();
                $(this).dialog("close");
            }
        },
        close: function () {
            $($(this).data('item')).html($("#dialogAddTextEditor").htmlarea('html', "Clickt to edit."));

        }


    });
});


