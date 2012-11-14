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
        buttons: {
            "Add": function () {
                $($(this).data('item')).html('<div id="mapViewer"></div>');
                $("#mapViewer").css({
                    width: '340px',
                    height: '300px'
                });
                LoadMap('mapViewer');
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        },
        close: function () {
            allFields = $([]).add(address).add(description);

            allFields.val("").removeClass("ui-state-error");
        }
    })
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