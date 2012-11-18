$(function () {
    $("#pictureForm").dialog({
        autoOpen: false,
        height: 450,
        width: 420,
        modal: true,
        show: 'puff',
        hide: 'scale',
        buttons: {
            "Add": function () {
                var url = $("#url"),
                file = $("#choosePicture"),
                pichtureWidth = $("#pichtureWidth"),
                pictureHeight = $("#pictureHeight")

                $($(this).data('item')).html('<img class="picture" src="' + url.val() + '" width="' + pichtureWidth.val()
                    + '" height="' + pictureHeight.val() + '" />');
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
});


$(function () {
    var url = $("#url"),
                file = $("#choosePicture"),
                pichtureWidth = $("#pichtureWidth"),
                pictureHeight = $("#pictureHeight") 

    $("#picturePreviewButton").button({
        text: 'Preview',
        icons: {
            primary: "ui-icon-flag"
        }
    })
        .click(function (event) {
            event.preventDefault();
            $("#picturePreview").css({
                width: '460px',
                height: '260px',
                margin: '0 auto'
            }).html('<img class="picture" src="' + url.val() + '" width="' + pichtureWidth.val()
                    + '" height="' + pictureHeight.val() + '" />');
          

        });
});





