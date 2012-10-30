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
                    + ' height=' + pictureHeight + '/>');
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
            newItem.attr('id', ui.item.attr('id') + 's');
            switch (ui.item.attr('id')) {
                case 'textEditor':
                    var config = {};
                    CKEDITOR.appendTo(ui.item.attr('id') + 's', config, '');
                    break;

                case 'accordion':
                    $('#' + ui.item.attr('id') + 's').html('<h3>Section 1</h3><div><p></p></div><h3>Section 2</h3><div><p></p></div>');
                    $("#accordions").accordion();
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
    //            start: function (event, ui) {
    //                $("<li></li>").addClass("ui-state-highlight").attr({ id: "helper", style: "width: 100% ; height: 20px" }).appendTo("#contentUL");
    //            },
    //            stop: function (event, ui) {
    //                $("#helper").remove();


    //            }
    });




    function addTool($item) {
        alert("addtool");
        console.log($item);
        var id = $item.attr('id');
        var rnd = Math.floor((Math.random() * 10) + 1);
        $($item).attr('id', id);
    //        $("<li></li>").attr('id', id + rnd).appendTo("#contentUL");
    //        switch (id + rnd) {
    //            case 'textEditor' + rnd:
    //                alert("editor");
    //                var config = {};
    //                CKEDITOR.appendTo(id + rnd, config, "sadasdasdasdasdsdfgdfg dfgh fhfg hjgj fg");
    //                break;

    //            case 'test' + rnd:
    //                alert("test");
    //                $('#' + id + rnd).html("cccccc");
    //                break;
    //        }

    }

    $("#footer").click(function () {
        console.log($('html')[0].outerHTML);
    });

});