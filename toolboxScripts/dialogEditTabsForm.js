$(function () {
    var tabId = new Array();
    tabId[0] = 0;

    function getTabHtml(x, title, option, idy) {
        var html, id;

        if (option == 3)
            html = '<div class="accordion">';
        else {
            html = '<div class="tabs' + option + '">';
            if (option == 2) {
                html += '<section class="pretty tabs">';

                html += '<ul class="ulTitles">';
            }
            else
                html += '<ul>';
        }

        for (var i = 0; i < x; i++) {
            if (option == 3)
                html += '<h3 title="Double click to edit Accordion.">' + title[i] + '</h3><div class="editable notdelitable"><p title="Click to edit text.">Click to edit.</p></div>';
            else {
                if (option == 2 && i == 0)
                    html += '<li class="active liTitles"><a title="Double click to edit Tab." class="aTitles" href="#tabs-' + idy[i] + '">' + title[i] + '</a></li>';
                else
                    html += '<li class="liTitles"><a title="Double click to edit Tab." class="aTitles" href="#tabs-' + idy[i] + '">' + title[i] + '</a></li>';
            }
        }

        if (option != 3) {
            html += '</ul>';
            if (option == 1)
                id = 'id';
            else
                id = 'data-tab';
            for (var i = 0; i < x; i++) {
                if (option == 2 && i == 0)
                    html += '<div ' + id + '="tabs-' + idy[i] + '" class="active editable divTabs notdelitable"><p title="Click to edit text.">Click to edit.</p></div>';
                else
                    html += '<div ' + id + '="tabs-' + idy[i] + '" class="editable divTabs notdelitable"><p title="Click to edit text.">Click to edit.</p></div>';
            }
            if (option == 2)
                html += '</section>'
        }
        html += '</div>';

        return html;
    };


    dialog = $("#tabEditForm").dialog({
        autoOpen: false,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function () {
            var taby = $('.tabs1'),
                taby2 = $('.tabs2'),
                linkID, currentLinkID,
                tips = $(".validateTips"),
                    linki;

            if ($(this).data('option') == 1 || $(this).data('option') == 2)
                linki = $($(this).data('item')).find('a');
            else
                linki = $($(this).data('item')).find('h3');

            tips.text('');

            if (taby.length != 0) {
                for (var i = 0; i < taby.length; i++) {
                    linkID = taby[i].getElementsByTagName('a');
                    for (var j = 0; j < linkID.length; j++) {
                        currentLinkID = linkID[j].getAttribute('href');
                        currentLinkID = currentLinkID.replace('#tabs-', '');
                        tabId[currentLinkID - 1] = 1;
                    }
                }

            }
            if (taby2.length != 0) {
                for (var i = 0; i < taby2.length; i++) {
                    linkID = taby2[i].getElementsByTagName('a');
                    for (var j = 0; j < linkID.length; j++) {
                        currentLinkID = linkID[j].getAttribute('href');
                        currentLinkID = currentLinkID.replace('#tabs-', '');
                        tabId[currentLinkID - 1] = 1;
                    }
                }
            }

            for (var i = 0; i < linki.length; i++) {
                var id;
                if ($(this).data('option') == 1 || $(this).data('option') == 2) {
                    id = linki[i].getAttribute('href');
                    id = id.replace('#tabs-', '');
                }
                else
                    id = i;

                $('<li id="tabLiEdit' + id + '"><input type="text" id="tab_titleEdit' + id
           + '" value="" class="ui-widget-content ui-corner-all" /><span class="ui-icon ui-icon-close"/>'
                           + '</li>').appendTo('#tabListEdit');
                if ($(this).data('option') == 1 || $(this).data('option') == 2)
                    $('#tab_titleEdit' + id).attr('value', linki[i].innerHTML);
                else {
                    var title = linki[i].innerHTML;
                    title = title.slice(title.indexOf('>') + 8, title.length);
                    // title = title.replace('"', '');
                    $('#tab_titleEdit' + id).attr('value', title);
                    console.log(linki);
                }
            }
        },
        buttons: {
            "Save": function () {
                var titles = new Array(),
                    inputs = $('#tabEditForm').find('input'),
                    inputsCount = inputs.length,
                    currentTab, idy = new Array(),
                    title, bValid = true;

                for (var i = 0; i < inputsCount; i++) {
                    currentTab = inputs[i].getAttribute('id');
                    idy[i] = currentTab.replace('tab_titleEdit', '');
                    title = $('#' + currentTab);
                    bValid = bValid && checkLength(title, "Title", 1, 60);
                    titles[i] = title.val();
                }
                if (bValid) {
                    $($(this).data('item')).removeClass('ui-tabs ui-widget ui-widget-content ui-corner-all');
                    $($(this).data('item')).html(getTabHtml(inputsCount, titles, $(this).data('option'), idy));

                    if ($(this).data('option') == 1)
                        $('.tabs1').tabs();
                    else if ($(this).data('option') == 3)
                        $(".accordion").accordion({
                            heightStyle: "content"
                        });
                    else {
                        getcolor();
                        if (jQuery.browser.chrome) {
                            $($(this).data('item')).find('li.active a').css('background',
                                '-webkit-gradient(linear, left top, left bottom, '
                                + 'color-stop(0%, #' + hexFromRGB(parseInt(navColor2[1]),
                                parseInt(navColor2[2]), parseInt(navColor2[3]))
                                + '), color-stop(100%,#' + color2 + '))');
                            $($(this).data('item')).find('li.active a').css('boxShadow',
                                'inset 0 1px 1px #' + color3 + ', 0 1px 0 #' + color4
                                + ', 0 -1px 0 #' + color4 + ', 1px 0 0 #' + color4 + ', -1px 0 0 #' + color4);
                            $($(this).data('item')).find('li.active a').css('text-shadow',
                                ' 0 2px 1px #' + color2 + ', 0 1px 1px #' + color2);

                        } else if (jQuery.browser.mozilla) {
                            $($(this).data('item')).find('li.active a').css('background',
                                '-moz-linear-gradient(top, #' + hexFromRGB(parseInt(navColor2[1]),
                                parseInt(navColor2[2]), parseInt(navColor2[3])) + ' 0%,#' + color2 + ' 100%)');
                            $($(this).data('item')).find('li.active a').css('boxShadow',
                                'inset 0 1px 1px #' + color3 + ', 0 1px 0 #' + color4 + ', 0 -1px 0 #'
                                + color4 + ', 1px 0 0 #' + color4 + ', -1px 0 0 #' + color4);
                            $($(this).data('item')).find('li.active a').css('textShadow',
                                ' 0 2px 1px #' + color2 + ', 0 1px 1px #' + color2);

                        } else if (jQuery.browser.opera) {
                            $($(this).data('item')).find('li.active a').css('background',
                                '-o-linear-gradient(top, #' + hexFromRGB(parseInt(navColor2[1]),
                                parseInt(navColor2[2]), parseInt(navColor2[3])) + ' 0%,#' + color2 + ' 100%)');
                            $($(this).data('item')).find('li.active a').css('boxShadow',
                                'inset 0 1px 1px #' + color3 + ', 0 1px 0 #' + color4
                                + ', 0 -1px 0 #' + color4 + ', 1px 0 0 #' + color4 + ', -1px 0 0 #' + color4);
                            $($(this).data('item')).find('li.active a').css('textShadow',
                                ' 0 2px 1px #' + color2 + ', 0 1px 1px #' + color2);

                        } else {
                            $($(this).data('item')).find('li.active a').css('filter',
                                "progid:DXImageTransform.Microsoft.gradient( startColorstr='#"
                                + hexFromRGB(parseInt(navColor2[1]), parseInt(navColor2[2]),
                                parseInt(navColor2[3])) + "', endColorstr='#" + color2 + "',GradientType=0 )");
                        }
                    }
                    $(this).dialog("close");
                }
            },
            "Delete": function () {
                $($(this).data('item')).remove();
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var inputs = $('#tabEditForm').find('input'),
                inputsCount = inputs.length,
                currentTab;

            for (var i = 0; i < inputsCount ; i++) {
                currentTab = inputs[i].getAttribute('id');
                currentTab = currentTab.replace('tab_titleEdit', '');

                $('#tabLiEdit' + currentTab).remove();
            }

            tabId = [];
            inputs = [];
        }
    });

    $("#tabEditForm span.ui-icon-circle-plus").live("click", function () {
        var newTab;

        for (var i = 0; i <= tabId.length; i++) {
            if (tabId[i] != 1) {
                newTab = i + 1;
                tabId[i] = 1;
                break;
            }
        }

        $('<li id="tabLiEdit' + newTab + '"><input type="text" id="tab_titleEdit' + newTab
            + '" value="" class="ui-widget-content ui-corner-all" /><span class="ui-icon ui-icon-close"/>'
                            + '</li>').appendTo('#tabListEdit');
    });

    $("#tabEditForm span.ui-icon-close").live('click', function () {
        var id = $(this).closest('li').attr('id');

        if ($('#tabListEdit').find('li').length != 1) {
            id = id.replace('tabLiEdit', '');
            tabId[id - 1] = 0;
            $(this).closest('li').remove();
        }
    });

    $("#tabListEdit").sortable({
        placeholder: "ui-state-highlight"
    });

    $("#tabListEdit").disableSelection();

    var navColor2, color2, color3, color4;

    function getcolor() {
        if (jQuery.browser.msie)
            navColor2 = $('#prettynav').css('backgroundColor');
        else {
            navColor2 = $('#prettynav').css('backgroundImage');
            if (jQuery.browser.chrome) {
                navColor2 = navColor2.replace('-webkit-linear-gradient(top, ', '');
                navColor2 = navColor2.replace('-webkit-gradient(linear, 0% 0%, 0% 100%, from(', '');
            }
            if (jQuery.browser.mozilla)
                navColor2 = navColor2.replace('-moz-linear-gradient(50% 0%, ', '');
            if (jQuery.browser.opera)
                navColor2 = navColor2.replace('-o-linear-gradient(top, ', '');

            navColor2 = navColor2.slice(0, navColor2.indexOf(')') + 1);
        }

        navColor2 = navColor2.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        if (getMaxRGB(parseInt(navColor2[1]), parseInt(navColor2[2]), parseInt(navColor2[3])) > 190) {
            color2 = hexFromRGB(setZero(parseInt(navColor2[1] * 0.75)),
                setZero(parseInt(navColor2[2] * 0.75)), setZero(parseInt(navColor2[3] * 0.75)));
            color3 = hexFromRGB(setZero(parseInt(navColor2[1]) + 20),
                setZero(parseInt(navColor2[2]) + 20), setZero(parseInt(navColor2[3]) + 20));
            color4 = hexFromRGB(setZero(parseInt(navColor2[1] * 0.75) - 15),
               setZero(parseInt(navColor2[2] * 0.75) - 15), setZero(parseInt(navColor2[3] * 0.75) - 15));
        }
        else if (getMaxRGB(parseInt(navColor2[1]), parseInt(navColor2[2]), parseInt(navColor2[3])) > 127) {
            color2 = hexFromRGB(setZero(parseInt(navColor2[1] * 0.55)),
                setZero(parseInt(navColor2[2] * 0.55)), setZero(parseInt(navColor2[3] * 0.55)));
            color3 = hexFromRGB(setZero(parseInt(navColor2[1]) + 20),
                setZero(parseInt(navColor2[2]) + 20), setZero(parseInt(navColor2[3]) + 20));
            color4 = hexFromRGB(setZero(parseInt(navColor2[1] * 0.55) - 15),
                setZero(parseInt(navColor2[2] * 0.55) - 15), setZero(parseInt(navColor2[3] * 0.55) - 15));
        }
        else if (getMaxRGB(parseInt(navColor2[1]), parseInt(navColor2[2]), parseInt(navColor2[3])) > 40) {
            color2 = hexFromRGB(setZero(parseInt(navColor2[1] * 1.45)),
                setZero(parseInt(navColor2[2] * 1.45)), setZero(parseInt(navColor2[3] * 1.45)));
            color3 = hexFromRGB(setZero(parseInt(navColor2[1]) - 20),
                setZero(parseInt(navColor2[2]) - 20), setZero(parseInt(navColor2[3]) - 20));
            color4 = hexFromRGB(setZero(parseInt(navColor2[1] * 1.45) + 15),
               setZero(parseInt(navColor2[2] * 1.45) + 15), setZero(parseInt(navColor2[3] * 1.45) + 15));
        }
        else {
            color2 = hexFromRGB(setZero(parseInt(navColor2[1]) + 60),
                setZero(parseInt(navColor2[2]) + 60), setZero(parseInt(navColor2[3]) + 60));
            color3 = hexFromRGB(setZero(parseInt(navColor2[1]) - 20),
                setZero(parseInt(navColor2[2]) - 20), setZero(parseInt(navColor2[3]) - 20));
            color4 = hexFromRGB(setZero(parseInt(navColor2[1]) + 75),
               setZero(parseInt(navColor2[2]) + 75), setZero(parseInt(navColor2[3]) + 75));
        }
    }

    function updateTips(t) {
        tips = $(".validateTips");
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function () {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    };

    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            o.removeClass("ui-state-error");
            return true;
        }
    };

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