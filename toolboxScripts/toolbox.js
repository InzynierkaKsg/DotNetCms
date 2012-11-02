$(function () {



 


    $("#dialog-picture-form").dialog({
        autoOpen: false,
        height: 450,
        width: 420,
        modal: true,
        buttons: {
            "Add": function () {
                var url = $("#url"),
                file = $("#choosePicture"),
                pichtureWidth = $("#pichtureWidth"),
                pictureHeight = $("#pictureHeight")

                $($(this).data('element')).html('<img src="' + url.val() + '" width=' + pichtureWidth.val()
                    + ' height=' + pictureHeight.val() + '/>');
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var url = $("#url"),
            file = $("#choosePicture"),
            pichtureWidth = $("#pichtureWidth"),
            pictureHeight = $("#pictureHeight"),
            allFields = $([]).add(url).add(file).add(pichtureWidth).add(pictureHeight);

            allFields.val("").removeClass("ui-state-error");
        }
    });

    $("#contentUL").sortable({
        placeholder: "ui-state-highlight",
        receive: function (event, ui) {
            var newItem = $(this).data().sortable.currentItem;
            newItem.html("");
            
            switch (ui.item.attr('id')) {
                case 'textEditor':
                    newItem.addClass("textEditor").text("Kliknij dwa razy, aby edytować sekcję!");
                    newItem.ckeip();
                    break;
                case 'accordion':
                    newItem.html("<div class='accordion'><h3 >Section 1</h3><div><p></p></div><h3>Section 2</h3><div><p></p></div></div>");
                    $(".accordion").accordion();    
                    break;
                case 'picture':
                    $("#dialog-picture-form").data('element', '#' + ui.item.attr('id') + 's');
                    $("#dialog-picture-form").dialog('open');
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


    $("#footer").click(function () {
        console.log($('html')[0].outerHTML);
    });

});