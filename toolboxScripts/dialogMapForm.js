var latitudeValue = 0.0;
var longitudeValue = 0.0;

$(function () {
    $("#mapForm").dialog({
        autoOpen: false,
        height: 400,
        width: 500,
        modal: true,
        show: 'puff',
        hide: 'scale',
        buttons: {
            "Add": function () {
                var latitude = $("#latitude"),
                longitude = $("#longitude")

                latitudeValue = parseFloat(latitude.val());
                longitudeValue = parseFloat(longitude.val());

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
            var latitude = $("#latitude"),
            longitude = $("#longitude"),
            allFields = $([]).add(latitude).add(longitude);

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
            $("#mapForm").css("height", "500");
            $("#mapPreview").css({
                width: '460px',
                height: '300px',
                margin: '0 auto'
            });

            var latitude = $("#latitude"),
                longitude = $("#longitude");
            latitudeValue = parseFloat(latitude.val());
            longitudeValue = parseFloat(longitude.val());

            //console.log(typeof (latitude) + " " + latitude.val());

            LoadMap('mapPreview');
        });
});

function LoadMap(divId) {
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(latitudeValue, longitudeValue),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        overviewMapControl: true
    };
    map = new google.maps.Map(document.getElementById(divId), mapOptions);
    var latLng = new google.maps.LatLng(latitudeValue, longitudeValue);
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}
