var address = null;
var map = null;
var description = null;
var geocoder = null;
var image = 'images/map_icon.png';

$(function () {
    $("#mapForm").dialog({
        open: InitializeGeocoder(),
        resizeStop: function (event, ui) { if (map) { google.maps.event.trigger(map, 'resize') } },
        autoOpen: false,
        height: 600,
        width: 500,
        modal: true,
        show: 'puff',
        hide: 'scale',
        open: function () {
            var tips = $(".validateTips");

            tips.text('');
        },
        buttons: {
            "Add": function () {
                var bValid = true,
                    adr = $('#address'),
                    dsc = $('#description');

                bValid = checkLength(adr, "Address", 1);
                bValid = checkLength(dsc, "Description", 1) && bValid;
                if (bValid) {
                    $($(this).data('item')).html('<div id="mapViewer"></div>');
                    $("#mapViewer").css({
                        width: '340px',
                        height: '300px'
                    });
                    LoadMap('mapViewer');
                    $(this).dialog("close");
                }
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            var adr = $('#address'),
                dsc = $('#description');

            allFields = $([]).add(adr).add(dsc);
            allFields.val("").removeClass("ui-state-error");
        }
    });

    function checkLength(o, n, min) {
        if (o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be more " +
                (min - 1) + ".");
            return false;
        } else {
            o.removeClass("ui-state-error");
            return true;
        }
    };

    function updateTips(t) {
        tips = $(".validateTips");
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function () {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    };
});

$(function () {
    $("#mapPreviewButton").button({
        text: 'Preview',
        icons: {
            primary: "ui-icon-flag"
        }
    })
        .click(function (event) {
            event.preventDefault();
            $("#mapPreview").css({
                width: '460px',
                height: '260px',
                margin: '0 auto'
            });

            LoadMap('mapPreview');
        });
});

function InitializeGeocoder() {
    geocoder = new google.maps.Geocoder();
}

function LoadMap(divId) {
    InitializeFormValues();

    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(18.0, 54.0),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        overviewMapControl: false,
        navigationControl: false,
        streetViewControl: false,
        draggable: false
    };
    map = new google.maps.Map(document.getElementById(divId), mapOptions);
    showAddress();
}

function InitializeFormValues() {
    address = $("#address").val();
    description = $("#description").val();
}

function showAddress() {
    if (geocoder) {
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: image
                });
                var infowindow = new google.maps.InfoWindow(
                {
                    content: description + "<br>" + address
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });

            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });

    }
}