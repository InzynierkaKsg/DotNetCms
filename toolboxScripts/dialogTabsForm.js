$(function () {
    var tabId = new Array();
    tabId[0] = 1;
    tabId[1] = 0;

    function getTabHtml(x, title, option) {
        var html, id;

        html = '<div class="tabs' + option + '">';
        if (option == 2)
            html += '<section class="pretty tabs">';
        html += '<ul>';
        for (var i = 0; i < x; i++){
            if (option == 2 && i == 0)
                html += '<li class="active"><a href="#tabs-' + (i + 1) + '">' + title[i] + '</a></li>';
            else
                html += '<li><a href="#tabs-' + (i + 1) + '">' + title[i] + '</a></li>';
        }


        html += '</ul>';
        if (option == 1)
            id = 'id';
        else
            id = 'data-tab';
        for (var i = 0; i < x; i++) {
            if (option == 2 && i == 0)
                html += ' <div ' + id + '="tabs-' + (i + 1) + '" class="active"><p class="textEditor"">Text' + (i + 1) + '</p></div>';
            else
                html += ' <div ' + id + '="tabs-' + (i + 1) + '"><p class="textEditor"">Text' + (i + 1) + '</p></div>';
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
        buttons: {
            Add: function () {
                var titles = new Array(),
                    tabForm = document.getElementById('tabForm'),
                    inputs = tabForm.getElementsByTagName('input'),
                    inputsCount = inputs.length,
                    currentTab,
                    title;

                for (var i = 0; i < inputsCount; i++) {
                    currentTab = inputs[i].getAttribute('id');
                    title = $('#' + currentTab);
                    titles[i] = title.val();
                }

                $($(this).data('item')).html(getTabHtml(inputsCount, titles, $(this).data('option')));

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
            tabId[0] = 0;
            tabId[1] = 0;
            tabId[currentTab - 1] = 1;

            inputs = [];
            forma = [];
        }
    });

    $("#tabForm span.ui-icon-circle-plus").live("click", function () {
        var countTabs = $('#tabList').find('li').length,
            newTab;

        if (tabId[countTabs] != 1)
            tabId[countTabs] = 0;

        for (var i = 0; i <= countTabs; i++) {
            if (tabId[i] == 0) {
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