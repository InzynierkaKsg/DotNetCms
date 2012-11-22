$(function () {

    $('#selectFilePicture').toggle();

    $("#pictureForm").dialog({
        autoOpen: false,
        width: 420,
        height: 330,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function () {
            var tips = $(".validateTips");

            tips.text('');
        },
        buttons: {
            "Add": function () {
                var url = $("#url"),
                file = $("#choosePicture"),
                addres,
                bValid = true;

                if ($('#selectedPicture')[0].childNodes[0].data == "Url") {
                    addres = url.val();
                    bValid = checkLength(url, "Url", 1);
                }
                else {
                    addres = file.val();
                    bValid = checkLength(file, "File path", 1);
                }

                if (bValid) {
                    
                    $($(this).data('item')).html('<div style="text-align: center;"><img  class="picture tooltp" src="' + addres
                        + '" title="Double click to edit Picture."/></div>');
                    $(this).dialog("close");
                }
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var url = $("#url"),
            file = $("#choosePicture"),
            allFields = $([]).add(url).add(file);

            allFields.val("").removeClass("ui-state-error");
        }
    });

    $('.selctablePicture').live('click', function () {
        var selected = this.innerHTML
        wasSelected = $('#selectedPicture')[0].childNodes[0].data;

        if (selected != wasSelected) {
            $('#selectFilePicture').toggle();
            $('#urlPicture').toggle();
        }

    });
});



