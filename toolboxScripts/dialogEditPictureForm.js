$(function () {
    $("#pictureFormEdit").dialog({
        autoOpen: false,
        width: 420,
        height: 200,
        height: 310,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function () {
            var tips = $(".validateTips");

            tips.text('');
            $("#urlEdit").attr('value', $($(this).data('item')).find('img').attr("src"));
        },
        buttons: {
            "Save": function () {
                var url = $("#urlEdit"),
                file = $("#choosePictureEdit"),
                addres,
                bValid = true;

                if ($('#selectedPictureEdit')[0].childNodes[0].data == "Url") {
                    addres = url.val();
                    bValid = checkLength(url, "Url", 1);
                }
                else {
                    addres = file.val();
                    bValid = checkLength(file, "File path", 1);
                }

                if (bValid) {
                    $($(this).data('item')).html('<div style="text-align: center;"><img class="picture" src="' + addres
                        + '" title="Double click to edit Picture." /></div>');
                    $(this).dialog("close");
                }
            },
            "Delete": function () {
                if ($(this).data('class').match(/\bnotDeleteable\b/))
                    updateTips("Delete is impossible.");
                else {
                    $($(this).data('item')).remove();
                    $(this).dialog("close");
                }
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var url = $("#urlEdit"),
            file = $("#choosePictureEdit"),
            allFields = $([]).add(url).add(file);

            $('#selectFilePictureEdit').css('display', 'none');
            $('#urlPictureEdit').css('display', 'block');
            $('#selectedPictureEdit')[0].childNodes[0].data = "Url"

            allFields.val("").removeClass("ui-state-error");
        }
    });

    $('.selctablePictureEdit').live('click', function () {
        var selected = this.innerHTML
        wasSelected = $('#selectedPictureEdit')[0].childNodes[0].data;

        if (selected != wasSelected) {
            $('#selectFilePictureEdit').toggle();
            $('#urlPictureEdit').toggle();
        }

    });

    function checkLength(o, n, min) {
        if (o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be more " +
                (min - 1) + ".");
            return false;
        } else {
            o.removeClass("ui-state-error");
            return true;
        }
    };

    function updateTips(t) {
        tips = $(".validateTips");
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function () {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    };
});

