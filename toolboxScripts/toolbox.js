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
                    //  newItem.html('<div class="tabo"><section class="pretty tabs"><ul><li class="active" id="add"><a href="#addd"><span class="ui-icon ui-icon-circle-plus" style="margin-left: 20px"/></a></li></ul><div class="active" data-tab="addd"><p><form><label for="tab_title">Title</label><input type="text" name="tab_title" id="tab_title" value="" class="ui-widget-content ui-corner-all" /></form></p></div></section></div>');
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