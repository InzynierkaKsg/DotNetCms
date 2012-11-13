$(function () {

    $("#contentUL").sortable({
        placeholder: "ui-state-highlight",
        receive: function (event, ui) {
            var newItem = $(this).data().sortable.currentItem;
            newItem.html("");

            switch (ui.item.attr('id')) {
                case 'textEditor':
                    newItem.addClass("editable");
                    $("#textAddForm").data('item', newItem);
                    $("#textAddForm").dialog('open');
                    $("#dialogAddTextEditor").htmlarea();
                    break;
                case 'accordion':
                    newItem.html("<div class='accordion'><h3 >Section 1</h3><div><p></p></div><h3>Section 2</h3><div><p></p></div></div>");
                    $(".accordion").accordion();
                    break;
                case 'picture':
                    newItem.addClass("editablePicture");
                    $("#pictureForm").data('item', newItem);
                    $("#pictureForm").dialog('open');
                    break;
                case 'tab1':
                    $("#tabForm").data('item', newItem);
                    $("#tabForm").data('option', 1);
                    $("#tabForm").dialog('open');
                    break;
                case 'tab2':
                    $("#tabForm").data('item', newItem);
                    $("#tabForm").data('option', 2);
                    $("#tabForm").dialog('open');
                    break;
                case 'map':
                    $("#mapForm").data('item', newItem);
                    $("#mapForm").dialog('open');
                    break;
            }
        }
    });

    $("#toolbox > li").draggable({
        connectToSortable: '#contentUL',
        containment: "document",
        revert: "invalid",
        helper: "clone"
    });
    $(".not-draggable").draggable({ disabled: true });

    $("#footer").click(function () {
        console.log($('html')[0].outerHTML);
    });

    $("#footer").highlightEdit();
    $("#logo").highlightEdit();

    $("#logo").click(function () {

        $("#pictureFormEdit").data('item', $(this));
        $("#pictureFormEdit").dialog('open');

    });


    $(".editable").live("click", function () {
        $("#textEditorForm").data('item', $(this));
        $("#textEditorForm").dialog('open');
        $("#dialogTextEditor").htmlarea('html', $(this).html());

    });

    $(".editablePicture").live("click", function () {
        $("#pictureForm").data('item', $(this));
        $("#pictureForm").dialog('open');


    });
});