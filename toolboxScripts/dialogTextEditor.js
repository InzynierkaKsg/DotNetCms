$(function () {
    $("#textEditorForm").dialog({
        width: 420,
        autoOpen: false,
        modal: true,
       
        buttons: {
            "Add": function () {


                $($(this).data('item')).html($("#dialogEditor").htmlarea('html'));
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            $($(this).data('item')).html($("#dialogEditor").htmlarea('html', "Wpisz tekst."));
            
        }


    });
});


