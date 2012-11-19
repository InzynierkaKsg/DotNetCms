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
                    $("#tabForm").data('item', newItem);
                    $("#tabForm").data('option', 3);
                    $("#tabForm").dialog('open');
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

    $("#logo").dblclick(function () {
        $("#pictureFormEdit").data('item', $(this));
        $("#pictureFormEdit").dialog('open');
        $("#urlEdit").attr('value', $(this).children().attr("src"));
        $("#pichtureWidthEdit").attr('value', $(this).children().attr("width"));
        $("#pichtureHeightEdit").attr('value', $(this).children().attr("height"));
    });


    $(".editable").live("click", function () {
        $("#textEditorForm").data('item', $(this));
        $("#textEditorForm").dialog('open');
        $("#dialogTextEditor").htmlarea('html', $(this).html());
    });

    $(".editablePicture").live("dblclick", function () {
        $("#pictureFormEdit").data('item', $(this));
        $("#pictureFormEdit").dialog('open');
    });

    $("#menuNav").sortable({
        placeholder: "ui-state-highlight"
    });

    $("#menuNav").disableSelection();

    if (map) {
        google.maps.event.trigger(map, 'resize');
    }
});