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

                $($(this).data('item')).html('<img class="picture" src="' + url.val() + '" width=' + pichtureWidth.val()
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
});