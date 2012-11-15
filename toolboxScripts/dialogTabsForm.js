$(function () {
    var tabId = new Array();
    tabId[0] = 0;

    function getTabHtml(x, title, option, idy) {
        var html, id;

        html = '<div class="tabs' + option + '">';
        if (option == 2)
            html += '<section class="pretty tabs">';
        html += '<ul>';
        for (var i = 0; i < x; i++) {
            if (option == 2 && i == 0)
                html += '<li class="active"><a href="#tabs-' + idy[i] + '">' + title[i] + '</a></li>';
            else
                html += '<li><a href="#tabs-' + idy[i] + '">' + title[i] + '</a></li>';
        }


        html += '</ul>';
        if (option == 1)
            id = 'id';
        else
            id = 'data-tab';
        for (var i = 0; i < x; i++) {
            if (option == 2 && i == 0)
                html += ' <div ' + id + '="tabs-' + idy[i] + '" class="active"><p class="textEditor">Text' + (i + 1) + '</p></div>';
            else
                html += ' <div ' + id + '="tabs-' + idy[i] + '"><p class="textEditor">Text' + (i + 1) + '</p></div>';
        }
        if (option == 2)
            html += '</section>'
        html += '</div>';

        return html;
    };


    dialog = $("#tabForm").dialog({
        autoOpen: false,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function () {
            var taby = document.getElementsByClassName('tabs1'),
                taby2 = document.getElementsByClassName('tabs2'),
                linkID, currentLinkID,
                tabForm = document.getElementById('tabForm'),
                lista = tabForm.getElementsByTagName('li'),
                inputs = tabForm.getElementsByTagName('input'),
                free, tips = $(".validateTips");


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
            for (var i = 0; i <= tabId.length; i++) {
                if (tabId[i] != 1) {
                    tabId[i] = 1;
                    free = i + 1;
                    break;
                }

            }
            inputs[0].setAttribute('id', 'tab_title' + free);
            lista[0].setAttribute('id', 'tabLi' + free);
        },
        buttons: {
            Add: function () {
                var titles = new Array(),
                    tabForm = document.getElementById('tabForm'),
                    inputs = tabForm.getElementsByTagName('input'),
                    inputsCount = inputs.length,
                    currentTab, idy = new Array(),
                    title, bValid = true;

                for (var i = 0; i < inputsCount; i++) {
                    currentTab = inputs[i].getAttribute('id');
                    idy[i] = currentTab.replace('tab_title', '');
                    title = $('#' + currentTab);
                    bValid = bValid && checkLength(title, "Title", 1, 30);
                    titles[i] = title.val();
                }
                if (bValid) {
                    $($(this).data('item')).html(getTabHtml(inputsCount, titles, $(this).data('option'), idy));

                    if ($(this).data('option') == 1)
                        $($(this).data('item')).tabs();
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
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var tabForm = document.getElementById('tabForm'),
                inputs = tabForm.getElementsByTagName('input'),
                inputsCount = inputs.length,
                currentTab;

            for (var i = 1; i < inputsCount ; i++) {
                currentTab = inputs[1].getAttribute('id');
                currentTab = currentTab.replace('tab_title', '');

                $('#tabLi' + currentTab).remove();
            }

            currentTab = inputs[0].getAttribute('id');
            $('#' + currentTab).val('');
            $('#' + currentTab).removeClass("ui-state-error");
            currentTab = currentTab.replace('tab_title', '');

            tabId = [];
            inputs = [];
        }
    });

    $("#tabForm span.ui-icon-circle-plus").live("click", function () {
        var newTab;

        for (var i = 0; i <= tabId.length; i++) {
            if (tabId[i] != 1) {
                newTab = i + 1;
                tabId[i] = 1;
                break;
            }
        }

        $('<li id="tabLi' + newTab + '"><input type="text" id="tab_title' + newTab
            + '" value="" class="ui-widget-content ui-corner-all" /><span class="ui-icon ui-icon-close"/>'
                            + '</li>').appendTo('#tabList');
    });

    $("#tabForm span.ui-icon-close").live('click', function () {
        var id = $(this).closest('li').attr('id');

        if ($('#tabList').find('li').length != 1) {
            id = id.replace('tabLi', '');
            tabId[id - 1] = 0;
            $(this).closest('li').remove();
        }
    });

    $("#tabList").sortable({
        placeholder: "ui-state-highlight"
    });

    $("#tabList").disableSelection();

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
    }

    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            return true;
        }
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