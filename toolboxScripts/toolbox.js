$(function () {

    $("#contentUL").sortable({
        placeholder: "ui-state-highlight",
        receive: function (event, ui) {
            var newItem = $(this).data().sortable.currentItem;
            newItem.html("");

            switch (ui.item.attr('id')) {
                case 'textEditor':
                    //newItem.addClass("textEditor").text("Kliknij dwa razy, aby edytować sekcję!");
                    newItem.addClass("edittable");
                    $("#textEditorForm").data('item', newItem);
                    $("#textEditorForm").dialog('open');
                    $("#dialogEditor").htmlarea();
                    break;
                case 'accordion':
                    newItem.html("<div class='accordion'><h3 >Section 1</h3><div><p></p></div><h3>Section 2</h3><div><p></p></div></div>");
                    $(".accordion").accordion();
                    break;
                case 'picture':
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
        appendTo: "#contentUL",
        revert: "invalid",
        helper: "clone"
    });
    $(".not-draggable").draggable({ disabled: true });

    $("#footer").click(function () {
        console.log($('html')[0].outerHTML);
    });

    $(".edittable").live("click", function () {
        $("#textEditorForm").dialog('open');

    });
});