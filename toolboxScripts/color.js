$(function () {

    $("#contentColor").click(function () {
        var navColor = $('#basicnav').css('background-color');
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
                var red = $("#redSlider").slider("value"),
            green = $("#greenSlider").slider("value"),
            blue = $("#blueSlider").slider("value"),
            hex = hexFromRGB(red, green, blue), hex2, hex3, hex4;

                if (getMaxRGB(red, green, blue) > 190) {
                    hex2 = hexFromRGB(setZero(parseInt(red * 0.75)),
                        setZero(parseInt(green * 0.75)), setZero(parseInt(blue * 0.75)));
                    hex3 = hexFromRGB(setZero(parseInt(red * 0.75 - 15)),
                        setZero(parseInt(green * 0.75 - 15)), setZero(parseInt(blue * 0.75 - 15)));
                    hex4 = hexFromRGB(setZero(red + 20), setZero(green + 20), setZero(blue + 20));
                }
                else if (getMaxRGB(red, green, blue) > 127) {
                    hex2 = hexFromRGB(setZero(parseInt(red * 0.55)),
                        setZero(parseInt(green * 0.55)), setZero(parseInt(blue * 0.55)));
                    hex3 = hexFromRGB(setZero(parseInt(red * 0.55 - 15)),
                        setZero(parseInt(green * 0.55 - 15)), setZero(parseInt(blue * 0.55 - 15)));
                    hex4 = hexFromRGB(setZero(red + 20), setZero(green + 20), setZero(blue + 20));
                }
                else if (getMaxRGB(red, green, blue) > 40) {
                    hex2 = hexFromRGB(setZero(parseInt(red * 1.45)),
                        setZero(parseInt(green * 1.45)), setZero(parseInt(blue * 1.45)));
                    hex3 = hexFromRGB(setZero(parseInt(red * 1.45 + 15)),
                        setZero(parseInt(green * 1.45 + 15)), setZero(parseInt(blue * 1.45 + 15)));
                    hex4 = hexFromRGB(setZero(red - 20), setZero(green - 20), setZero(blue - 20));
                }
                else {
                    hex2 = hexFromRGB(setZero(red + 60), setZero(green + 60), setZero(blue + 60));
                    hex3 = hexFromRGB(setZero(red + 75), setZero(green + 75), setZero(blue + 75));
                    hex4 = hexFromRGB(setZero(red - 20), setZero(green - 20), setZero(blue - 20));
                }

                setStyleClass('navbar > ul > li > a', {
                    'background-color':
                        '#' + hex
                });
                setStyleClass('navbar > ul > li > a', {
                    'backgroundColor':
                        '#' + hex
                });
                setStyleId('basicnav', {
                    'background':
                        '#' + hex
                });
                setStyleClass('navbar', {
                    'border':
                        '1px solid #' + hex3
                });
                setStyleClass('pretty.navbar a.toggle', {
                    'border':
                        '1px solid #' + hex3
                });

                if (jQuery.browser.opera) {
                    setStyleClass('pretty.navbar', {
                        'background':
                            '-o-linear-gradient(top, #' + hex + ' 0%,#' + hex2 + ' 100%)'
                    });
                    setStyleClass('pretty.navbar > ul > li', {
                        'background':
                            '-o-linear-gradient(top, #' + hex + ' 0%,#' + hex2 + ' 100%)'
                    });
                    setStyleClass('pretty.navbar > ul > li > a', {
                        'background':
                            '-o-linear-gradient(top, #' + hex + ' 0%,#' + hex2 + ' 100%)'
                    });
                    setStyleClass('navbar a.toggle', {
                        'background':
                            '-o-linear-gradient(top, #' + hex + ' 0%,#' + hex2 + ' 100%)'
                    });
                    setStyleClass('pretty.tabs li.active a', {
                        'background':
                            '-o-linear-gradient(top, #' + hex + ' 0%,#' + hex2 + ' 100%)'
                    });
                    setStyleClass('pretty.navbar > ul > li:first-child,'
                        + '.pretty.navbar > ul > li:first-child a:hover', {
                            'boxShadow':
                                'none'
                        });
                    setStyleClass('navbar > ul > li > a', {
                        'textShadow':
                            '0 1px 2px #' + hex2 + ', 0 1px 0 #' + hex2
                    });
                    setStyleClass('navbar ul li', {
                        'borderRight':
                            '1px solid #' + hex3
                    });
                    setStyleClass('navbar > ul > li:last-child, .navbar > ul > li:last-child a:hover', {
                        'borderRight':
                            'none'
                    });

                    $('#tog').css('boxShadow', 'inset 0 1px 1px #' + hex4 + ', 0 1px 1px #' + hex4);
                    $('#prettynav > ul > li > a').css('box-shadow', 'inset 1px 0 0 #' + hex4);
                    $('#prettynav > ul > li:first-child > a').css('boxShadow', 'none');
                }
                else if (jQuery.browser.msie) {
                    setStyleClass('pretty.navbar', {
                        'background':
                            ' #' + hex
                    });
                    setStyleClass('pretty.navbar > ul > li', {
                        'background':
                            ' #' + hex
                    });
                    setStyleClass('pretty.navbar > ul > li > a', {
                        'background':
                            ' #' + hex
                    });
                    setStyleClass('navbar a.toggle', {
                        'background':
                            ' #' + hex
                    });
                    setStyleClass('pretty.tabs li.active a', {
                        'filter':
                            "progid:DXImageTransform.Microsoft.gradient"
                            + "( startColorstr='#" + hex + "', endColorstr='#"
                            + hex2 + "',GradientType=0 "
                    });
                    setStyleClass('pretty.navbar > ul > li:first-child,'
                        + ' .pretty.navbar > ul > li:first-child a:hover', {
                            'box-shadow':
                                'none'
                        });
                    setStyleClass('navbar > ul > li > a', {
                        'text-shadow':
                            '2px 2px 2px #111111'
                    });
                    setStyleClass('navbar ul li', {
                        'border-right':
                            '1px solid #' + hex3
                    });
                    setStyleClass('navbar > ul > li:last-child, .navbar > ul > li:last-child a:hover', {
                        'border-right':
                            'none'
                    });

                    $('#tog').css('box-shadow', 'inset 0 1px 1px #' + hex4 + ', 0 1px 1px #' + hex4);
                    $('#prettynav > ul > li > a').css('box-shadow', 'inset 1px 0 0 #' + hex4);
                    $('#prettynav > ul > li:first-child > a').css('box-shadow', 'none');
                }
                else if (jQuery.browser.mozilla) {
                    setStyleClass('pretty.navbar', {
                        'background':
                            '-moz-linear-gradient(top, #' + hex + ' 0%, #' + hex2 + ' 100%)'
                    });
                    setStyleClass('pretty.navbar > ul > li', {
                        'background':
                            '-moz-linear-gradient(top, #' + hex + ' 0%, #' + hex2 + ' 100%)'
                    });
                    setStyleClass('pretty.navbar > ul > li > a', {
                        'background':
                            '-moz-linear-gradient(top, #' + hex + ' 0%, #' + hex2 + ' 100%)'
                    });
                    setStyleClass('navbar a.toggle', {
                        'background':
                            '-moz-linear-gradient(top, #' + hex + ' 0%, #' + hex2 + ' 100%)'
                    });
                    setStyleClass('pretty.tabs li.active a', {
                        'background':
                            '-moz-linear-gradient(top, #' + hex + ' 0%, #' + hex2 + ' 100%)'
                    });
                    setStyleClass('pretty.navbar > ul > li:first-child,'
                        + ' .pretty.navbar > ul > li:first-child a:hover', {
                            'boxShadow':
                                'none'
                        });
                    setStyleClass('navbar > ul > li > a', {
                        'textShadow':
                            '0 1px 2px #' + hex2 + ', 0 1px 0 #' + hex2
                    });
                    setStyleClass('navbar ul li', {
                        'borderRight':
                            '1px solid #' + hex3
                    });
                    setStyleClass('navbar > ul > li:last-child, .navbar > ul > li:last-child a:hover', {
                        'borderRight':
                            'none'
                    });

                    $('#tog').css('boxShadow', 'inset 0 1px 1px #' + hex4 + ', 0 1px 1px #' + hex4);
                    $('#prettynav > ul > li > a').css('boxShadow', 'inset 1px 0 0 #' + hex4);
                    $('#prettynav > ul > li:first-child > a').css('boxShadow', 'none');
                }
                else if (jQuery.browser.chrome) {
                    setStyleClass('pretty.navbar', {
                        'background':
                            '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #'
                            + hex + '), color-stop(100%,#' + hex2 + '))'
                    });
                    setStyleClass('pretty.navbar > ul > li', {
                        'background':
                            '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #'
                            + hex + '), color-stop(100%,#' + hex2 + '))'
                    });
                    setStyleClass('pretty.navbar > ul > li > a', {
                        'background':
                            '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #'
                            + hex + '), color-stop(100%,#' + hex2 + '))'
                    });
                    setStyleClass('navbar a.toggle', {
                        'background':
                            '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #'
                            + hex + '), color-stop(100%,#' + hex2 + '))'
                    });
                    setStyleClass('pretty.tabs li.active a', {
                        'background':
                            '-webkit-gradient(linear, left top, left bottom, color-stop(0%,#'
                            + hex + '), color-stop(100%,#' + hex2 + '))'
                    });
                    setStyleClass('pretty.navbar > ul > li:first-child,' +
                        ' .pretty.navbar > ul > li:first-child a:hover', {
                            'box-shadow':
                                'none'
                        });
                    setStyleClass('navbar > ul > li > a', {
                        'text-shadow':
                            '0 1px 2px #' + hex2 + ', 0 1px 0 #' + hex2
                    });
                    setStyleClass('navbar ul li', {
                        'border-right':
                            '1px solid #' + hex3
                    });
                    setStyleClass('navbar > ul > li:last-child, .navbar > ul > li:last-child a:hover', {
                        'border-right':
                            'none'
                    });

                    $('#tog').css('box-shadow', 'inset 0 1px 1px #' + hex4 + ', 0 1px 1px #' + hex4);
                    $('#prettynav > ul > li > a').css('box-shadow', 'inset 1px 0 0 #' + hex4);
                    $('#prettynav > ul > li:first-child > a').css('box-shadow', 'none');
                }

                $(this).dialog("close");
            }
        }
    });

    function setStyleId(objId, propertyObject) {
        var elem = document.getElementById(objId);
        for (var property in propertyObject)
            elem.style[property] = propertyObject[property];
    }

    function setStyleClass(objId, propertyObject) {
        var elem = $('.' + objId);
        for (var i = 0; i < elem.length; i++) {
            for (var property in propertyObject)
                elem[i].style[property] = propertyObject[property];
        }
    }

    function getMaxRGB(r, g, b) {
        var max = r;
        if (g > max)
            max = g;
        if (b > max)
            max = b;
        return max;
    }

    function setZero(x) {
        if (x < 0)
            return 0;
        else if (x > 255)
            return 255;
        else
            return x;
    }
});