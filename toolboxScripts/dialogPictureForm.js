$(function () {
    /* do zrobienia
    edycjamapy na clik - jesli sie da
    usuwanie wszystkih elementow
    podpowiedzi do elementow na hove
    zaczac pisac dokumentacje
    */

    $('#selectFilePicture').toggle();

    $("#pictureForm").dialog({
        autoOpen: false,
        width: 420,
        height: 310,
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



