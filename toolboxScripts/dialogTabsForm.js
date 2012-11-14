

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
            var taby = document.getElementsByClassName('tabs2'),
                linkID, currentLinkID,
                tabForm = document.getElementById('tabForm'),
                lista = tabForm.getElementsByTagName('li'),
                inputs = tabForm.getElementsByTagName('input'),
                free;

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
                    title;

                for (var i = 0; i < inputsCount; i++) {
                    currentTab = inputs[i].getAttribute('id');
                    idy[i] = currentTab.replace('tab_title', '');
                    title = $('#' + currentTab);
                    titles[i] = title.val();
                }

                $($(this).data('item')).html(getTabHtml(inputsCount, titles, $(this).data('option'), idy));

                if ($(this).data('option') == 1)
                    $($(this).data('item')).tabs();

                $(this).dialog("close");
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
            currentTab = currentTab.replace('tab_title', '');

            tabId = [];
            inputs = [];
            forma = [];
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

        $('<li id="tabLi' + newTab + '"><input type="text" id="tab_title' + newTab + '" value="" class="ui-widget-content ui-corner-all" /><span class="ui-icon ui-icon-close"/></li>').appendTo('#tabList');
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
});