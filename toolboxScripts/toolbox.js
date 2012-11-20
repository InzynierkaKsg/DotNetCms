﻿$(function () {

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
                    newItem.addClass("editableAccordion");
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
                    newItem.addClass("editableTab1");
                    $("#tabForm").data('item', newItem);
                    $("#tabForm").data('option', 1);
                    $("#tabForm").dialog('open');
                    break;
                case 'tab2':
                    newItem.addClass("editableTab2");
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
        $("#pictureFormEdit").data('class', $(this)[0].className);
        $("#pictureFormEdit").dialog('open');
    });


    $(".editable").live("click", function () {
        $("#textEditorForm").data('item', $(this));
        $("#textEditorForm").data('class', $(this)[0].className);
        $("#textEditorForm").dialog('open');
        $("#dialogTextEditor").htmlarea('html', $(this).html());
    });

    $(".editablePicture").live("dblclick", function () {
        $("#pictureFormEdit").data('item', $(this));
        $("#pictureFormEdit").dialog('open');
    });

    $(".editableAccordion").live("dblclick", function () {
        $("#tabEditForm").data('item', $(this));
        $("#tabEditForm").data('option', 3);
        $("#tabEditForm").dialog('open');
    });

    $(".editableTab1").live("dblclick", function () {
        $("#tabEditForm").data('item', $(this));
        $("#tabEditForm").data('option', 1);
        $("#tabEditForm").dialog('open');
    });

    $(".editableTab2").live("dblclick", function () {
        $("#tabEditForm").data('item', $(this));
        $("#tabEditForm").data('option', 2);
        $("#tabEditForm").dialog('open');
    });

    $("#menuNav").sortable({
        placeholder: "ui-state-highlight"
    });

    $("#menuNav").disableSelection();

    $(document).tooltip();

    if (map) {
        google.maps.event.trigger(map, 'resize');
    }
});