$(function () {
    $("#contentColor").click(function () {

        var navColor = $('#basicnav').css('backgroundColor');
        navColor = navColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        $("#redSlider, #greenSlider, #blueSlider").slider({
            orientation: "horizontal",
            range: "min",
            max: 255,
            value: 127,
            slide: refreshSwatch,
            change: refreshSwatch
        });


        $("#redSlider").slider("value", navColor[1]);
        $("#greenSlider").slider("value", navColor[2]);
        $("#blueSlider").slider("value", navColor[3]);
        $("#picker").dialog('open');

    });

    function refreshSwatch() {
        var red = $("#redSlider").slider("value"),
            green = $("#greenSlider").slider("value"),
            blue = $("#blueSlider").slider("value"),
            hex = hexFromRGB(red, green, blue);
        $("#swatch").css("background-color", "#" + hex);
    }

    function hexFromRGB(r, g, b) {
        var hex = [
            r.toString(16),
            g.toString(16),
            b.toString(16)
        ];
        $.each(hex, function (nr, val) {
            if (val.length === 1) {
                hex[nr] = "0" + val;
            }
        });
        return hex.join("").toUpperCase();
    }

    $("#picker").dialog({
        autoOpen: false,
        modal: true,
        width: 500,
        buttons: {
            Ok: function () {

            }
        }
    });
});