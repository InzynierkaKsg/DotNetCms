$(function () {
    $("#pictureFormEdit").dialog({
        autoOpen: false,
        height: 450,
        width: 420,
        modal: true,
        show: 'puff',
        hide: 'scale',
        buttons: {
            "Save": function () {
                var url = $("#urlEdit"),
                file = $("#choosePictureEdit"),
                pichtureWidth = $("#pichtureWidthEdit"),
                pictureHeight = $("#pictureHeightEdit")

                $($(this).data('item')).attr({src: url.val(), width: pichtureWidth.val(), height: pictureHeight.val()});
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var url = $("#urlEdit"),
            file = $("#choosePictureEdit"),
            pichtureWidth = $("#pichtureWidthEdit"),
            pictureHeight = $("#pictureHeightEdit"),
            allFields = $([]).add(url).add(file).add(pichtureWidth).add(pictureHeight);

            allFields.val("").removeClass("ui-state-error");
        }
    });
});