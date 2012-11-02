/*
# CKEDITOR Edit-In Place jQuery Plugin.
# Created By Dave Earley.
# www.Dave-Earley.com
*/

/* modded by earthchie.com */

$.fn.ckeip = function (options, callback) {
    var original_html = $(this);
    var defaults = {
        e_height: '10',
        data: {}, 
		e_url: '',
        e_hover_color: '#eeeeee',
        ckeditor_config: '',
        e_width: '50',
		e_add_text: '<i>Double click to add text...</i>'
    };
    var settings = $.extend({}, defaults, options);

    return this.each(function () {
        var eip_html = $(this).html();
		eip_html = eip_html.replace(settings.e_add_text,'');
		var u_id = Math.floor(Math.random() * 99999999);

        $(this).before("<div id='ckeip_" + u_id + "'  style='display:none;'><textarea id ='ckeip_e_" + u_id + "' cols='" + settings.e_width + "' rows='" + settings.e_height + "'  >" + eip_html + "</textarea><input type='button' value='Save' id='save_ckeip_" + u_id + "' /> <input type='button' value='Cancel' id='cancel_ckeip_" + u_id + "' /></div>");

        $('#ckeip_e_' + u_id + '').ckeditor(settings.ckeditor_config);

        $(this).bind("dblclick", function () {

            $(this).hide();
            $('#ckeip_' + u_id + '').show();

        });

        $(this).hover(function () {
            $(this).css({
                backgroundColor: settings.e_hover_color
            });
        }, function () {
            $(this).css({
                backgroundColor: ''
            });
        });


        $("#cancel_ckeip_" + u_id + "").click(function () {
            $('#ckeip_' + u_id + '').hide();
            $(original_html).fadeIn();
            return false;
        });

        $("#save_ckeip_" + u_id + "").click(function () {
            var ckeip_html = $('#ckeip_e_' + u_id + '').val();
			if(ckeip_html == ""){
				ckeip_html = '<i>'+settings.e_add_text+'</i>';
			}
            $.post(settings.e_url, {
                content: ckeip_html,
                data: settings.data
            }, function (response) {
                if (typeof callback == "function") callback(response);

                $(original_html).html(ckeip_html);
                $('#ckeip_' + u_id + '').hide();
                $(original_html).fadeIn();

            });;
            return false;

        });

    });
};