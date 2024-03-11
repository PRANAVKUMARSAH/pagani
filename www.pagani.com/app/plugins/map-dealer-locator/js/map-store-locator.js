var map = null;
var markers = [];
var page = null;
var url = window.location.protocol + '//' + window.location.host + '/';
var center = null;
var options = null;
var search = null;
var idList = 'marker-list';
var latMin = null;
var latMax = null;
var lngMin = null;
var lngMax = null;
var latitude = null;
var longitude = null;
var infowindow = [];
var cluster = url + 'app/plugins/map-dealer-locator/img/pin1.png';
var clusterStyles = [{
    textColor: 'white',
    url: cluster,
    height: 40,
    width: 40,
    textSize: 18,
    cssClass: 'button-clusterer'
}];
var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

jQuery(document).ready(function() {
    var $cont = jQuery('.scrollbar').length ? 0 : null;

    jQuery("#marker-list").on('mousewheel', function(e) {

        $maxScroll = jQuery("#marker-list").height() - 500;

        if (e.originalEvent.wheelDelta < 0) {
            //scroll down
            if ($cont <= $maxScroll) {
                $cont += 25;
                jQuery('.scrollbar').scrollTop($cont);
            }
        } else {
            if ($cont !== 0) {
                //scroll up
                $cont -= 25;
                jQuery('.scrollbar').scrollTop($cont);
            }
        }
    });

    jQuery('.scrollbar').scroll(function() {
        $cont = jQuery(this).scrollTop();
    });

    if (jQuery(".mapper").length) {

        google.maps.event.addDomListener(window, 'load', initialize());
        console.log('add');
        jQuery("#marker-list").on("click", "li", function() {
            var clickId = jQuery(this).attr('id');

            clickId = clickId.replace('element-', '');
            var latLng = findLatLng(clickId);

            latitude = latLng.lat;
            longitude = latLng.lng;
            changeCenter();
        });

        jQuery(".position").on("click", this, function(e) {
            e.preventDefault();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;
                    changeCenter();
                });
            }
        });
        jQuery("#pac-input-mobile").keyup(function(e) {
            console.log("SEARCH MOBILE")
            console.log("PAC-INPUT-MOBILE", jQuery('#pac-input-mobile').val())
            console.log("PAC-INPUT", jQuery('#pac-input').val())
            if (jQuery('#pac-input-mobile').val().length == 0) {
                search = jQuery('#pac-input').val();
            } else {
                search = jQuery('#pac-input-mobile').val();
            }
            searchMobile();
        });
    }

});