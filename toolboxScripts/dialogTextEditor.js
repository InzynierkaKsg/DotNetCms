$(function () {
    $("#textEditorForm").dialog({
        width: 420,
        autoOpen: false,
        modal: true,
       
        buttons: {
            "Add": function () {


                $($(this).data('item')).html($("#dialogTextEditor").htmlarea('html'));
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
           
            
        }


    });
});


